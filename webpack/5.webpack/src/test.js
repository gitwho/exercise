btn.addEventListener('click', function () {
   __webpack_require__.e(0)  // 返回 Promise.all(promise) 是个promise，调用then方法
    .then(__webpack_require__.bind(null,"./src/use.js"))  // promise：返回 hello
    .then(function (data) {   
        console.log(data.default);
    });
});

// 第一步 window['webpackJsonp].push = webpackJsonpCallback // 把json的回调挂载了window['webpackJsonp'].push 方法上
// 第二步 调用 __webpack_require__.e 告诉内部加载 0.main.js, 返回一个 promise
// 第三步 在modules 的属性上把 当前的0.js 放到了modules的对象内，把后加载的模块放到modules中
// 第四步 __webpack_require__bind(null, "./src/use.js") 引用这个use.js 
// __webpack_require__.[\"default\"] = 'hello' exports.defualt = 'hello'
// 第五步 下一次then 就可以拿到这个exports 对象 通过 .default 拿到异步加载的结果
