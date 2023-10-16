/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/tydolla00/blogs/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
