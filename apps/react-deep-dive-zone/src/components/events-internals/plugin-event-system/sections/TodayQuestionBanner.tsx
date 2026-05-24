import { cn } from '@it-tech-blog/utils';

import type { PluginEventSystemContent } from '../content';
import { HelpCircleIcon } from '../icons';

type Props = { content: PluginEventSystemContent['question'] };

const renderHighlighted = (line: string, tokens: string[]) => {
  if (tokens.length === 0) return line;
  // Escape regex special chars in tokens (these are simple words so usually fine)
  const pattern = new RegExp(
    `(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g',
  );
  return line.split(pattern).map((part, i) =>
    tokens.includes(part) ? (
      <code key={i} className="font-mono text-blue-600 dark:text-blue-300 italic">
        {part}
      </code>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
};

export const TodayQuestionBanner = ({ content }: Props) => (
  <section
    aria-labelledby="question-heading"
    className={cn(
      'relative rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-200/70 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/40',
      'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-md lg:gap-lg">
      {/* Left: section number + label */}
      <div className="flex sm:flex-col items-center sm:items-start gap-2">
        <span
          aria-hidden="true"
          className="inline-flex h-7 sm:h-8 items-center justify-center rounded-lg px-2.5 font-mono text-xsm sm:text-sm font-bold tabular-nums tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200"
        >
          {content.sectionNumber}
        </span>
        <span className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          {content.label}
        </span>
      </div>

      {/* Center: question */}
      <h2
        id="question-heading"
        className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-[var(--term-fg)] break-keep text-center sm:text-left"
      >
        {renderHighlighted(content.title, content.highlightTokens)}
      </h2>

      {/* Right: icon */}
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full justify-self-center sm:justify-self-end',
          'bg-blue-600 text-white shadow-[0_4px_0_rgba(29,78,216,0.3)] dark:bg-blue-500',
        )}
      >
        <HelpCircleIcon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.4} />
      </span>
    </div>
  </section>
);
