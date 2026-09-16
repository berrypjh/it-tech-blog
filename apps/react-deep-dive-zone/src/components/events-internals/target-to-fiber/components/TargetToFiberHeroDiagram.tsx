import { cx } from '@berrypjh/react-ui';
import { Boxes, MousePointerClick } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { TargetToFiberContent } from '../content';

type Props = { content: TargetToFiberContent['hero'] };

/** Hero 핵심 비주얼: DOM 노드 카드에서 Fiber 필드 카드로 건너가는 대응. */
export const TargetToFiberHeroDiagram = ({ content }: Props) => {
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

        <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
          <header className="mb-2 flex items-center gap-1.5 border-b border-dashed border-[var(--term-border)] pb-2">
            <MousePointerClick
              className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]"
              aria-hidden="true"
            />
            <code className="font-mono text-[11px] font-bold text-[var(--term-fg)]">
              {content.domLabel}
            </code>
          </header>
          <code className="font-mono text-[11px] text-[var(--term-muted)] break-all">
            {content.domCode}
          </code>
        </article>

        <DownArrow />

        <article
          className={cx(
            'rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
            toneTokens.indigo.border,
          )}
        >
          <header className="mb-2 flex items-center gap-1.5 border-b border-dashed border-[var(--term-border)] pb-2">
            <Boxes
              className={cx('h-3.5 w-3.5 shrink-0', toneTokens.indigo.text)}
              aria-hidden="true"
            />
            <code className={cx('font-mono text-[11px] font-bold', toneTokens.indigo.text)}>
              {content.fiberLabel}
            </code>
          </header>
          <ul className="flex flex-col gap-1">
            {content.fiberRows.map((row) => (
              <li
                key={row.key}
                className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-baseline gap-2"
              >
                <code className="font-mono text-[10px] text-[var(--term-dim)]">{row.key}:</code>
                <code className="font-mono text-[10px] text-[var(--term-fg)] break-all">
                  {row.value}
                </code>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </HeroDiagramShell>
  );
};
