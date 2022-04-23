/** @type {import('next').NextConfig} */

// Import Plugins
import withMDX from '@next/mdx';
import remarkPrism from 'remark-prism';
import remarkGfm from 'remark-gfm';

// Render markdown with the plugins
const NextConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkPrism],
    rehypePlugins: [],
  },
})

// Export the configuration
export default NextConfig({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
});
