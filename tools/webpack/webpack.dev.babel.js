import path from 'path';
import { SRC_DIR, DIST_DIR, HOST, PORT, packageSort } from '../config';
import extendBaseWebpackConfig from './webpack.base';

// Webpack plugins
import NoErrorsPlugin from 'webpack/lib/NoErrorsPlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// PostCSS plugins
import autoprefixer from 'autoprefixer';
import assets from 'postcss-assets';

export default extendBaseWebpackConfig({

  output: {
    filename: '[name].ts',
    sourceMapFilename: '[name].map',
    chunkFilename: '[name].chunk.ts'
  },

  globalCssLoaders: [
    'style?sourceMap',
    'css', // ?sourceMap query needed?
    'postcss',
    'sass?sourceMap'
  ].join('!'),

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
    })
  ],

  plugins: [
    new NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), SRC_DIR, 'app/index.html'),
      chunksSortMode: packageSort(['polyfills', 'vendor', 'main']),
    })
  ],

  devServer: {
    contentBase: path.join(process.cwd(), SRC_DIR),
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    stats: 'errors-only',
    outputPath: path.join(process.cwd(), DIST_DIR)
  },

  devtool: 'cheap-module-eval-source-map'
});




