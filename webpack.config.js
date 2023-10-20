// This file is not compiled so it can't use imports
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // entry: './src/app.ts',
  entry: './node_gpio_test.ts',

  target: 'node',

  mode: 'production',

  output: {
    publicPath: './',
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../build/node'),
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  externals: {
    '@brightsign/legacy/controlport': 'commonjs @brightsign/legacy/controlport',
    // '@brightsign/screenshot': 'commonjs @brightsign/screenshot',
    // '@brightsign/serialport': 'commonjs @brightsign/serialport',
    // '@brightsign/audio': 'commonjs @brightsign/audio',
    // '@brightsign/messageport': 'commonjs @brightsign/messageport',
    // '@brightsign/deviceinfo': 'commonjs @brightsign/deviceinfo',
    // '@brightsign/filesysteminfo': 'commonjs @brightsign/filesysteminfo',
    // '@brightsign/networkconfiguration': 'commonjs @brightsign/networkconfiguration',
    CloseAllBSClasses: 'CloseAllBSClasses'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },

  // plugins: [
  //   new CopyWebpackPlugin({
  //     patterns: [
  //       {
  //         context: '../ui/dist',
  //         from: '**/*',
  //         to: 'frontend/',
  //       },
  //       {
  //         context: '../../root',
  //         from: '**/*',
  //         to: '../',
  //         filter: async (resourcePath) => {
  //           const ignoredFiles = ['env.json.example', 'songs.json.example'];
  //           return (
  //             ignoredFiles.some((file) => resourcePath.endsWith(file)) === false
  //           );
  //         },
  //       },
  //     ],
  //   }
  //   ),
  // ],
};
