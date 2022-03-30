// vue.config.js for less-loader@6.0.0
// const path = require("path");

module.exports = {
  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "less",
  //     patterns: [path.resolve(__dirname, "./view/commonCss/boxShadow/index.less")]
  //   }
  // },
  // lintOnSave: true,
  devServer: {
    open: true,
    overlay: {
      warnings: true,
      error: true
    }
  },
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
};