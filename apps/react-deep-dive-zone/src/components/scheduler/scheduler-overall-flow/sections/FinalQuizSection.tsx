'use client';

import { useState } from 'react';

import { cx } from '@berrypjh/react-ui';
import { ChevronRight, Eye, EyeOff, HelpCircle, Lightbulb, Trophy } from 'lucide-react';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { FullFlowContent } from '../content';

type Props = { content: FullFlowContent['quiz'] };

export const FinalQuizSection = ({ content }: Props) => {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setRevealed((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section aria-labelledby="heading-quiz">
      <NumberedSectionHeader
        id="quiz"
        number={content.number}
        eyebrow={content.helper}
        title={content.title}
        icon={<Trophy className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.items.map((item) => {
          const isOpen = !!revealed[item.number];
          const labelText = isOpen ? content.hideLabel : content.showLabel;
          const ToggleIcon = isOpen ? EyeOff : Eye;
          return (
            <li key={item.number} className="h-full">
              <article
                className={cx(
                  'flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
                  'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cx(
                      'inline-flex h-9 w-9 items-center justify-center rounded-xl',
                      'bg-blue-600 text-white font-mono text-xsm font-bold tabular-nums dark:bg-blue-500',
                    )}
                  >
                    {item.number}
                  </span>
                  <HelpCircle
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-500 dark:text-blue-400"
                  />
                </header>

                <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {item.question}
                </p>

                <button
                  type="button"
                  onClick={() => toggle(item.number)}
                  aria-expanded={isOpen}
                  aria-controls={`quiz-answer-${item.number}`}
                  className={cx(
                    'inline-flex items-center justify-center gap-1.5 self-start rounded-full px-3.5 py-1.5',
                    'text-xsm font-bold border-2',
                    'border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100',
                    'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200 dark:hover:bg-blue-950/60',
                    'transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  )}
                >
                  <ToggleIcon aria-hidden="true" className="h-4 w-4" />
                  {labelText}
                  <ChevronRight
                    aria-hidden="true"
                    className={cx('h-3.5 w-3.5 transition-transform', isOpen ? 'rotate-90' : '')}
                  />
                </button>

                <div
                  id={`quiz-answer-${item.number}`}
                  aria-live="polite"
                  className="mt-auto"
                  hidden={!isOpen}
                >
                  <article
                    className={cx(
                      'flex flex-col gap-2 rounded-xl border-2 p-3',
                      'border-emerald-300/80 bg-emerald-50/80 dark:border-emerald-700/60 dark:bg-emerald-950/30',
                    )}
                  >
                    <header className="flex items-center gap-1.5">
                      <Lightbulb
                        aria-hidden="true"
                        className="h-4 w-4 text-emerald-700 dark:text-emerald-300"
                      />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                        {content.answerHeading}
                      </span>
                    </header>
                    <p className="text-xsm sm:text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
                      {item.answer}
                    </p>
                    <p className="text-[11px] sm:text-xsm leading-relaxed text-emerald-900/80 dark:text-emerald-100/80 break-keep">
                      {item.answerDetail}
                    </p>
                  </article>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
