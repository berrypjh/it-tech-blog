import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { CorrectVersionDiffContent, TermCase } from '../content';
import { ArrowRightIcon, ReplaceIcon, SparkIcon } from '../icons';

type Props = { content: CorrectVersionDiffContent['termCompare'] };

export const TermCompareSection = ({ content }: Props) => {
  return (
    <section
      id="section-term-compare"
      aria-labelledby="heading-term-compare"
      className="space-y-lg"
    >
      <SectionHeader
        id="term-compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ReplaceIcon className="h-5 w-5" />}
      />

      <ul className="flex flex-col gap-md">
        {content.cases.map((c) => (
          <li key={c.id}>
            <TermCompareCard data={c} judgmentLabel={content.judgmentLabel} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const TermCompareCard = ({ data, judgmentLabel }: { data: TermCase; judgmentLabel: string }) => {
  return (
    <article
      className={cn(
        'rounded-2xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
        'dark:border-slate-700 dark:bg-[var(--term-bg)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
        {/* Old */}
        <div
          className={cn(
            'flex flex-col gap-2 rounded-xl border-2 p-md',
            'border-amber-300 bg-amber-50/60',
            'dark:border-amber-700/70 dark:bg-amber-950/30',
          )}
        >
          <span
            className={cn(
              'inline-flex w-fit items-center gap-1.5 rounded-full border-2 px-2.5 py-1',
              'border-amber-300 bg-white text-amber-800',
              'dark:border-amber-700/70 dark:bg-[var(--term-bg)] dark:text-amber-200',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-amber-500" />
            {data.oldLabel}
          </span>
          <code
            className={cn(
              'overflow-x-auto rounded-md border px-2.5 py-2',
              'border-amber-200 bg-white dark:border-amber-800/60 dark:bg-[var(--term-bg)]',
              'font-mono text-xsm font-bold text-amber-900 dark:text-amber-100',
            )}
          >
            <span className="whitespace-nowrap">{data.oldCode}</span>
          </code>
        </div>

        {/* Connector */}
        <div className="relative flex lg:flex-col items-center justify-center gap-2 lg:py-md">
          <span
            aria-hidden="true"
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
          />
          <span
            aria-hidden="true"
            className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
          />
          <span
            className={cn(
              'relative inline-flex items-center gap-1 rounded-full border-2 px-3 py-1.5',
              'border-blue-300 bg-white text-blue-700 shadow-[0_2px_0_var(--term-border)]',
              'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
            )}
          >
            <ArrowRightIcon className="h-3 w-3" aria-hidden="true" />
            shift
          </span>
        </div>

        {/* Modern */}
        <div
          className={cn(
            'flex flex-col gap-2 rounded-xl border-2 p-md',
            'border-blue-300 bg-blue-50/60',
            'dark:border-blue-700/70 dark:bg-blue-950/30',
          )}
        >
          <span
            className={cn(
              'inline-flex w-fit items-center gap-1.5 rounded-full border-2 px-2.5 py-1',
              'border-blue-300 bg-white text-blue-800',
              'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-blue-500" />
            {data.modernLabel}
          </span>
          <code
            className={cn(
              'overflow-x-auto rounded-md border px-2.5 py-2',
              'border-blue-200 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
              'font-mono text-xsm font-bold text-blue-900 dark:text-blue-100',
            )}
          >
            <span className="whitespace-nowrap">{data.modernCode}</span>
          </code>
        </div>
      </div>

      {/* Judgment */}
      <div
        className={cn(
          'mt-md flex items-start gap-2 rounded-md border-2 p-3',
          'border-violet-300 bg-violet-50 text-violet-900',
          'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100',
        )}
      >
        <SparkIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300">
            {judgmentLabel}
          </span>
          <p className="text-xsm leading-relaxed break-keep">{data.judgment}</p>
        </div>
      </div>
    </article>
  );
};
