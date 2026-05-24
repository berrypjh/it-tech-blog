import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { DepsResult, UseEffectInternalsContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  EqualIcon,
  PlayCircleIcon,
  SkipForwardIcon,
  SplitIcon,
} from '../icons';

type Props = { content: UseEffectInternalsContent['depsCompare'] };

const accent = {
  teal: {
    card: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/60 dark:bg-teal-950/30',
    head: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
    text: 'text-teal-800 dark:text-teal-100',
    dot: 'bg-teal-500 dark:bg-teal-400',
    arrow: 'text-teal-600 dark:text-teal-300',
    bodyBg: 'bg-white dark:bg-teal-950/20 border-teal-200/70 dark:border-teal-800/60',
  },
  violet: {
    card: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/60 dark:bg-violet-950/30',
    head: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    text: 'text-violet-800 dark:text-violet-100',
    dot: 'bg-violet-500 dark:bg-violet-400',
    arrow: 'text-violet-600 dark:text-violet-300',
    bodyBg: 'bg-white dark:bg-violet-950/20 border-violet-200/70 dark:border-violet-800/60',
  },
} as const;

const ResultCard = ({ data }: { data: DepsResult }) => {
  const a = accent[data.tone];
  const Icon = data.visual === 'skip' ? SkipForwardIcon : PlayCircleIcon;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all',
        'motion-safe:hover:-translate-y-0.5',
        a.card,
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn('inline-flex h-10 w-10 items-center justify-center rounded-full', a.head)}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-sm sm:text-md font-bold break-keep', a.text)}>{data.result}</h3>
      </header>

      <ul className="flex flex-col gap-1.5">
        {data.body.map((line) => (
          <li
            key={line}
            className={cn(
              'flex items-start gap-2 rounded-lg border px-3 py-2 text-[11px] sm:text-xsm break-keep',
              a.bodyBg,
            )}
          >
            <span
              aria-hidden="true"
              className={cn('mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0', a.dot)}
            />
            <span className="text-[var(--term-fg)]">{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export const DependenciesComparisonFlow = ({ content }: Props) => (
  <section
    aria-labelledby="heading-deps-compare"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="deps-compare"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="flex flex-col gap-md">
      {/* Decision node */}
      <article
        className={cn(
          'flex flex-col items-center gap-2 rounded-2xl border-2 p-md sm:p-lg text-center',
          'border-indigo-300/80 bg-indigo-50/40 dark:border-indigo-800/60 dark:bg-indigo-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900"
        >
          <EqualIcon className="h-5 w-5" />
        </span>
        <code className="font-mono text-xsm sm:text-sm font-bold text-indigo-800 dark:text-indigo-100 break-all">
          {content.decision}
        </code>
        <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.decisionDetail}
        </p>
      </article>

      {/* Branch indicator */}
      <div
        aria-hidden="true"
        className="flex items-center justify-center gap-3 text-[var(--term-muted)]"
      >
        <span className="hidden lg:inline-flex items-center gap-1 text-teal-600 dark:text-teal-300">
          <ArrowRightIcon className="h-4 w-4" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider">same</span>
        </span>
        <ArrowDownIcon className="lg:hidden h-5 w-5" />
        <span className="hidden lg:inline-flex h-1 w-32 border-t-2 border-dashed border-[var(--term-border)]" />
        <ArrowDownIcon className="hidden lg:block h-5 w-5" />
        <span className="hidden lg:inline-flex h-1 w-32 border-t-2 border-dashed border-[var(--term-border)]" />
        <span className="hidden lg:inline-flex items-center gap-1 text-violet-600 dark:text-violet-300">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
            different
          </span>
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      </div>

      {/* Result cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        <ResultCard data={content.same} />
        <ResultCard data={content.different} />
      </div>
    </div>
  </section>
);
