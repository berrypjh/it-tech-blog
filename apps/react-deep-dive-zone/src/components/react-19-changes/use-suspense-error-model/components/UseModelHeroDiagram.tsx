import { cx } from '@berrypjh/react-ui';
import { AlertTriangle, CheckCircle2, type LucideIcon, Timer } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroBranch, StatusId, UseSuspenseErrorModelContent } from '../content';

type Props = { content: UseSuspenseErrorModelContent['hero'] };

const branchIcon: Record<StatusId, LucideIcon> = {
  pending: Timer,
  fulfilled: CheckCircle2,
  rejected: AlertTriangle,
};

/** Hero 핵심 비주얼: use(promise) 한 줄에서 갈라지는 세 결말. */
export const UseModelHeroDiagram = ({ content }: Props) => {
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

        <div className="rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-2.5 text-center shadow-[0_2px_0_var(--term-border)]">
          <code className="font-mono text-[11px] font-bold text-[var(--term-accent)]">
            {content.callLabel}
          </code>
        </div>

        <DownArrow />

        <div className="flex flex-col gap-sm">
          {content.branches.map((branch) => (
            <BranchRow key={branch.id} branch={branch} />
          ))}
        </div>
      </div>
    </HeroDiagramShell>
  );
};

const BranchRow = ({ branch }: { branch: HeroBranch }) => {
  const Icon = branchIcon[branch.id];
  const t = toneTokens[branch.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={branch.tone} size="sm" className="h-8 w-8">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-[11px] font-bold tracking-tight', t.text)}>
          {branch.label}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{branch.caption}</span>
      </div>
    </article>
  );
};
