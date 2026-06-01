const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  transpilePackages: ['@it-tech-blog/icons', '@it-tech-blog/preferences', '@it-tech-blog/utils'],
  basePath: '/next',
  assetPrefix: '/next-static',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/next',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
