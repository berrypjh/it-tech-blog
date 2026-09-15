import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import { HelpCircle, Quote } from 'lucide-react';

import type { ReconstructContent } from '../content';

type Props = { content: ReconstructContent['todayQuestion'] };

const renderLine = (line: string, emphasize: string) => {
  const parts = line.split(/(\{emphasize\})/g);
  return parts.map((part, i) => {
    if (part === '{emphasize}') {
      return (
        <span
          key={i}
          className={cx(
            'mx-0.5 inline-flex items-center rounded-md px-1.5 py-0.5 align-baseline',
            'bg-gradient-to-r from-blue-100 to-violet-100 text-violet-900',
            'dark:from-blue-950/60 dark:to-violet-950/60 dark:text-violet-100',
            'font-bold',
          )}
        >
          {emphasize}
        </span>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
};

export const TodayQuestionSection = ({ content }: Props) => {
  return (
    <section
      id="section-today-question"
      aria-labelledby="heading-today-question"
      className="space-y-md"
    >
      <article
        className={cx(
          'relative overflow-hidden rounded-2xl border-2 p-md sm:p-lg lg:p-xl',
          'border-violet-200 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/60',
          'dark:border-violet-800/60 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-violet-950/40',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className="absolute -top-2 -right-2 text-violet-100 dark:text-violet-900/40"
        >
          <Quote className="h-24 w-24" aria-hidden="true" />
        </span>

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_auto)_minmax(0,_1fr)] gap-md lg:gap-lg items-center">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cx(
                'inline-flex h-9 w-9 items-center justify-center rounded-lg',
                'border border-violet-300 bg-violet-100 text-violet-700',
                'dark:border-violet-700/70 dark:bg-violet-900/60 dark:text-violet-200',
              )}
            >
              <HelpCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700/80 dark:text-violet-300/80">
                {content.eyebrow}
              </span>
              <span className="text-xsm font-bold text-violet-700 dark:text-violet-200">
                {content.label}
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-md">
            <h2
              id="heading-today-question"
              className={cx(
                'text-xl sm:text-xxl lg:text-[1.65rem] font-bold leading-[1.35] tracking-tight',
                'text-[var(--term-fg)] break-keep',
              )}
            >
              {content.questionLines.map((line, idx) => (
                <span key={idx} className="block">
                  {renderLine(line, content.emphasize)}
                </span>
              ))}
            </h2>

            <ul className="flex flex-wrap gap-2">
              {content.badges.map((badge) => (
                <li key={badge}>
                  <span
                    className={cx(
                      'inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1',
                      'border-violet-300 bg-white text-violet-700',
                      'dark:border-violet-700/70 dark:bg-[var(--term-bg)] dark:text-violet-200',
                      'text-[11px] font-mono font-bold',
                      'shadow-[0_2px_0_var(--term-border)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-violet-500"
                    />
                    {badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};
