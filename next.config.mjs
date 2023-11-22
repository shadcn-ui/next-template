// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { removeConsole: true },
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
};

export default nextConfig;
