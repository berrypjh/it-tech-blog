import { cn } from '@it-tech-blog/utils';

import type { DisabilityTypeCard as Card } from '../content';

type Props = {
  card: Card;
  icon: React.ReactNode;
};

const toneMap = {
  primary: { iconBg: 'bg-primary-pr100 dark:bg-primary-pr900/40', iconColor: 'text-text-primary' },
  secondary: {
    iconBg: 'bg-secondary-se100 dark:bg-secondary-se900/40',
    iconColor: 'text-text-secondary',
  },
  success: { iconBg: 'bg-success-su100 dark:bg-success-su900/40', iconColor: 'text-text-success' },
  warning: { iconBg: 'bg-warning-wa100 dark:bg-warning-wa900/40', iconColor: 'text-text-warning' },
  error: { iconBg: 'bg-error-er100 dark:bg-error-er900/40', iconColor: 'text-text-error' },
  info: {
    iconBg: 'bg-secondary-se100 dark:bg-secondary-se900/40',
    iconColor: 'text-text-secondary',
  },
};

export const DisabilityTypeCard = ({ card, icon }: Props) => {
  const t = toneMap[card.tone];
  return (
    <article className="flex h-full flex-col gap-md rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm transition-all hover:-translate-y-0.5 hover:border-stroke-primary hover:shadow-md focus-within:ring-2 focus-within:ring-stroke-primary focus-within:ring-offset-2">
      <div
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-rounded',
          t.iconBg,
          t.iconColor,
        )}
      >
        {icon}
      </div>

      <h3 className="text-md font-bold text-text-default">{card.title}</h3>
      <p className="text-xsm leading-relaxed text-text-light">{card.body}</p>
      <p className="text-[0.6875rem] leading-relaxed text-text-light/80">{card.example}</p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {card.chips.map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-semiBold text-text-default"
          >
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
};
