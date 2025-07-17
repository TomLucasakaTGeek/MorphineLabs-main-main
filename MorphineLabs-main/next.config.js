/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removing 'output: export' to enable API routes
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
