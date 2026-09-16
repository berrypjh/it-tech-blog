import { cx } from '@berrypjh/react-ui';
import { Binary } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { LaneBits, LaneShapeContent } from '../content';

import { BitRow } from './BitRow';

type Props = { content: LaneShapeContent['hero'] };

/** Hero 핵심 비주얼: 개별 lane 비트 두 줄이 OR로 합쳐져 pendingLanes가 되는 모습. */
export const LaneShapeHeroDiagram = ({ content }: Props) => {
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
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {'//'} {content.operandLabel}
          </p>
          <ul className="flex flex-col gap-2">
            {content.operands.map((lane) => (
              <li key={lane.id}>
                <LaneLine lane={lane} />
              </li>
            ))}
          </ul>
        </article>

        <DownArrow />

        <article
          className={cx(
            'rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
            toneTokens.violet.border,
          )}
        >
          <header className="mb-2 flex items-center gap-1.5">
            <Binary
              className={cx('h-3.5 w-3.5 shrink-0', toneTokens.violet.text)}
              aria-hidden="true"
            />
            <code className={cx('font-mono text-[11px] font-bold', toneTokens.violet.text)}>
              {content.resultLabel}
            </code>
          </header>
          <LaneLine lane={content.result} />
        </article>
      </div>
    </HeroDiagramShell>
  );
};

const LaneLine = ({ lane }: { lane: LaneBits }) => (
  <div className="flex flex-col gap-1">
    <code className={cx('font-mono text-[10px] font-bold', toneTokens[lane.tone].text)}>
      {lane.name}
    </code>
    <BitRow bits={lane.bits} tone={lane.tone} />
  </div>
);
