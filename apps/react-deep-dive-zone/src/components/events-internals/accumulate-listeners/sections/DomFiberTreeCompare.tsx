import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ListenerCollectionContent } from '../content';
import { BoxesIcon, GitBranchIcon, GlobeIcon, LightbulbIcon } from '../icons';

type Props = { content: ListenerCollectionContent['compare'] };

export const DomFiberTreeCompare = ({ content }: Props) => (
  <section aria-labelledby="heading-compare">
    <NumberedSectionHeader
      id="compare"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* DOM tree */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-sky-50/40',
          'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-sky-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_2px_0_rgba(29,78,216,0.3)] dark:bg-blue-500"
          >
            <GlobeIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              DOM tree
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.dom.title}
            </h3>
          </div>
        </header>
        <pre className="rounded-xl border border-blue-200/70 bg-white px-md py-md font-mono text-[11px] sm:text-xsm leading-[1.7] text-blue-700 dark:border-blue-800/60 dark:bg-slate-950/40 dark:text-blue-200">
          <code className="whitespace-pre">{content.dom.lines.join('\n')}</code>
        </pre>
      </article>

      {/* Fiber tree */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/40',
          'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-[0_2px_0_rgba(13,148,136,0.3)] dark:bg-teal-400 dark:text-slate-900"
          >
            <BoxesIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              Fiber tree
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.fiber.title}
            </h3>
          </div>
        </header>
        <pre className="rounded-xl border border-teal-200/70 bg-white px-md py-md font-mono text-[11px] sm:text-xsm leading-[1.7] text-teal-700 dark:border-teal-800/60 dark:bg-slate-950/40 dark:text-teal-200">
          <code className="whitespace-pre">{content.fiber.lines.join('\n')}</code>
        </pre>
      </article>
    </div>

    <aside
      className={cn(
        'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-amber-300/80 bg-amber-50/60 dark:border-amber-800/60 dark:bg-amber-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
      >
        <LightbulbIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
        {content.note}
      </p>
    </aside>
  </section>
);
