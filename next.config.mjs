/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zandreea.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zandreea.github.io/' : '',
};

export default nextConfig;
