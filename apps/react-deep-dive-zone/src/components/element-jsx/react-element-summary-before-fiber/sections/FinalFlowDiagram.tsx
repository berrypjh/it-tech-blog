import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { CodePanel } from '../../_shared/CodePanel';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { FinalFlowStep, ReactElementSummaryBeforeFiberContent } from '../content';
import { ArrowDownIcon, MapIcon, StarIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['finalFlow'] };

export const FinalFlowDiagram = ({ content }: Props) => (
  <section id="final-flow" aria-labelledby="heading-final-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
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
            <span className="flex justify-center py-1" aria-hidden="true">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300">
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
        'group flex flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        step.highlighted
          ? cn('ring-2 ring-sky-400/60 ring-offset-2 ring-offset-[var(--term-bg)]', t.border)
          : cn('border-[var(--term-border)]', t.borderHover),
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
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300"
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
      {step.code && <CodePanel code={step.code} language="JS" />}
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>
    </article>
  );
};
