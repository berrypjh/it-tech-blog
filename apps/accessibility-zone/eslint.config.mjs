import nextEslintPluginNext from '@next/eslint-plugin-next';
import nx from '@nx/eslint-plugin';

import baseConfig from '../../eslint.config.mjs';

export default [
  nextEslintPluginNext.configs['core-web-vitals'],
  ...nx.configs['flat/react-typescript'],
  ...baseConfig,
  {
    ignores: ['.next/**/*', '**/out-tsc'],
  },
  {
    // basePath 밖(호스트 '/')으로 나가는 존 간 이동은 <a>여야 한다. <Link>는 basePath를 붙인다.
    rules: { '@next/next/no-html-link-for-pages': 'off' },
  },
];
