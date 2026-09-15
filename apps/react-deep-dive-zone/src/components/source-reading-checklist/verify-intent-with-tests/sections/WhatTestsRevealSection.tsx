import { cx } from '@berrypjh/react-ui';
import { HelpCircle, Lightbulb, RotateCcw, ScanSearch, ShieldCheck } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { TestAsDocContent } from '../content';

type Props = { content: TestAsDocContent['whatTestsReveal'] };

const revealMeta = {
  guarantee: {
    tone: 'emerald' as const,
    Icon: ShieldCheck,
    label: 'Guarantee',
  },
  edge: {
    tone: 'amber' as const,
    Icon: Lightbulb,
    label: 'Edge Case',
  },
  regression: {
    tone: 'violet' as const,
    Icon: RotateCcw,
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
        icon={<ScanSearch className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.items.map((item) => {
          const meta = revealMeta[item.role];
          const t = toneTokens[meta.tone];
          const Icon = meta.Icon;
          return (
            <li key={item.role}>
              <article
                className={cx(
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
                    className={cx(
                      'inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1',
                      t.chip,
                      'text-[10px] font-mono font-bold uppercase tracking-wider',
                      'shadow-[0_2px_0_var(--term-border)]',
                    )}
                  >
                    <span aria-hidden="true" className={cx('block h-1 w-1 rounded-full', t.dot)} />
                    {meta.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cx(
                      'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                      t.chip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </header>

                <h3 className={cx('text-md sm:text-lg font-bold leading-snug break-keep', t.text)}>
                  {item.title}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {item.body}
                </p>

                <div
                  className={cx(
                    'mt-auto flex items-start gap-2 rounded-md border-2 p-3',
                    t.border,
                    t.chip,
                  )}
                >
                  <HelpCircle
                    className={cx('mt-0.5 h-4 w-4 shrink-0', t.text)}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <span className={cx('text-[10px] font-mono uppercase tracking-wider', t.text)}>
                      {content.questionLabel}
                    </span>
                    <p className={cx('text-xsm font-bold leading-snug break-keep', t.text)}>
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
