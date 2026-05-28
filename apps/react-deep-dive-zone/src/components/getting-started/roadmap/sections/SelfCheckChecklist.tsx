'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ChecklistItem, RoadmapContent } from '../content';
import { CheckIcon, QuestionIcon } from '../icons';

type Props = { content: RoadmapContent['selfCheck'] };

const ChecklistRow = ({
  item,
  checked,
  onToggle,
}: {
  item: ChecklistItem;
  checked: boolean;
  onToggle: (id: string, next: boolean) => void;
}) => {
  return (
    <li>
      <label
        className={cn(
          'group flex items-start gap-sm p-sm rounded-md border border-transparent transition-colors cursor-pointer',
          'hover:bg-[var(--term-surface)] hover:border-[var(--term-border)]',
          checked && 'bg-emerald-50/40 dark:bg-emerald-950/20',
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(item.id, e.target.checked)}
          className="sr-only"
        />
        <span
          aria-hidden="true"
          className={cn(
            'shrink-0 inline-flex items-center justify-center w-5 h-5 mt-0.5 rounded border-2 transition-all',
            checked
              ? 'border-emerald-500 bg-emerald-500 text-white dark:border-emerald-400 dark:bg-emerald-400 dark:text-slate-900'
              : 'border-[var(--term-border)] bg-white dark:bg-slate-900 group-hover:border-sky-400',
          )}
        >
          {checked && <CheckIcon className="h-3.5 w-3.5" />}
        </span>
        <span
          className={cn(
            'text-xsm sm:text-sm leading-relaxed break-keep flex-1',
            checked ? 'text-[var(--term-muted)] line-through' : 'text-[var(--term-fg)]',
          )}
        >
          {item.text}
        </span>
      </label>
    </li>
  );
};

export const SelfCheckChecklist = ({ content }: Props) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const total = content.left.length + content.right.length;
  const done = Object.values(checked).filter(Boolean).length;
  const pct = (done / total) * 100;

  const onToggle = (id: string, next: boolean) => setChecked((prev) => ({ ...prev, [id]: next }));

  return (
    <section id="section-self-check" aria-labelledby="heading-self-check" className="space-y-md">
      <SectionHeader
        id="self-check"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<QuestionIcon className="h-5 w-5" />}
      />

      <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep -mt-sm">
        {content.supporting}
      </p>

      <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        {/* progress */}
        <header
          className="flex items-center gap-sm pb-sm mb-md border-b border-dashed border-[var(--term-border)]"
          aria-live="polite"
        >
          <span className="text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
            {content.progressLabel}
          </span>
          <span className="text-xsm font-bold font-mono text-[var(--term-fg)] tabular-nums">
            {done}/{total}
          </span>
          <div className="flex-1 h-1.5 rounded-full bg-[var(--term-border)] overflow-hidden">
            <div
              className="h-full bg-emerald-500 dark:bg-emerald-400 transition-all"
              style={{ width: `${pct}%` }}
              aria-hidden="true"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:divide-x md:divide-dashed md:divide-[var(--term-border)]">
          <ol className="flex flex-col gap-1.5 md:pr-md">
            {content.left.map((item) => (
              <ChecklistRow
                key={item.id}
                item={item}
                checked={!!checked[item.id]}
                onToggle={onToggle}
              />
            ))}
          </ol>
          <ol className="flex flex-col gap-1.5 md:pl-md">
            {content.right.map((item) => (
              <ChecklistRow
                key={item.id}
                item={item}
                checked={!!checked[item.id]}
                onToggle={onToggle}
              />
            ))}
          </ol>
        </div>
      </article>
    </section>
  );
};
