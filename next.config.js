/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized:true,
    domains: ["media.graphassets.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
