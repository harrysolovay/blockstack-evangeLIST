const { getBabelLoader } = require('react-app-rewired')
const images = require('remark-images')
const emoji = require('remark-emoji')

module.exports = (config) => {

  const babelLoader = getBabelLoader(config.module.rules)

  config.module.rules.map(rule => {

    if (
      typeof rule.test !== 'undefined' ||
      typeof rule.oneOf === 'undefined'
    ) {
      return rule
    }

    rule.oneOf.unshift({
      test: /\.mdx?$/,
      use: [
        {
          loader: babelLoader.loader,
          options: babelLoader.options,
        },
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [ images, emoji ]
          }
        }
      ],
    })

    return rule
    
  })

  return config
}