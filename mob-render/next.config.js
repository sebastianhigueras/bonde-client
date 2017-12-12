// var path = require('path')
module.exports = {
  webpack: (config, { buildId, dev }) => {
    config.module.rules.push(
      {
        test: /webviewer/,
        use: [{
            loader: 'val-loader'
        }]
      }
    )
    return config
  }
}
