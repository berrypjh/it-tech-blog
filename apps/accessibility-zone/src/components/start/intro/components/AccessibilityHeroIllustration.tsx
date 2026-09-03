import { cn } from '@it-tech-blog/utils';

import { ALargeSmall, Captions, Check, Contrast, Keyboard, Volume2 } from 'lucide-react';

import type { IntroContent } from '../content';

type Props = {
  badges: IntroContent['hero']['badges'];
  browser: IntroContent['hero']['browser'];
  illustrationLabel: string;
};

const FloatingChip = ({
  icon,
  label,
  className,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  tone: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}) => {
  const toneClass =
    tone === 'primary'
      ? 'text-text-primary bg-primary-pr100/80 dark:bg-primary-pr900/40'
      : tone === 'secondary'
        ? 'text-text-secondary bg-secondary-se100/80 dark:bg-secondary-se900/40'
        : tone === 'success'
          ? 'text-text-success bg-success-su100/80 dark:bg-success-su900/40'
          : tone === 'warning'
            ? 'text-text-warning bg-warning-wa100/80 dark:bg-warning-wa900/40'
            : 'text-text-error bg-error-er100/80 dark:bg-error-er900/40';
  return (
    <div
      className={cn(
        'absolute flex items-center gap-1.5 rounded-lg border border-stroke-light bg-background-surface px-2 py-1.5 text-[0.625rem] font-semiBold shadow-sm backdrop-blur-sm sm:gap-2 sm:px-2.5 sm:py-2 sm:text-xxsm',
        className,
      )}
    >
      <span
        className={cn(
          'flex h-5 w-5 items-center justify-center rounded-full sm:h-6 sm:w-6',
          toneClass,
        )}
      >
        {icon}
      </span>
      <span className="whitespace-nowrap text-text-default">{label}</span>
    </div>
  );
};

export const AccessibilityHeroIllustration = ({ badges, browser, illustrationLabel }: Props) => {
  return (
    <div
      role="img"
      aria-label={illustrationLabel}
      className="relative isolate mx-auto aspect-[3/2] w-full max-w-[560px]"
    >
      {/* soft background blobs */}
      <div
        className="absolute -left-6 -top-4 -z-10 h-40 w-40 rounded-rounded bg-primary-pr100/60 blur-2xl dark:bg-primary-pr900/30"
        aria-hidden="true"
      />
      <div
        className="absolute -right-2 bottom-10 -z-10 h-44 w-44 rounded-rounded bg-secondary-se100/60 blur-2xl dark:bg-secondary-se900/30"
        aria-hidden="true"
      />

      {/* dotted backdrop */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full text-stroke-default/40"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* browser mockup */}
      <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-stroke-light bg-background-surface shadow-md">
        {/* toolbar */}
        <div className="flex items-center gap-2 bg-background-primary px-3 py-2">
          <span
            className="inline-block h-2.5 w-2.5 rounded-rounded bg-background-surface/40"
            aria-hidden="true"
          />
          <span
            className="inline-block h-2.5 w-2.5 rounded-rounded bg-background-surface/40"
            aria-hidden="true"
          />
          <span
            className="inline-block h-2.5 w-2.5 rounded-rounded bg-background-surface/40"
            aria-hidden="true"
          />
          <span className="ml-3 flex-1 truncate rounded-md bg-background-surface/20 px-2 py-0.5 text-[0.625rem] font-medium text-text-contrastText/90">
            {browser.url}
          </span>
        </div>

        {/* page content */}
        <div className="flex gap-3 p-3 sm:p-4">
          {/* thumbnail */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-secondary-se100 dark:bg-secondary-se900/40 sm:h-20 sm:w-20">
            <svg
              viewBox="0 0 80 80"
              className="h-full w-full text-text-secondary"
              aria-hidden="true"
            >
              <path
                d="M0 60 L20 40 L34 52 L50 30 L80 62 V80 H0 Z"
                fill="currentColor"
                opacity="0.6"
              />
              <circle cx="58" cy="22" r="8" fill="currentColor" opacity="0.7" />
            </svg>
          </div>

          {/* text lines */}
          <div className="flex flex-1 flex-col justify-center gap-1.5">
            <div className="text-[0.6875rem] font-bold text-text-default">{browser.heading}</div>
            {browser.lines.map((line, i) => (
              <div
                key={i}
                className="h-1.5 rounded-rounded bg-stroke-default/60"
                style={{ width: `${100 - i * 12}%` }}
                aria-hidden="true"
              />
            ))}
            <span className="sr-only">{browser.lines.join(' ')}</span>
          </div>
        </div>

        {/* footer check badge */}
        <div className="flex justify-end px-3 pb-3 sm:px-4 sm:pb-4">
          <span className="inline-flex items-center gap-1 rounded-rounded bg-success-su100 px-1.5 py-1 text-[0.625rem] font-semiBold text-text-success">
            <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
            {browser.checkLabel}
          </span>
        </div>
      </div>

      {/* floating chips */}
      <FloatingChip
        icon={<Volume2 className="h-3.5 w-3.5" aria-hidden="true" />}
        label={badges.screenReader}
        tone="primary"
        className="left-0 top-2 sm:left-2"
      />
      <FloatingChip
        icon={<Keyboard className="h-3.5 w-3.5" aria-hidden="true" />}
        label={badges.keyboard}
        tone="secondary"
        className="left-1/2 top-0 -translate-x-1/2"
      />
      <FloatingChip
        icon={<Captions className="h-3.5 w-3.5" aria-hidden="true" />}
        label={badges.captions}
        tone="warning"
        className="right-0 top-4 sm:right-2"
      />
      <FloatingChip
        icon={<Contrast className="h-3.5 w-3.5" aria-hidden="true" />}
        label={badges.contrast}
        tone="success"
        className="bottom-2 left-0 sm:left-2"
      />
      <FloatingChip
        icon={<ALargeSmall className="h-3.5 w-3.5" aria-hidden="true" />}
        label={badges.fontSize}
        tone="error"
        className="bottom-4 right-0 sm:right-2"
      />
    </div>
  );
};
