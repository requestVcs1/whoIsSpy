const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  chainWebpack: options => {
    options.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        return {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: `img/[name]22.[ext]`,
            },
          },
        }
      })

    // .type('asset/inline').tap(options => {
    //   options.generator = {
    //     filename: 'img/[name].[ext]'
    //   }
    // })
  },
}
