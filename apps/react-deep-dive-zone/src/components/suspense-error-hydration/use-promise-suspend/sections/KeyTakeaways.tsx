import { cn } from '@it-tech-blog/utils';

import type { UsePromiseSuspendContent } from '../content';
import { CheckCircleIcon, HourglassIcon, SparklesIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: UsePromiseSuspendContent['takeaways'] };

const accentClass = (accent: 'pending' | 'fulfilled' | 'rejected' | 'mixed') => {
  if (accent === 'fulfilled')
    return {
      border:
        'border-emerald-200/80 bg-emerald-50/40 dark:border-emerald-800/60 dark:bg-emerald-950/20',
      numberBg: 'bg-emerald-600 dark:bg-emerald-500',
      iconChip:
        'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    };
  if (accent === 'rejected')
    return {
      border: 'border-rose-200/80 bg-rose-50/40 dark:border-rose-800/60 dark:bg-rose-950/20',
      numberBg: 'bg-rose-600 dark:bg-rose-500',
      iconChip:
        'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
    };
  if (accent === 'mixed')
    return {
      border:
        'border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 to-rose-50/30 dark:border-emerald-800/60 dark:from-emerald-950/20 dark:to-rose-950/20',
      numberBg:
        'bg-gradient-to-br from-emerald-600 to-rose-600 dark:from-emerald-500 dark:to-rose-500',
      iconChip:
        'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    };
  return {
    border: 'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
    numberBg: 'bg-violet-600 dark:bg-violet-500',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  };
};

const iconForAccent = (accent: 'pending' | 'fulfilled' | 'rejected' | 'mixed') => {
  if (accent === 'fulfilled') return CheckCircleIcon;
  if (accent === 'rejected') return CheckCircleIcon;
  if (accent === 'mixed') return CheckCircleIcon;
  return HourglassIcon;
};

export const KeyTakeaways = ({ content }: Props) => (
  <section aria-labelledby="takeaways-heading" className="flex flex-col gap-md">
    <SectionHeader id="takeaways-heading" number={content.number} title={content.title} />

    <ul className="grid grid-cols-1 gap-md md:grid-cols-3">
      {content.cards.map((card) => {
        const a = accentClass(card.accent);
        const Icon = iconForAccent(card.accent);
        return (
          <li key={card.number}>
            <article
              className={cn(
                'flex flex-col gap-3 h-full rounded-3xl border-2 p-md sm:p-lg',
                a.border,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-transform motion-safe:hover:-translate-y-0.5',
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full',
                    'font-mono text-sm font-bold tabular-nums text-white',
                    a.numberBg,
                  )}
                >
                  {card.number}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
                    a.iconChip,
                  )}
                >
                  {card.accent === 'pending' ? (
                    <Icon className="h-4 w-4" />
                  ) : (
                    <SparklesIcon className="h-4 w-4" />
                  )}
                </span>
              </div>
              <h3 className="text-md font-bold text-[var(--term-fg)] break-keep leading-snug">
                {card.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.body}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
