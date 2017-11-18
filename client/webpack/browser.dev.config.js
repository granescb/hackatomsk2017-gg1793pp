const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  context: path.resolve(__dirname, '..', 'app'),
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '..', 'app', 'web'),
    filename: 'bundle.js',
    publicPath: '/',
    library: 'WebApp',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-0'],
              plugins: [
                'transform-decorators-legacy',
                'transform-runtime',
                'transform-regenerator',
                'transform-async-to-generator',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html/,
        use: 'html-loader',
      },
      {
        test: /\.(styl|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(png|jpg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[ext]',
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify(process.env.ENV || 'browser'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/assets/index.html',
      inject: 'body',
    }),
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '..', 'app', 'src')],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'app', 'web'),
    inline: true,
    port: 8000,
    historyApiFallback: true,
  },
};
