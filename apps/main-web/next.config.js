//@ts-check

const { composePlugins, withNx } = require('@nx/next');

// ENABLED_ZONES가 비어 있으면(개발) 모든 존을, 값이 있으면 해당 존만 활성화한다.
const enabledZones = process.env.ENABLED_ZONES?.split(',')
  .map((zone) => zone.trim())
  .filter(Boolean);
/** @param {string} zone */
const isZoneEnabled = (zone) => !enabledZones?.length || enabledZones.includes(zone);

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  transpilePackages: ['@it-tech-blog/icons', '@it-tech-blog/preferences'],
  async rewrites() {
    const ACCESSIBILITY = process.env.ACCESSIBILITY_DOMAIN ?? 'http://localhost:4001';
    const REACT_DEEP_DIVE = process.env.REACT_DEEP_DIVE_DOMAIN ?? 'http://localhost:4002';
    const NEXT_DEEP_DIVE = process.env.NEXT_DEEP_DIVE_DOMAIN ?? 'http://localhost:4003';

    const rules = [];

    if (isZoneEnabled('accessibility')) {
      rules.push(
        { source: '/accessibility', destination: `${ACCESSIBILITY}/accessibility` },
        { source: '/accessibility/:path*', destination: `${ACCESSIBILITY}/accessibility/:path*` },
        {
          source: '/accessibility-static/:path*',
          destination: `${ACCESSIBILITY}/accessibility-static/:path*`,
        },
      );
    }

    if (isZoneEnabled('react')) {
      rules.push(
        { source: '/react', destination: `${REACT_DEEP_DIVE}/react` },
        { source: '/react/:path*', destination: `${REACT_DEEP_DIVE}/react/:path*` },
        {
          source: '/react-static/:path*',
          destination: `${REACT_DEEP_DIVE}/react-static/:path*`,
        },
      );
    }

    if (isZoneEnabled('next')) {
      rules.push(
        { source: '/next', destination: `${NEXT_DEEP_DIVE}/next` },
        { source: '/next/:path*', destination: `${NEXT_DEEP_DIVE}/next/:path*` },
        {
          source: '/next-static/:path*',
          destination: `${NEXT_DEEP_DIVE}/next-static/:path*`,
        },
      );
    }

    return rules;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
