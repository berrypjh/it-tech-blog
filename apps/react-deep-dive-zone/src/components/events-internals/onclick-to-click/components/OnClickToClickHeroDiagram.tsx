import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Sparkles } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { MappingPair, OnClickToClickContent } from '../content';

type Props = { content: OnClickToClickContent['hero'] };

/** Hero 핵심 비주얼: native 이름과 prop 이름을 좌우로 세운 매핑표. 예외 행만 강조한다. */
export const OnClickToClickHeroDiagram = ({ content }: Props) => {
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

        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-sm">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.nativeLabel}
          </span>
          <span />
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.propLabel}
          </span>
        </div>

        <ul className="flex flex-col gap-1.5">
          {content.pairs.map((pair) => (
            <li key={pair.native}>
              <PairRow pair={pair} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const PairRow = ({ pair }: { pair: MappingPair }) => (
  <div
    className={cx(
      'grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 rounded-md border px-sm py-2',
      pair.special
        ? cx('border-2', toneTokens.violet.border, 'bg-[var(--term-bg)]')
        : 'border-[var(--term-border)] bg-[var(--term-surface)]',
    )}
  >
    <code className="font-mono text-[11px] text-[var(--term-muted)] break-all">{pair.native}</code>
    {pair.special ? (
      <Sparkles className={cx('h-3.5 w-3.5 shrink-0', toneTokens.violet.text)} />
    ) : (
      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" />
    )}
    <code
      className={cx(
        'font-mono text-[11px] font-bold break-all',
        pair.special ? toneTokens.violet.text : 'text-[var(--term-fg)]',
      )}
    >
      {pair.prop}
    </code>
  </div>
);
