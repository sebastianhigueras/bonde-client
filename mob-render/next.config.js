// var path = require('path')
module.exports = {
  webpack: (config, { buildId, dev }) => {
    config.module.rules.push(
      // { test: /webviewer.js/, loader: 'expose-loader?Mobilization' }
      {
        test: /webviewer/,
        use: [{
            loader: 'raw-loader'
        }]
      }
    )
    return config
  }
}
