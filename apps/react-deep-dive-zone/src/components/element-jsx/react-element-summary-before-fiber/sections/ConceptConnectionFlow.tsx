import { cn } from '@it-tech-blog/utils';

import { ArrowDown, ArrowRight, CheckCircle2, Workflow } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { AnswerStep, ReactElementSummaryBeforeFiberContent } from '../content';

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
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <div
      className={cn(
        'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        {content.answerSteps.map((step, idx) => (
          <StepWithArrow key={step.id} step={step} last={idx === content.answerSteps.length - 1} />
        ))}
      </ol>

      <SectionNote icon={<CheckCircle2 className="h-4 w-4" aria-hidden="true" />}>
        {content.emphasis}
      </SectionNote>
    </div>
  </section>
);

const StepWithArrow = ({ step, last }: { step: AnswerStep; last: boolean }) => (
  <>
    <li className="flex min-w-0">
      <StepCard step={step} />
    </li>
    {!last && (
      <li className="flex items-center justify-center lg:-mx-2" aria-hidden="true">
        <span className="lg:hidden inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="hidden lg:inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </li>
    )}
  </>
);

const StepCard = ({ step }: { step: AnswerStep }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-md rounded-2xl border p-md transition-all hover:-translate-y-0.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full border font-mono text-sm font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
      </header>
      <h3 className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
        {step.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>
    </article>
  );
};
