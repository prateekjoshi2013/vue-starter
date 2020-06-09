module.exports = {
  configureWebpack: { // webpack costumization
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
// this is webpack config server as vue uses webpack config behind the scenes
