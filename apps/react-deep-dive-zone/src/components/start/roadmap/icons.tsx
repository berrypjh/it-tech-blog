type IconProps = { className?: string };

const base = (className?: string) => className ?? 'h-5 w-5';

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

export const EventIcon = ({ className }: IconProps) => (
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
    <path d="m4 4 6 16 2.5-6.5L19 11Z" />
    <path d="m14 14 4 5" />
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

export const SparkIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="currentColor" aria-hidden="true">
    <path d="M12 2 13.6 8.4 20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6Z" />
  </svg>
);

export const FlagIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="currentColor" aria-hidden="true">
    <path d="M5 3v18h1.5v-7h11l-2-3 2-3h-11V3Z" />
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

export const GithubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 3-.4s2.1.1 3 .4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.5 5.7 18.3.5 12 .5Z" />
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

export const RefreshIcon = ({ className }: IconProps) => (
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

export const StarIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="currentColor" aria-hidden="true">
    <path d="m12 2 3.1 6.3 7 1-5.1 4.9 1.2 7-6.2-3.3-6.2 3.3 1.2-7L2 9.3l7-1Z" />
  </svg>
);

export const StarOutlineIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m12 2 3.1 6.3 7 1-5.1 4.9 1.2 7-6.2-3.3-6.2 3.3 1.2-7L2 9.3l7-1Z" />
  </svg>
);

export const RocketIcon = ({ className }: IconProps) => (
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
    <path d="M5 16c-1 2-1 4-1 4s2 0 4-1" />
    <path d="M14 3c-3 0-7 4-8 8l-3 2 4 1 1 4 2-3c4-1 8-5 8-8 0-2-2-4-4-4Z" />
    <circle cx="15" cy="9" r="1.5" fill="currentColor" />
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

export const heroSupportIconByName = {
  route: RouteIcon,
  file: FileIcon,
  question: QuestionIcon,
  pencil: PencilIcon,
} as const;

export const roadmapIconByName = {
  cube: CubeIcon,
  network: NetworkIcon,
  code: CodeIcon,
  check: CheckCircleIcon,
  hook: HookIcon,
  event: EventIcon,
  gauge: GaugeIcon,
  spark: SparkIcon,
} as const;

export const deliverableIconByName = {
  cube: CubeIcon,
  network: NetworkIcon,
  code: CodeIcon,
  check: CheckCircleIcon,
  hook: HookIcon,
  gauge: GaugeIcon,
  flag: FlagIcon,
} as const;

export const usageIconByName = {
  book: BookIcon,
  eye: EyeIcon,
  github: GithubIcon,
  route: RouteIcon,
  check: CheckCircleIcon,
} as const;
