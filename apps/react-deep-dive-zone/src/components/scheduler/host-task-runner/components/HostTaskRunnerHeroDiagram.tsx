import { cx } from '@berrypjh/react-ui';
import { Cpu, Layers, type LucideIcon, Plug } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HostTaskRunnerContent, Side, SideId } from '../content';

type Props = { content: HostTaskRunnerContent['hero'] };

const sideIcon: Record<SideId, LucideIcon> = {
  root: Layers,
  package: Cpu,
};

/** Hero 핵심 비주얼: 두 스케줄러 카드 사이를 scheduleCallback 한 줄이 잇는 구조. */
export const HostTaskRunnerHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.description}`;
  const [root, pkg] = content.sides;

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

        <SideCard side={root} />

        <DownArrow />

        <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
          <Plug className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
          <code className="font-mono text-[10px] font-bold text-[var(--term-fg)] break-all">
            {content.bridgeLabel}
          </code>
        </article>

        <DownArrow />

        <SideCard side={pkg} />
      </div>
    </HeroDiagramShell>
  );
};

const SideCard = ({ side }: { side: Side }) => {
  const Icon = sideIcon[side.id];
  const t = toneTokens[side.tone];
  return (
    <article
      className={cx(
        'flex items-start gap-sm rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <ToneIconBox tone={side.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-xsm font-bold tracking-tight', t.text)}>
          {side.title}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{side.badge}</span>
      </div>
    </article>
  );
};
