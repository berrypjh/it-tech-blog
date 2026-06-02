'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { UsageVsInternalsContent } from '../content';
import { CheckIcon, ChecklistIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['checklist'] };

export const LearningModeChecklist = ({ content }: Props) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="section-checklist" aria-labelledby="heading-checklist" className="space-y-lg">
      <SectionHeader
        id="checklist"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.hint}
        icon={<ChecklistIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
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
                  'group flex w-full items-start gap-sm rounded-lg border p-md text-left transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  isChecked
                    ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)]'
                    : 'border-[var(--term-border)] bg-[var(--term-bg)] hover:border-[var(--term-accent)]',
                )}
              >
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
                <span
                  className={cn(
                    'text-xsm leading-snug break-keep',
                    isChecked ? 'text-[var(--term-fg)] font-medium' : 'text-[var(--term-muted)]',
                  )}
                >
                  {item.text}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
