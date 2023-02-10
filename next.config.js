// import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "page.mdx",
    "page.md",
  ],
  swcMinify: true,
};

// Merge MDX config with Next.js config
// module.exports = withContentlayer(nextConfig);
module.exports = nextConfig