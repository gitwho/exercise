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