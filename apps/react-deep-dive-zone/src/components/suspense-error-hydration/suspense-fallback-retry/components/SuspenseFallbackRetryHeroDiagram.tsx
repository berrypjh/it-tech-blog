import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, type LucideIcon, PauseCircle, RotateCcw, Timer } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Phase, PhaseId, SuspenseFallbackRetryContent } from '../content';

type Props = { content: SuspenseFallbackRetryContent['hero'] };

const phaseIcon: Record<PhaseId, LucideIcon> = {
  suspend: PauseCircle,
  fallback: Timer,
  resolve: CheckCircle2,
  retry: RotateCcw,
};

/** Hero 핵심 비주얼: suspend에서 retry까지 한 바퀴 도는 fallback 사이클. */
export const SuspenseFallbackRetryHeroDiagram = ({ content }: Props) => {
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

        {content.phases.map((phase, i) => (
          <div key={phase.id} className="flex flex-col gap-sm">
            <PhaseCard phase={phase} />
            {i < content.phases.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const PhaseCard = ({ phase }: { phase: Phase }) => {
  const Icon = phaseIcon[phase.id];
  const t = toneTokens[phase.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={phase.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-xsm font-bold tracking-tight', t.text)}>
          {phase.label}
        </code>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{phase.caption}</span>
      </div>
    </article>
  );
};
