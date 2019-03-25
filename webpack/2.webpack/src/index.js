// console.log('hello');

// import './a.js'
import './index.less'

// let fun = () => {
//   console.log('fun')
// }
// fun();


// class A {

// }


// function * gen() {
//   yield 1;
// }
// console.log(gen().next());


// // 引入@babel/polyfill 写了一整套api: String.prototype.includes
// import '@babel/polyfill'
// 'aaaa'.includes('a');



// import '$' from 'jquery';

// // 将 $ 挂载到window上
// // 方法一： expose-loader 暴露的loader  pre + normal + inline + post
// // 方法二： 用webpack插件，给每个模块都提供$

// // 方法一： 
// // import $ from 'expose-loader?$!jquery'; 

// // 方法二:


// // console.log($);
// console.log(window.$);


// 图片的引入方式
// img.src = './logo.png'; // 字符串不能被打包

// 1） js 引入
// 会把logo进行生成一张新的图片方到dist 目录下，会返回一个新的图片地址
import logo from './logo.png'; // 依赖的文件会被打包
let img = new Image();
img.src = logo;
document.body.appendChild(img);

// 2) 背景图


// 3） <img src="" />