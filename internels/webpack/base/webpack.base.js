const buildModules = (externelRunles = []) => {
  const rules = [{
    test: /\.[tj]s?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader', // babel-loader处理jsx或tsx文件
      options: {
        cacheDirectory: true
      }
    }
  }];

  if (externelRunles.length) {
    return {
      rules: rules.concat(externelRunles)
    }
  }

  return {
    rules: rules
  };
}

const buildPlugins = (externelPlugins = []) => {
  const plugins = [];

  if (externelPlugins.length) {
    return plugins.concat(externelPlugins)
  }

  return plugins;
}

module.exports = (options) => ({
  mode: options.mode,
  module: buildModules(options.module || []),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.node'],
    alias: options.alias || {}
  },
  devtool: options.devtool,
  plugins: buildPlugins(options.plugins),
  entry: options.entry,
  output: options.output,
  target: options.target || 'web'
})