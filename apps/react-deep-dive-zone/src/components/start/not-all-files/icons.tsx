type IconProps = { className?: string };

const base = (className?: string) => className ?? 'h-5 w-5';

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

export const RouteIcon = ({ className }: IconProps) => (
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
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="5" r="2" />
    <path d="M8 19h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h6" />
  </svg>
);

export const DiagramIcon = ({ className }: IconProps) => (
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
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="9" y="15" width="6" height="6" rx="1" />
    <path d="M9 6h6M6 9v3a3 3 0 0 0 3 3M18 9v3a3 3 0 0 1-3 3" />
  </svg>
);

export const XIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="m9 9 6 6M15 9l-6 6" />
  </svg>
);

export const FolderOpenIcon = ({ className }: IconProps) => (
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
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1H3Z" />
    <path d="M3 9h18l-2.2 8a2 2 0 0 1-2 1.5H5.2a2 2 0 0 1-2-1.6Z" />
  </svg>
);

export const BrainIcon = ({ className }: IconProps) => (
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
    <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h3V4Z" />
    <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-3V4Z" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m5 12 4 4 10-12" />
  </svg>
);

export const CheckCircleIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 3 3 5-6" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
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

export const PencilIcon = ({ className }: IconProps) => (
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
    <path d="m3 21 4-1L20 7l-3-3L4 17Z" />
    <path d="m15 6 3 3" />
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

export const BoltIcon = ({ className }: IconProps) => (
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

export const MonitorIcon = ({ className }: IconProps) => (
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
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
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

export const FxIcon = ({ className }: IconProps) => (
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
    <path d="M6 18c2-4 2-8 2-12M4 9h7" />
    <path d="m15 9 5 8M20 9l-5 8" />
  </svg>
);

export const DatabaseIcon = ({ className }: IconProps) => (
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
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);

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

export const FileIcon = ({ className }: IconProps) => (
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
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
    <path d="M14 3v6h6" />
  </svg>
);

export const ChevronRightIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
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

export const TrophyIcon = ({ className }: IconProps) => (
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
    <path d="M8 4h8v4a4 4 0 0 1-8 0Z" />
    <path d="M5 5H3v2a3 3 0 0 0 3 3M19 5h2v2a3 3 0 0 1-3 3" />
    <path d="M12 12v4M9 20h6l-1-4h-4Z" />
  </svg>
);

export const LightbulbIcon = ({ className }: IconProps) => (
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
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-4 10.5c.7.8 1 1.7 1 2.5h6c0-.8.3-1.7 1-2.5A6 6 0 0 0 12 3Z" />
  </svg>
);

export const SparkIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="currentColor" aria-hidden="true">
    <path d="M12 2 13.6 8.4 20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6Z" />
  </svg>
);

export const BookIcon = ({ className }: IconProps) => (
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
    <path d="M3 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H3Z" />
    <path d="M21 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8Z" />
  </svg>
);

export const insightIconByName = {
  question: QuestionIcon,
  route: RouteIcon,
  diagram: DiagramIcon,
} as const;

export const approachIconByName = {
  x: XIcon,
  open: FolderOpenIcon,
  brain: BrainIcon,
  check: CheckIcon,
  pin: PinIcon,
  route: RouteIcon,
  pencil: PencilIcon,
} as const;

export const questionCardIconByName = {
  code: CodeIcon,
  cube: CubeIcon,
  bolt: BoltIcon,
  monitor: MonitorIcon,
} as const;

export const flowIconByName = {
  hook: HookIcon,
  fx: FxIcon,
  database: DatabaseIcon,
  clock: ClockIcon,
  cube: CubeIcon,
  check: CheckCircleIcon,
} as const;
