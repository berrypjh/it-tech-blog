import { cx } from '@berrypjh/react-ui';
import { Boxes, Code2, type LucideIcon, PenLine, Workflow } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroStep, PathStepId, RefAsPropElementShapeContent } from '../content';

type Props = { content: RefAsPropElementShapeContent['hero'] };

const stepIcon: Record<PathStepId, LucideIcon> = {
  jsx: PenLine,
  create: Code2,
  element: Boxes,
  call: Workflow,
};

/** Hero 핵심 비주얼: ref가 props 안에서만 흐르는 네 칸. */
export const RefAsPropHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.description}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <div className="flex items-center justify-between">
          <TerminalBadge dotClassName="bg-[var(--term-accent)]">
            {content.diagramBadge}
          </TerminalBadge>
          <span className="font-mono text-[10px] text-[var(--term-muted)]">
            {'//'} {content.diagramCaption}
          </span>
        </div>

        {content.steps.map((step, i) => (
          <div key={step.id} className="flex flex-col gap-sm">
            <StepRowItem step={step} />
            {i < content.steps.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const StepRowItem = ({ step }: { step: HeroStep }) => {
  const Icon = stepIcon[step.id];
  const t = toneTokens[step.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={step.tone} size="sm" className="h-8 w-8">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code
          className={cx(
            'font-mono text-[11px] font-bold tracking-tight [overflow-wrap:anywhere]',
            t.text,
          )}
        >
          {step.label}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{step.caption}</span>
      </div>
    </article>
  );
};
