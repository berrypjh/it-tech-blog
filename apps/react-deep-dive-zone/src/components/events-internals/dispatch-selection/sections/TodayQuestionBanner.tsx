import { cn } from '@it-tech-blog/utils';

import type { DispatchSelectionContent, Tone } from '../content';
import { HelpCircleIcon, SplitIcon, TargetIcon, TimerIcon } from '../icons';

type Props = { content: DispatchSelectionContent['question'] };

const toneBadge: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-white text-sky-700 dark:border-sky-700/70 dark:bg-slate-950/40 dark:text-sky-200',
  cyan: 'border-cyan-300/80 bg-white text-cyan-700 dark:border-cyan-700/70 dark:bg-slate-950/40 dark:text-cyan-200',
  teal: 'border-teal-300/80 bg-white text-teal-700 dark:border-teal-700/70 dark:bg-slate-950/40 dark:text-teal-200',
  emerald:
    'border-emerald-300/80 bg-white text-emerald-700 dark:border-emerald-700/70 dark:bg-slate-950/40 dark:text-emerald-200',
  violet:
    'border-violet-300/80 bg-white text-violet-700 dark:border-violet-700/70 dark:bg-slate-950/40 dark:text-violet-200',
  blue: 'border-blue-300/80 bg-white text-blue-700 dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200',
  amber:
    'border-amber-300/80 bg-white text-amber-800 dark:border-amber-700/70 dark:bg-slate-950/40 dark:text-amber-200',
  rose: 'border-rose-300/80 bg-white text-rose-700 dark:border-rose-700/70 dark:bg-slate-950/40 dark:text-rose-200',
};

const toneDot: Record<Tone, string> = {
  sky: 'bg-sky-500 dark:bg-sky-400',
  cyan: 'bg-cyan-500 dark:bg-cyan-400',
  teal: 'bg-teal-500 dark:bg-teal-400',
  emerald: 'bg-emerald-500 dark:bg-emerald-400',
  violet: 'bg-violet-500 dark:bg-violet-400',
  blue: 'bg-blue-500 dark:bg-blue-400',
  amber: 'bg-amber-500 dark:bg-amber-400',
  rose: 'bg-rose-500 dark:bg-rose-400',
};

const badgeIcons = [TimerIcon, SplitIcon, TargetIcon];

export const TodayQuestionBanner = ({ content }: Props) => (
  <section
    aria-labelledby="question-heading"
    className={cn(
      'relative rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-200/70 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/50',
      'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="flex flex-col gap-md lg:flex-row lg:items-center lg:gap-lg">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full',
          'bg-blue-600 text-white shadow-[0_4px_0_rgba(29,78,216,0.3)] dark:bg-blue-500',
        )}
      >
        <HelpCircleIcon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.4} />
      </span>

      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          {content.eyebrow}
        </p>
        <h2
          id="question-heading"
          className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-[var(--term-fg)] break-keep"
        >
          {content.title}
        </h2>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-col gap-2 lg:min-w-[260px]">
        {content.badges.map((badge, i) => {
          const Icon = badgeIcons[i] ?? TargetIcon;
          return (
            <li
              key={badge.title}
              className={cn(
                'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
                'shadow-[0_1px_0_var(--term-border)] transition-colors',
                toneBadge[badge.tone],
              )}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-current/30"
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xsm font-bold leading-tight break-keep">
                  {badge.title}
                </span>
                <span className="text-[10px] leading-tight text-[var(--term-muted)] break-keep">
                  {badge.description}
                </span>
              </div>
              <span
                aria-hidden="true"
                className={cn('ml-auto inline-block h-2 w-2 rounded-full', toneDot[badge.tone])}
              />
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
