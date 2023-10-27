// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
      },
    ],
  },
};

export default nextConfig;
