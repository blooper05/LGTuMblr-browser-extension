const { default: WindiCSSWebpackPlugin } = require('windicss-webpack-plugin');

module.exports = {
  webpack5: false, // FIXME: refs. https://windicss.org/integrations/webpack.html

  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },

  assetPrefix: 'assets',

  reactStrictMode: true,
};
