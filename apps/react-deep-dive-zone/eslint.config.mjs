import nextEslintPluginNext from '@next/eslint-plugin-next';
import nx from '@nx/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import baseConfig from '../../eslint.config.mjs';

export default [
  { plugins: { '@next/next': nextEslintPluginNext } },
  ...nx.configs['flat/react-typescript'],
  // 웹 접근성 정적 검사 (JSX/TSX 한정)
  { ...jsxA11y.flatConfigs.recommended, files: ['**/*.{jsx,tsx}'] },
  ...baseConfig,
  {
    ignores: ['.next/**/*', '**/out-tsc'],
  },
];
