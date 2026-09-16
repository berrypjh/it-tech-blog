import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, Layers, Target } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { PickNextWorkContent } from '../content';

type Props = { content: PickNextWorkContent['hero'] };

/** Hero 핵심 비주얼: pendingLanes 목록에서 한 줄만 선택되어 nextLanes가 되는 모습. */
export const PickNextWorkHeroDiagram = ({ content }: Props) => {
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
            <Layers className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
            <code className="font-mono text-[11px] font-bold text-[var(--term-fg)]">
              {content.pendingLabel}
            </code>
          </header>

          <ul className="flex flex-col gap-1.5">
            {content.pending.map((lane) => {
              const t = toneTokens[lane.tone];
              return (
                <li
                  key={lane.id}
                  className={cx(
                    'flex items-center gap-2 rounded-md border px-sm py-1.5',
                    lane.selected
                      ? cx('border-2', t.border, 'bg-[var(--term-bg)]')
                      : 'border-[var(--term-border)] bg-[var(--term-surface)]',
                  )}
                >
                  <code
                    className={cx(
                      'font-mono text-[11px] font-bold break-all',
                      lane.selected ? t.text : 'text-[var(--term-muted)]',
                    )}
                  >
                    {lane.label}
                  </code>
                  {lane.selected && (
                    <CheckCircle2 className={cx('ml-auto h-3.5 w-3.5 shrink-0', t.text)} />
                  )}
                </li>
              );
            })}
          </ul>
        </article>

        <DownArrow />

        <article
          className={cx(
            'flex items-center gap-sm rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
            toneTokens.emerald.border,
          )}
        >
          <Target className={cx('h-4 w-4 shrink-0', toneTokens.emerald.text)} aria-hidden="true" />
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {content.pickedLabel}
            </span>
            <code className={cx('font-mono text-xsm font-bold break-all', toneTokens.emerald.text)}>
              {content.picked}
            </code>
          </div>
        </article>
      </div>
    </HeroDiagramShell>
  );
};
