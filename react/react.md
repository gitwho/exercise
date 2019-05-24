## 性能检测工具： 
  - react-addons-perf

## 子组件获取，修改父组件的值
  - 父组件以属性的方式传给子组件，子组件调用父组件的方法，让父组件自己修改

## PropTypes DefaultProps
  - 规定属性类型， 默认值

## state，props
  - 当组件state或props发生改变的时候， render函数就会重新执行
  - 当父组件的render函数被运行时，它的子组件的render都将被重新运行一次

## 虚拟dom （本质是js对象）
  - 方案一：
    - 1. state数据
    - 2. JSX模板
    - 3. 数据 + 模板 + 结合， 生成真实的dom， 来显示
    - 4. state 发生改变
    - 5. 数据 + 模板 结合， 生成真实的dom， 替换原始的dom
    缺陷： 第一次，第二次 生成完整的DOM片段；第二次替换第一次DOM，都非常耗性能

  - react的实现
    - 1. state数据
    - 2. JSX模板
    - 3.  数据 + 模板 生成虚拟dom （js对象， 用来描述真实DOM）（损耗性能）
      ['div', {id: 'abc'}, ['span', {}, 'hello']]

    - 4.用虚拟DOM的结构 生成真实的dom， 来显示
      <div id="abc"><span>hello</span></div>
    
    - 5. state 改变

    - 6. 数据 + 模板 生成新的虚拟DOM，（极大提升性能）
      ['div', {id: 'abc'}, ['span', {}, 'bye']]

    - 7. 比较 原始虚拟DOM 和 新的虚拟DOM 的区别（DIff算法）， 找到区别是span中内容（极大提升性能）
    - 8. 直接操作DOM，改变span中的内容

JSX 通过 React.createElement() 生成 虚拟DOM 再变成 真实DOM

## React Native
  跨终端， 让 虚拟DOM 变成浏览器中的真实DOM 或者 App中的组件

## DIff算法
  - setState异步函数方法，短时间内频繁修改state，react可合并成一次修改state，更新虚拟DOM后，只进行一次 DOM比对。

    this.setState(() => {}, () => {
      回调函数：可获取 数据更新后的 一些状态
    })
  - 同层比对

## 生命周期函数
  生命周期函数指 在某一时刻自动调用执行的函数

  componentWillMount: 在组件即将被挂载到页面的时刻自动执行
  componentDidMount: 组件被挂载到页面之后执行

  shouldComponentUpdate: 组件被更新之前，执行
  componentWillUpdate: 组件被更新之前 执行，在shouldComponentUpdate之后执行；如果shouldComponentUpdate 返回 true ，则执行；false 则不执行
  componentDidUpdate: 组件更新后，执行

  componentWillReceiveProps: 子组件中有效； 1.当一个组件从父组件接收了参数；2. 如果这个组件第一次存在父组件中，不执行；3. 如果这个组件之前已经存在父组件中，才会执行

  componentWillUnmount: 组件将从页面中移除的时候

## 生命周期函数使用场景


