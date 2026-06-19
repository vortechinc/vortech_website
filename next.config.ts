import type { NextConfig } from 'next';
import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vortechinc.io',
        pathname: '/**',
      },
    ],
  }
};

export default withPayload(nextConfig);
