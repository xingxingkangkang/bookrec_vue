module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  assetsDir: 'static',
  devServer: {
    proxy: 'http://127.0.0.1:8000'
    // proxy: 'http://47.112.216.17:8081'
  }
};
