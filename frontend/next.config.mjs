/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "flowbite.s3.amazonaws.com" },
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "assets.aceternity.com" },
    ],
  },
};

export default nextConfig;
