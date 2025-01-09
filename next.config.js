/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  output: 'standalone',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  generateEtags: true,
  compress: true,
  images: {
    unoptimized: true,
    domains: ['api.qurancdn.com', 'everyayah.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.qurancdn.com',
      },
      {
        protocol: 'https',
        hostname: 'everyayah.com',
      }
    ]
  },
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_ADSENSE_ID: process.env.NEXT_PUBLIC_ADSENSE_ID
  }
};

module.exports = nextConfig;