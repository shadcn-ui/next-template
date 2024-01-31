// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { ppr: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  reactStrictMode: true,
  // compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  // typescript: { ignoreBuildErrors: process.env.NODE_ENV === 'development' },
};

export default nextConfig;
