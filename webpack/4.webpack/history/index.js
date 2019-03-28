// es6模块默认导出的时候(export default), 如果用require来引用,就要用 .default 来获取结果
// 得到 Module 对象 
// Module:{
//   default: {
//     add: xxx,
//     minus: xxx
//   }
// }
// 未用到的方法 minus ，还是会打包到dist文件夹
// let calc = require('./calc')
// console.log(calc.default.add('a', 'b'));

import calc from './calc'
console.log(calc.add('a', 'b'));