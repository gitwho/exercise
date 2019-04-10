import createApp from './app'

// 服务端会调用此函数 产生一个新的app实例
export default (context) => {
  return new Promise((resolve, reject) => {
    let {app, router} = createApp();
    router.push(context.url) // 跳转路由
    // 如果服务端 启动时 直接访问 /foo  返回的页面永远都是 index.html 需要通过路由跳转到指定路径
    
    // 为了防止路由中的异步逻辑 所以采用 promise 的形式 等待路由加载完成后 返回vue实例 服务端才可以渲染出完整的页面
    router.onReady(() => {
      resolve(app)
    })
  })
  
}