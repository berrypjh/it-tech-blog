//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  transpilePackages: ['@it-tech-blog/icons', '@it-tech-blog/preferences'],
  async rewrites() {
    const ACCESSIBILITY = process.env.ACCESSIBILITY_DOMAIN ?? 'http://localhost:4001';
    const REACT_DEEP_DIVE = process.env.REACT_DEEP_DIVE_DOMAIN ?? 'http://localhost:4002';
    const NEXT_DEEP_DIVE = process.env.NEXT_DEEP_DIVE_DOMAIN ?? 'http://localhost:4003';

    return [
      // accessibility zone
      { source: '/accessibility', destination: `${ACCESSIBILITY}/accessibility` },
      { source: '/accessibility/:path*', destination: `${ACCESSIBILITY}/accessibility/:path*` },
      {
        source: '/accessibility-static/:path*',
        destination: `${ACCESSIBILITY}/accessibility-static/:path*`,
      },
      // react deep dive zone
      { source: '/react', destination: `${REACT_DEEP_DIVE}/react` },
      { source: '/react/:path*', destination: `${REACT_DEEP_DIVE}/react/:path*` },
      {
        source: '/react-static/:path*',
        destination: `${REACT_DEEP_DIVE}/react-static/:path*`,
      },
      // next deep dive zone
      { source: '/next', destination: `${NEXT_DEEP_DIVE}/next` },
      { source: '/next/:path*', destination: `${NEXT_DEEP_DIVE}/next/:path*` },
      {
        source: '/next-static/:path*',
        destination: `${NEXT_DEEP_DIVE}/next-static/:path*`,
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
