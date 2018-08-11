const FaviconsPlugin = require('favicons-webpack-plugin')
const { rootPath } = require('../utilities')

module.exports = (config) => {
  config.plugins = (config.plugins || []).concat([
    new FaviconsPlugin({
      logo: `${ rootPath }/src/assets/images/icon.png`,
      title: 'Blockstack EvangeLIST',
    })
  ])
  return config
}