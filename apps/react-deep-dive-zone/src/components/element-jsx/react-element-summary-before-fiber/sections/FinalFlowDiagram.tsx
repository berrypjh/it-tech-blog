import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FinalFlowStep, ReactElementSummaryBeforeFiberContent } from '../content';
import { ArrowDownIcon, MapIcon, StarIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['finalFlow'] };

export const FinalFlowDiagram = ({ content }: Props) => (
  <section id="final-flow" aria-labelledby="heading-final-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="final-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.steps.map((step, idx) => (
        <li key={step.id} className="flex flex-col">
          <StepCard step={step} />
          {idx < content.steps.length - 1 && (
            <span className="flex justify-center py-1 lg:hidden" aria-hidden="true">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
            </span>
          )}
        </li>
      ))}
    </ol>
  </section>
);

const StepCard = ({ step }: { step: FinalFlowStep }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'group flex flex-col gap-md rounded-2xl border p-md transition-all hover:-translate-y-0.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        step.highlighted
          ? cn(
              'ring-2 ring-[var(--term-accent)]/60 ring-offset-2 ring-offset-[var(--term-bg)]',
              t.border,
            )
          : t.border,
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
        {step.highlighted && (
          <span
            className={cn(
              'inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider',
              t.text,
            )}
            aria-hidden="true"
          >
            <StarIcon className="h-3 w-3" />
            chapter focus
          </span>
        )}
      </header>
      <h3 className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
        {step.title}
      </h3>
      {step.code && <CodePreviewPanel code={step.code} language="JS" />}
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>
    </article>
  );
};
