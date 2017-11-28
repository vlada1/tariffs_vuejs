const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader', 'autoprefixer-loader']
});
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/app.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/,
        use: [
          'file-loader?publicPath=../&name=./img/[name].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        loader: "file-loader?publicPath=../&name=./fonts/[name].[ext]"
      }
      ],
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        },
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/style.css',
      disable: !isProd,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'kyivstar',
      template: './src/index.html',
    }),
  ],
  watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    stats: "errors-only",
    open: true
  },
};
