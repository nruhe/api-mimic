var
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin')
;

module.exports = [

  // ################################################
  // Process src/app
  // ################################################
  {
    entry:  __dirname + '/src/app/index.js',
    output: {
      path: __dirname + '/build',
      filename: '.offline.temp'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['es2015','react']
          },
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
    }
  },

  // ################################################
  // Process src/include
  // ################################################
  {
    entry:  __dirname + '/src/include/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'api-mimic.include.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          },
          exclude: /(node_modules|src\/app|src\/worker)/
        }
      ]
    }
  },
  // ################################################
  // Process src/worker && bundle with src/app output
  // ################################################
  {
    devtool: 'eval-source-map',
    entry:  __dirname + '/src/worker/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'api-mimic.js'
    },
    module: {
      loaders: [
        {
          test: /\.offline.temp/,
          include: [
            path.resolve(__dirname, '/build')
          ],
          loader: 'raw'
        },
        {
          test: /\index.html/,
          include: [
            path.resolve(__dirname, '/src/app')
          ],
          loader: 'raw'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          },
          exclude: /(node_modules|src\/include|src\/app)/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html'
      })
    ],
    devServer: {
      contentBase: './dist',
      colors: true,
      historyApiFallback: true,
      inline: true,
      hot: true
    }
  }
];
