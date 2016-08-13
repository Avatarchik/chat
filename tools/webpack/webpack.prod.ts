import * as path from 'path';
import { SRC_DIR, packageSort } from '../config';
import extendBaseWebpackConfig from './webpack.base';

// Webpack plugins
const {
  optimize: {
    DedupePlugin,
    UglifyJsPlugin
  }
} = require('webpack');
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const {
  DefinePlugin,
  ProgressPlugin,
  optimize: {
    CommonsChunkPlugin
  }
} = require('webpack');

// PostCSS plugins
import * as autoprefixer from 'autoprefixer';
import * as assets from 'postcss-assets';
import * as cssnano from 'cssnano';

export default extendBaseWebpackConfig({

  output: {
    filename: 'static/js/[name].[chunkhash].ts',
    sourceMapFilename: 'static/js/[name].[chunkhash].map',
    chunkFilename: 'static/js/[name].[chunkhash].chunk.ts'
  },

  globalCssLoaders: ExtractTextPlugin.extract({
    fallbackLoader: 'style?sourceMap',
    loader: 'css!postcss!sass?sourceMap'  // css?sourceMap query needed?
  }),

  localCssLoaders: [
    'raw',
    'postcss',
    'sass?sourceMap'
  ].join('!'),

  postcssPlugins: [
    autoprefixer({ browsers: ['last 2 versions', 'IE > 10'] }),
    assets({
      basePath: path.join(process.cwd(), SRC_DIR),
      loadPaths: [
        path.join(process.cwd(), SRC_DIR, 'static/images'),
        path.join(process.cwd(), SRC_DIR, 'static/fonts')
      ]
    }),
    cssnano({ discardComments: { removeAll: true } })
  ],

  plugins: [
    new DedupePlugin(),
    new UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true },
      compress: { warnings: false, screw_ie8: true },
      comments: false
    }),
    new CopyWebpackPlugin([
      { from: `${SRC_DIR}/static`, to: 'static', ignore: '*.{txt,json,xml}' },
      { from: `${SRC_DIR}/static/*.{txt,json,xml}`, to: '', flatten: true }
    ]),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), SRC_DIR, 'app/index.html'),
      chunksSortMode: packageSort(['polyfills', 'main']),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin({ filename: 'static/styles/[name].[hash].css', allChunks: true })
  ],

  devtool: 'source-map'
});
