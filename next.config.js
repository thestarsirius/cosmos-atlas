/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Only official/verified astronomy imagery domains are allow-listed.
    // Add domains here only when a real, credited image source is wired in.
    remotePatterns: [
      { protocol: "https", hostname: "images-assets.nasa.gov" },
      { protocol: "https", hostname: "www.nasa.gov" },
      { protocol: "https", hostname: "science.nasa.gov" },
      { protocol: "https", hostname: "esahubble.org" },
      { protocol: "https", hostname: "cdn.esawebb.org" }
    ]
  }
};

module.exports = nextConfig;
