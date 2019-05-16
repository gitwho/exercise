## 初始化项目
```js
npm init -y
```
## 安装依赖包
webpack
```js
yarn add webpack webpack-cli webpack-dev-server
```
babel
```js
yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react
```
react
```js
yarn add react react-dom react-router-dom react-router-redux redux react-redux
redux-promise redux-thunk redux-logger redux-sage
```
loader
```js
yarn add less less-loader css-loader style-loader url-loader
html-webpack-plugin
```

## 目录结构划分
```
src
  containers 放置页面组件
  components 放置页面间可共享的共用组件
      components 放吃组件独享的子组件
  common 放一些公共的样式等类容
  images 图片
  store redux仓库
        actions
        reducers
        actions-types
        index
  index.js 入口文件
  index.html模板文件
  ```

##前后端交互套路
1.定义仓库的数据结构
2.后台实现接口
3.前台编写一个请求此接口的api方法
4.定义action-types, 修改reducer,并处理此动作
5.编写action方法，用来调用api方法，请求接口，得到返回的数据，构造函数action派发给仓库
6.在组件里调用此方法, 并填充仓库
7.用此数据渲染组件

##
  1. fetch: 原生js方法，请求接口，返回promise
  2. cors(let cors = require('cors')) 
    解决跨域
  3. react-swipe使用
  4. Link 传参
  5. withrouter
  6. !{} == false
  7. express-session