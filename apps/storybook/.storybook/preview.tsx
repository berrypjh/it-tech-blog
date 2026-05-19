import {
  FontFamilyProvider,
  FontSizeProvider,
  LocaleProvider,
  MotionProvider,
  ThemeProvider,
} from '@it-tech-blog/preferences';

import type { Decorator, Preview } from '@storybook/react-vite';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

import '@berrypjh/react-ui/styles.css';
import '../src/global.css';

const dsViewports = {
  mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' }, type: 'mobile' },
  tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' }, type: 'tablet' },
  desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' }, type: 'desktop' },
} as const;

const withProviders: Decorator = (Story, context) => {
  const theme = (context.globals.theme as 'light' | 'dark') ?? 'light';
  const locale = (context.globals.locale as 'ko' | 'en') ?? 'ko';

  return (
    <ThemeProvider defaultTheme={theme}>
      <LocaleProvider defaultLocale={locale}>
        <FontSizeProvider defaultFontSize="md">
          <MotionProvider defaultMotion="default">
            <FontFamilyProvider defaultFontFamily="sans">
              <div className={theme === 'dark' ? 'dark' : ''}>
                <Story />
              </div>
            </FontFamilyProvider>
          </MotionProvider>
        </FontSizeProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color|fill|stroke|shadow)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: { ...dsViewports, ...INITIAL_VIEWPORTS },
    },
    a11y: {
      context: '#storybook-root',
      config: {},
      options: {},
      manual: false,
    },
  },
  initialGlobals: {
    viewport: { value: 'responsive' },
  },
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withProviders],
};

export default preview;
