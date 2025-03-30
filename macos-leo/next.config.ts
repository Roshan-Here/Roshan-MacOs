import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', 
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
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'komarev.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats-sigma-five.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-profile-trophy.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ghactivity.mrayush.me',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats.herokuapp.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      type: 'asset/resource', // This tells Webpack to treat .mp3 files as resources
    });
    return config;
  },
};

export default nextConfig;
