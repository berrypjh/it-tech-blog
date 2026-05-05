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
  { value: 'sm', label: 'A', style: 'text-xs' },
  { value: 'md', label: 'A', style: 'text-sm' },
  { value: 'lg', label: 'A', style: 'text-base' },
];

const segmentBase =
  'flex-1 py-1.5 rounded text-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500';
const segmentActive = 'bg-emerald-500 text-white';
const segmentInactive = 'text-muted-foreground hover:text-foreground hover:bg-muted';

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
    resolvedTheme === 'light' && locale === 'ko' && fontSize === 'md' && fontFamily === 'sans' && motion === 'default';

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
        className="w-9 h-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      >
        <SettingsIcon />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={t.panel}
          className="absolute right-0 top-11 z-50 w-52 bg-background border border-border rounded-lg shadow-lg p-3 space-y-3"
        >
          {/* 테마 */}
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">{t.theme}</p>

            <div className="flex gap-1 bg-muted rounded p-0.5">
              <button
                onClick={() => setTheme('light')}
                aria-pressed={resolvedTheme === 'light'}
                className={cn(segmentBase, 'text-xs', resolvedTheme === 'light' ? segmentActive : segmentInactive)}
              >
                {t.light}
              </button>

              <button
                onClick={() => setTheme('dark')}
                aria-pressed={resolvedTheme === 'dark'}
                className={cn(segmentBase, 'text-xs', resolvedTheme === 'dark' ? segmentActive : segmentInactive)}
              >
                {t.dark}
              </button>
            </div>
          </div>

          {/* 언어 */}
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
              {t.language}
            </p>

            <div className="flex gap-1 bg-muted rounded p-0.5">
              <button
                onClick={() => handleLocaleChange('ko')}
                aria-pressed={locale === 'ko'}
                className={cn(segmentBase, 'text-xs', locale === 'ko' ? segmentActive : segmentInactive)}
              >
                한국어
              </button>

              <button
                onClick={() => handleLocaleChange('en')}
                aria-pressed={locale === 'en'}
                className={cn(segmentBase, 'text-xs', locale === 'en' ? segmentActive : segmentInactive)}
              >
                English
              </button>
            </div>
          </div>

          {/* 글자 크기 */}
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
              {t.fontSize}
            </p>

            <div className="flex gap-1 bg-muted rounded p-0.5">
              {fontSizeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFontSize(opt.value)}
                  aria-pressed={fontSize === opt.value}
                  aria-label={opt.value === 'sm' ? t.fontSizeSm : opt.value === 'md' ? t.fontSizeMd : t.fontSizeLg}
                  className={cn(segmentBase, opt.style, fontSize === opt.value ? segmentActive : segmentInactive)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 폰트 */}
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">{t.font}</p>

            <div className="flex gap-1 bg-muted rounded p-0.5">
              {(['sans', 'serif', 'mono'] as FontFamily[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFontFamily(f)}
                  aria-pressed={fontFamily === f}
                  className={cn(segmentBase, 'text-xs', fontFamily === f ? segmentActive : segmentInactive)}
                >
                  {f === 'sans' ? 'Sans' : f === 'serif' ? 'Serif' : 'Mono'}
                </button>
              ))}
            </div>
          </div>

          {/* 모션 */}
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
              {t.motion}
            </p>

            <div className="flex gap-1 bg-muted rounded p-0.5">
              <button
                onClick={() => setMotion('default')}
                aria-pressed={motion === 'default'}
                className={cn(segmentBase, 'text-xs', motion === 'default' ? segmentActive : segmentInactive)}
              >
                {t.motionDefault}
              </button>

              <button
                onClick={() => setMotion('reduce')}
                aria-pressed={motion === 'reduce'}
                className={cn(segmentBase, 'text-xs', motion === 'reduce' ? segmentActive : segmentInactive)}
              >
                {t.motionReduce}
              </button>
            </div>
          </div>

          <div className="h-px bg-border" />

          <button
            onClick={resetAll}
            disabled={isDefault}
            className={cn(
              'w-full text-[10px] py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
              isDefault
                ? 'text-muted-foreground/25 cursor-default'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted',
            )}
          >
            {t.reset}
          </button>
        </div>
      )}
    </div>
  );
};
