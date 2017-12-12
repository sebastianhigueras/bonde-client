module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        loader: 'emit-file-loader',
        options: {
            name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        // Simplest example (non-minified)..
        loader: `babel-loader!next-style-loader`
      }
    )
    return config
  }
}
