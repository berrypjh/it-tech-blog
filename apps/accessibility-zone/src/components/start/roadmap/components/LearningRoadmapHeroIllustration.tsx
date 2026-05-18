import { cn } from '@it-tech-blog/utils';

import type { RoadmapContent } from '../content';

const ChecklistChipIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 9l2 2 4-4M8 16h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ImageChipIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="2" />
    <path d="M3 17l5-4 6 4 4-3 3 2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const GridChipIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
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
  tone: 'primary' | 'secondary' | 'success' | 'warning';
}) => {
  const toneClass =
    tone === 'primary'
      ? 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40'
      : tone === 'secondary'
        ? 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40'
        : tone === 'success'
          ? 'bg-success-su100 text-text-success dark:bg-success-su900/40'
          : 'bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40';
  return (
    <div
      className={cn(
        'absolute z-10 flex items-center gap-1.5 rounded-lg border border-stroke-light bg-background-surface px-2 py-1.5 text-[0.625rem] font-semiBold shadow-md sm:gap-2 sm:text-xxsm',
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

const WheelchairLearner = () => (
  <svg viewBox="0 0 80 90" width="74" height="84" fill="none" aria-hidden="true">
    <circle cx="34" cy="14" r="8" fill="rgb(var(--ds-primary-pr300-rgb))" />
    <path d="M26 22h14l4 18-10 4-10-4z" fill="rgb(var(--ds-primary-pr500-rgb))" />
    <circle
      cx="26"
      cy="68"
      r="14"
      fill="none"
      stroke="rgb(var(--ds-neutral-ne500-rgb))"
      strokeWidth="3"
    />
    <circle cx="26" cy="68" r="3" fill="rgb(var(--ds-neutral-ne600-rgb))" />
    <path
      d="M44 38h6l3 16"
      stroke="rgb(var(--ds-neutral-ne600-rgb))"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle
      cx="54"
      cy="70"
      r="6"
      fill="none"
      stroke="rgb(var(--ds-neutral-ne500-rgb))"
      strokeWidth="2.5"
    />
    <rect x="44" y="20" width="22" height="16" rx="2" fill="rgb(var(--ds-neutral-ne800-rgb))" />
    <rect x="46" y="22" width="18" height="12" rx="1" fill="rgb(var(--ds-primary-pr200-rgb))" />
  </svg>
);

const StandingLearner = () => (
  <svg viewBox="0 0 70 100" width="62" height="92" fill="none" aria-hidden="true">
    <circle cx="34" cy="18" r="10" fill="rgb(var(--ds-success-su300-rgb))" />
    <path d="M20 30h28l4 32H16z" fill="rgb(var(--ds-success-su500-rgb))" />
    <rect x="44" y="40" width="22" height="16" rx="2" fill="rgb(var(--ds-neutral-ne800-rgb))" />
    <rect x="46" y="42" width="18" height="12" rx="1" fill="rgb(var(--ds-primary-pr200-rgb))" />
    <rect x="22" y="64" width="10" height="30" rx="2" fill="rgb(var(--ds-neutral-ne700-rgb))" />
    <rect x="36" y="64" width="10" height="30" rx="2" fill="rgb(var(--ds-neutral-ne700-rgb))" />
  </svg>
);

const SittingLearner = () => (
  <svg viewBox="0 0 80 80" width="72" height="74" fill="none" aria-hidden="true">
    <circle cx="32" cy="16" r="9" fill="rgb(var(--ds-warning-wa300-rgb))" />
    <path d="M18 28h28l4 26H14z" fill="rgb(var(--ds-warning-wa500-rgb))" />
    <rect x="44" y="50" width="32" height="14" rx="2" fill="rgb(var(--ds-neutral-ne600-rgb))" />
    <rect x="46" y="40" width="28" height="14" rx="1" fill="rgb(var(--ds-neutral-ne400-rgb))" />
    <rect x="48" y="42" width="24" height="10" rx="0.5" fill="rgb(var(--ds-primary-pr200-rgb))" />
    <rect x="10" y="56" width="30" height="6" rx="1.5" fill="rgb(var(--ds-neutral-ne700-rgb))" />
  </svg>
);

const RoadmapPath = () => (
  <svg
    viewBox="0 0 480 360"
    className="absolute inset-0 h-full w-full"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="roadmap-path-grad" x1="0" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgb(var(--ds-primary-pr300-rgb))" />
        <stop offset="100%" stopColor="rgb(var(--ds-secondary-se300-rgb))" />
      </linearGradient>
    </defs>
    <path
      d="M60 320 C 140 300 100 220 200 200 C 290 184 220 100 380 70"
      stroke="url(#roadmap-path-grad)"
      strokeWidth="22"
      strokeLinecap="round"
      fill="none"
      opacity="0.65"
    />
    <path
      d="M60 320 C 140 300 100 220 200 200 C 290 184 220 100 380 70"
      stroke="rgb(var(--ds-background-surface-rgb))"
      strokeWidth="2.5"
      strokeDasharray="6 8"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="60" cy="320" r="7" fill="rgb(var(--ds-primary-pr500-rgb))" />
    <circle cx="200" cy="200" r="7" fill="rgb(var(--ds-secondary-se500-rgb))" />
    <g transform="translate(380, 70)">
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="-32"
        stroke="rgb(var(--ds-neutral-ne600-rgb))"
        strokeWidth="2.5"
      />
      <path d="M0 -32 L18 -24 L0 -16 Z" fill="rgb(var(--ds-error-er400-rgb))" />
    </g>
  </svg>
);

export const LearningRoadmapHeroIllustration = ({ hero }: { hero: RoadmapContent['hero'] }) => {
  return (
    <div
      role="img"
      aria-label={hero.illustrationLabel}
      className="relative isolate mx-auto aspect-[5/4] w-full max-w-[560px]"
    >
      <div
        className="absolute inset-0 -z-10 rounded-rounded bg-gradient-to-br from-primary-pr100/60 via-secondary-se100/40 to-success-su100/40 blur-3xl"
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 -z-10 h-full w-full text-stroke-default/25"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-roadmap-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-roadmap-dots)" />
      </svg>

      <RoadmapPath />

      <FloatingChip
        icon={<ChecklistChipIcon />}
        label={hero.floatingChips.checklist}
        tone="primary"
        className="left-[6%] top-[18%]"
      />
      <FloatingChip
        icon={<ImageChipIcon />}
        label={hero.floatingChips.thumb}
        tone="secondary"
        className="left-[44%] top-[8%]"
      />
      <FloatingChip
        icon={
          <span className="text-[0.75rem] font-extraBold leading-none text-text-warning">Aa</span>
        }
        label={hero.floatingChips.typography}
        tone="warning"
        className="right-[6%] top-[20%]"
      />
      <FloatingChip
        icon={<GridChipIcon />}
        label={hero.floatingChips.grid}
        tone="success"
        className="right-[24%] top-[44%]"
      />

      <div
        className="absolute bottom-[2%] left-[2%]"
        title={hero.userLabels.wheelchair}
        aria-hidden="true"
      >
        <WheelchairLearner />
      </div>
      <div
        className="absolute bottom-[4%] left-1/2 -translate-x-1/2"
        title={hero.userLabels.standing}
        aria-hidden="true"
      >
        <StandingLearner />
      </div>
      <div
        className="absolute bottom-[2%] right-[2%]"
        title={hero.userLabels.sitting}
        aria-hidden="true"
      >
        <SittingLearner />
      </div>

      <div
        className="absolute inset-x-[6%] bottom-1 h-1.5 rounded-full bg-gradient-to-r from-transparent via-stroke-default/40 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
};
