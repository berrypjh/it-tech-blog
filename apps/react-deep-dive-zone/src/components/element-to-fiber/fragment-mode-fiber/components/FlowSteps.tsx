import { cn } from '@it-tech-blog/utils';

import type { FlowStep } from '../content';
import { ArrowDownIcon } from '../icons';

type Tone = 'purple' | 'emerald';

type Props = {
  tone: Tone;
  steps: FlowStep[];
};

const toneTokens = {
  purple: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    surface: 'bg-violet-50/60 dark:bg-violet-950/30',
    text: 'text-violet-700 dark:text-violet-300',
    accent: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
    arrowChip:
      'bg-violet-50 border-violet-200/80 text-violet-700 dark:bg-violet-950/40 dark:border-violet-700/60 dark:text-violet-300',
  },
  emerald: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    surface: 'bg-emerald-50/60 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    accent: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
    arrowChip:
      'bg-emerald-50 border-emerald-200/80 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-700/60 dark:text-emerald-300',
  },
} as const;

export const FlowSteps = ({ tone, steps }: Props) => {
  const t = toneTokens[tone];
  return (
    <ol className="flex flex-col gap-1">
      {steps.map((step, idx) => (
        <li key={step.id} className="flex flex-col">
          <article
            className={cn('flex items-center gap-sm rounded-xl border-2 p-md', t.border, t.surface)}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0',
                'font-mono text-sm font-bold tabular-nums',
                t.accent,
              )}
            >
              {idx + 1}
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <code
                className={cn('font-mono text-xsm sm:text-sm font-extrabold break-all', t.text)}
              >
                {step.text}
              </code>
              {step.subtext && (
                <code className="font-mono text-[11px] text-[var(--term-muted)] font-bold">
                  {step.subtext}
                </code>
              )}
            </div>
          </article>
          {idx < steps.length - 1 && (
            <div className="flex items-center justify-center py-1" aria-hidden="true">
              <span
                className={cn(
                  'inline-flex items-center justify-center w-7 h-7 rounded-full border',
                  t.arrowChip,
                )}
              >
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};
