import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberFlowStep, ReactElementTypeMeaningContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  AtomIcon,
  BoxIcon,
  SparklesIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: ReactElementTypeMeaningContent['fiber'] };

const iconMap = {
  box: BoxIcon,
  workflow: WorkflowIcon,
  atom: AtomIcon,
} as const;

export const FiberClassificationPreview = ({ content }: Props) => (
  <section id="fiber" aria-labelledby="heading-fiber" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="fiber"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.9fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.4fr)] gap-md items-stretch">
      {content.steps.map((step, idx) => (
        <ItemWithArrow key={step.id} step={step} last={idx === content.steps.length - 1} />
      ))}
    </ol>

    <SectionNote icon={<SparklesIcon className="h-4 w-4" />}>{content.summary}</SectionNote>
  </section>
);

const ItemWithArrow = ({ step, last }: { step: FiberFlowStep; last: boolean }) => (
  <>
    <li className="flex min-w-0">
      <FlowCard step={step} />
    </li>
    {!last && (
      <li className="flex items-center justify-center lg:-mx-2" aria-hidden="true">
        <span className="lg:hidden inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
        <span className="hidden lg:inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      </li>
    )}
  </>
);

const FlowCard = ({ step }: { step: FiberFlowStep }) => {
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            toneTokens[step.tone].chip,
          )}
        >
          <span className="font-mono tabular-nums">step {step.number}</span>
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl border',
            toneTokens[step.tone].chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>
      <h3
        className={cn(
          'font-mono text-sm font-bold tracking-tight break-keep [overflow-wrap:anywhere]',
          toneTokens[step.tone].text,
        )}
      >
        {step.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>

      {step.chips && step.chips.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
          {step.chips.map((chip) => (
            <li key={chip}>
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-mono font-bold',
                  toneTokens[step.tone].chip,
                )}
              >
                {chip}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
