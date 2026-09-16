import { cx } from '@berrypjh/react-ui';
import { Database, type LucideIcon, MousePointerClick, Puzzle, Timer, Zap } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FormActionsEventSystemContent, HeroStage, StageId } from '../content';

type Props = { content: FormActionsEventSystemContent['hero'] };

const stageIcon: Record<StageId, LucideIcon> = {
  submit: MousePointerClick,
  plugin: Puzzle,
  formdata: Database,
  pending: Timer,
  transition: Zap,
};

/** Hero 핵심 비주얼: native submit이 transition까지 가는 다섯 칸. */
export const FormActionsHeroDiagram = ({ content }: Props) => {
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

const StageRow = ({ stage }: { stage: HeroStage }) => {
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
