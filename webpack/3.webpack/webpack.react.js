let path = require('path');
let DllPlugin = require('webpack/lib/DllPlugin');


module.exports = {
  entry: {
    react:['react', 'react-dom']
    // main: './src/test.js'
  },
  output: {
    filename: '_dll_[name].js',  //打包后的文件名
    path: path.resolve(__dirname, 'dista'),
    libraryTarget: 'var', // 挂载到xxx上, 值：window/this/commonjs/等
    library: '_dll_[name]'  // 变量名
  },
  plugins: [
    new DllPlugin({ // 声明动态链接库
      name: '_dll_[name]', // 产生的是一个json文件
      path: path.resolve(__dirname, 'dista', 'manifest.json')

    })
  ]
}