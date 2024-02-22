const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Your other Next.js configurations, if any

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" }, // Update with your actual origin
          { key: "Access-Control-Allow-Methods", value: "*" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ]
      }
    ];
  },
};

module.exports = withMDX(nextConfig);
