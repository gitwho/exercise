// // moment  时间插件

// import moment from 'moment'
// // 距离当前时间 过去多久

// import 'moment/locale/zh-cn';

// console.log(moment().fromNow());



btn.addEventListener('click', function() {
  // 动态加载js  import()  草案中 执行后返回promise
  import('./use').then(data => {
    console.log(data.default);
  })
})
// 实现react中怎样异步加载组件