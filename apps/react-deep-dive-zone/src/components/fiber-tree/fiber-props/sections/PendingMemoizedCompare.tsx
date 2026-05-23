import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ComparisonCard, FiberPropsContent } from '../content';
import { CheckCircleIcon, ClockIcon, GitCompareIcon, ZapIcon } from '../icons';

type Props = { content: FiberPropsContent['comparison'] };

const tone = {
  pendingProps: {
    border:
      'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
    iconWrap: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
    title: 'text-sky-900 dark:text-sky-100',
    subtitle: 'text-sky-700/80 dark:text-sky-200/80',
    check: 'text-sky-600 dark:text-sky-300',
  },
  memoizedProps: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    title: 'text-emerald-900 dark:text-emerald-100',
    subtitle: 'text-emerald-700/80 dark:text-emerald-200/80',
    check: 'text-emerald-600 dark:text-emerald-300',
  },
} as const;

export const PendingMemoizedCompare = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
      {content.cards.map((card) => (
        <li key={card.kind}>
          <CompareCardItem card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CompareCardItem = ({ card }: { card: ComparisonCard }) => {
  const t = tone[card.kind];
  const Icon = card.kind === 'pendingProps' ? ZapIcon : ClockIcon;
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
    </article>
  );
};
