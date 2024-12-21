import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**', 
      },
    ],
  },
  // help to href and as in Link component
  // experimental:{
  //   typedRoutes:true
  // }
};

export default nextConfig;
