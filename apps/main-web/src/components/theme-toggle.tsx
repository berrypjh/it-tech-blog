'use client';

import { useRouter } from 'next/navigation';
import { IconButton } from '@berrypjh/react-ui';
import { useTheme, useLocale } from '@it-tech-blog/preferences';

import { SunIcon, MoonIcon } from '@it-tech-blog/icons';

const ThemeToggle = () => {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const { locale, setLocale } = useLocale();
  const isDark = resolvedTheme === 'dark';

  const handleLocaleToggle = () => {
    setLocale(locale === 'ko' ? 'en' : 'ko');
    router.refresh();
  };

  return (
    <div
      className="fixed top-6 z-50 flex items-center gap-2"
      style={{ right: 'max(1.5rem, calc((100vw - 1440px) / 2 + 1.5rem))' }}
    >
      <IconButton size="md" onClick={handleLocaleToggle} aria-label="Toggle language">
        <span className="text-sm font-semibold leading-none">{locale === 'ko' ? 'KO' : 'EN'}</span>
      </IconButton>

      <IconButton size="md" onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label="Toggle theme">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </div>
  );
};

export default ThemeToggle;
