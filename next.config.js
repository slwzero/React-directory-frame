const path = require('path')

module.exports = {
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['hooks'] = path.join(__dirname, 'hooks')
    config.resolve.alias['themes'] = path.join(__dirname, 'themes')
    return config
  },
}