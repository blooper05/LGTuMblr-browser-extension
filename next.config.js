const { default: WindiCSSWebpackPlugin } = require('windicss-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },

  assetPrefix: 'assets',

  experimental: {
    eslint: true,
  },
};
