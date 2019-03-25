1. webpack 基础用法 配置 loader plugin
2. webpack 各种优化 优化策略
3. ast 语法解析
4. tapable 钩子函数
5. 简易webpack
6. 实现 loader 插件

## webpack的安装
    本地安装
    yarn add webpack webpack-cli -D

    webpack 用来打包的 入口-》出口，默认入口文件都在src目录

    npx（node语法） npx webpack 打包

## mode
    'development' or 'production'
    - development 调试
    - production  压缩代码

    使用方法： npx webpack --mode development; 
    npx webpack  -->  默认 production 

## plugin 
    html插件 打包html 并且把打包后的文件进行引入

    yarn add html-webpack-plugin