import { cn } from '@it-tech-blog/utils';

import { AudioLines } from 'lucide-react';

import type { AssistiveTechContent } from '../content';

type Props = {
  content: AssistiveTechContent['screenReader'];
  activeIndex: number;
};

export const ScreenReaderLogPanel = ({ content, activeIndex }: Props) => {
  const total = content.items.length;
  const current = Math.min(Math.max(activeIndex, 0), total);
  const progress = content.progressTemplate
    .replace('{current}', String(current))
    .replace('{total}', String(total));

  return (
    <div className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-neutral-ne900 p-lg text-neutral-ne100 shadow-md dark:bg-neutral-ne100 dark:text-neutral-ne900">
      <header className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-neutral-ne100 dark:text-neutral-ne900 sm:text-md">
          {content.logTitle}
        </h3>
        <span className="text-neutral-ne300 dark:text-neutral-ne700" aria-hidden="true">
          <AudioLines className="h-5 w-5" />
        </span>
      </header>

      <ol
        aria-label={content.logTitle}
        className="flex flex-col gap-1.5 font-mono text-[0.6875rem] leading-relaxed text-neutral-ne200 dark:text-neutral-ne800"
      >
        {content.items.map((item) => {
          const isActive = item.index === activeIndex;
          return (
            <li
              key={item.index}
              className={cn(
                'flex items-start gap-2 rounded-md px-2 py-1.5 transition-colors',
                isActive
                  ? 'bg-primary-pr700/60 text-neutral-ne100 ring-1 ring-primary-pr400 dark:bg-primary-pr400/60 dark:text-neutral-ne900'
                  : 'text-neutral-ne300 dark:text-neutral-ne700',
              )}
            >
              <span className="shrink-0 tabular-nums text-neutral-ne400 dark:text-neutral-ne600">
                {item.time}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'flex h-4 w-4 shrink-0 items-center justify-center rounded-rounded text-[0.625rem] font-extraBold',
                  isActive
                    ? 'bg-primary-pr400 text-text-contrastText'
                    : 'bg-neutral-ne700 text-neutral-ne100 dark:bg-neutral-ne300 dark:text-neutral-ne900',
                )}
              >
                {item.index}
              </span>
              <span className="min-w-0 flex-1 break-words">{item.logText}</span>
            </li>
          );
        })}
      </ol>

      <p
        aria-live="polite"
        className="mt-auto rounded-md border border-neutral-ne700 bg-neutral-ne800 px-sm py-1.5 text-[0.6875rem] font-semiBold text-neutral-ne100 dark:border-neutral-ne300 dark:bg-neutral-ne200 dark:text-neutral-ne900"
      >
        {progress}
      </p>
    </div>
  );
};
