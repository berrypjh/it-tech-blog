import { cn } from '@it-tech-blog/utils';

import type { ReasonCard } from '../content';

type Props = {
  card: ReasonCard;
  icon: React.ReactNode;
  detailCta: string;
};

const toneMap = {
  primary: {
    iconBg: 'bg-primary-pr100 dark:bg-primary-pr900/40',
    iconColor: 'text-text-primary',
  },
  secondary: {
    iconBg: 'bg-secondary-se100 dark:bg-secondary-se900/40',
    iconColor: 'text-text-secondary',
  },
  success: {
    iconBg: 'bg-success-su100 dark:bg-success-su900/40',
    iconColor: 'text-text-success',
  },
  warning: {
    iconBg: 'bg-warning-wa100 dark:bg-warning-wa900/40',
    iconColor: 'text-text-warning',
  },
};

const ChevronRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const ImportanceReasonCard = ({ card, icon, detailCta }: Props) => {
  const t = toneMap[card.tone];
  return (
    <article className="group flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-mdl shadow-sm transition-all hover:-translate-y-0.5 hover:border-stroke-primary hover:shadow-md focus-within:ring-2 focus-within:ring-stroke-primary focus-within:ring-offset-2">
      <div
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-rounded',
          t.iconBg,
          t.iconColor,
        )}
      >
        {icon}
      </div>

      <h3 className="text-md font-bold text-text-default">{card.title}</h3>
      <p className="text-xsm leading-relaxed text-text-light">{card.body}</p>

      <div className="mt-auto rounded-md border border-stroke-default/60 bg-background-default/50 px-sm py-2">
        <p className="text-xsm leading-snug text-text-default">{card.example}</p>
      </div>

      <button
        type="button"
        className="inline-flex w-full items-center justify-between gap-1 rounded-md border border-stroke-default bg-background-surface px-sm py-2 text-xsm font-semiBold text-text-default transition-colors hover:border-stroke-primary hover:bg-primary-pr100/40 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2 dark:hover:bg-primary-pr900/30"
      >
        {detailCta}
        <ChevronRightIcon />
      </button>
    </article>
  );
};
