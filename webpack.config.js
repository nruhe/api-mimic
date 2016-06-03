var
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack')
;

module.exports = [
  // ################################################
  // Process src/app
  // ################################################
  {
    devtool: 'eval-source-map',
    entry:  ['babel-polyfill', __dirname + '/src/app/index.js'],
    output: {
      path: __dirname + '/build',
      filename: 'app.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
          exclude: /(node_modules|src\/include|src\/worker)/
        },
        {
          test: /\.json$/,
          loader: 'json',
        },
        {
          test: /\.css$/,
          loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: __dirname + '/src/app/index.html'
      })
    ],
    devServer: {
      contentBase: './dist',
      colors: true,
      historyApiFallback: true,
      inline: true
    }
  }
];
