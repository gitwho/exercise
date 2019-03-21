// 原生的构造函数
// 类可以当做函数来调用 在es6中类只能new


// function Animal(type) {
//   this.type = type;
//   this.eat = function () {}
// }
// let a1 = new Animal('哺乳类');
// let a2 = new Animal('哺乳类');
// console.log(a1.eat === a2.eat); // false

// // ----
// function Animal(type) {
//   this.type = type;
// }
// Animal.fn = function() { // 静态方法
//   console.log('fn函数');
  
// }
// Animal.prototype.eat = function () {
//   console.log('eat');
// }
// // 可通过constructor判断是否是类的实例
// // console.log(Animal.prototype.constructor === Animal); //constructor 指向Animal这个类
// // console.log(Animal.prototype.constructor.type); // undefined: type是实例的属性
// // console.log(Animal.prototype.constructor.fn());

// let a1 = new Animal('哺乳类');
// let a2 = new Animal('哺乳类');
// // console.log(a1.eat === a2.eat); // true
// // console.log(a1.__proto__.constructor == Animal); //true

// function Cat(type) {
//   Animal.call(this, type);
// }

// // 1.继承实例上的属性
// // let cat = new Cat('哺乳类');
// // console.log(cat.type);

// // 2.获取父类的公共属性 eat
// Object.setPrototypeOf(Cat.prototype, Aniaml.prototype);
// // Cat.prototype.__proto__ = Animal.prototype;
// let cat = new Cat();
// cat.eat();

// // 3.继承父类实例上所有属性
// Cat.prototype = new Animal();


// es6 的类
class Animal{
  static flag() { // 静态方法
    return 'flag'
  }
  constructor(type) {
    this.type = type;
  }
  eat() {
    console.log(this);
  }
}

class Cat extends Animal{ // 里面内置了call 也实现了继承公有属性
  constructor(type) {
    super(type); //Animal.call(this, call)
  }
}
// 静态方法子类是可以继承的
let cat = new Cat('哺乳类');
console.log( cat.type );
console.log( Cat.flag() );



// 大多数浏览器的ES5实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。
// Class作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
// （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
// （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

// class A {
// }
// class B extends A {
// }
// B.__proto__ === A // true
// B.prototype.__proto__ === A.prototype // true

// 上面代码中，子类B的__proto__属性指向父类A，子类B的prototype属性的__proto__属性指向父类A的prototype属性。


class Box{
  constructor(){ 
      console.log("啦啦啦，今天天气好晴朗");//当实例化对象时该行代码会执行。
  }
}
var obj=new Box();