const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  transpilePackages: ['@it-tech-blog/preferences', '@it-tech-blog/utils'],
  basePath: '/llm',
  assetPrefix: '/llm-static',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/llm',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
