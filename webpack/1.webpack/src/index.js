let str = require('./a.js')

console.log(str);

require('./index.css')

@log // 装饰类的装饰器
class A {
    a = 1;
}

function log(target) {
    console.log(target)
}