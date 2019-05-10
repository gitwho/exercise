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