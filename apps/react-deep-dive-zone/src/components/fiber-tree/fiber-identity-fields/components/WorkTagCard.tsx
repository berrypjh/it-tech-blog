import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from '../../../shared/tones';
import type { WorkTagCard as WorkTagCardData } from '../content';

type Props = { card: WorkTagCardData };

const iconWrap: Record<ToneKey, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  indigo:
    'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/60',
  amber:
    'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
};

const hoverBorder: Record<ToneKey, string> = {
  sky: 'hover:border-sky-400/70 dark:hover:border-sky-500/60',
  cyan: 'hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
  violet: 'hover:border-violet-400/70 dark:hover:border-violet-500/60',
  emerald: 'hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  blue: 'hover:border-blue-400/70 dark:hover:border-blue-500/60',
  teal: 'hover:border-teal-400/70 dark:hover:border-teal-500/60',
  indigo: 'hover:border-indigo-400/70 dark:hover:border-indigo-500/60',
  amber: 'hover:border-amber-400/70 dark:hover:border-amber-500/60',
};

const valueColor: Record<ToneKey, string> = {
  sky: 'text-sky-700 dark:text-sky-300',
  cyan: 'text-cyan-700 dark:text-cyan-300',
  violet: 'text-violet-700 dark:text-violet-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  blue: 'text-blue-700 dark:text-blue-300',
  teal: 'text-teal-700 dark:text-teal-300',
  indigo: 'text-indigo-700 dark:text-indigo-300',
  amber: 'text-amber-700 dark:text-amber-300',
};

export const WorkTagCardItem = ({ card }: Props) => (
  <article
    className={cn(
      'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] p-sm sm:p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
      hoverBorder[card.tone],
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-full border font-mono font-bold text-[12px] shrink-0',
        iconWrap[card.tone],
      )}
    >
      {card.value}
    </span>
    <div className="flex flex-col min-w-0">
      <code className="font-mono text-xsm font-bold tracking-tight text-[var(--term-fg)] truncate">
        {card.name}
      </code>
      <span className={cn('text-[10px] uppercase tracking-wider font-mono', valueColor[card.tone])}>
        WorkTag = {card.value}
      </span>
    </div>
  </article>
);
