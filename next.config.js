/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: 'assets',
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
