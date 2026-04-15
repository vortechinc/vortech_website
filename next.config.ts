
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',      
        hostname: 'vortechinc.io', 
        pathname: '/**',        
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;