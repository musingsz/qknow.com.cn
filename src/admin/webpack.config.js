var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  devtool: 'eval',//配置生成Source Maps，选择合适的选项
  entry: [
    __dirname + "/src/app.js", //已多次提及的唯一入口文件
    __dirname + "/src/css/app.css"
  ],
  output: {
    path: __dirname + "/build", //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./build", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  module: { //在配置文件里添加JSON loader
    loaders: [{
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(woff2?|svg|ttf|eot)(\?.*)?$/,
        loader: 'url-loader'
       },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' //在webpack的module部分的loaders里进行配置即可
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' //添加对样式表的处理 感叹号的作用在于使同一文件能够使用不同类型的loader
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by BannerPlugin'),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html" //new 一个这个插件的实例，并传入相关的参数
    })
  ]
}
