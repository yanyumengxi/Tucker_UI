const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const resolve = dir => path.join(__dirname, dir)

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // configureWebpack: {
  //   resolve : {
  //     extensions: ['.js', '.vue', '.json'],
  //     alias: {
  //       packages: resolve('packages'),
  //       assets: resolve('examples/assets'),
  //       views: resolve('examples/views')
  //     }
  //   }
  // },
  // chainWebpack: (config) => {
  //   config.module.rule('js').include.add('/packages').end()
  // }
  chainWebpack: config => {
    config.module
        .rule('js')
        .include
        .add(resolve('pack'))
        .end()
        .use('babel')
        .loader('babel-loader')
        .tap(option => {
          return option
        })
  }
})
