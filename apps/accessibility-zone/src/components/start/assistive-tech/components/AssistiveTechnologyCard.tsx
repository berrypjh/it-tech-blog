import { cn } from '@it-tech-blog/utils';

import type { AssistiveTechCard } from '../content';

type Props = {
  card: AssistiveTechCard;
  icon: React.ReactNode;
};

const toneMap = {
  primary: {
    numberBg: 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40',
    iconBg: 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40',
  },
  secondary: {
    numberBg: 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40',
    iconBg: 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40',
  },
  success: {
    numberBg: 'bg-success-su100 text-text-success dark:bg-success-su900/40',
    iconBg: 'bg-success-su100 text-text-success dark:bg-success-su900/40',
  },
  warning: {
    numberBg: 'bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40',
    iconBg: 'bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40',
  },
  info: {
    numberBg: 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40',
    iconBg: 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40',
  },
};

export const AssistiveTechnologyCard = ({ card, icon }: Props) => {
  const t = toneMap[card.tone];
  return (
    <article className="group flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-mdl shadow-sm transition-all hover:-translate-y-0.5 hover:border-stroke-primary hover:shadow-md focus-within:ring-2 focus-within:ring-stroke-primary focus-within:ring-offset-2">
      <div className="flex items-center justify-between">
        <span
          aria-hidden="true"
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-rounded text-xsm font-extraBold',
            t.numberBg,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn('flex h-9 w-9 items-center justify-center rounded-md', t.iconBg)}
        >
          {icon}
        </span>
      </div>

      <h3 className="text-md font-bold text-text-default">{card.title}</h3>
      <p className="text-xsm leading-relaxed text-text-light">{card.body}</p>

      <div className="mt-auto flex flex-col gap-sml border-t border-stroke-default/60 pt-sm">
        <div>
          <p className="text-[0.625rem] font-semiBold uppercase tracking-wide text-text-light/80">
            {card.userLabel}
          </p>
          <p className="mt-0.5 text-xsm leading-snug text-text-default">{card.userBody}</p>
        </div>
        <div>
          <p className="text-[0.625rem] font-semiBold uppercase tracking-wide text-text-light/80">
            {card.pointLabel}
          </p>
          <p className="mt-0.5 text-xsm leading-snug text-text-default">{card.pointBody}</p>
        </div>
      </div>
    </article>
  );
};
