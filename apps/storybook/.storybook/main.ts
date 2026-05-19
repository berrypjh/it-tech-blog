import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../../../packages/ui/src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [getAbsolutePath('@storybook/addon-docs'), getAbsolutePath('@storybook/addon-a11y')],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (cfg) => {
    const [{ default: react }, { default: tailwindcss }] = await Promise.all([
      import('@vitejs/plugin-react'),
      import('@tailwindcss/vite'),
    ]);
    cfg.plugins = cfg.plugins ?? [];
    cfg.plugins.push(react(), tailwindcss());
    return cfg;
  },
};

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

export default config;
