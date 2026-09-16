import { cx } from '@berrypjh/react-ui';
import { AlertTriangle, ArrowRight } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import type { HeroSlot, RulesOfHooksContent } from '../content';

type Props = { content: RulesOfHooksContent['hero'] };

/** Hero 핵심 비주얼: 슬롯 번호는 그대로인데 들어오는 Hook만 어긋나는 대조표. */
export const RulesOfHooksHeroDiagram = ({ content }: Props) => {
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

        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-sm">
          <span className="font-mono text-[10px] text-[var(--term-dim)]">slot</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.expectedLabel}
          </span>
          <span />
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.actualLabel}
          </span>
        </div>

        <ul className="flex flex-col gap-1.5">
          {content.slots.map((slot) => (
            <li key={slot.id}>
              <SlotRow slot={slot} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const SlotRow = ({ slot }: { slot: HeroSlot }) => (
  <div
    className={cx(
      'grid grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 rounded-md border px-sm py-2',
      slot.status === 'ok'
        ? 'border-[var(--term-border)] bg-[var(--term-surface)]'
        : 'border-rose-200/70 bg-rose-50/40 dark:border-rose-800/60 dark:bg-rose-950/20',
    )}
  >
    <span className="font-mono text-[10px] tabular-nums text-[var(--term-dim)]">{slot.index}</span>
    <code className="font-mono text-[11px] text-[var(--term-muted)] break-all">
      {slot.expected}
    </code>
    {slot.status === 'ok' ? (
      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" />
    ) : (
      <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-rose-600 dark:text-rose-300" />
    )}
    <code
      className={cx(
        'font-mono text-[11px] font-bold break-all',
        slot.status === 'ok' ? 'text-[var(--term-fg)]' : 'text-rose-600 dark:text-rose-300',
      )}
    >
      {slot.actual}
    </code>
  </div>
);
