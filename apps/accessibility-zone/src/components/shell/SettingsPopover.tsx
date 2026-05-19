'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { SettingsIcon } from '@it-tech-blog/icons';
import {
  type FontFamily,
  type FontSize,
  useFontFamily,
  useFontSize,
  useLocale,
  useMotion,
  useTheme,
} from '@it-tech-blog/preferences';
import { cn } from '@it-tech-blog/utils';

import {
  Popover,
  PopoverPanel,
  PopoverTrigger,
  SegmentControl,
  type SegmentOption,
} from '@berrypjh/react-ui';

const strings = {
  ko: {
    label: '설정',
    panel: '설정 패널',
    theme: '테마',
    light: '라이트',
    dark: '다크',
    language: '언어',
    fontSize: '글자 크기',
    fontSizeSm: '작게',
    fontSizeMd: '보통',
    fontSizeLg: '크게',
    font: '폰트',
    motion: '모션',
    motionDefault: '기본',
    motionReduce: '줄이기',
    reset: '기본값으로 초기화',
  },
  en: {
    label: 'Settings',
    panel: 'Settings panel',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    language: 'Language',
    fontSize: 'Font Size',
    fontSizeSm: 'Small',
    fontSizeMd: 'Medium',
    fontSizeLg: 'Large',
    font: 'Font',
    motion: 'Motion',
    motionDefault: 'Default',
    motionReduce: 'Reduce',
    reset: 'Reset to defaults',
  },
};

const sectionLabelClass =
  'text-[10px] font-semiBold text-text-light uppercase tracking-wider mb-sm';

export const SettingsPopover = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { locale, setLocale } = useLocale();

  const handleLocaleChange = (next: 'ko' | 'en') => {
    setLocale(next);
    router.refresh();
  };
  const t = strings[(locale as 'ko' | 'en') ?? 'ko'];
  const { fontSize, setFontSize } = useFontSize();
  const { motion, setMotion } = useMotion();
  const { fontFamily, setFontFamily } = useFontFamily();

  const isDefault =
    resolvedTheme === 'light' &&
    locale === 'ko' &&
    fontSize === 'md' &&
    fontFamily === 'sans' &&
    motion === 'default';

  const resetAll = () => {
    setTheme('light');
    setFontSize('md');
    setFontFamily('sans');
    setMotion('default');
    handleLocaleChange('ko');
  };

  const themeOptions: SegmentOption<'light' | 'dark'>[] = [
    { value: 'light', label: t.light },
    { value: 'dark', label: t.dark },
  ];

  const localeOptions: SegmentOption<'ko' | 'en'>[] = [
    { value: 'ko', label: '한국어' },
    { value: 'en', label: 'English' },
  ];

  const fontSizeOptions: SegmentOption<FontSize>[] = [
    { value: 'sm', label: 'A', ariaLabel: t.fontSizeSm, className: 'text-xxsm' },
    { value: 'md', label: 'A', ariaLabel: t.fontSizeMd, className: 'text-xsm' },
    { value: 'lg', label: 'A', ariaLabel: t.fontSizeLg, className: 'text-sm' },
  ];

  const fontFamilyOptions: SegmentOption<FontFamily>[] = [
    { value: 'sans', label: 'Sans' },
    { value: 'serif', label: 'Serif' },
    { value: 'mono', label: 'Mono' },
  ];

  const motionOptions: SegmentOption<'default' | 'reduce'>[] = [
    { value: 'default', label: t.motionDefault },
    { value: 'reduce', label: t.motionReduce },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="relative">
        <PopoverTrigger>
          <button
            aria-label={t.label}
            className="w-9 h-9 flex items-center justify-center rounded-sm text-text-light hover:text-text-default hover:bg-background-grey/15 transition-colors"
          >
            <SettingsIcon />
          </button>
        </PopoverTrigger>

        <PopoverPanel
          aria-label={t.panel}
          className="absolute right-0 top-11 z-50 w-52 space-y-md text-xxsm"
        >
          <div>
            <p className={sectionLabelClass}>{t.theme}</p>
            <SegmentControl
              aria-label={t.theme}
              value={resolvedTheme}
              onChange={setTheme}
              options={themeOptions}
            />
          </div>

          <div>
            <p className={sectionLabelClass}>{t.language}</p>
            <SegmentControl
              aria-label={t.language}
              value={(locale as 'ko' | 'en') ?? 'ko'}
              onChange={handleLocaleChange}
              options={localeOptions}
            />
          </div>

          <div>
            <p className={sectionLabelClass}>{t.fontSize}</p>
            <SegmentControl
              aria-label={t.fontSize}
              value={fontSize}
              onChange={setFontSize}
              options={fontSizeOptions}
            />
          </div>

          <div>
            <p className={sectionLabelClass}>{t.font}</p>
            <SegmentControl
              aria-label={t.font}
              value={fontFamily}
              onChange={setFontFamily}
              options={fontFamilyOptions}
            />
          </div>

          <div>
            <p className={sectionLabelClass}>{t.motion}</p>
            <SegmentControl
              aria-label={t.motion}
              value={motion}
              onChange={setMotion}
              options={motionOptions}
            />
          </div>

          <div className="h-px bg-stroke-default" />

          <button
            onClick={resetAll}
            disabled={isDefault}
            className={cn(
              'w-full text-[10px] py-1.5 rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary',
              isDefault
                ? 'text-text-light/25 cursor-default'
                : 'text-text-light hover:text-text-default hover:bg-background-grey/15',
            )}
          >
            {t.reset}
          </button>
        </PopoverPanel>
      </div>
    </Popover>
  );
};
