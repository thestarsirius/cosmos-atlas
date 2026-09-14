/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: the whole site is pre-rendered HTML/CSS/JS with no
  // server runtime needed. This is what makes free Cloudflare Pages hosting
  // trivial — you just point Pages at the `out/` folder. See DEPLOYMENT-CLOUDFLARE.md.
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
