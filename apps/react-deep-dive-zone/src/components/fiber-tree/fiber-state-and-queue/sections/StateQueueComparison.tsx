import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { ComparisonCard, FiberStateAndQueueContent } from '../content';
import { CheckCircleIcon, DatabaseIcon, ListIcon } from '../icons';

type Props = { content: FiberStateAndQueueContent['comparison'] };

const tone = {
  memoizedState: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    title: 'text-emerald-900 dark:text-emerald-100',
    subtitle: 'text-emerald-700/80 dark:text-emerald-200/80',
    check: 'text-emerald-600 dark:text-emerald-300',
    bottomLabel:
      'bg-emerald-50 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60',
  },
  updateQueue: {
    border:
      'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
    iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    title: 'text-violet-900 dark:text-violet-100',
    subtitle: 'text-violet-700/80 dark:text-violet-200/80',
    check: 'text-violet-600 dark:text-violet-300',
    bottomLabel:
      'bg-violet-50 text-violet-800 border-violet-200/80 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/60',
  },
} as const;

export const StateQueueComparison = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<DatabaseIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <CompareCardItem card={content.cards[0]} />
      <div className="flex items-center justify-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-full',
            'bg-slate-900 text-white border-2 border-slate-700',
            'dark:bg-slate-950 dark:border-slate-700',
            'shadow-[0_8px_20px_-8px_rgba(15,23,42,0.55)]',
            'font-bold text-sm tracking-wider',
          )}
        >
          {content.vs}
        </span>
      </div>
      <CompareCardItem card={content.cards[1]} />
    </div>
  </section>
);

const CompareCardItem = ({ card }: { card: ComparisonCard }) => {
  const t = tone[card.kind];
  const Icon = card.kind === 'memoizedState' ? DatabaseIcon : ListIcon;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn('inline-flex items-center justify-center w-12 h-12 rounded-xl', t.iconWrap)}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="flex flex-col min-w-0">
          <code className={cn('font-mono text-md font-bold tracking-tight', t.title)}>
            {card.title}
          </code>
          <p className={cn('text-xsm leading-snug break-keep', t.subtitle)}>{card.subtitle}</p>
        </div>
      </header>

      <ul className="flex flex-col gap-2 mt-sm">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-5 h-5 shrink-0 mt-0.5',
                t.check,
              )}
            >
              <CheckCircleIcon className="h-4 w-4" />
            </span>
            <span className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <span
        className={cn(
          'mt-auto self-start inline-flex items-center rounded-full border px-3 py-1 text-[11.5px] font-bold font-mono',
          t.bottomLabel,
        )}
      >
        {card.bottomLabel}
      </span>
    </article>
  );
};
