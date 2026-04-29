const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  transpilePackages: ['@it-tech-blog/theme'],
  basePath: '/accessibility',
  assetPrefix: '/accessibility-static',
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
