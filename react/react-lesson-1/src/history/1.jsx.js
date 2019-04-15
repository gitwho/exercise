// document.write('hello')

// import React from 'react';  // es6语法 导入模块
// import {render} from 'react-dom';

let React = {
  createElement(type, props, ...children) {
    console.log(type, props, children);
    return {
      type,props,children
    }
  }
}

// jsx语法  JavaScript + html （html + js 混写）
let h1 = <h1 id="hello">hello world <span>span的内容</span></h1>;  // 它会用babel进行转化 成React.createElement写法

//jsx ->
// React.createElement('h1', {id: 'hello'}, ['hello world', React.createElement('span', null, ['span的内容'])])  ->
// vnode(虚拟dom，对象，对象可以描述当前元素) ->
// 渲染到页面上

console.log(h1); // 对象

let render = (vnode, container) => {
  if (typeof vnode == 'string') {
    return container.appendChild(document.createTextNode(vnode));
  };
  let {type,props,children} = vnode;
  let ele = document.createElement(type);
  for (let key in props) {
    ele.setAttribute(key, props[key]);
  }
  console.log(children);
  children.forEach((child) => {
    render(child, ele);  // 递归
  })
  container.appendChild(ele);
}

// render(h1, document.getElementById('root'));
render(h1, window.root)
