import { UIThemeBridge } from '@it-tech-blog/ui';

import type { ComponentType } from 'react';

import { terminalThemes } from './terminalThemes';

import './term-palette.css';

/** Storybook decorator. 존 스토리를 앱과 같은 테마 짝 · 터미널 팔레트로 렌더한다. */
export const withTerminalTheme = (Story: ComponentType) => (
  <UIThemeBridge themes={terminalThemes}>
    <Story />
  </UIThemeBridge>
);
