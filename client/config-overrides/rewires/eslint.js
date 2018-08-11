const {
  createLoaderMatcher,
  findRule
} = require('../utilities')

module.exports = (config) => {

  const rule = findRule(
    config.module.rules,
    createLoaderMatcher('eslint-loader')
  )

  if(!rule) {
    console.error('Could not find ESLint rule in config')
    return config
  }

  delete rule.options.baseConfig
  rule.options.useEslintrc = true

  return config
}