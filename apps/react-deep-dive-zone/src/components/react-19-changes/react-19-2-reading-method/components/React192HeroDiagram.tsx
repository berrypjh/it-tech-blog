import { cx } from '@berrypjh/react-ui';
import { Database, Gauge, Layers, type LucideIcon, Workflow } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ExpansionId, HeroAxis, React192ReadingMethodContent } from '../content';

type Props = { content: React192ReadingMethodContent['hero'] };

const axisIcon: Record<ExpansionId, LucideIcon> = {
  cache: Database,
  ppr: Layers,
  batching: Workflow,
  tracks: Gauge,
};

/** Hero 핵심 비주얼: 19.2가 넓힌 네 축. */
export const React192HeroDiagram = ({ content }: Props) => {
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

        {content.axes.map((axis) => (
          <AxisRow key={axis.id} axis={axis} />
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const AxisRow = ({ axis }: { axis: HeroAxis }) => {
  const Icon = axisIcon[axis.id];
  const t = toneTokens[axis.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={axis.tone} size="sm" className="h-8 w-8">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code
          className={cx(
            'font-mono text-[11px] font-bold tracking-tight [overflow-wrap:anywhere]',
            t.text,
          )}
        >
          {axis.label}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{axis.caption}</span>
      </div>
    </article>
  );
};
