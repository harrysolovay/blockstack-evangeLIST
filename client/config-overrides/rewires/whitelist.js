const { rootPath } = require('../utilities')
const { getBabelLoader } = require('react-app-rewired')

module.exports = (config, modules) => {

  const babelLoader = getBabelLoader(config.module.rules)
  
  const includeConfig = ((source) => {
    if (!source) return []
    return Array.isArray(source)
      ? source
      : [source]
  })(babelLoader.include)

  babelLoader.include = modules
    .map(name => `${ rootPath }/${name}`)
    .reduce((accumulator, include) => {
      if(Array.isArray(include)) {
        return accumulator.concat(include)
      }
      accumulator.push(include)
      return accumulator
    }, includeConfig)
  return config

}