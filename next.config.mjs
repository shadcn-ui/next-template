// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  cacheMaxMemorySize: 1024 * 1024 * 100,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  reactStrictMode: true,
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  typescript: { ignoreBuildErrors: process.env.NODE_ENV === 'development' },
};

export default nextConfig;
