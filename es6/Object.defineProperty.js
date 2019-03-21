// ---
// class 的实现
// let objx = {};
// Object.defineProperty(objx, 'PI', {
//     enumerable: true, // 是否可见
//     writable: true, // 能否重新赋值
//     configurable: true, // 是否可删除
//     get(){

//     },
//     set(newVal){
        
//     }
// });

// vue双向绑定
let obj = {name: {name:'xxy'}, age: 1};
function update() {
  console.log('数据更新了');
  
}
function observer(obj) {
  if (typeof obj != 'object') {
    return obj; // 普通值不需要观察
  }
  for(let key in obj) {
    defineReactive(obj,key,obj[key]);
  }
}
// 把对象中的属性都采用Object.definedProperty
function defineReactive(obj,key,value) {
  observer(value); // 对象里有对象
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(val) {
      update();
      if (value != val) {
        value = val
      }
    }
  });
}

observer(obj);
obj.name = 'hello';
console.log(obj.name);
