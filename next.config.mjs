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
  // compiler: { removeConsole: true },
  // typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
