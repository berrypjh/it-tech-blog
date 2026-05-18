const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  transpilePackages: ['@it-tech-blog/icons', '@it-tech-blog/preferences', '@it-tech-blog/utils'],
  basePath: '/react',
  assetPrefix: '/react-static',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/react',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
