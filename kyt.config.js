// Base kyt config.
// Edit these properties to make changes.

module.exports = {
  reactHotLoader: true,
  debug: false,
  serverURL: 'http://0.0.0.0:3000',
  clientURL: 'http://0.0.0.0:3001',
  modifyWebpackConfig: baseConfig => {
    const appConfig = Object.assign({}, baseConfig)

    // Exclude inline.svg from url-loader
    const fileLoader = appConfig.module.rules.find(loader => loader.loader === 'file-loader')
    fileLoader.exclude = /\.svg$/

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

    appConfig.module.rules.unshift(svgRules)
    return appConfig
  },
}
