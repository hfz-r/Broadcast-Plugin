const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

module.exports = {
  mode: 'production',
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    path.join(process.cwd(), 'app/facade.js'),
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: PUBLIC_PATH,
    filename: 'main.js',
    library: 'brdcst',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      PUBLIC_PATH: '/',
    }),
    new Dotenv(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  target: 'web',
};
