const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  transpilePackages: ['@it-tech-blog/preferences'],
  basePath: '/accessibility',
  assetPrefix: '/accessibility-static',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/accessibility',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
