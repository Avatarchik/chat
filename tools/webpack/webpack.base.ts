import * as path from 'path';
import { HTML_METADATA, SRC_DIR, DIST_DIR, IS_PROD, IS_DEV } from '../config';

// Webpack plugins
const { ForkCheckerPlugin } = require('awesome-typescript-loader');
const {
  DefinePlugin,
  ProgressPlugin,
  optimize: {
    CommonsChunkPlugin
  }
} = require('webpack');

export default options => ({

  entry: {
    polyfills: path.join(process.cwd(), SRC_DIR, 'app/polyfills.ts'),
    app: path.join(process.cwd(), SRC_DIR, 'app/bootstrap.ts')
  },

  // Static metadata that will be consumed by HtmlWebpackPlugin in index.html.
  metadata: HTML_METADATA,

  output: Object.assign({
    path: path.resolve(process.cwd(), DIST_DIR),
    publicPath: '/'
  }, options.output),

  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },

  module: {
    // This makes page loading ~1 sec slower, on the other hand, provides proper
    // sourcemapping for angular2.

    // preLoaders: [
    //   {
    //     test: /\.js?$/,
    //     loader: 'source-map',
    //     include: [
    //       path.join(process.cwd(), 'node_modules/@angular/core'),
    //       path.join(process.cwd(), 'node_modules/@angular/common'),
    //       path.join(process.cwd(), 'node_modules/@angular/router'),
    //       path.join(process.cwd(), 'node_modules/@angular/http')
    //     ]
    //   }
    // ],

    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript',
        include: path.join(process.cwd(), SRC_DIR)
      },
      {test: /\.json$/, loader: 'json'},
      {
        test: /\.scss$/,
        loader: options.globalCssLoaders,
        include: path.join(process.cwd(), SRC_DIR, 'styles')
      },
      {
        test: /\.scss$/,
        loader: options.localCssLoaders,
        include: path.join(process.cwd(), SRC_DIR, 'app')
      },
      {
        // Inline base64 URLs for <=8k images, direct URLs for the rest
        test: /\.(jpg|jpeg|gif|png|svg)(\?v=.+)?$/i,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(woff|woff2)(\?v=.+)?$/,
        loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=.+)?$/,
        loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=.+)?$/,
        loader: 'file?name=fonts/[name].[hash].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: [path.join(process.cwd(), SRC_DIR, 'app/index.html'), /node_modules/]
      }
    ]
  },

  plugins: [
    new ProgressPlugin({}),
    new ForkCheckerPlugin(),
    new DefinePlugin({
      IS_PROD,
      IS_DEV
    }),
    new CommonsChunkPlugin({
      name: 'app',
      async: true,
      minChunks: 3
    }),
    ...options.plugins
  ],

  postcss: () => options.postcssPlugins,
  devtool: options.devtool,
  devServer: options.devServer
});
