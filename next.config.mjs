/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-sns.s3.ap-northeast-2.amazonaws.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
