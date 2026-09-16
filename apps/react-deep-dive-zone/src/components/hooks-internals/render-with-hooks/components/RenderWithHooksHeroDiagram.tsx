import { cx } from '@berrypjh/react-ui';
import { Boxes, Code2, type LucideIcon, Sparkles } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RenderWithHooksContent, StageId, StageNode } from '../content';

type Props = { content: RenderWithHooksContent['hero'] };

const stageIcon: Record<StageId, LucideIcon> = {
  component: Code2,
  'render-with-hooks': Boxes,
  'hooks-ready': Sparkles,
};

/**
 * Hero 핵심 비주얼.
 * 가운데 renderWithHooks 단계만 실선 프레임으로 감싸 "무대를 세운 뒤 안에서 실행된다"를 보여준다.
 */
export const RenderWithHooksHeroDiagram = ({ content }: Props) => {
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
            <StageCard stage={stage} framed={stage.id === 'render-with-hooks'} />
            {i < content.stages.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const StageCard = ({ stage, framed }: { stage: StageNode; framed?: boolean }) => {
  const Icon = stageIcon[stage.id];
  return (
    <article
      className={cx(
        'flex items-center gap-sm rounded-xl bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        framed
          ? cx('border-2', toneTokens[stage.tone].border)
          : 'border border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={stage.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code
          className={cx(
            'font-mono text-xsm font-bold tracking-tight break-all',
            toneTokens[stage.tone].text,
          )}
        >
          {stage.label}
        </code>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{stage.caption}</span>
      </div>
    </article>
  );
};
