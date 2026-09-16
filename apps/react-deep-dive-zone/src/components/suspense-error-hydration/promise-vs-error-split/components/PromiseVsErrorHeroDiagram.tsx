import { cx } from '@berrypjh/react-ui';
import { AlertTriangle, HelpCircle, Timer } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { Branch, PromiseVsErrorSplitContent } from '../content';

type Props = { content: PromiseVsErrorSplitContent['hero'] };

/** Hero 핵심 비주얼: 판별 조건 한 줄 아래로 두 갈래 결과가 갈라지는 구조. */
export const PromiseVsErrorHeroDiagram = ({ content }: Props) => {
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

        <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] p-md shadow-[0_2px_0_var(--term-border)]">
          <header className="mb-1.5 flex items-center gap-1.5">
            <HelpCircle
              className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]"
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {content.checkLabel}
            </span>
          </header>
          <code className="font-mono text-[11px] font-bold text-[var(--term-fg)] break-all">
            {content.check}
          </code>
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
  const Icon = branch.id === 'thenable' ? Timer : AlertTriangle;
  const t = toneTokens[branch.tone];
  return (
    <article
      className={cx(
        'flex items-start gap-sm rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <Icon className={cx('mt-0.5 h-4 w-4 shrink-0', t.text)} />
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-[11px] font-bold', t.text)}>{branch.label}</code>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{branch.outcome}</span>
      </div>
    </article>
  );
};
