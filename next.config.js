
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  typescript: {
    ignoreBuildErrors: false,
  }
}

module.exports = nextConfig
