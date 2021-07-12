module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    return config
  }
}
