import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ToneKey } from '../../../start/_shared/tones';
import { HostRootDiagram } from '../components/HostRootDiagram';
import type { FiberStateNodeContent, FlowStep } from '../content';
import { ArrowDownIcon, WorkflowIcon } from '../icons';

type Props = { content: FiberStateNodeContent['hostRoot'] };

const stepStyle: Record<ToneKey, { card: string; code: string }> = {
  sky: {
    card: 'border-sky-200/80 bg-sky-50/50 dark:border-sky-800/60 dark:bg-sky-950/20',
    code: 'text-sky-800 dark:text-sky-100',
  },
  cyan: {
    card: 'border-cyan-200/80 bg-cyan-50/50 dark:border-cyan-800/60 dark:bg-cyan-950/20',
    code: 'text-cyan-800 dark:text-cyan-100',
  },
  violet: {
    card: 'border-violet-200/80 bg-violet-50/50 dark:border-violet-800/60 dark:bg-violet-950/20',
    code: 'text-violet-800 dark:text-violet-100',
  },
  emerald: {
    card: 'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/30',
    code: 'text-emerald-900 dark:text-emerald-100',
  },
  blue: {
    card: 'border-blue-200/80 bg-blue-50/50 dark:border-blue-800/60 dark:bg-blue-950/20',
    code: 'text-blue-800 dark:text-blue-100',
  },
  teal: {
    card: 'border-teal-200/80 bg-teal-50/50 dark:border-teal-800/60 dark:bg-teal-950/20',
    code: 'text-teal-800 dark:text-teal-100',
  },
  indigo: {
    card: 'border-indigo-200/80 bg-indigo-50/50 dark:border-indigo-800/60 dark:bg-indigo-950/20',
    code: 'text-indigo-800 dark:text-indigo-100',
  },
  amber: {
    card: 'border-amber-200/80 bg-amber-50/50 dark:border-amber-800/60 dark:bg-amber-950/20',
    code: 'text-amber-800 dark:text-amber-100',
  },
};

export const HostRootExample = ({ content }: Props) => (
  <section id="host-root" aria-labelledby="heading-host-root" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="host-root"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_0.58fr)] gap-md lg:gap-lg items-start">
      {/* Flow */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-1">
          {`// ${content.flowLabel}`}
        </h3>
        <ol className="flex flex-col gap-2">
          {content.flowSteps.map((step, idx) => (
            <li key={step.id} className="flex flex-col">
              <StepCard step={step} />
              {idx < content.flowSteps.length - 1 && (
                <span aria-hidden="true" className="flex justify-center py-1">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Diagram */}
      <div className="min-w-0">
        <HostRootDiagram diagram={content.diagram} />
      </div>
    </div>
  </section>
);

const StepCard = ({ step }: { step: FlowStep }) => {
  const tones = stepStyle[step.tone];
  return (
    <article
      className={cn(
        'rounded-xl border-2 p-sm sm:p-md',
        tones.card,
        step.isEmphasis && 'shadow-[0_4px_16px_-8px_rgba(16,185,129,0.5)]',
      )}
    >
      <code className={cn('font-mono text-[12.5px] sm:text-xsm font-bold break-all', tones.code)}>
        {step.code}
      </code>
    </article>
  );
};
