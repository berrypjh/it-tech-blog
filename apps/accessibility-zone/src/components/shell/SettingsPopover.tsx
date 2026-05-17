'use client';

import { useEffect, useRef, useState } from 'react';
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

const fontSizeOptions: { value: FontSize; label: string; style: string }[] = [
  { value: 'sm', label: 'A', style: 'text-xxsm' },
  { value: 'md', label: 'A', style: 'text-xsm' },
  { value: 'lg', label: 'A', style: 'text-sm' },
];

const segmentBase =
  'flex-1 py-1.5 rounded-xs text-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary';
const segmentActive = 'bg-background-primary text-text-contrastText';
const segmentInactive = 'text-text-light hover:text-text-default hover:bg-background-grey/15';

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
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t.label}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="w-9 h-9 flex items-center justify-center rounded-sm text-text-light hover:text-text-default hover:bg-background-grey/15 transition-colors"
      >
        <SettingsIcon />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={t.panel}
          className="absolute right-0 top-11 z-50 w-52 bg-background-surface border border-stroke-default rounded-md shadow-lg p-sml space-y-sml"
        >
          {/* 테마 */}
          <div>
            <p className="text-[10px] font-semiBold text-text-light uppercase tracking-wider mb-xsm">
              {t.theme}
            </p>

            <div className="flex gap-xxsm bg-background-grey/15 rounded-xs p-0.5">
              <button
                onClick={() => setTheme('light')}
                aria-pressed={resolvedTheme === 'light'}
                className={cn(
                  segmentBase,
                  'text-xxsm',
                  resolvedTheme === 'light' ? segmentActive : segmentInactive,
                )}
              >
                {t.light}
              </button>

              <button
                onClick={() => setTheme('dark')}
                aria-pressed={resolvedTheme === 'dark'}
                className={cn(
                  segmentBase,
                  'text-xxsm',
                  resolvedTheme === 'dark' ? segmentActive : segmentInactive,
                )}
              >
                {t.dark}
              </button>
            </div>
          </div>

          {/* 언어 */}
          <div>
            <p className="text-[10px] font-semiBold text-text-light uppercase tracking-wider mb-xsm">
              {t.language}
            </p>

            <div className="flex gap-xxsm bg-background-grey/15 rounded-xs p-0.5">
              <button
                onClick={() => handleLocaleChange('ko')}
                aria-pressed={locale === 'ko'}
                className={cn(
                  segmentBase,
                  'text-xxsm',
                  locale === 'ko' ? segmentActive : segmentInactive,
                )}
              >
                한국어
              </button>

              <button
                onClick={() => handleLocaleChange('en')}
                aria-pressed={locale === 'en'}
                className={cn(
                  segmentBase,
                  'text-xxsm',
                  locale === 'en' ? segmentActive : segmentInactive,
                )}
              >
                English
              </button>
            </div>
          </div>

          {/* 글자 크기 */}
          <div>
            <p className="text-[10px] font-semiBold text-text-light uppercase tracking-wider mb-xsm">
              {t.fontSize}
            </p>

            <div className="flex gap-xxsm bg-background-grey/15 rounded-xs p-0.5">
              {fontSizeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFontSize(opt.value)}
                  aria-pressed={fontSize === opt.value}
                  aria-label={
                    opt.value === 'sm'
                      ? t.fontSizeSm
                      : opt.value === 'md'
                        ? t.fontSizeMd
                        : t.fontSizeLg
                  }
                  className={cn(
                    segmentBase,
                    opt.style,
                    fontSize === opt.value ? segmentActive : segmentInactive,
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 폰트 */}
          <div>
            <p className="text-[10px] font-semiBold text-text-light uppercase tracking-wider mb-xsm">
              {t.font}
            </p>

            <div className="flex gap-xxsm bg-background-grey/15 rounded-xs p-0.5">
              {(['sans', 'serif', 'mono'] as FontFamily[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFontFamily(f)}
                  aria-pressed={fontFamily === f}
                  className={cn(
                    segmentBase,
                    'text-xxsm',
                    fontFamily === f ? segmentActive : segmentInactive,
                  )}
                >
                  {f === 'sans' ? 'Sans' : f === 'serif' ? 'Serif' : 'Mono'}
                </button>
              ))}
            </div>
          </div>

          {/* 모션 */}
          <div>
            <p className="text-[10px] font-semiBold text-text-light uppercase tracking-wider mb-xsm">
              {t.motion}
            </p>

            <div className="flex gap-xxsm bg-background-grey/15 rounded-xs p-0.5">
              <button
                onClick={() => setMotion('default')}
                aria-pressed={motion === 'default'}
                className={cn(
                  segmentBase,
                  'text-xxsm',
                  motion === 'default' ? segmentActive : segmentInactive,
                )}
              >
                {t.motionDefault}
              </button>

              <button
                onClick={() => setMotion('reduce')}
                aria-pressed={motion === 'reduce'}
                className={cn(
                  segmentBase,
                  'text-xxsm',
                  motion === 'reduce' ? segmentActive : segmentInactive,
                )}
              >
                {t.motionReduce}
              </button>
            </div>
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
        </div>
      )}
    </div>
  );
};
