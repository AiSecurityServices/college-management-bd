/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/college-management-bd' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/college-management-bd' : '',
}

module.exports = nextConfig
