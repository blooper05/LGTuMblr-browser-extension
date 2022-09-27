/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: 'assets',
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
    });

    return config;
  },
};

module.exports = nextConfig;
