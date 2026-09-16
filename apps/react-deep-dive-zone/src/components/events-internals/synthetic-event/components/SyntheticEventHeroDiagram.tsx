import { cx } from '@berrypjh/react-ui';
import { Package } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { SyntheticEventContent } from '../content';

type Props = { content: SyntheticEventContent['hero'] };

/** Hero 핵심 비주얼: SyntheticEvent 객체 한 장을 열어 필드를 나열한다. nativeEvent 행만 강조. */
export const SyntheticEventHeroDiagram = ({ content }: Props) => {
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

        <article
          className={cx(
            'rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
            toneTokens.teal.border,
          )}
        >
          <header className="mb-2 flex items-center gap-1.5 border-b border-dashed border-[var(--term-border)] pb-2">
            <Package
              className={cx('h-3.5 w-3.5 shrink-0', toneTokens.teal.text)}
              aria-hidden="true"
            />
            <code className={cx('font-mono text-[11px] font-bold', toneTokens.teal.text)}>
              {content.objectLabel}
            </code>
          </header>

          <ul className="flex flex-col gap-1">
            {content.fields.map((field) => {
              const isNative = field.name === 'nativeEvent';
              return (
                <li
                  key={field.name}
                  className={cx(
                    'grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-baseline gap-2 rounded-md px-sm py-1.5',
                    isNative && 'bg-[var(--term-surface)]',
                  )}
                >
                  <code
                    className={cx(
                      'font-mono text-[10px]',
                      isNative ? toneTokens.sky.text : 'text-[var(--term-dim)]',
                    )}
                  >
                    {field.name}:
                  </code>
                  <code className="font-mono text-[10px] text-[var(--term-fg)] break-all">
                    {field.value}
                  </code>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </HeroDiagramShell>
  );
};
