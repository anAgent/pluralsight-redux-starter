import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const isDev = process.env.NODE_ENV !== 'production';
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: isDev,
  devtool: isDev ? 'inline-source-map' : 'source-map',
  noInfo: false,
  entry: [
    ...isDev ?
      [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true' //note that it reloads the page if hot module reloading fails.
      ] :
      [
        // production
        path.resolve(__dirname, 'src/index')
      ]
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: isDev ? path.resolve(__dirname, 'src') : './dist'
  },
  plugins: [
    ...isDev ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      ] :
      [
        // Production
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
      ]
  ],
  module: {
    loaders: [
      ...isDev ?
        [
          { test: /(\.css)$/, loaders: ['style', 'css'] }
        ]
        :
        [
          // Production
          { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap') }
        ],
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
};
