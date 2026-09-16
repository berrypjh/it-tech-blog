import { cx } from '@berrypjh/react-ui';
import { Gauge, type LucideIcon, RefreshCw, SendHorizontal, Workflow } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Branch, BranchId, PriorityReplayActionContent } from '../content';

type Props = { content: PriorityReplayActionContent['hero'] };

const branchIcon: Record<BranchId, LucideIcon> = {
  priority: Gauge,
  replay: RefreshCw,
  action: SendHorizontal,
};

/** Hero 핵심 비주얼: 하나의 파이프라인 아래로 세 갈래 확장이 매달린 구조. */
export const PriorityReplayActionHeroDiagram = ({ content }: Props) => {
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

        <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] p-md shadow-[0_2px_0_var(--term-border)]">
          <Workflow className="h-4 w-4 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
          <span className="font-mono text-xsm font-bold text-[var(--term-fg)]">
            {content.pipelineLabel}
          </span>
        </article>

        <DownArrow />

        <ul className="flex flex-col gap-sm">
          {content.branches.map((branch) => (
            <li key={branch.id}>
              <BranchCard branch={branch} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const BranchCard = ({ branch }: { branch: Branch }) => {
  const Icon = branchIcon[branch.id];
  const t = toneTokens[branch.tone];
  return (
    <article
      className={cx(
        'flex items-center gap-sm rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <ToneIconBox tone={branch.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-xsm font-bold tracking-tight break-all', t.text)}>
          {branch.label}
        </code>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{branch.caption}</span>
      </div>
    </article>
  );
};
