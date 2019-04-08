
module.exports = {
  entry: {
    bundle: './public/index.html'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]'
  },
  resolve: {
    modules: [path.resolve('node_modules'), path.resolve('vendor')],
    extensions: ['.js', '.json','.css'],
    mainFields: ['main', 'browser'],
    mainFiles: ['index.js'],
    alias: {
      bootstrap: 'bootstrap/dist/css/bootstrap.css'
    }
  },
  module: {
    noParse: /jquery| xx/,
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.BannerPlugin('make by bb')
  ],
  devServer: {
    before(app) {
      app.get('/api/user', function(req, res) {
        res.send({age: 19});
      })
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}