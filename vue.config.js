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
    proxy: 'http://localhost:8000'
  }
};
