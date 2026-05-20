type IconProps = { className?: string };

const base = (className?: string) => className ?? 'h-5 w-5';

export const ClockIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ZapIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

export const KeyIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 9-9M16 7l3 3M14 9l3 3" />
  </svg>
);

export const GaugeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 14 8 8" />
    <path d="M21 12a9 9 0 1 0-18 0" />
    <circle cx="12" cy="14" r="1.4" fill="currentColor" />
  </svg>
);

export const CubeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
    <path d="m4 7 8 4 8-4M12 21V11" />
  </svg>
);

export const CodeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
  </svg>
);

export const LayoutIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

export const WrenchIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a4 4 0 0 1 5 5l-2-2-2.5 2.5 2 2-1 1-9 9a2.1 2.1 0 1 1-3-3l9-9 1-1-2-2L14.7 6.3Z" />
  </svg>
);

export const LayersIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m12 2 10 6-10 6L2 8l10-6Z" />
    <path d="m2 14 10 6 10-6M2 11l10 6 10-6" />
  </svg>
);

export const NetworkIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="5" r="2.2" />
    <circle cx="5" cy="19" r="2.2" />
    <circle cx="19" cy="19" r="2.2" />
    <path d="M12 7v4M7 17l4-4M17 17l-4-4" />
  </svg>
);

export const TimerIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 2h4" />
    <circle cx="12" cy="14" r="8" />
    <path d="M12 10v4l2.5 2" />
  </svg>
);

export const HookIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 4v9a4 4 0 1 1-4-4" />
  </svg>
);

export const EyeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const SearchIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const BarChartIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 21h18" />
    <rect x="5" y="11" width="3" height="8" />
    <rect x="10.5" y="7" width="3" height="12" />
    <rect x="16" y="4" width="3" height="15" />
  </svg>
);

export const PuzzleIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 3h3v3a1.5 1.5 0 0 0 3 0V3h3v3h3v3a1.5 1.5 0 0 1 0 3h-3v3h-3a1.5 1.5 0 0 0-3 0v3h-3v-3H6a1.5 1.5 0 0 1 0-3v-3H3V6h3V3h3Z" />
  </svg>
);

export const ArrowRightIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className) + ' inline-block'}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const SparkIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
  </svg>
);

export const MapPinIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const GithubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 3-.4s2.1.1 3 .4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.5 5.7 18.3.5 12 .5Z" />
  </svg>
);

export const QuestionIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1 1-1.1 1.8v.5" />
    <circle cx="12" cy="17" r="0.6" fill="currentColor" />
  </svg>
);

export const ArrowLoopIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 8a9 9 0 0 0-16-3M3 4v4h4M3 16a9 9 0 0 0 16 3M21 20v-4h-4" />
  </svg>
);

export const iconByName = {
  clock: ClockIcon,
  zap: ZapIcon,
  key: KeyIcon,
  gauge: GaugeIcon,
  cube: CubeIcon,
  code: CodeIcon,
  layout: LayoutIcon,
  wrench: WrenchIcon,
  layers: LayersIcon,
  network: NetworkIcon,
  timer: TimerIcon,
  hook: HookIcon,
  eye: EyeIcon,
  search: SearchIcon,
  'bar-chart': BarChartIcon,
  puzzle: PuzzleIcon,
} as const;
