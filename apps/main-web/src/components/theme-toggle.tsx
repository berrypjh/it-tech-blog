'use client';

import { useRouter } from 'next/navigation';

import { MoonIcon, SunIcon } from '@it-tech-blog/icons';
import { useLocale, useTheme } from '@it-tech-blog/preferences';

import { IconButton } from '@berrypjh/react-ui';

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
      className="fixed top-xlg z-50 flex items-center gap-sm"
      style={{
        right: 'max(var(--ds-spacing-xlg), calc((100vw - 1440px) / 2 + var(--ds-spacing-xlg)))',
      }}
    >
      <IconButton size="md" onClick={handleLocaleToggle} aria-label="Toggle language">
        <span className="text-xsm font-semiBold leading-none">{locale === 'ko' ? 'KO' : 'EN'}</span>
      </IconButton>

      <IconButton size="md" onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label="Toggle theme">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </div>
  );
};

export default ThemeToggle;
