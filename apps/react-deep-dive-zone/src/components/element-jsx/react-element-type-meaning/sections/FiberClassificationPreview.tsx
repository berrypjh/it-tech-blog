import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../start/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
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

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-gradient-to-r from-sky-50 via-violet-50 to-teal-50',
        'dark:from-sky-950/40 dark:via-violet-950/40 dark:to-teal-950/40',
        'border border-sky-200/70 dark:border-sky-800/60',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-300 shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.summary}
      </p>
    </div>
  </section>
);

const ItemWithArrow = ({ step, last }: { step: FiberFlowStep; last: boolean }) => (
  <>
    <li className="flex">
      <FlowCard step={step} />
    </li>
    {!last && (
      <li className="flex items-center justify-center" aria-hidden="true">
        <span className="lg:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300">
          <ArrowDownIcon className="h-4 w-4" />
        </span>
        <span className="hidden lg:inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white shadow-md">
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      </li>
    )}
  </>
);

const FlowCard = ({ step }: { step: FiberFlowStep }) => {
  const t = toneTokens[step.tone];
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          <span className="font-mono tabular-nums">step {step.number}</span>
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>
      <h3 className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
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
                  t.chip,
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
