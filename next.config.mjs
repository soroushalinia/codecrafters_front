/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '8000',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'codecrafters.ir',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
