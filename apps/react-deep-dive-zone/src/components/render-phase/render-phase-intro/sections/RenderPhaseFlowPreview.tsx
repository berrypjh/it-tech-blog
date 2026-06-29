import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FlowPreviewStep, RenderPhaseIntroContent } from '../content';
import { CheckCircleIcon, ClockIcon, WorkflowIcon } from '../icons';

type Props = { content: RenderPhaseIntroContent['flowPreview'] };

export const RenderPhaseFlowPreview = ({ content }: Props) => (
  <section id="flow-preview" aria-labelledby="heading-flow-preview" className="space-y-md">
    <SectionHeader
      id="flow-preview"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// render phase: 7 steps map'}
        </span>
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
          chapter map
        </span>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.45fr)_minmax(0,_1fr)] gap-md">
        <ol className="flex flex-col gap-2">
          {content.steps.map((step, idx) => (
            <li key={step.number} className="flex">
              <StepRow step={step} isLast={idx === content.steps.length - 1} />
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-3">
          <article
            aria-labelledby="flow-result-title"
            className={cn('rounded-lg border p-md', toneTokens.emerald.border)}
          >
            <header className="mb-2 flex items-center gap-2">
              <ToneIconBox tone="emerald" size="sm">
                <CheckCircleIcon className="h-4 w-4" />
              </ToneIconBox>
              <h3
                id="flow-result-title"
                className={cn('text-sm sm:text-md font-bold', toneTokens.emerald.text)}
              >
                {content.resultTitle}
              </h3>
            </header>
            <ul className="flex flex-col gap-1.5">
              {content.resultItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0',
                      toneTokens.emerald.dot,
                    )}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <SectionNote icon={<ClockIcon className="h-4 w-4" />}>
            {content.importantNote}
          </SectionNote>
        </div>
      </div>
    </article>
  </section>
);

const StepRow = ({ step, isLast }: { step: FlowPreviewStep; isLast: boolean }) => {
  const t = toneTokens[step.tone];
  return (
    <div className="flex w-full items-stretch gap-2">
      <div className="flex flex-col items-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-full border text-xxsm font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
        {!isLast && (
          <span aria-hidden="true" className="mt-1 mb-1 w-px flex-1 bg-[var(--term-border)]" />
        )}
      </div>
      <article
        className={cn(
          'flex-1 min-w-0 flex flex-col gap-1 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md shadow-[0_1px_0_var(--term-border)]',
          t.border,
        )}
      >
        <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
          {step.title}
        </h3>
        <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </article>
    </div>
  );
};
