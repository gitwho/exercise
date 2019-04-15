import createApp from './app'

// 服务端会调用此函数 产生一个新的app实例
export default (context) => {
  return new Promise((resolve, reject) => {
    let {app, router, store} = createApp();
    console.log(context)
    router.push(context.url) // 跳转路由
    // 如果服务端 启动时 直接访问 /foo  返回的页面永远都是 index.html 需要通过路由跳转到指定路径
    
    // 为了防止路由中的异步逻辑 所以采用 promise 的形式 等待路由加载完成后 返回vue实例 服务端才可以渲染出完整的页面

    // 需要把当前页面中匹配到的组件 找到他的asyncData方法让他执行

    router.onReady(() => {
      // 获取当前路径匹配到的组件， 返回数组
      let matchesComponents = router.getMatchedComponents();
      // console.log(matchesComponents); 
      //  看下这些组件中 有没有 asyncData 方法
      Promise.all(matchesComponents.map(component => {
        if (component.asyncData) {
          return component.asyncData({store}) // 执行结果是promise
        }
      })).then(() => {
        // 把 vuex的状态 挂载到 上下文的state
        // 即：在window上挂载一个属性：window.__INITIAL_STATE__；(在网页中点击鼠标右键：查看网页源代码)
        context.state = store.state;
        // app.$meta() 不能结构
        context.meta = app.$meta(); 
        resolve(app)
      })
    })
  })
  
}