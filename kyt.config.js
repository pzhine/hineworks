const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  reactHotLoader: true,
  hasServer: false,
  debug: false,
  serverURL: 'http://0.0.0.0:3000',
  clientURL: 'http://0.0.0.0:3001',
  modifyWebpackConfig: (baseConfig, options) => {
    const appConfig = Object.assign({}, baseConfig)

    if (options.type === 'client') {
      appConfig.plugins.push(
        new HtmlWebpackPlugin({
          template: 'src/index.ejs',
          // Sort the chunks so that the scripts are added in the correct order.
          chunksSortMode: (chunk1, chunk2) => {
            const orders = ['runtime~main', 'vendor', 'main'];
            const order1 = orders.indexOf(chunk1.names[0]);
            const order2 = orders.indexOf(chunk2.names[0]);
            return order1 - order2;
          },
        })
      )
    }

    // Exclude inline.svg from url-loader
    const fileLoader = appConfig.module.rules.find(loader => loader.loader === 'file-loader')
    if (fileLoader) {
      // console.log('fileLoader', fileLoader)
      fileLoader.exclude = /\.svg$/
    }

    // appConfig.plugins = appConfig.plugins.map(
    //   plugin =>
    //     plugin instanceof webpack.optimize.UglifyJsPlugin
    //       ? new UglifyJsPlugin({
    //           uglifyOptions: {
    //             compress: {
    //               ie8: false,
    //               warnings: false,
    //             },
    //             output: {
    //               comments: false,
    //             },
    //           },
    //           sourceMap: true,
    //         })
    //       : plugin
    // )

    // Create a new loader to handle .svg files and pass the same options
    // as used for BabelLoader
    const svgRules = {
      test: /\.svg$/,
      use: [
        {
          loader: 'react-svg-loader',
          query: {
            es5: false,
            svgo: {
              pretty: true,
              plugins: [{ removeStyleElement: true }],
            },
          },
        },
      ],
    }

    const sassRules = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }

    appConfig.module.rules.unshift(svgRules)
    appConfig.module.rules.unshift(sassRules)
    return appConfig
  },
}
