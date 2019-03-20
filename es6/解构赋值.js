// 解构赋值 结构相等的内容可以直接拿出来
// 解构时可以赋予默认值
// Promise.all([1,2,3,4]).then(function([,,a,,b="helllo"]){
//     console.log(a, b);
    
// })

// 对象解构
// = 号是赋予默认值，: 就是起别名
// let { length } = [0,1,2,3];
// console.log(length); // 长度


// let { length: Len } = {length: 5};
// console.log(Len);


// let [{a}, , c] = [{a: 1}, {b: 1}, {c: 1}];
// console.log(a, c);


let obj = {name: 'xy', age: 6};
let obj1 = {address: '是好事'}

school = {...obj, ...obj1};  // 拼接成一个对象
console.log(school);
let o = {};
Object.assign(o, obj, obj1);
console.log(o);

// 数组的展开 es6拼接数组
let arr1 = [1,2];
let arr2 = [2,3];
console.log([...arr1, ...arr2]);
// Math.max.apply(Math, arr1) -> 数组最大值
console.log(Math.max(...arr1));

// 剩余运算符
function sum (...arg) {
    return eval( arg.join('+'));
}
let r = sum(1,2,3,4);
console.log(r);

// ---
// class 的实现
let objx = {};
Object.defineProperty(objx, 'PI', {
    enumerable: true, // 是否可见
    writable: true, // 能否重新赋值
    configurable: true, // 是否可删除
    get(){

    },
    set(newVal){
        
    }
})


// ----

// let ax = { function() {return 'x'}}
// console.log(ax);

// let obj = {name: {schoolName:'xxy'}, a:1, reg: undefined, function(){return 'a'}}
// console.log(JSON.stringify(obj)); // reg, 匿名函数 无法显示
// let newObj = JSON.parse(JSON.stringify(obj));
// console.log(newObj); // reg, 匿名函数 无法显示

// undefined === undefined  -> true
// null == undefined  -> true

// 如何实现一个深度拷贝 地柜拷贝
// let obj = {name: {schoolName: 'xxy'}, a: 1, reg: /\w+/}
// function deepClone(obj){
//     if (obj === null) return null;
//     if (typeof obj != 'object' ) return obj;  // 可以判断出 非null的其他所有基础类型，及function 
//     if ( obj instanceof RegExp ) return new RegExp(obj);  
//     if (obj instanceof Date ) return new Date(obj);
//     // [].constructor -> array ; ({}).constructor -> object
//     // 再 new 一个赋给新变量
//     let newObj = new obj.constructor;
//     for (let key in obj) {
//         newObj[key] = deepClone(obj[key]);
//     }
//     return newObj
// }
// let newReg = deepClone(obj);
// console.log(newReg);



