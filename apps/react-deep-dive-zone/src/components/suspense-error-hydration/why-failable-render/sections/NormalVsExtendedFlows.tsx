import { cn } from '@it-tech-blog/utils';

import type { Tone, WhyFailableRenderContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, TriangleAlertIcon } from '../icons';
import { toneChip } from '../tone';

type Props = { content: WhyFailableRenderContent['flows'] };

const stepBoxTone: Record<Tone, string> = {
  blue: 'border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
  red: 'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200',
  green:
    'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
  purple:
    'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  cyan: 'border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-200',
  emerald:
    'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
  rose: 'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
};

export const NormalVsExtendedFlows = ({ content }: Props) => (
  <section aria-labelledby="flows-heading" className="grid grid-cols-1 gap-md md:grid-cols-2">
    <h2 id="flows-heading" className="sr-only">
      {content.eyebrow}
    </h2>

    {/* Normal flow */}
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        'border-emerald-200/80 bg-emerald-50/40 dark:border-emerald-800/60 dark:bg-emerald-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-200"
        >
          <CheckCircleIcon className="h-4.5 w-4.5" />
        </span>
        <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)]">
          {content.normal.title}
        </h3>
      </header>

      <ol className="flex flex-wrap items-center gap-2">
        {content.normal.steps.map((step, i) => (
          <li key={step.label} className="flex items-center gap-2">
            <span
              className={cn(
                'inline-flex items-center rounded-xl border-2 px-3 py-2',
                'border-emerald-300/80 bg-white text-emerald-800 font-mono text-xsm font-bold',
                'dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
              )}
            >
              {step.label}
            </span>
            {i < content.normal.steps.length - 1 && (
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-emerald-600 dark:text-emerald-300"
              />
            )}
          </li>
        ))}
      </ol>

      <ul className="grid grid-cols-2 gap-2">
        {content.normal.captionLines.map((line) => (
          <li
            key={line}
            className="rounded-xl border border-emerald-200/70 bg-white/70 px-3 py-2 text-[11px] text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-200"
          >
            {line}
          </li>
        ))}
      </ul>

      <p className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-200/80 bg-white px-3 py-1 text-[11px] font-bold text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200">
        <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {content.normal.pill}
      </p>
    </article>

    {/* Extended flow */}
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        'border-violet-200/80 bg-gradient-to-br from-violet-50/60 to-blue-50/40',
        'dark:border-violet-800/60 dark:from-violet-950/30 dark:to-blue-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/60 dark:text-violet-200"
        >
          <TriangleAlertIcon className="h-4.5 w-4.5" />
        </span>
        <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)]">
          {content.extended.title}
        </h3>
      </header>

      <ol className="flex flex-wrap items-center gap-2">
        {content.extended.steps.map((step, i) => (
          <li key={step.label} className="flex items-center gap-2">
            <span
              className={cn(
                'inline-flex items-center rounded-xl border-2 px-3 py-2',
                'font-mono text-xsm font-bold',
                stepBoxTone[step.tone],
              )}
            >
              {step.label}
            </span>
            {i < content.extended.steps.length - 1 && (
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-violet-500 dark:text-violet-300"
              />
            )}
          </li>
        ))}
      </ol>

      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {content.extended.captionLines.map((line, i) => (
          <li
            key={line}
            className={cn(
              'rounded-xl border px-3 py-2 text-center text-[11px] font-bold',
              toneChip[content.extended.steps[i]?.tone ?? 'violet'],
            )}
          >
            {line}
          </li>
        ))}
      </ul>

      <p className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-200/80 bg-white px-3 py-1 text-[11px] font-bold text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200">
        <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-violet-500" />
        {content.extended.pill}
      </p>
    </article>
  </section>
);
