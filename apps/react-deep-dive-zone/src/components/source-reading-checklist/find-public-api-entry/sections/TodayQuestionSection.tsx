import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { FindPublicApiEntryContent } from '../content';
import { HelpCircleIcon, QuoteIcon } from '../icons';

type Props = { content: FindPublicApiEntryContent['todayQuestion'] };

/**
 * 질문 문장의 `{src}` / `{queue}` 토큰을 inline code chip으로 치환한다.
 */
const renderLine = (
  line: string,
  emphasize: FindPublicApiEntryContent['todayQuestion']['emphasize'],
) => {
  const parts = line.split(/(\{src\}|\{queue\})/g);
  return parts.map((part, i) => {
    if (part === '{src}') {
      return (
        <code
          key={i}
          className={cn(
            'mx-0.5 inline-flex items-center rounded-md border px-1.5 py-0.5 align-baseline',
            'border-blue-300 bg-white text-blue-700',
            'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
            'font-mono text-[0.85em] font-bold',
          )}
        >
          {emphasize.src}
        </code>
      );
    }
    if (part === '{queue}') {
      return (
        <span
          key={i}
          className={cn(
            'mx-0.5 inline-flex items-center rounded-md px-1.5 py-0.5 align-baseline',
            'bg-violet-100 text-violet-800',
            'dark:bg-violet-950/60 dark:text-violet-200',
            'font-bold',
          )}
        >
          {emphasize.queue}
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
        className={cn(
          'relative overflow-hidden rounded-2xl border-2 p-md sm:p-lg lg:p-xl',
          'border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60',
          'dark:border-blue-800/60 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-cyan-950/30',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className="absolute -top-2 -right-2 text-blue-100 dark:text-blue-900/40"
        >
          <QuoteIcon className="h-24 w-24" />
        </span>

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_auto)_minmax(0,_1fr)] gap-md lg:gap-lg items-center">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-lg',
                'border border-blue-300 bg-blue-100 text-blue-700',
                'dark:border-blue-700/70 dark:bg-blue-900/60 dark:text-blue-200',
              )}
            >
              <HelpCircleIcon className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700/80 dark:text-blue-300/80">
                {content.eyebrow}
              </span>
              <span className="text-xsm font-bold text-blue-700 dark:text-blue-200">
                {content.label}
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-md">
            <h2
              id="heading-today-question"
              className={cn(
                'text-xl sm:text-xxl lg:text-[1.7rem] font-bold leading-[1.3] tracking-tight',
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
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
                      'border-blue-300 bg-white text-blue-700',
                      'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
                      'text-[11px] font-mono font-bold',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-blue-500"
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
