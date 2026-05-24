import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { OnClickClickContent, Tone } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BracesIcon,
  RepeatIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: OnClickClickContent['flow'] };

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

const toneNumber: Record<Tone, string> = {
  sky: 'bg-sky-600 text-white dark:bg-sky-500',
  cyan: 'bg-cyan-600 text-white dark:bg-cyan-500',
  teal: 'bg-teal-600 text-white dark:bg-teal-500',
  emerald: 'bg-emerald-600 text-white dark:bg-emerald-500',
  violet: 'bg-violet-600 text-white dark:bg-violet-500',
  blue: 'bg-blue-600 text-white dark:bg-blue-500',
  amber: 'bg-amber-600 text-white dark:bg-amber-500',
  rose: 'bg-rose-600 text-white dark:bg-rose-500',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  amber:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
};

const stepIcons = [BracesIcon, RepeatIcon, ZapIcon, WorkflowIcon];

export const RegisterSimpleEventsFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-flow">
    <NumberedSectionHeader
      id="flow"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol
      className={cn(
        'grid items-stretch gap-2 sm:gap-3',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      )}
    >
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? WorkflowIcon;
        return (
          <li
            key={step.title}
            className={cn(
              'group relative flex flex-col gap-2 rounded-2xl border-2 p-3 sm:p-md transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              toneCard[step.tone],
              step.isCore && 'shadow-[0_4px_0_var(--term-border)] lg:scale-[1.02]',
            )}
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                  'text-[11px] font-mono font-bold tabular-nums shadow-[0_2px_0_var(--term-border)]',
                  'transition-transform group-hover:scale-110 motion-reduce:transform-none',
                  toneNumber[step.tone],
                )}
              >
                {i + 1}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                  toneIconBox[step.tone],
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
            </div>

            <h3
              className={cn(
                'text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep',
                step.isCore && 'text-violet-700 dark:text-violet-200',
              )}
            >
              {step.title}
            </h3>
            <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
              {step.description}
            </p>

            {/* Code snippet block */}
            <pre className="mt-auto overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-2 font-mono text-[10px] sm:text-[11px] leading-[1.6] text-slate-100">
              <code className="whitespace-pre">{step.code}</code>
            </pre>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden lg:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
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

    <p className="sr-only">{content.steps.map((s, i) => `${i + 1}. ${s.title}`).join(' → ')}</p>
  </section>
);
