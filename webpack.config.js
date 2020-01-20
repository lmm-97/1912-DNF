const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  //入口文件 
  entry: './src/script/main.js',
  //出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script/bundle.js'
  },
  //引入loader
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        },
        {
          loader: 'expose-loader',
          options: 'jQuery'
        }
        ]
      },
      { //加载css
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    { //配置图片文件的包
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
            name: 'images/[name].[ext]'
        }
    }
    ]
  },
  plugins: [
    //首页
    new HtmlWebpackPlugin({
      title: '首页-DNF周边商城',
      filename: "index1.html",
      template: "./src/index1.html",
      chunks: ["index1", "vendor"],
      minify: { //压缩html
        removeComment: true, //去掉注释
        collapseWhitespace: true //去掉空格。
      }
    }),
    //购物车详情页
    new HtmlWebpackPlugin({
      title: '购物车详情页',
      filename: "details.html",
      template: "./src/details.html",
      chunks: ["details", "vendor"],
      minify: { //压缩html
        removeComment: true, //去掉注释
        collapseWhitespace: true //去掉空格。
      }
    }),
    //购物车列表
    new HtmlWebpackPlugin({
      title: '购物车列表',
      filename: "cartlist.html",
      template: "./src/cartlist.html",
      chunks: ["cartlist", "vendor"],
      minify: { //压缩html
        removeComment: true, //去掉注释
        collapseWhitespace: true //去掉空格。
      }
    }),
    //注册
    new HtmlWebpackPlugin({
      title: '注册',
      filename: "registry.html",
      template: "./src/registry.html",
      chunks: ["registry", "vendor"],
      minify: { //压缩html
        removeComment: true, //去掉注释
        collapseWhitespace: true //去掉空格。
      }
    }),
    //登录
    new HtmlWebpackPlugin({
      title: '登录',
      filename: "login.html",
      template: "./src/login.html",
      chunks: ["login", "vendor"],
      minify: { //压缩html
        removeComment: true, //去掉注释
        collapseWhitespace: true //去掉空格。
      }
    }),
  ]

};