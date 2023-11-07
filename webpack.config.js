const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackFavicons = require('webpack-favicons');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    assetModuleFilename: path.join('img', '[contenthash][ext]'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
        // exclude: /global\.css$/,
      },
      {
        test: /global\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      // {
      //   test: /\.png$/i,
      //   include: '/img/',
      //   use: [{ loader: 'file-loader', options: { outputPath: '/img/' } }],
      // },
      {
        test: /\.png$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
      // favicon: './public/img/favicon.svg',
    }),
    // new FaviconsWebpackPlugin({
    //   logo: './src/img/favicon.png',
    //   inject: true,
    // }),
    new WebpackFavicons({
      src: './src/img/favicon.svg',
      // src: './src/img/maskicon.svg',
      path: 'img',
      // background: '#fff',
      // theme_color: '#57B8FF',
      icons: {
        favicons: true,
        appleIcon: {
          offset: '#57B8FF',
          background: '#57B8FF',
          mask: '#57B8FF',
          overlayGlow: '#57B8FF',
          overlayShadow: '#57B8FF',
        },
        appleStartup: true,
      },
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
