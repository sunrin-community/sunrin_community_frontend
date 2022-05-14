/** @type {import('next').NextConfig}*/

const nextConfig = {
  webpack5: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
  },
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
