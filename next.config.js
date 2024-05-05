/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.multiavatar.com", "robohash.org"],
  },
};

module.exports = nextConfig;
