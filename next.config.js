/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.maxSize = 200000; // Adjust the size as needed
    }
    return config;
  },
};
