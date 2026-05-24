import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { DifferenceCard, Tone, UseReducerSharedContent } from '../content';
import { GaugeIcon, GitBranchIcon, Link2Icon, SplitIcon } from '../icons';

type Props = { content: UseReducerSharedContent['whenDifference'] };

const visualMap = {
  gauge: GaugeIcon,
  branch: GitBranchIcon,
  link: Link2Icon,
};

const cardTone: Record<Tone, string> = {
  sky: 'border-sky-300/80 dark:border-sky-700/70 hover:border-sky-400 dark:hover:border-sky-600',
  cyan: 'border-cyan-300/80 dark:border-cyan-700/70 hover:border-cyan-400 dark:hover:border-cyan-600',
  teal: 'border-teal-300/80 dark:border-teal-700/70 hover:border-teal-400 dark:hover:border-teal-600',
  emerald:
    'border-emerald-300/80 dark:border-emerald-700/70 hover:border-emerald-400 dark:hover:border-emerald-600',
  violet:
    'border-violet-300/80 dark:border-violet-700/70 hover:border-violet-400 dark:hover:border-violet-600',
  amber:
    'border-amber-300/80 dark:border-amber-700/70 hover:border-amber-400 dark:hover:border-amber-600',
  indigo:
    'border-indigo-300/80 dark:border-indigo-700/70 hover:border-indigo-400 dark:hover:border-indigo-600',
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
  indigo:
    'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200 border-indigo-200/80 dark:border-indigo-800/60',
};

const chipTone: Record<Tone, string> = {
  sky: 'bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200/80 dark:bg-cyan-950/40 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-50 text-teal-700 border-teal-200/80 dark:bg-teal-950/40 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-50 text-violet-700 border-violet-200/80 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/60',
  amber:
    'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/60',
  indigo:
    'bg-indigo-50 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/40 dark:text-indigo-200 dark:border-indigo-800/60',
};

const dotTone: Record<Tone, string> = {
  sky: 'bg-sky-500 dark:bg-sky-400',
  cyan: 'bg-cyan-500 dark:bg-cyan-400',
  teal: 'bg-teal-500 dark:bg-teal-400',
  emerald: 'bg-emerald-500 dark:bg-emerald-400',
  violet: 'bg-violet-500 dark:bg-violet-400',
  amber: 'bg-amber-500 dark:bg-amber-400',
  indigo: 'bg-indigo-500 dark:bg-indigo-400',
};

const DifferenceCardItem = ({ card }: { card: DifferenceCard }) => {
  const Icon = visualMap[card.visual];
  return (
    <article
      className={cn(
        'h-full flex flex-col gap-md rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all',
        'motion-safe:hover:-translate-y-0.5',
        cardTone[card.tone],
      )}
    >
      <header className="flex items-start gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
            iconBoxTone[card.tone],
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            {card.title}
          </h3>
          <code
            className={cn(
              'inline-flex w-fit items-center rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold break-all',
              chipTone[card.tone],
            )}
          >
            {card.hookLabel}
          </code>
        </div>
      </header>

      {card.items && (
        <ul className="flex flex-col gap-1.5 mt-auto">
          {card.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)]"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0',
                  dotTone[card.tone],
                )}
              />
              <span className="break-keep">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {card.description && (
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep mt-auto">
          {card.description}
        </p>
      )}
    </article>
  );
};

export const WhenDifferenceAppears = ({ content }: Props) => (
  <section
    aria-labelledby="heading-when-difference"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="when-difference"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.title} className="flex">
          <div className="flex-1">
            <DifferenceCardItem card={card} />
          </div>
        </li>
      ))}
    </ul>
  </section>
);
