import { cn } from '@it-tech-blog/utils';

import type { RecoveryModelOverviewContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ShieldCheckIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: RecoveryModelOverviewContent['renderError'] };

const treeStyle = (label: string) => {
  if (label === 'ErrorBoundary')
    return 'border-teal-400 bg-teal-50 text-teal-700 dark:border-teal-600 dark:bg-teal-950/40 dark:text-teal-200';
  if (label === 'Profile')
    return 'border-rose-400 bg-rose-50 text-rose-700 dark:border-rose-600 dark:bg-rose-950/40 dark:text-rose-200';
  return 'border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200';
};

export const RenderErrorScenarioSection = ({ content }: Props) => (
  <section aria-labelledby="render-error-heading" className="flex flex-col gap-md">
    <SectionHeader id="render-error-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-3 items-stretch">
      {/* code */}
      <article
        className={cn(
          'flex flex-col overflow-hidden rounded-2xl border-2',
          'border-rose-200/80 bg-white dark:border-rose-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <CodeBlock code={content.code.content} fileLabel={content.code.fileLabel} language="jsx" />
      </article>

      {/* tree */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.treeTitle}</h3>
        <ol className="flex flex-col items-center gap-1.5">
          {content.tree.map((label, i) => (
            <li key={label} className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  'inline-flex items-center rounded-lg border-2 px-3 py-1.5',
                  'font-mono text-[11px] font-bold break-keep',
                  treeStyle(label),
                )}
              >
                {label}
              </div>
              {i < content.tree.length - 1 && (
                <ArrowDownIcon
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500 rotate-180"
                />
              )}
            </li>
          ))}
        </ol>
        <p className="text-[11px] text-[var(--term-muted)] break-keep text-center">
          {content.treeDescription}
        </p>
      </article>

      {/* captured update */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-violet-200/80 bg-violet-50/30 dark:border-violet-800/60 dark:bg-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/60 dark:text-violet-200"
          >
            <ShieldCheckIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-bold text-violet-700 dark:text-violet-200 break-keep">
            {content.updateTitle}
          </h3>
        </header>
        <ol className="flex flex-col gap-1.5">
          {content.updateSteps.map((step, i) => {
            const isLast = i === content.updateSteps.length - 1;
            return (
              <li key={step} className="flex flex-col gap-0.5">
                <div
                  className={cn(
                    'inline-flex items-center gap-2 rounded-lg border bg-white px-2.5 py-1.5',
                    'dark:bg-[var(--term-bg)] border-violet-200 dark:border-violet-800/60',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-white font-mono text-[10px] font-bold tabular-nums dark:bg-violet-500"
                  >
                    {i + 1}
                  </span>
                  <span className="text-xsm font-mono font-bold text-violet-700 dark:text-violet-200 break-keep">
                    {step}
                  </span>
                </div>
                {!isLast && (
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-3 w-3 ml-3 rotate-90 text-violet-400 dark:text-violet-500"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);
