
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',      
        hostname: 'vortechinc.io', 
        pathname: '/**',        
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;