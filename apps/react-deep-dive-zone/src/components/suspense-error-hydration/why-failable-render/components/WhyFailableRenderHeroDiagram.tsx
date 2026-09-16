import { cx } from '@berrypjh/react-ui';
import { AlertTriangle, Cpu, type LucideIcon, RefreshCw, Timer } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Branch, BranchId, WhyFailableRenderContent } from '../content';

type Props = { content: WhyFailableRenderContent['hero'] };

const branchIcon: Record<BranchId, LucideIcon> = {
  suspense: Timer,
  error: AlertTriangle,
  hydration: RefreshCw,
};

/** Hero 핵심 비주얼: 하나의 Render Phase에서 세 갈래로 갈라지는 실패 경로. */
export const WhyFailableRenderHeroDiagram = ({ content }: Props) => {
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
          <Cpu className="h-4 w-4 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
          <div className="flex min-w-0 flex-col gap-0.5">
            <code className="font-mono text-xsm font-bold text-[var(--term-fg)]">
              {content.rootLabel}
            </code>
            <span className="text-[10px] text-[var(--term-muted)] break-keep">
              {content.rootCaption}
            </span>
          </div>
        </article>

        <DownArrow />

        <ul className="flex flex-col gap-sm">
          {content.branches.map((branch) => (
            <li key={branch.id}>
              <BranchRow branch={branch} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const BranchRow = ({ branch }: { branch: Branch }) => {
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
        <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">{branch.label}</span>
        <code className={cx('font-mono text-[10px] font-bold break-all', t.text)}>
          {branch.outcome}
        </code>
      </div>
    </article>
  );
};
