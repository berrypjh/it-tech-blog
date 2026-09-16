import { cx } from '@berrypjh/react-ui';
import { ListOrdered } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { DispatchQueueContent, QueueEntry } from '../content';

type Props = { content: DispatchQueueContent['hero'] };

/** Hero 핵심 비주얼: 큐에 쌓인 리스너 엔트리를 인덱스와 함께 나열한 목록. */
export const DispatchQueueHeroDiagram = ({ content }: Props) => {
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
            <ListOrdered
              className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]"
              aria-hidden="true"
            />
            <code className="font-mono text-[11px] font-bold text-[var(--term-fg)]">
              {content.queueLabel}
            </code>
          </header>

          <ol className="flex flex-col gap-1.5">
            {content.entries.map((entry, i) => (
              <li key={entry.id}>
                <EntryRow entry={entry} index={i} />
              </li>
            ))}
          </ol>

          <p className="mt-2 border-t border-dashed border-[var(--term-border)] pt-2 font-mono text-[10px] text-[var(--term-dim)]">
            {content.tailLabel}
          </p>
        </article>
      </div>
    </HeroDiagramShell>
  );
};

const EntryRow = ({ entry, index }: { entry: QueueEntry; index: number }) => {
  const t = toneTokens[entry.tone];
  return (
    <div className="flex items-center gap-2 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-1.5">
      <span className="font-mono text-[10px] tabular-nums text-[var(--term-dim)]">[{index}]</span>
      <code className="font-mono text-[11px] font-bold text-[var(--term-fg)] break-all">
        {entry.handler}
      </code>
      <code
        className={cx(
          'ml-auto shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] font-bold',
          t.chip,
        )}
      >
        {entry.phase}
      </code>
    </div>
  );
};
