import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { OnClickClickContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, LightbulbIcon, SparklesIcon, SplitIcon } from '../icons';

type Props = { content: OnClickClickContent['mapping'] };

export const SimpleVsSpecialMapping = ({ content }: Props) => (
  <section aria-labelledby="heading-mapping">
    <NumberedSectionHeader
      id="mapping"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* Simple mapping */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-gradient-to-br from-teal-50/70 via-white to-cyan-50/40',
          'dark:border-teal-700/60 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-teal-300',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-[0_3px_0_rgba(13,148,136,0.3)] dark:bg-teal-500/90"
          >
            <CheckCircleIcon className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              simple-case
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.simple.title}
            </h3>
          </div>
        </header>

        <div className="flex flex-col items-center gap-3 rounded-2xl border border-teal-200/70 bg-white px-md py-lg dark:border-teal-800/60 dark:bg-slate-950/40">
          <code className="font-mono text-lg sm:text-xl font-bold text-sky-700 dark:text-sky-300">
            {content.simple.pair.native}
          </code>
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-90" />
          </span>
          <code className="font-mono text-lg sm:text-xl font-bold text-teal-700 dark:text-teal-300">
            {content.simple.pair.prop}
          </code>
        </div>
      </article>

      {/* Special mapping */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-rose-200/80 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/30',
          'dark:border-rose-800/60 dark:from-rose-950/30 dark:via-[var(--term-bg)] dark:to-amber-950/10',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-rose-300',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white shadow-[0_3px_0_rgba(225,29,72,0.3)] dark:bg-rose-500/90"
          >
            <SparklesIcon className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
              special-case
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.special.title}
            </h3>
          </div>
        </header>

        <ul className="flex flex-col gap-2 rounded-2xl border border-rose-200/70 bg-white px-md py-md dark:border-rose-800/60 dark:bg-slate-950/40">
          {content.special.pairs.map((pair) => (
            <li
              key={`${pair.native}-${pair.prop}`}
              className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 rounded-lg border border-rose-100/60 bg-rose-50/30 px-3 py-2 dark:border-rose-900/40 dark:bg-rose-950/20"
            >
              <code className="font-mono text-xsm sm:text-sm font-bold text-sky-700 dark:text-sky-300 break-all">
                {pair.native}
              </code>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-3.5 w-3.5 text-rose-500 dark:text-rose-300"
              />
              <code className="font-mono text-xsm sm:text-sm font-bold text-teal-700 dark:text-teal-300 break-all">
                {pair.prop}
              </code>
            </li>
          ))}
        </ul>
      </article>
    </div>

    {/* Insight banner */}
    <aside
      className={cn(
        'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-amber-300/80 bg-amber-50/60',
        'dark:border-amber-800/60 dark:bg-amber-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
      >
        <LightbulbIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
        {content.insight}
      </p>
    </aside>
  </section>
);
