import preset from '@berrypjh/react-ui/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  darkMode: 'class',
  content: ['../../packages/ui/src/**/*.{ts,tsx}'],
};
