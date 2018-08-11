const {
  addBeforeRule,
  createLoaderMatcher
} = require('../utilities')

module.exports = (config) => {

  const rules = {
    loader: 'stylelint-custom-processor-loader',
    options: {
      configPath: null,
      emitWarning: true,
    }
  }

  addBeforeRule(
    config.module.rules,
    createLoaderMatcher('eslint-loader'),
    rules
  )

  return config
}