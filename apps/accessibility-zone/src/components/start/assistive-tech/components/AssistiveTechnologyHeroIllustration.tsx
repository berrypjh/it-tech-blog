import { cn } from '@it-tech-blog/utils';

import type { AssistiveTechContent } from '../content';

const SpeakerIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path
      d="M15.5 8.5a5 5 0 010 7M19 5a9 9 0 010 14"
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

const MagnifierPlusIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 11h4M11 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MicIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M5 11a7 7 0 0014 0M12 18v3M9 21h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SwitchIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
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
  tone: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
}) => {
  const toneClass =
    tone === 'primary'
      ? 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40'
      : tone === 'secondary'
        ? 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40'
        : tone === 'success'
          ? 'bg-success-su100 text-text-success dark:bg-success-su900/40'
          : tone === 'warning'
            ? 'bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40'
            : 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40';
  return (
    <div
      className={cn(
        'absolute z-10 flex flex-col items-center gap-1 rounded-lg border border-stroke-light bg-background-surface px-2 py-1.5 text-[0.5625rem] font-semiBold shadow-md sm:text-[0.625rem]',
        className,
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          'flex h-6 w-6 items-center justify-center rounded-md sm:h-7 sm:w-7',
          toneClass,
        )}
      >
        {icon}
      </span>
      <span className="whitespace-nowrap text-text-default">{label}</span>
    </div>
  );
};

const WavingUser = () => (
  <svg viewBox="0 0 70 100" width="64" height="92" fill="none" aria-hidden="true">
    <circle cx="32" cy="20" r="10" fill="rgb(var(--ds-success-su300-rgb))" />
    <path d="M18 32h28l6 38H12z" fill="rgb(var(--ds-success-su500-rgb))" />
    <path
      d="M52 38c4-2 8-8 6-14"
      stroke="rgb(var(--ds-success-su700-rgb))"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="55" cy="22" r="4" fill="rgb(var(--ds-success-su300-rgb))" />
    <rect x="6" y="46" width="14" height="20" rx="2" fill="rgb(var(--ds-neutral-ne800-rgb))" />
    <rect x="8" y="48" width="10" height="14" rx="1" fill="rgb(var(--ds-primary-pr200-rgb))" />
  </svg>
);

const SunglassesLaptopUser = () => (
  <svg viewBox="0 0 80 100" width="72" height="92" fill="none" aria-hidden="true">
    <circle cx="40" cy="22" r="11" fill="rgb(var(--ds-primary-pr300-rgb))" />
    <rect x="29" y="20" width="22" height="5" rx="2" fill="rgb(var(--ds-neutral-ne800-rgb))" />
    <rect x="29" y="20" width="9" height="5" rx="1" fill="rgb(var(--ds-neutral-ne900-rgb))" />
    <rect x="42" y="20" width="9" height="5" rx="1" fill="rgb(var(--ds-neutral-ne900-rgb))" />
    <path d="M20 34h40l4 30H16z" fill="rgb(var(--ds-primary-pr500-rgb))" />
    <rect x="8" y="62" width="64" height="14" rx="2" fill="rgb(var(--ds-neutral-ne600-rgb))" />
    <rect x="12" y="50" width="56" height="14" rx="1" fill="rgb(var(--ds-neutral-ne400-rgb))" />
    <rect x="16" y="52" width="48" height="10" rx="0.5" fill="rgb(var(--ds-primary-pr200-rgb))" />
  </svg>
);

const PhoneUser = () => (
  <svg viewBox="0 0 70 100" width="60" height="92" fill="none" aria-hidden="true">
    <circle cx="36" cy="22" r="10" fill="rgb(var(--ds-warning-wa300-rgb))" />
    <path d="M22 34h28l4 32H18z" fill="rgb(var(--ds-warning-wa500-rgb))" />
    <rect x="40" y="42" width="14" height="22" rx="2" fill="rgb(var(--ds-neutral-ne800-rgb))" />
    <rect x="42" y="44" width="10" height="16" rx="0.5" fill="rgb(var(--ds-primary-pr200-rgb))" />
    <circle cx="47" cy="62" r="1" fill="rgb(var(--ds-neutral-ne500-rgb))" />
  </svg>
);

const WheelchairTabletUser = () => (
  <svg viewBox="0 0 90 100" width="82" height="92" fill="none" aria-hidden="true">
    <circle cx="38" cy="20" r="10" fill="rgb(var(--ds-secondary-se300-rgb))" />
    <path d="M28 30h20l6 24-14 4-12-4z" fill="rgb(var(--ds-secondary-se500-rgb))" />
    <circle
      cx="30"
      cy="78"
      r="14"
      fill="none"
      stroke="rgb(var(--ds-neutral-ne500-rgb))"
      strokeWidth="3"
    />
    <circle cx="30" cy="78" r="3" fill="rgb(var(--ds-neutral-ne600-rgb))" />
    <path
      d="M52 56h8l4 20"
      stroke="rgb(var(--ds-neutral-ne600-rgb))"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <circle
      cx="62"
      cy="80"
      r="6"
      fill="none"
      stroke="rgb(var(--ds-neutral-ne500-rgb))"
      strokeWidth="2.5"
    />
    <rect x="56" y="34" width="22" height="16" rx="2" fill="rgb(var(--ds-neutral-ne800-rgb))" />
    <rect x="58" y="36" width="18" height="12" rx="1" fill="rgb(var(--ds-primary-pr200-rgb))" />
  </svg>
);

export const AssistiveTechnologyHeroIllustration = ({
  hero,
}: {
  hero: AssistiveTechContent['hero'];
}) => {
  return (
    <div
      role="img"
      aria-label={hero.illustrationLabel}
      className="relative isolate mx-auto aspect-[5/4] w-full max-w-[560px]"
    >
      <div
        className="absolute left-1/2 top-[10%] -z-10 h-[80%] w-[92%] -translate-x-1/2 rounded-rounded bg-gradient-to-b from-primary-pr100/60 via-secondary-se100/40 to-transparent blur-2xl"
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 -z-10 h-full w-full text-stroke-default/25"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-at-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-at-dots)" />
      </svg>

      <FloatingChip
        icon={<SpeakerIcon />}
        label={hero.floatingChips.screenReader}
        tone="primary"
        className="left-[8%] top-[2%]"
      />
      <FloatingChip
        icon={<KeyboardIcon />}
        label={hero.floatingChips.keyboard}
        tone="secondary"
        className="left-1/2 top-0 -translate-x-1/2"
      />
      <FloatingChip
        icon={<MagnifierPlusIcon />}
        label={hero.floatingChips.magnification}
        tone="warning"
        className="right-[6%] top-[4%]"
      />
      <FloatingChip
        icon={<MicIcon />}
        label={hero.floatingChips.voice}
        tone="success"
        className="left-[2%] top-[42%]"
      />
      <FloatingChip
        icon={<SwitchIcon />}
        label={hero.floatingChips.switchInput}
        tone="info"
        className="right-[2%] top-[42%]"
      />

      <div className="absolute inset-x-0 bottom-0 h-[58%]">
        <div
          className="absolute bottom-[6%] left-[6%]"
          title={hero.avatarLabels.waving}
          aria-hidden="true"
        >
          <WavingUser />
        </div>
        <div
          className="absolute bottom-[6%] left-[28%]"
          title={hero.avatarLabels.sunglassesLaptop}
          aria-hidden="true"
        >
          <SunglassesLaptopUser />
        </div>
        <div
          className="absolute bottom-[6%] left-[54%]"
          title={hero.avatarLabels.phone}
          aria-hidden="true"
        >
          <PhoneUser />
        </div>
        <div
          className="absolute bottom-[6%] right-[4%]"
          title={hero.avatarLabels.wheelchairTablet}
          aria-hidden="true"
        >
          <WheelchairTabletUser />
        </div>
        <div
          className="absolute inset-x-[4%] bottom-2 h-1.5 rounded-full bg-gradient-to-r from-transparent via-stroke-default/40 to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
