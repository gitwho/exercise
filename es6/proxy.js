// proxy 代理

let obj = {name: 'xy', arr:[1,2,3]};
let arr = [1,2,3];

let p = new Proxy(arr, {
  get(target, key) {
    console.log(key);
    
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    console.log('---');
    if(key === "length") return true;
    return Reflect.set(target, key, value)
  }
});

p.push(0);
p[1] = 5;
