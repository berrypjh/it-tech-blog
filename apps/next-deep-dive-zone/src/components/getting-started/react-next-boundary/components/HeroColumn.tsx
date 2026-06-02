import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { LucideIcon } from 'lucide-react';

import { toneTokens } from '../../../shared/tones';
import type { ToneKey } from '../content';

export type FlowNodeView = { key: string; label: string; Icon: LucideIcon };

type Props = {
  title: string;
  tone: ToneKey;
  nodes: FlowNodeView[];
  note: string;
  pill: string;
  variant: 'flow' | 'bridge';
};

export const HeroColumn = ({ title, tone, nodes, note, pill, variant }: Props) => {
  const t = toneTokens[tone];
  const isBridge = variant === 'bridge';

  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border p-md sm:p-lg transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        isBridge
          ? 'border-dashed border-[var(--term-accent)] bg-[var(--term-surface)]'
          : cn('border-[var(--term-border)] bg-[var(--term-bg)]', t.borderHover),
      )}
    >
      <div className="flex items-center gap-sm">
        <span aria-hidden="true" className={cn('inline-block h-2 w-2 rounded-full', t.dot)} />
        <h2 className={cn('text-md sm:text-lg font-bold tracking-tight', t.text)}>{title}</h2>
      </div>

      <ul className={cn('flex flex-col gap-1.5', isBridge && 'gap-2')}>
        {nodes.map((node, idx) => (
          <Fragment key={node.key}>
            <li>
              <div
                className={cn(
                  'flex items-center gap-sm rounded-md border px-sm py-2',
                  isBridge
                    ? cn(t.chip, 'justify-center text-center')
                    : 'border-[var(--term-border)] bg-[var(--term-surface)]',
                )}
              >
                <span aria-hidden="true" className={cn('shrink-0', !isBridge && t.text)}>
                  <node.Icon className="h-4 w-4" />
                </span>
                <span
                  className={cn(
                    'text-xsm font-bold break-keep',
                    isBridge ? '' : 'text-[var(--term-fg)]',
                  )}
                >
                  {node.label}
                </span>
              </div>
            </li>
            {!isBridge && idx < nodes.length - 1 && (
              <li
                aria-hidden="true"
                className="flex justify-center text-[var(--term-dim)] text-[10px] leading-none"
              >
                ↓
              </li>
            )}
          </Fragment>
        ))}
      </ul>

      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{note}</p>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold',
            t.chip,
          )}
        >
          <span aria-hidden="true" className={cn('inline-block h-1.5 w-1.5 rounded-full', t.dot)} />
          {pill}
        </span>
      </div>
    </article>
  );
};
