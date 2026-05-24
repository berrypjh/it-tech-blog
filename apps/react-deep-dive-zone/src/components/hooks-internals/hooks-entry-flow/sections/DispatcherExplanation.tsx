import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { HooksEntryFlowContent, Tone } from '../content';
import { PlayCircleIcon, RefreshCwIcon, RepeatIcon, SplitIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['dispatcher'] };

const cardTone: Record<Tone, string> = {
  sky: 'border-sky-300/80 hover:border-sky-400 dark:border-sky-800/60 dark:hover:border-sky-600',
  cyan: 'border-cyan-300/80 hover:border-cyan-400 dark:border-cyan-800/60 dark:hover:border-cyan-600',
  teal: 'border-teal-300/80 hover:border-teal-400 dark:border-teal-800/60 dark:hover:border-teal-600',
  emerald:
    'border-emerald-300/80 hover:border-emerald-400 dark:border-emerald-800/60 dark:hover:border-emerald-600',
  violet:
    'border-violet-300/80 hover:border-violet-400 dark:border-violet-800/60 dark:hover:border-violet-600',
  amber:
    'border-amber-300/80 hover:border-amber-400 dark:border-amber-800/60 dark:hover:border-amber-600',
};

const iconBoxTone: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 border-sky-200/80 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200 border-cyan-200/80 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200 border-teal-200/80 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 border-violet-200/80 dark:border-violet-800/60',
  amber:
    'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/60',
};

const subtitleTone: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
};

const cardIcons = [PlayCircleIcon, RefreshCwIcon, RepeatIcon];

export const DispatcherExplanation = ({ content }: Props) => (
  <section
    aria-labelledby="heading-dispatcher"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="dispatcher"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card, i) => {
        const Icon = cardIcons[i] ?? PlayCircleIcon;
        return (
          <li key={card.title}>
            <article
              className={cn(
                'group flex flex-col gap-sm h-full rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)] transition-all',
                'motion-safe:hover:-translate-y-0.5',
                cardTone[card.tone],
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-11 w-11 items-center justify-center rounded-xl border',
                  iconBoxTone[card.tone],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
                  {card.title}
                </h3>
                <code
                  className={cn(
                    'font-mono text-[11px] sm:text-xsm font-bold break-all',
                    subtitleTone[card.tone],
                  )}
                >
                  {card.subtitle}
                </code>
              </div>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
