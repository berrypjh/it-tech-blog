import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../start/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { FlowStep, JsxTransformFlowContent } from '../content';
import { ArrowRightIcon, AtomIcon, BoxIcon, CodeIcon, SettingsIcon, WorkflowIcon } from '../icons';

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
        <li key={step.id} className="relative flex">
          <StepCard step={step} />
          {idx < content.steps.length - 1 && (
            <span
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute hidden lg:flex items-center justify-center',
                'top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full',
                'bg-[var(--term-bg)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300',
                'z-10',
              )}
            >
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
          )}
        </li>
      ))}
    </ol>
  </section>
);

const StepCard = ({ step }: { step: FlowStep }) => {
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
      <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
        <span className="text-[var(--term-fg)]">{step.title}</span>
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>
    </article>
  );
};
