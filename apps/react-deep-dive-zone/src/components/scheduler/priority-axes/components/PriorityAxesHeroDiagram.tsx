import { cx } from '@berrypjh/react-ui';
import { CalendarClock, Gauge, Layers, type LucideIcon } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Axis, AxisId, PriorityAxesContent } from '../content';

type Props = { content: PriorityAxesContent['hero'] };

const axisIcon: Record<AxisId, LucideIcon> = {
  event: Gauge,
  lane: Layers,
  scheduler: CalendarClock,
};

/** Hero 핵심 비주얼: 세 축을 층으로 쌓아 앞 축의 결과가 다음 축으로 내려가는 사슬을 보여준다. */
export const PriorityAxesHeroDiagram = ({ content }: Props) => {
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

        {content.axes.map((axis, i) => (
          <div key={axis.id} className="flex flex-col gap-sm">
            <AxisCard axis={axis} index={i} />
            {i < content.axes.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const AxisCard = ({ axis, index }: { axis: Axis; index: number }) => {
  const Icon = axisIcon[axis.id];
  const t = toneTokens[axis.tone];
  return (
    <article className="flex items-start gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={axis.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[10px] tabular-nums text-[var(--term-dim)]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <code className={cx('font-mono text-xsm font-bold tracking-tight', t.text)}>
            {axis.label}
          </code>
        </div>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{axis.question}</span>
      </div>
    </article>
  );
};
