import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FlowStep, JsxTransformFlowContent } from '../content';
import { ArrowRightIcon, AtomIcon, BoxIcon, CodeIcon, SettingsIcon, WorkflowIcon } from '../icons';
import { localTone } from '../localTone';

type Props = { content: JsxTransformFlowContent['compileFlow'] };

const iconMap = {
  code: CodeIcon,
  gear: SettingsIcon,
  box: BoxIcon,
  atom: AtomIcon,
} as const;

export const CompileFlowSteps = ({ content }: Props) => (
  <section
    id="compile-flow"
    aria-labelledby="heading-compile-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="compile-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,_minmax(0,_1fr))] gap-md items-stretch">
      {content.steps.map((step, idx) => (
        <li key={step.id} className="relative flex min-w-0">
          <FlowStepCard step={step} />
          {idx < content.steps.length - 1 && <StepConnector />}
        </li>
      ))}
    </ol>
  </section>
);

const FlowStepCard = ({ step }: { step: FlowStep }) => {
  const t = localTone(step.tone);
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            t.chip,
            t.text,
          )}
        >
          <span className="font-mono tabular-nums">step {step.number}</span>
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl',
            t.chip,
            t.text,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>
      <h3
        className={cn(
          'text-sm font-bold tracking-tight break-keep [overflow-wrap:anywhere]',
          t.text,
        )}
      >
        {step.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep [overflow-wrap:anywhere]">
        {step.body}
      </p>
    </article>
  );
};

const StepConnector = () => (
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
);
