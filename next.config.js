const { default: WindiCSSWebpackPlugin } = require('windicss-webpack-plugin');

module.exports = {
  future: {
    webpack5: true,
  },

  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },

  experimental: {
    eslint: true,
  },
};
