import { cn } from '@it-tech-blog/utils';

import type { ImportanceContent } from '../content';

type Props = {
  hero: ImportanceContent['hero'];
};

const CaptionsIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M10 11.5a2 2 0 10-1 3.5M16.5 11.5a2 2 0 10-1 3.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const KeyboardIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ContrastIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 3v18a9 9 0 000-18z" fill="currentColor" />
  </svg>
);

const TouchIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M9 11V7a3 3 0 116 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M6 13a3 3 0 016 0v1l3 1a4 4 0 013 4v3H9l-3-4-1-2a2 2 0 012-3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const BigCheckBadge = ({ label }: { label: string }) => (
  <div
    className="absolute -right-2 -top-3 z-20 flex items-center gap-1.5 rounded-rounded border border-stroke-success/40 bg-background-surface px-2 py-1 text-[0.625rem] font-bold text-text-success shadow-md sm:-right-4 sm:-top-4 sm:px-2.5 sm:py-1.5 sm:text-xxsm"
    aria-hidden="true"
  >
    <span className="flex h-6 w-6 items-center justify-center rounded-rounded bg-success-su100 text-text-success dark:bg-success-su900/40 sm:h-7 sm:w-7">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path
          d="M5 12l4 4L19 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="whitespace-nowrap">{label}</span>
  </div>
);

const FloatingChip = ({
  icon,
  label,
  className,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  tone: 'primary' | 'secondary' | 'success' | 'warning';
}) => {
  const toneClass =
    tone === 'primary'
      ? 'text-text-primary bg-primary-pr100 dark:bg-primary-pr900/40'
      : tone === 'secondary'
        ? 'text-text-secondary bg-secondary-se100 dark:bg-secondary-se900/40'
        : tone === 'success'
          ? 'text-text-success bg-success-su100 dark:bg-success-su900/40'
          : 'text-text-warning bg-warning-wa100 dark:bg-warning-wa900/40';
  return (
    <div
      className={cn(
        'absolute z-10 flex flex-col items-center gap-1 rounded-lg border border-stroke-light bg-background-surface px-2 py-2 text-[0.625rem] font-semiBold shadow-md backdrop-blur-sm sm:px-2.5 sm:py-2.5 sm:text-xxsm',
        className,
      )}
    >
      <span
        className={cn(
          'flex h-7 w-7 items-center justify-center rounded-md sm:h-8 sm:w-8',
          toneClass,
        )}
      >
        {icon}
      </span>
      <span className="whitespace-nowrap text-text-default">{label}</span>
    </div>
  );
};

const BrowserMockup = ({ browser }: { browser: ImportanceContent['hero']['browser'] }) => (
  <div className="relative w-full overflow-hidden rounded-xl border border-stroke-light bg-background-surface shadow-md">
    <div className="flex items-center gap-1.5 bg-background-primary px-3 py-2">
      <span className="inline-block h-2.5 w-2.5 rounded-rounded bg-background-surface/40" />
      <span className="inline-block h-2.5 w-2.5 rounded-rounded bg-background-surface/40" />
      <span className="inline-block h-2.5 w-2.5 rounded-rounded bg-background-surface/40" />
      <span className="ml-2 flex-1 truncate rounded-md bg-background-surface/20 px-2 py-0.5 text-[0.625rem] font-medium text-text-contrastText/90">
        {browser.url}
      </span>
    </div>

    <div className="space-y-2 p-3 sm:p-4">
      <div className="flex items-center gap-2">
        <div className="h-2 flex-1 rounded-rounded bg-stroke-default/60" />
        <span className="rounded-rounded bg-success-su100 px-1.5 py-0.5 text-[0.5625rem] font-bold text-text-success dark:bg-success-su900/40">
          {browser.verifiedBadge}
        </span>
      </div>
      <div className="flex gap-2.5">
        <div className="h-12 w-12 shrink-0 rounded-md bg-primary-pr200/70 sm:h-14 sm:w-14" />
        <div className="flex flex-1 flex-col justify-center gap-1.5">
          <div className="text-[0.6875rem] font-bold text-text-default">{browser.headline}</div>
          <div className="h-1.5 w-full rounded-rounded bg-stroke-default/60" />
          <div className="h-1.5 w-3/4 rounded-rounded bg-stroke-default/50" />
        </div>
      </div>
      <div className="flex gap-2 pt-1">
        <div className="h-6 flex-1 rounded-md bg-background-primary/90" />
        <div className="h-6 w-16 rounded-md border border-stroke-default bg-background-surface" />
      </div>
    </div>
  </div>
);

export const ImportanceHeroIllustration = ({ hero }: Props) => {
  return (
    <div
      role="img"
      aria-label={hero.illustrationLabel}
      className="relative isolate mx-auto aspect-[4/3] w-full max-w-[520px]"
    >
      <div
        className="absolute -left-8 -top-8 -z-10 h-48 w-48 rounded-rounded bg-primary-pr100/60 blur-3xl dark:bg-primary-pr900/30"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-6 -right-6 -z-10 h-52 w-52 rounded-rounded bg-secondary-se100/60 blur-3xl dark:bg-secondary-se900/30"
        aria-hidden="true"
      />

      <svg
        className="absolute inset-0 -z-10 h-full w-full text-stroke-default/30"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-why-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-why-dots)" />
      </svg>

      <div className="absolute left-1/2 top-1/2 w-[74%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <BrowserMockup browser={hero.browser} />
          <BigCheckBadge label={hero.browser.verifiedBadge} />
        </div>
      </div>

      <FloatingChip
        icon={<CaptionsIcon />}
        label={hero.floatingChips.captions}
        tone="primary"
        className="left-0 top-4 sm:left-2 sm:top-6"
      />
      <FloatingChip
        icon={<ContrastIcon />}
        label={hero.floatingChips.contrast}
        tone="warning"
        className="right-0 top-4 sm:right-2 sm:top-6"
      />
      <FloatingChip
        icon={<KeyboardIcon />}
        label={hero.floatingChips.keyboard}
        tone="secondary"
        className="bottom-4 left-0 sm:bottom-6 sm:left-2"
      />
      <FloatingChip
        icon={<TouchIcon />}
        label={hero.floatingChips.touch}
        tone="success"
        className="bottom-4 right-0 sm:bottom-6 sm:right-2"
      />
    </div>
  );
};
