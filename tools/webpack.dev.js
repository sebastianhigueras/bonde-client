import webpack from 'webpack'
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge.smart(common, {
  devtool: 'inline-source-map',
  entry: {
    main: ['webpack-hot-middleware/client']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../tools/index.template.ejs',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
  // devServer: {
  //   contentBase: './dist'
  // }
});
