import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ComparisonCard, WorkLoopContent } from '../content';
import { CheckCircleIcon, LayersIcon, RefreshCcwIcon } from '../icons';

type Props = { content: WorkLoopContent['comparison'] };

export const WorkLoopComparison = ({ content }: Props) => (
  <section
    id="work-loop-comparison"
    aria-labelledby="heading-work-loop-comparison"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="work-loop-comparison"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
      <Card card={content.cards.left} />
      <Card card={content.cards.right} />

      {/* VS badge: floating in the middle */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute z-10 inline-flex items-center justify-center',
          'h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 bg-white text-[var(--term-fg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'dark:bg-slate-950 dark:border-[var(--term-border)]',
          'text-xsm sm:text-sm font-bold tracking-wider',
          // Desktop: between the two columns
          'md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
          // Mobile: centered between two stacked cards
          'top-[calc(50%-1.5rem)] left-1/2 -translate-x-1/2 -translate-y-1/2',
        )}
      >
        {content.vsLabel}
      </span>
    </div>
  </section>
);

const Card = ({ card }: { card: ComparisonCard }) => {
  const isSync = card.kind === 'sync';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
        isSync
          ? 'border-sky-300/80 bg-sky-50/40 dark:border-sky-700/70 dark:bg-sky-950/25'
          : 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/25',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
            isSync
              ? 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60'
              : 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
          )}
        >
          <RefreshCcwIcon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isSync
              ? 'border-sky-300/70 bg-white/70 text-sky-700 dark:bg-slate-950/60 dark:text-sky-200 dark:border-sky-700/60'
              : 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60',
          )}
        >
          {isSync ? 'sync' : 'concurrent'}
        </span>
      </header>

      <h3
        className={cn(
          'text-md sm:text-lg font-bold tracking-tight break-keep',
          isSync ? 'text-sky-800 dark:text-sky-100' : 'text-teal-800 dark:text-teal-100',
        )}
      >
        {card.title}
      </h3>

      <ul className="flex flex-col gap-1.5 flex-1">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border',
                isSync
                  ? 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60'
                  : 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
              )}
            >
              <CheckCircleIcon className="h-3.5 w-3.5" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'mt-2 inline-flex w-full items-center justify-center rounded-xl border-2 px-md py-2.5 text-xsm sm:text-sm font-bold tracking-tight break-keep',
          isSync
            ? 'border-sky-300/80 bg-sky-100/70 text-sky-800 dark:bg-sky-950/60 dark:text-sky-100 dark:border-sky-700/70'
            : 'border-teal-300/80 bg-teal-100/70 text-teal-800 dark:bg-teal-950/60 dark:text-teal-100 dark:border-teal-700/70',
        )}
      >
        {card.bottomBadge}
      </div>
    </article>
  );
};
