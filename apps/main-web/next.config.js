//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  transpilePackages: ['@it-tech-blog/preferences'],
  async rewrites() {
    const ACCESSIBILITY = process.env.ACCESSIBILITY_DOMAIN ?? 'http://localhost:4001';

    return [
      // accessibility zone
      { source: '/accessibility', destination: `${ACCESSIBILITY}/accessibility` },
      { source: '/accessibility/:path*', destination: `${ACCESSIBILITY}/accessibility/:path*` },
      {
        source: '/accessibility-static/:path*',
        destination: `${ACCESSIBILITY}/accessibility-static/:path*`,
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
