'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { Next16Content } from '../content';
import { CheckIcon, WarnIcon } from '../icons';

type Props = { content: Next16Content['checklist'] };

export const OutdatedMaterialChecklist = ({ content }: Props) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="section-checklist" aria-labelledby="heading-checklist" className="space-y-lg">
      <SectionHeader
        id="checklist"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<WarnIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.items.map((item) => {
          const isChecked = !!checked[item.id];
          return (
            <li key={item.id} className="flex">
              <button
                type="button"
                role="checkbox"
                aria-checked={isChecked}
                onClick={() => toggle(item.id)}
                className={cn(
                  'group flex h-full w-full flex-col gap-sm rounded-lg border p-md text-left transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  isChecked
                    ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)]'
                    : 'border-[var(--term-border)] bg-[var(--term-bg)] hover:border-[var(--term-accent)]',
                )}
              >
                <div className="flex items-start gap-sm">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border',
                      isChecked
                        ? 'border-[var(--term-accent)] bg-[var(--term-accent)] text-[var(--term-bg)]'
                        : 'border-[var(--term-border)] bg-[var(--term-bg)]',
                    )}
                  >
                    {isChecked && <CheckIcon className="h-3.5 w-3.5" />}
                  </span>
                  <span className="text-xsm font-bold text-[var(--term-fg)] break-keep leading-snug">
                    {item.question}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 pl-7">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                    {content.correctionLabel}
                  </span>
                  <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                    {item.correction}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
