/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
