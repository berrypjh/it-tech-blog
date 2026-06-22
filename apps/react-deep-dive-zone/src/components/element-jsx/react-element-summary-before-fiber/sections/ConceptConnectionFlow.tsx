import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { AnswerStep, ReactElementSummaryBeforeFiberContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, WorkflowIcon } from '../icons';
import { neutralBorder, toneChip, toneText } from '../localTone';

type Props = { content: ReactElementSummaryBeforeFiberContent['conceptFlow'] };

export const ConceptConnectionFlow = ({ content }: Props) => (
  <section
    id="concept-flow"
    aria-labelledby="heading-concept-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="concept-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* 한 줄 JSX가 거치는 변환 흐름 */}
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,_minmax(0,_1fr))] gap-md items-stretch">
        {content.answerSteps.map((step, idx) => (
          <li key={step.id} className="relative flex min-w-0">
            <StepCard step={step} />
            {idx < content.answerSteps.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  'pointer-events-none absolute hidden lg:flex items-center justify-center',
                  'top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full z-10',
                  'bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]',
                )}
              >
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* 결론 */}
      <div
        className={cn(
          'flex items-center gap-sm rounded-xl border p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
        >
          <CheckCircleIcon className="h-5 w-5" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.emphasis}
        </p>
      </div>
    </div>
  </section>
);

const StepCard = ({ step }: { step: AnswerStep }) => {
  return (
    <article
      className={cn(
        'flex min-w-0 flex-1 flex-col gap-2 rounded-xl border p-md bg-[var(--term-bg)]',
        neutralBorder,
      )}
    >
      <span
        className={cn(
          'inline-flex w-7 h-7 items-center justify-center rounded-full border font-mono text-[11px] font-bold tabular-nums',
          toneChip(step.tone),
        )}
      >
        {step.number}
      </span>
      <code
        className={cn(
          'font-mono text-xsm font-bold tracking-tight break-keep [overflow-wrap:anywhere]',
          toneText(step.tone),
        )}
      >
        {step.title}
      </code>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep [overflow-wrap:anywhere]">
        {step.body}
      </p>
    </article>
  );
};
