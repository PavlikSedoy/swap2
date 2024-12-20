//webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

// const isDev = process.env.NODE_ENV === 'development';
const isDev = true;
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].${ext}`

const plugins = () => {
    const base = [
          new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html',
            chunks: ['home'],
            minify: false
          }),
          new HtmlWebpackPlugin({
            template: './src/pug/video.pug',
            filename: 'video.html',
            chunks: ['home'],
            minify: false
          }),
          new MiniCssExtractPlugin({
            filename: './assets/css/' + filename('css')
          }),
          new CopyWebpackPlugin({
            patterns: [
              // {
              //   from: path.resolve(__dirname, 'src/assets/favicon.ico'),
              //   to: path.resolve(__dirname, 'assets')
              // },
              // {
              //   from: path.resolve(__dirname, 'src/assets/fonts'),
              //   to: path.resolve(__dirname, 'fonts')
              // },
              {
                from: path.resolve(__dirname, 'src/assets/pics'),
                to: path.resolve(__dirname, 'assets/pics')
              },
              {
                from: path.resolve(__dirname, 'src/assets/images'),
                to: path.resolve(__dirname, 'assets/images')
              },
              {
                from: path.resolve(__dirname, 'src/assets/svg'),
                to: path.resolve(__dirname, 'assets/svg')
              },
            ]
          }),
          new SpriteLoaderPlugin({ plainSprite: true }),
          new LiveReloadPlugin({
            appendScriptTag: true
          }),
    ]

    return base;
}

const cssLoaders = extra => {
  const loaders = [{
    loader: MiniCssExtractPlugin.loader,
  }, 'css-loader'];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};


const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader?presets[]=es2015',
    options: {
      presets: ['@babel/preset-env']
    }
  }];
  return loaders;
}

module.exports = {
    mode: 'development',
    output: {
      filename: './assets/js/' + filename('js'),
      path: path.resolve(__dirname, ''),
      assetModuleFilename: './assets/images/[name][ext]',
      // clean: true,
    },
    entry: {
        home: path.resolve(__dirname, 'src/assets/js/home.js'),
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
          '@js': path.resolve(__dirname, 'src/assets/js'),
          '@': path.resolve(__dirname, 'src'),
          '@styles' : path.resolve(__dirname, 'src/assets/sass'),
          '@images' : path.resolve(__dirname, 'src/assets/images'),
          '@svg' : path.resolve(__dirname, 'src/assets/images/svg')
        }
    },
      optimization: {
        minimize: false
    },
    devServer: {
      watchFiles: path.join(__dirname, 'src'),
      port: 4000,
      open: true,
      hot: true,
      compress: true,
      liveReload: true,
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, 'assets'),
      },
      client: {
        overlay: {
          warnings: false,
          errors: false,
          runtimeErrors: false
        },
      }
    },
    // devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true,
          }
        },
        {
          test: /\.css$/,
          use: cssLoaders()
        },
        {
          test: /\.s[ac]ss$/,
          use: cssLoaders('sass-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              minimize: false,
              outputStyle: 'expanded'
            }
          })
        },
        {
          test: /\.(png|jpg|jpeg|gif|webp)$/i,
          type: 'asset',
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          type: 'asset',
          include: path.resolve(__dirname, 'src/assets/fonts'),
          generator: {
            filename: path.join('icons', '[name].[contenthash][ext]'),
          }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: 'sprite.svg',
                runtimeCompat: true
              }
            },
            'svgo-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: jsLoaders()
        }
      ]
    },
};