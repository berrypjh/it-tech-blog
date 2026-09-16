import { cx } from '@berrypjh/react-ui';
import { ArrowUp, Flag, type LucideIcon, RotateCcw, Search, Zap } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RecoveryModelOverviewContent, Stage, StageId } from '../content';

type Props = { content: RecoveryModelOverviewContent['hero'] };

const stageIcon: Record<StageId, LucideIcon> = {
  throw: Zap,
  classify: Search,
  boundary: ArrowUp,
  fallback: Flag,
  retry: RotateCcw,
};

/** Hero 핵심 비주얼: 세 갈래가 공유하는 다섯 칸을 세로로 압축한 경로. */
export const RecoveryModelHeroDiagram = ({ content }: Props) => {
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

        {content.stages.map((stage, i) => (
          <div key={stage.id} className="flex flex-col gap-sm">
            <StageRow stage={stage} />
            {i < content.stages.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const StageRow = ({ stage }: { stage: Stage }) => {
  const Icon = stageIcon[stage.id];
  const t = toneTokens[stage.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={stage.tone} size="sm" className="h-8 w-8">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-[11px] font-bold tracking-tight', t.text)}>
          {stage.label}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{stage.caption}</span>
      </div>
    </article>
  );
};
