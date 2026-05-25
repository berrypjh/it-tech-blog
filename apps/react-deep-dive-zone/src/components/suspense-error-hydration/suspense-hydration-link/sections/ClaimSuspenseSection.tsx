import { cn } from '@it-tech-blog/utils';

import type { SuspenseHydrationLinkContent } from '../content';
import { ArrowDownIcon, AtomIcon, GlobeIcon, PackageIcon, RadarIcon } from '../icons';
import { phaseAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseHydrationLinkContent['claim'] };

const fiberLineStyle = {
  root: 'border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200',
  boundary:
    'border-violet-400 bg-violet-50 text-violet-700 dark:border-violet-600 dark:bg-violet-950/40 dark:text-violet-200',
  children:
    'border-blue-200 bg-blue-50/40 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/20 dark:text-blue-200',
} as const;

export const ClaimSuspenseSection = ({ content }: Props) => (
  <section aria-labelledby="claim-heading" className="flex flex-col gap-md">
    <SectionHeader id="claim-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-3 items-stretch">
      {/* DOM */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-blue-50/30 dark:border-blue-800/60 dark:bg-blue-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <GlobeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-bold text-blue-700 dark:text-blue-200 break-keep">
            {content.domTitle}
          </h3>
        </header>
        <pre
          className={cn(
            'overflow-x-auto rounded-lg border bg-slate-950 px-3 py-3 text-[11px] font-mono leading-[1.7]',
            'border-slate-800 text-slate-100',
          )}
        >
          <code>
            {content.domLines.map((line, i) => (
              <div key={i}>
                <span
                  className={cn(
                    line.startsWith('<!--') ? 'text-violet-300 italic' : 'text-blue-200',
                  )}
                >
                  {line}
                </span>
              </div>
            ))}
          </code>
        </pre>
        <ul className="flex flex-col gap-1">
          {content.domLabels.map((label) => (
            <li
              key={label}
              className="flex items-center gap-1.5 text-[11px] text-[var(--term-muted)] break-keep"
            >
              <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-blue-500" />
              {label}
            </li>
          ))}
        </ul>
      </article>

      {/* matching */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <RadarIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-bold text-[var(--term-fg)] break-keep">
            {content.matchTitle}
          </h3>
        </header>
        <ol className="flex flex-col items-center gap-1.5">
          {content.matchSteps.map((step, i) => {
            const accent = phaseAccent[step.phase];
            const isLast = i === content.matchSteps.length - 1;
            return (
              <li key={step.label} className="flex flex-col items-center gap-1 w-full">
                <div
                  className={cn(
                    'inline-flex items-center gap-2 rounded-xl border-2 px-3 py-2 w-full text-center justify-center',
                    accent.border,
                    accent.bg,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold tabular-nums text-white',
                      accent.solidBg,
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className={cn('text-[11px] font-mono font-bold break-keep', accent.text)}>
                    {step.label}
                  </span>
                </div>
                {!isLast && (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </article>

      {/* Fiber */}
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
            <AtomIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-bold text-violet-700 dark:text-violet-200 break-keep">
            {content.fiberTitle}
          </h3>
        </header>
        <ol className="flex flex-col gap-1.5">
          {content.fiberLines.map((line, i) => (
            <li
              key={line.label}
              className="flex items-center gap-1.5"
              style={{ paddingLeft: `${Math.min(i, 2) * 12}px` }}
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="text-[10px] font-mono text-slate-400 dark:text-slate-500"
                >
                  └─
                </span>
              )}
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-lg border-2 px-2.5 py-1.5',
                  'font-mono text-[11px] font-bold break-keep',
                  fiberLineStyle[line.kind],
                )}
              >
                {line.kind === 'boundary' && (
                  <PackageIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
                )}
                <span>{line.label}</span>
              </span>
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);
