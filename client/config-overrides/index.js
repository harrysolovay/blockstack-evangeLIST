const { fileExistsInRoot } = require('./utilities')

const rewireBabel = require('./rewires/babel')
const rewireEslint = require('./rewires/eslint')
const rewireStylelint = require('./rewires/stylelint')
const rewireWhitlist = require('./rewires/whitelist')

const generateIcons = require('./rewires/icons')

module.exports = {

  webpack: (config, env) => {

    [
      [ rewireBabel, '.babelrc' ],
      [ rewireEslint, '.eslintrc' ],
      [ rewireStylelint, '.stylelintrc' ],
    ].forEach(rewire => {
      if(fileExistsInRoot(rewire[1])) {
        config = rewire[0](config)
      }
      return config
    })

    if(env === 'production') {

      config = rewireWhitlist(config, [
        'bitcoinjs-lib',
        'tiny-secp256k1/ecurve',
        'base64url/dist/base64url',
        'base64url/dist/pad-string',
        'bip32',
      ].map(module => `node_modules/${module}`))

      config = generateIcons(config)

    }

    return config

  },

  devServer: (configFunction) => {
    return (proxy, allowedHost) => {
      
      let config = configFunction(proxy, allowedHost)
      
      config.headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization'
      }

      config.historyApiFallback = {
        disableDotRule: true,
      }

      config.hot = true

      return config

    }
  },

}