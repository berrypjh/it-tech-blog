import { cn } from '@it-tech-blog/utils';

type Props = {
  index: number;
  title: string;
  body: string;
  example: string;
  exampleLabel: string;
  exampleAction: string;
  cardLabel: string;
  icon: React.ReactNode;
  tone: 'primary' | 'secondary' | 'success' | 'warning';
};

const toneMap = {
  primary: {
    iconBg: 'bg-primary-pr100 dark:bg-primary-pr900/40',
    iconColor: 'text-text-primary',
    pill: 'text-text-primary',
  },
  secondary: {
    iconBg: 'bg-secondary-se100 dark:bg-secondary-se900/40',
    iconColor: 'text-text-secondary',
    pill: 'text-text-secondary',
  },
  success: {
    iconBg: 'bg-success-su100 dark:bg-success-su900/40',
    iconColor: 'text-text-success',
    pill: 'text-text-success',
  },
  warning: {
    iconBg: 'bg-warning-wa100 dark:bg-warning-wa900/40',
    iconColor: 'text-text-warning',
    pill: 'text-text-warning',
  },
};

export const PrincipleCard = ({
  index,
  title,
  body,
  example,
  exampleLabel,
  exampleAction,
  cardLabel,
  icon,
  tone,
}: Props) => {
  const t = toneMap[tone];
  return (
    <article className="group flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-mdl shadow-sm transition-all hover:-translate-y-0.5 hover:border-stroke-primary hover:shadow-md focus-within:ring-2 focus-within:ring-stroke-primary focus-within:ring-offset-2">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-xl',
            t.iconBg,
            t.iconColor,
          )}
        >
          {icon}
        </div>
        <span className={cn('text-[0.625rem] font-semiBold uppercase tracking-wide', t.pill)}>
          {`${cardLabel} 0${index + 1}`}
        </span>
      </div>

      <h3 className="text-md font-bold text-text-default">{title}</h3>
      <p className="text-xsm leading-relaxed text-text-light">{body}</p>

      <div className="mt-auto rounded-md bg-background-default/60 p-sm">
        <p className="text-[0.6875rem] font-semiBold text-text-light/80 uppercase tracking-wide">
          {exampleLabel}
        </p>
        <p className="mt-1 text-xsm leading-snug text-text-default">{example}</p>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-between gap-1 self-start rounded-md text-xsm font-semiBold text-text-primary transition-colors hover:text-primary-pr700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
      >
        {exampleAction}
        <svg
          viewBox="0 0 24 24"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </article>
  );
};
