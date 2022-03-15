const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },

  assetPrefix: 'assets',

  reactStrictMode: true,
};

module.exports = nextConfig;
