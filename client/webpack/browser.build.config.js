const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, '..', 'app'),
  name: 'build',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'app.[hash].js',
    publicPath: '/',
    library: 'WebApp',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '..', 'app', 'src')],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify(process.env.ENV || 'browser'),
      'process.env.NODE_ENV': JSON.stringify(process.env.PRODUCTION === 'True' ? 'production' : 'development'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.[hash].js',
    }),
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: false,
    //   comments: false,
    //   compress: {
    //     sequences: true,
    //     booleans: true,
    //     loops: true,
    //     unused: true,
    //     warnings: false,
    //     drop_console: true,
    //     unsafe: true,
    //   },
    // }),
    new ExtractTextPlugin('css/[name]-[hash].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/assets/index.html',
      inject: 'body',
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        exclude: /(app\/modules\/common\/images)/,
        use: 'url-loader?limit=1&name=fonts/[name].[ext]',
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!stylus-loader' }),
      },
      { test: /\.html$/, use: 'html-loader' },
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
                'transform-react-remove-prop-types',
                'transform-react-constant-elements',
                'transform-react-inline-elements',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=img/[name].[ext]',
          'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "85", speed: 4}, mozjpeg: {quality: 85}}',
        ],
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
    ],
  },
};
