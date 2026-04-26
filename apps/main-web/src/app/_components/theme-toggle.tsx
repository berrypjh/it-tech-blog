'use client';

import { IconButton } from '@berrypjh/react-ui';

import { SunIcon, MoonIcon } from './icons';
import { useTheme } from './theme-client-provider';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="fixed top-6 right-6">
      <IconButton size="md" onClick={() => setIsDark((v) => !v)} aria-label="Toggle theme">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </div>
  );
}
