import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { CompareCard, PerformUnitContent } from '../content';
import { DatabaseIcon, GitBranchIcon, MonitorIcon } from '../icons';

type Props = { content: PerformUnitContent['compare'] };

export const CurrentWorkInProgressCompare = ({ content }: Props) => (
  <section
    id="current-wip"
    aria-labelledby="heading-current-wip"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="current-wip"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
      <Card card={content.cards.left} />
      <Card card={content.cards.right} />

      {/* Relation label between the two cards */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute z-10 hidden md:inline-flex items-center justify-center gap-1.5',
          'rounded-full border-2 border-dashed bg-white px-3 py-1',
          'border-[var(--term-border)] dark:bg-slate-950',
          'shadow-[0_2px_0_var(--term-border)]',
          'md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
        )}
      >
        <GitBranchIcon aria-hidden="true" className="h-3.5 w-3.5 text-[var(--term-muted)]" />
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {content.relationLabel}
        </span>
      </span>
    </div>
  </section>
);

const Card = ({ card }: { card: CompareCard }) => {
  const isCurrent = card.kind === 'current';
  const Icon = isCurrent ? DatabaseIcon : MonitorIcon;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
        isCurrent
          ? 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20'
          : 'border-violet-300/80 bg-violet-50/40 dark:border-violet-700/70 dark:bg-violet-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
            isCurrent
              ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
              : 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isCurrent
              ? 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60'
              : 'border-violet-300/70 bg-white/70 text-violet-700 dark:bg-slate-950/60 dark:text-violet-200 dark:border-violet-700/60',
          )}
        >
          {isCurrent ? 'previous' : 'in progress'}
        </span>
      </header>

      <div className="flex flex-col gap-1">
        <code
          className={cn(
            'self-start inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-sm font-bold',
            'border-slate-800 bg-slate-950',
            isCurrent ? 'text-teal-300' : 'text-violet-300',
          )}
        >
          {card.title}
        </code>
        <span
          className={cn(
            'text-xsm sm:text-sm font-bold leading-tight break-keep',
            isCurrent ? 'text-teal-800 dark:text-teal-100' : 'text-violet-800 dark:text-violet-100',
          )}
        >
          {card.subtitle}
        </span>
      </div>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <ul className="flex flex-col gap-1.5 flex-1">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full',
                isCurrent ? 'bg-teal-500 dark:bg-teal-400' : 'bg-violet-500 dark:bg-violet-400',
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
