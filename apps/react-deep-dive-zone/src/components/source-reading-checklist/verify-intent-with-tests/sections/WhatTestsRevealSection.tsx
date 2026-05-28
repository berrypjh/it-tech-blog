import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { TestAsDocContent } from '../content';
import {
  HelpCircleIcon,
  LightbulbIcon,
  RotateCcwIcon,
  ScanSearchIcon,
  ShieldCheckIcon,
} from '../icons';

type Props = { content: TestAsDocContent['whatTestsReveal'] };

const revealMeta = {
  guarantee: {
    tone: 'emerald' as const,
    Icon: ShieldCheckIcon,
    label: 'Guarantee',
  },
  edge: {
    tone: 'amber' as const,
    Icon: LightbulbIcon,
    label: 'Edge Case',
  },
  regression: {
    tone: 'violet' as const,
    Icon: RotateCcwIcon,
    label: 'Regression',
  },
} as const;

export const WhatTestsRevealSection = ({ content }: Props) => {
  return (
    <section
      id="section-what-tests-reveal"
      aria-labelledby="heading-what-tests-reveal"
      className="space-y-lg"
    >
      <SectionHeader
        id="what-tests-reveal"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ScanSearchIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.items.map((item) => {
          const meta = revealMeta[item.role];
          const t = toneTokens[meta.tone];
          const Icon = meta.Icon;
          return (
            <li key={item.role}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1',
                      t.chip,
                      'text-[10px] font-mono font-bold uppercase tracking-wider',
                      'shadow-[0_2px_0_var(--term-border)]',
                    )}
                  >
                    <span aria-hidden="true" className={cn('block h-1 w-1 rounded-full', t.dot)} />
                    {meta.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                      t.chip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </header>

                <h3 className={cn('text-md sm:text-lg font-bold leading-snug break-keep', t.text)}>
                  {item.title}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {item.body}
                </p>

                <div
                  className={cn(
                    'mt-auto flex items-start gap-2 rounded-md border-2 p-3',
                    t.border,
                    t.chip,
                  )}
                >
                  <HelpCircleIcon
                    className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <span className={cn('text-[10px] font-mono uppercase tracking-wider', t.text)}>
                      {content.questionLabel}
                    </span>
                    <p className={cn('text-xsm font-bold leading-snug break-keep', t.text)}>
                      {item.exampleQuestion}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
