/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "tailwindui.com"],
  },
  experimental: {
    legacyBrowsers: false,
  },
};

export default nextConfig;
