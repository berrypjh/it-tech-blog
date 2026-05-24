import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { SyntheticEventContent, Tone } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  ShieldOffIcon,
  TerminalIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: SyntheticEventContent['propagation'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30',
  cyan: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-700/70 dark:bg-cyan-950/30',
  teal: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
  emerald:
    'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/30',
  violet:
    'border-violet-400/90 bg-gradient-to-br from-violet-50 to-blue-50 dark:border-violet-600/80 dark:from-violet-950/50 dark:to-blue-950/40',
  blue: 'border-blue-300/80 bg-blue-50/60 dark:border-blue-700/70 dark:bg-blue-950/30',
  amber: 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/70 dark:bg-amber-950/30',
  rose: 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/70 dark:bg-rose-950/30',
};

const toneAccent: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-300',
  cyan: 'text-cyan-700 dark:text-cyan-300',
  teal: 'text-teal-700 dark:text-teal-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  violet: 'text-violet-700 dark:text-violet-300',
  blue: 'text-blue-700 dark:text-blue-300',
  amber: 'text-amber-700 dark:text-amber-300',
  rose: 'text-rose-700 dark:text-rose-300',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  blue: 'bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
};

const stepIcons = [PlayCircleIcon, ZapIcon, ShieldOffIcon];

export const PropagationStateFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-propagation">
    <NumberedSectionHeader
      id="propagation"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol className={cn('grid items-stretch gap-2 sm:gap-3', 'grid-cols-1 sm:grid-cols-3')}>
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? TerminalIcon;
        return (
          <li
            key={step.label}
            className={cn(
              'group relative flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_2px_0_var(--term-border)]',
              toneCard[step.tone],
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                  toneIconBox[step.tone],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span
                className={cn(
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                  toneAccent[step.tone],
                )}
              >
                {step.label}
              </span>
            </header>
            <code
              className={cn(
                'font-mono text-xsm sm:text-sm font-bold leading-tight break-all',
                toneAccent[step.tone],
              )}
            >
              {step.main}
            </code>
            <p className="mt-auto text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
              {step.sub}
            </p>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden sm:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="sm:hidden flex justify-center text-[var(--term-muted)] mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
