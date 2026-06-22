import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowPreviewStep, RenderPhaseIntroContent } from '../content';
import { CheckCircleIcon, ClockIcon, WorkflowIcon } from '../icons';

type Props = { content: RenderPhaseIntroContent['flowPreview'] };

export const RenderPhaseFlowPreview = ({ content }: Props) => (
  <section
    id="flow-preview"
    aria-labelledby="heading-flow-preview"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="flow-preview"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/20 to-violet-50/20',
        'dark:from-[var(--term-bg)] dark:via-sky-950/12 dark:to-violet-950/12',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// render phase: 7 steps map'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          chapter map
        </span>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.45fr)_minmax(0,_1fr)] gap-md">
        {/* Left: numbered steps + descriptions */}
        <ol className="flex flex-col gap-2">
          {content.steps.map((step, idx) => (
            <li key={step.number} className="flex">
              <StepRow step={step} isLast={idx === content.steps.length - 1} />
            </li>
          ))}
        </ol>

        {/* Right: result card + important note */}
        <div className="flex flex-col gap-3">
          <aside
            className={cn(
              'rounded-2xl border-2 border-dashed p-md',
              'border-emerald-300/80 bg-emerald-50/50',
              'dark:border-emerald-700/70 dark:bg-emerald-950/25',
            )}
            aria-labelledby="flow-result-title"
          >
            <header className="mb-2 flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  'bg-emerald-100 text-emerald-700 border-emerald-200/80',
                  'dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
                )}
              >
                <CheckCircleIcon className="h-4 w-4" />
              </span>
              <h3
                id="flow-result-title"
                className="text-sm sm:text-md font-bold text-emerald-800 dark:text-emerald-100"
              >
                {content.resultTitle}
              </h3>
            </header>
            <ul className="flex flex-col gap-1.5">
              {content.resultItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-emerald-900 dark:text-emerald-100 break-keep"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <aside
            className={cn(
              'flex items-start gap-sm rounded-2xl border-2 p-md',
              'border-sky-200/80 bg-sky-50/70',
              'dark:border-sky-800/70 dark:bg-sky-950/40',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
                'bg-sky-100 text-sky-700 border border-sky-200/80',
                'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
              )}
            >
              <ClockIcon className="h-4 w-4" />
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 font-bold break-keep">
              {content.importantNote}
            </p>
          </aside>
        </div>
      </div>
    </article>
  </section>
);

const StepRow = ({ step, isLast }: { step: FlowPreviewStep; isLast: boolean }) => {
  const t = toneTokens[step.tone];
  return (
    <div className="flex w-full items-stretch gap-2">
      {/* Number rail */}
      <div className="flex flex-col items-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-full border-2 text-[11px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
        {!isLast && (
          <span aria-hidden="true" className="mt-1 mb-1 w-px flex-1 bg-[var(--term-border)]" />
        )}
      </div>
      {/* Card */}
      <article
        className={cn(
          'flex-1 min-w-0 flex flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-sm sm:p-md',
          t.border,
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
          {step.title}
        </h3>
        <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </article>
    </div>
  );
};
