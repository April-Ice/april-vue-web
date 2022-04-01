// vue.config.js for less-loader@6.0.0

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'?'./':'/',  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#20BDB5',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    open: true,
    overlay: {
      warnings: true,
      error: true
    },
  },
};