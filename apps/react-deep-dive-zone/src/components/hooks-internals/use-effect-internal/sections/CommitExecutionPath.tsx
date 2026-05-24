import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { Tone, UseEffectInternalsContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CogIcon,
  FileTextIcon,
  PlayCircleIcon,
  RocketIcon,
} from '../icons';

type Props = { content: UseEffectInternalsContent['commitPath'] };

const visualMap = {
  file: FileTextIcon,
  process: CogIcon,
  play: PlayCircleIcon,
};

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/70 dark:border-sky-700/70 dark:bg-sky-950/40',
  cyan: 'border-cyan-300/80 bg-cyan-50/70 dark:border-cyan-700/70 dark:bg-cyan-950/40',
  teal: 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/40',
  emerald:
    'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/40',
  violet: 'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/40',
  amber: 'border-amber-300/80 bg-amber-50/70 dark:border-amber-700/70 dark:bg-amber-950/40',
  rose: 'border-rose-300/80 bg-rose-50/70 dark:border-rose-700/70 dark:bg-rose-950/40',
  orange: 'border-orange-300/80 bg-orange-50/70 dark:border-orange-700/70 dark:bg-orange-950/40',
  indigo: 'border-indigo-300/80 bg-indigo-50/70 dark:border-indigo-700/70 dark:bg-indigo-950/40',
};

const toneNumber: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
  orange: 'bg-orange-500 text-white dark:bg-orange-400 dark:text-slate-900',
  indigo: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 border-sky-200/80 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200 border-cyan-200/80 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200 border-teal-200/80 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 border-violet-200/80 dark:border-violet-800/60',
  amber:
    'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/60',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200 border-rose-200/80 dark:border-rose-800/60',
  orange:
    'bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-200 border-orange-200/80 dark:border-orange-800/60',
  indigo:
    'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200 border-indigo-200/80 dark:border-indigo-800/60',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  rose: 'text-rose-700 dark:text-rose-200',
  orange: 'text-orange-700 dark:text-orange-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

export const CommitExecutionPath = ({ content }: Props) => (
  <section
    aria-labelledby="heading-commit-path"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="commit-path"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RocketIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-2 sm:gap-3 relative">
      {content.steps.map((step, i) => {
        const Icon = visualMap[step.visual];
        const isLast = i === content.steps.length - 1;
        return (
          <li key={step.number} className="relative">
            <article
              className={cn(
                'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
                'shadow-[0_1px_0_var(--term-border)] transition-all',
                'motion-safe:hover:-translate-y-0.5',
                toneCard[step.tone],
              )}
            >
              <header className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums',
                    toneNumber[step.tone],
                  )}
                >
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    toneIconBox[step.tone],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </header>
              <code
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold leading-tight break-all',
                  toneText[step.tone],
                )}
              >
                {step.fileOrFn}
              </code>
              <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {step.description}
              </p>
            </article>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden lg:inline-flex absolute -right-[7px] top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="lg:hidden flex justify-center text-[var(--term-muted)] mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>

    {/* Cleanup note */}
    <aside
      className={cn(
        'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-orange-300/70 bg-orange-50/60 dark:border-orange-800/60 dark:bg-orange-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white dark:bg-orange-400 dark:text-slate-900"
      >
        <CogIcon className="h-4 w-4" />
      </span>
      <p className="text-[11px] sm:text-xsm leading-relaxed text-orange-900 dark:text-orange-100 break-keep">
        {content.cleanupNote}
      </p>
    </aside>
  </section>
);
