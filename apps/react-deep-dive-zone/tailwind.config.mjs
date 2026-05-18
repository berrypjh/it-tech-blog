import preset from '@berrypjh/react-ui/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  darkMode: 'class',
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
};
