/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => { return [{ source: '/api/:path*', destination: process.env.BACKEND_URL + '/:path*' }] }
}

module.exports = nextConfig
