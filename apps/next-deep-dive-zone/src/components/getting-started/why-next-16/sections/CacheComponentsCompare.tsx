'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { CacheToggle, Next16Content } from '../content';
import { CacheIcon } from '../icons';

type Props = { content: Next16Content['cache'] };

const ComparePanel = ({
  title,
  items,
  note,
  variant,
}: {
  title: string;
  items: string[];
  note: string;
  variant: 'old' | 'new';
}) => (
  <div
    className={cn(
      'flex h-full flex-col gap-md rounded-lg border p-md sm:p-lg',
      variant === 'new'
        ? 'border-cyan-300 bg-cyan-50/50 dark:border-cyan-700/70 dark:bg-cyan-950/20'
        : 'border-[var(--term-border)] bg-[var(--term-surface)]',
    )}
  >
    <h3
      className={cn(
        'text-md sm:text-lg font-bold tracking-tight',
        variant === 'new' ? 'text-cyan-700 dark:text-cyan-300' : 'text-[var(--term-muted)]',
      )}
    >
      {title}
    </h3>
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <code
            className={cn(
              'flex items-center gap-sm rounded-md border px-2 py-1.5 font-mono text-[11px] [overflow-wrap:anywhere]',
              variant === 'new'
                ? 'border-cyan-200 bg-[var(--term-bg)] text-cyan-800 dark:border-cyan-800/60 dark:text-cyan-200'
                : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)]',
            )}
          >
            {item}
          </code>
        </li>
      ))}
    </ul>
    <p className="mt-auto text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
      {note}
    </p>
  </div>
);

export const CacheComponentsCompare = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<CacheToggle['id']>(content.toggles[0].id);
  const selected = content.toggles.find((tg) => tg.id === selectedId) ?? content.toggles[0];
  const st = toneTokens[selected.tone];

  return (
    <section id="section-cache" aria-labelledby="heading-cache" className="space-y-lg">
      <SectionHeader
        id="cache"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CacheIcon className="h-5 w-5" />}
      />

      {/* 좌우 비교 */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
        <ComparePanel
          title={content.left.title}
          items={content.left.items}
          note={content.left.note}
          variant="old"
        />

        <div className="relative flex lg:flex-col items-center justify-center">
          <span
            aria-hidden="true"
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
          />
          <span
            aria-hidden="true"
            className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
          />
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--term-accent)] bg-[var(--term-bg)] text-xxsm font-bold tracking-wider text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]">
            VS
          </span>
        </div>

        <ComparePanel
          title={content.right.title}
          items={content.right.items}
          note={content.right.note}
          variant="new"
        />
      </div>

      {/* 토글 탭 + 설명 패널 */}
      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg">
        <ul className="flex flex-wrap gap-2" role="group" aria-label="cache state">
          {content.toggles.map((tg) => {
            const t = toneTokens[tg.tone];
            const isSelected = tg.id === selected.id;
            return (
              <li key={tg.id}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(tg.id)}
                  className={cn(
                    'inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-xsm font-bold transition-colors [overflow-wrap:anywhere]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)]',
                    isSelected
                      ? cn(t.chip, 'ring-1 ring-inset')
                      : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-[var(--term-accent)] hover:text-[var(--term-fg)]',
                  )}
                >
                  {tg.tab}
                </button>
              </li>
            );
          })}
        </ul>

        <div
          aria-live="polite"
          className="mt-md flex flex-col gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] p-md"
        >
          <h3 className={cn('text-md font-bold tracking-tight', st.text)}>{selected.title}</h3>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {selected.description}
          </p>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.keywordLabel}
            </span>
            <ul className="flex flex-wrap gap-1.5">
              {selected.keywords.map((kw) => (
                <li key={kw}>
                  <code
                    className={cn(
                      'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
                      st.chip,
                    )}
                  >
                    {kw}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
