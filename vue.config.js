// const webpack = require('webpack');
process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  runtimeCompiler: true,
  // 為了鑲嵌進laravel專案而做的設定
  publicPath: "./",
  devServer: {
    /* https option */
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    // port: 9004 // CHANGE YOUR PORT HERE!
    // https: true,
    // hotOnly: false,
  }

};
