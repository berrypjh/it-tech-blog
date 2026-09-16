import { cx } from '@berrypjh/react-ui';
import { Radio, Sprout } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { RootNativeEventContent } from '../content';

type Props = { content: RootNativeEventContent['hero'] };

/** Hero 핵심 비주얼: root 컨테이너 하나에 native listener 칩이 한꺼번에 매달린 모습. */
export const RootNativeEventHeroDiagram = ({ content }: Props) => {
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
            <Sprout className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
            <span className="font-mono text-[11px] font-bold text-[var(--term-fg)]">
              {content.rootLabel}
            </span>
          </header>
          <pre className="font-mono text-[11px] leading-relaxed text-[var(--term-muted)] whitespace-pre-wrap">
            {content.rootDom}
          </pre>
        </article>

        <DownArrow />

        <article
          className={cx(
            'rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
            toneTokens.cyan.border,
          )}
        >
          <header className="mb-2 flex items-center gap-1.5">
            <Radio className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {content.listenerLabel}
            </span>
          </header>
          <ul className="flex flex-wrap gap-1.5">
            {content.listeners.map((name) => (
              <li key={name}>
                <code
                  className={cx(
                    'inline-block rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold',
                    toneTokens.cyan.chip,
                  )}
                >
                  {name}
                </code>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-mono text-[10px] text-[var(--term-dim)]">{content.tailLabel}</p>
        </article>
      </div>
    </HeroDiagramShell>
  );
};
