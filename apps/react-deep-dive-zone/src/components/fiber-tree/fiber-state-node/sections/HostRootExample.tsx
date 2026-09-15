import { cx } from '@berrypjh/react-ui';
import { ArrowDown, Workflow } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { HostRootDiagram } from '../components/HostRootDiagram';
import type { FiberStateNodeContent, FlowStep } from '../content';

type Props = { content: FiberStateNodeContent['hostRoot'] };

export const HostRootExample = ({ content }: Props) => (
  <section id="host-root" aria-labelledby="heading-host-root" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="host-root"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
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
                    <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
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
    className={cx(
      'rounded-xl border-2 p-sm sm:p-md',
      step.isEmphasis
        ? cx(
            toneTokens[step.tone].fill.bg,
            toneTokens[step.tone].fill.border,
            toneTokens[step.tone].fill.text,
          )
        : toneTokens[step.tone].chip,
    )}
  >
    <code className="font-mono text-[12.5px] sm:text-xsm font-bold break-all">{step.code}</code>
  </article>
);
