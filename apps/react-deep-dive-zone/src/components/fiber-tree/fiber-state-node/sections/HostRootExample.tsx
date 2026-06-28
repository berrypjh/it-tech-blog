import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { HostRootDiagram } from '../components/HostRootDiagram';
import type { FiberStateNodeContent, FlowStep } from '../content';
import { ArrowDownIcon, WorkflowIcon } from '../icons';

type Props = { content: FiberStateNodeContent['hostRoot'] };

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
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-1">
          {`// ${content.flowLabel}`}
        </h3>
        <ol className="flex flex-col gap-2">
          {content.flowSteps.map((step, idx) => (
            <li key={step.id} className="flex flex-col">
              <StepCard step={step} />
              {idx < content.flowSteps.length - 1 && (
                <span aria-hidden="true" className="flex justify-center py-1">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
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

const StepCard = ({ step }: { step: FlowStep }) => (
  <article
    className={cn(
      'rounded-xl border-2 p-sm sm:p-md',
      toneTokens[step.tone].chip,
      step.isEmphasis && 'shadow-[0_4px_16px_-8px_rgba(16,185,129,0.5)]',
    )}
  >
    <code className="font-mono text-[12.5px] sm:text-xsm font-bold break-all">{step.code}</code>
  </article>
);
