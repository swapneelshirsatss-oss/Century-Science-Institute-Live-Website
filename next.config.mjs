/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'centuryscienceinstitute.in',
      },
    ],
  },
};

export default nextConfig;
