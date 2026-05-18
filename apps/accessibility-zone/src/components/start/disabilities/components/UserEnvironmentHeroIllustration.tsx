import { cn } from '@it-tech-blog/utils';

import type { DisabilitiesContent } from '../content';

type Props = {
  hero: DisabilitiesContent['hero'];
};

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const EarIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M7 11a5 5 0 0110 0c0 2-1 3-3 4s-2 2-2 4a2 2 0 01-4 0c0-4-1-4-1-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
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
        'absolute z-10 flex h-12 w-12 flex-col items-center justify-center gap-0 rounded-rounded border border-stroke-light bg-background-surface text-[0.5625rem] font-bold shadow-md sm:h-14 sm:w-14 sm:text-[0.625rem]',
        className,
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          'flex h-6 w-6 items-center justify-center rounded-rounded sm:h-7 sm:w-7',
          toneClass,
        )}
      >
        {icon}
      </span>
      <span className="mt-0.5 text-text-default">{label}</span>
    </div>
  );
};

const PhoneUser = () => (
  <svg viewBox="0 0 56 90" width="56" height="90" fill="none" aria-hidden="true">
    <circle cx="28" cy="18" r="9" fill="rgb(var(--ds-success-su300-rgb))" />
    <rect x="22" y="14" width="14" height="5" rx="2.5" fill="rgb(var(--ds-neutral-ne700-rgb))" />
    <path d="M16 30h24l4 32H12z" fill="rgb(var(--ds-success-su500-rgb))" />
    <rect x="32" y="40" width="12" height="20" rx="2" fill="rgb(var(--ds-neutral-ne800-rgb))" />
    <rect x="34" y="42" width="8" height="14" rx="0.5" fill="rgb(var(--ds-primary-pr200-rgb))" />
    <rect x="6" y="58" width="44" height="14" rx="3" fill="rgb(var(--ds-neutral-ne600-rgb))" />
  </svg>
);

const LaptopUser = () => (
  <svg viewBox="0 0 70 90" width="70" height="90" fill="none" aria-hidden="true">
    <circle cx="35" cy="18" r="9" fill="rgb(var(--ds-secondary-se200-rgb))" />
    <path d="M18 30h34l4 28H14z" fill="rgb(var(--ds-secondary-se400-rgb))" />
    <rect x="10" y="56" width="50" height="12" rx="1" fill="rgb(var(--ds-neutral-ne400-rgb))" />
    <rect x="6" y="68" width="58" height="6" rx="1" fill="rgb(var(--ds-neutral-ne600-rgb))" />
    <rect x="16" y="59" width="38" height="6" rx="0.5" fill="rgb(var(--ds-primary-pr400-rgb))" />
  </svg>
);

const WheelchairUser = () => (
  <svg viewBox="0 0 80 90" width="80" height="90" fill="none" aria-hidden="true">
    <circle cx="34" cy="14" r="8" fill="rgb(var(--ds-primary-pr300-rgb))" />
    <path d="M28 22h12l6 22-12 4-10-4z" fill="rgb(var(--ds-primary-pr500-rgb))" />
    <circle
      cx="28"
      cy="70"
      r="14"
      fill="none"
      stroke="rgb(var(--ds-neutral-ne500-rgb))"
      strokeWidth="3"
    />
    <circle cx="28" cy="70" r="3" fill="rgb(var(--ds-neutral-ne600-rgb))" />
    <path
      d="M44 44h8l5 18"
      stroke="rgb(var(--ds-neutral-ne600-rgb))"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle
      cx="56"
      cy="72"
      r="6"
      fill="none"
      stroke="rgb(var(--ds-neutral-ne500-rgb))"
      strokeWidth="2.5"
    />
  </svg>
);

const TabletUser = () => (
  <svg viewBox="0 0 64 90" width="64" height="90" fill="none" aria-hidden="true">
    <circle cx="32" cy="18" r="9" fill="rgb(var(--ds-warning-wa300-rgb))" />
    <path d="M20 30h24l4 30H16z" fill="rgb(var(--ds-warning-wa500-rgb))" />
    <rect x="14" y="56" width="36" height="20" rx="2" fill="rgb(var(--ds-neutral-ne800-rgb))" />
    <rect x="16" y="58" width="32" height="16" rx="1" fill="rgb(var(--ds-primary-pr200-rgb))" />
    <circle cx="32" cy="78" r="1.5" fill="rgb(var(--ds-neutral-ne500-rgb))" />
  </svg>
);

const CityBackground = () => (
  <svg
    viewBox="0 0 600 200"
    className="absolute inset-x-0 bottom-[28%] -z-10 h-[34%] w-full text-stroke-default/35"
    preserveAspectRatio="xMidYEnd meet"
    aria-hidden="true"
  >
    <g fill="currentColor" opacity="0.7">
      <rect x="20" y="100" width="50" height="100" />
      <rect x="80" y="80" width="36" height="120" />
      <rect x="124" y="120" width="44" height="80" />
      <rect x="176" y="60" width="40" height="140" />
      <rect x="224" y="100" width="30" height="100" />
      <rect x="262" y="80" width="52" height="120" />
      <rect x="322" y="110" width="34" height="90" />
      <rect x="364" y="70" width="44" height="130" />
      <rect x="416" y="100" width="40" height="100" />
      <rect x="464" y="84" width="30" height="116" />
      <rect x="502" y="120" width="38" height="80" />
      <rect x="548" y="92" width="34" height="108" />
    </g>
    <g fill="rgb(var(--ds-background-surface-rgb))" opacity="0.85">
      <rect x="86" y="92" width="6" height="8" />
      <rect x="100" y="92" width="6" height="8" />
      <rect x="86" y="108" width="6" height="8" />
      <rect x="100" y="108" width="6" height="8" />
      <rect x="184" y="74" width="6" height="8" />
      <rect x="198" y="74" width="6" height="8" />
      <rect x="184" y="92" width="6" height="8" />
      <rect x="270" y="92" width="6" height="8" />
      <rect x="284" y="92" width="6" height="8" />
      <rect x="370" y="84" width="6" height="8" />
      <rect x="384" y="84" width="6" height="8" />
      <rect x="468" y="98" width="6" height="8" />
      <rect x="556" y="106" width="6" height="8" />
    </g>
  </svg>
);

export const UserEnvironmentHeroIllustration = ({ hero }: Props) => {
  return (
    <div
      role="img"
      aria-label={hero.illustrationLabel}
      className="relative isolate mx-auto aspect-[5/4] w-full max-w-[540px]"
    >
      <div
        className="absolute left-1/2 top-[18%] -z-10 h-[58%] w-[88%] -translate-x-1/2 rounded-rounded bg-gradient-to-b from-primary-pr100/60 via-secondary-se100/40 to-transparent blur-2xl"
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 -z-10 h-full w-full text-stroke-default/25"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-disabilities-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-disabilities-dots)" />
      </svg>

      <CityBackground />

      <FloatingChip
        icon={<SunIcon />}
        label={hero.floatingChips.brightness}
        tone="warning"
        className="left-[6%] top-[4%]"
      />
      <FloatingChip
        icon={<EarIcon />}
        label={hero.floatingChips.hearing}
        tone="primary"
        className="left-[38%] top-0"
      />
      <FloatingChip
        icon={
          <span className="text-[0.75rem] font-extraBold leading-none text-text-secondary sm:text-sm">
            Aa
          </span>
        }
        label={hero.floatingChips.fontSize}
        tone="secondary"
        className="right-[30%] top-[12%]"
      />
      <FloatingChip
        icon={<KeyboardIcon />}
        label={hero.floatingChips.keyboard}
        tone="success"
        className="right-[4%] top-[2%]"
      />

      <div className="absolute inset-x-0 bottom-0 h-[58%]">
        <div
          className="absolute bottom-[6%] left-[4%]"
          title={hero.avatarLabels.phone}
          aria-hidden="true"
        >
          <PhoneUser />
        </div>
        <div
          className="absolute bottom-[6%] left-[26%]"
          title={hero.avatarLabels.laptop}
          aria-hidden="true"
        >
          <LaptopUser />
        </div>
        <div
          className="absolute bottom-[6%] left-[48%]"
          title={hero.avatarLabels.wheelchair}
          aria-hidden="true"
        >
          <WheelchairUser />
        </div>
        <div
          className="absolute bottom-[6%] right-[4%]"
          title={hero.avatarLabels.tablet}
          aria-hidden="true"
        >
          <TabletUser />
        </div>

        <div
          className="absolute inset-x-[4%] bottom-2 h-1.5 rounded-full bg-gradient-to-r from-transparent via-stroke-default/40 to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
