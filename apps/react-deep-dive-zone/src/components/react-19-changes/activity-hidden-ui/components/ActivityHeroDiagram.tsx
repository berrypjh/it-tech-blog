import { cx } from '@berrypjh/react-ui';
import { Eye, EyeOff, type LucideIcon, ShieldCheck, Sparkles } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ActivityHiddenUiContent, HeroPhase, PhaseId } from '../content';

type Props = { content: ActivityHiddenUiContent['hero'] };

const phaseIcon: Record<PhaseId, LucideIcon> = {
  visible: Eye,
  hide: EyeOff,
  keep: ShieldCheck,
  restore: Sparkles,
};

/** Hero 핵심 비주얼: 숨겼다 돌아오는 동안 무엇이 남는지. */
export const ActivityHeroDiagram = ({ content }: Props) => {
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
            <PhaseRow phase={phase} />
            {i < content.phases.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const PhaseRow = ({ phase }: { phase: HeroPhase }) => {
  const Icon = phaseIcon[phase.id];
  const t = toneTokens[phase.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={phase.tone} size="sm" className="h-8 w-8">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-[11px] font-bold tracking-tight', t.text)}>
          {phase.label}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{phase.caption}</span>
      </div>
    </article>
  );
};
