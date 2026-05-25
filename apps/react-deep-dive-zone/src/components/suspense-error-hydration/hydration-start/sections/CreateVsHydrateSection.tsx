import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent } from '../content';
import { BoxIcon, PlugZapIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: HydrationStartContent['compare'] };

export const CreateVsHydrateSection = ({ content }: Props) => (
  <section aria-labelledby="compare-heading" className="flex flex-col gap-md">
    <SectionHeader id="compare-heading" number={content.number} title={content.title} />

    <div
      className={cn(
        'grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch',
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* createRoot */}
      <article className="flex flex-col gap-3">
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <BoxIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-mono font-bold text-blue-700 dark:text-blue-200">
            {content.createRoot.name}
          </h3>
        </header>
        <p className="text-xsm text-[var(--term-fg)] break-keep">{content.createRoot.lead}</p>
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.createRoot.domLabel}
          </span>
          <pre
            className={cn(
              'overflow-x-auto rounded-lg border-2 border-dashed border-blue-300 bg-blue-50/40 px-3 py-2',
              'dark:border-blue-700 dark:bg-blue-950/20',
              'text-[11px] font-mono text-blue-800 dark:text-blue-100 break-keep',
            )}
          >
            <code>{content.createRoot.domCode}</code>
          </pre>
          <span className="text-[11px] font-mono font-bold text-blue-700 dark:text-blue-200">
            {content.createRoot.domState}
          </span>
        </div>
      </article>

      {/* divider */}
      <div className="flex items-center justify-center">
        <span
          aria-hidden="true"
          className="hidden lg:block h-full w-px bg-slate-200 dark:bg-slate-700"
        />
        <span aria-hidden="true" className="lg:hidden h-px w-full bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* hydrateRoot */}
      <article className="flex flex-col gap-3">
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <PlugZapIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-mono font-bold text-teal-700 dark:text-teal-200">
            {content.hydrateRoot.name}
          </h3>
        </header>
        <p className="text-xsm text-[var(--term-fg)] break-keep">{content.hydrateRoot.lead}</p>
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.hydrateRoot.domLabel}
          </span>
          <pre
            className={cn(
              'overflow-x-auto rounded-lg border-2 border-dashed border-teal-300 bg-teal-50/40 px-3 py-2',
              'dark:border-teal-700 dark:bg-teal-950/20',
              'text-[11px] font-mono text-teal-800 dark:text-teal-100 break-keep',
            )}
          >
            <code>{content.hydrateRoot.domCode}</code>
          </pre>
          <span className="text-[11px] font-mono font-bold text-teal-700 dark:text-teal-200">
            {content.hydrateRoot.domState}
          </span>
        </div>
      </article>
    </div>
  </section>
);
