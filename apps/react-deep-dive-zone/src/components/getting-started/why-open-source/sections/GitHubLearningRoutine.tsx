import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { RoutineStep, WhyOpenSourceContent } from '../content';
import { BookIcon, ChevronRightIcon, routineIconByName } from '../icons';

type Props = { content: WhyOpenSourceContent['routine'] };

type RoutineTone = RoutineStep['tone'];

const toneClasses: Record<
  RoutineTone,
  { iconBg: string; iconText: string; num: string; border: string }
> = {
  blue: {
    iconBg: 'bg-sky-100 dark:bg-sky-950/60',
    iconText: 'text-sky-600 dark:text-sky-300',
    num: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
    border: 'border-sky-200/80 dark:border-sky-800/60',
  },
  teal: {
    iconBg: 'bg-teal-100 dark:bg-teal-950/60',
    iconText: 'text-teal-600 dark:text-teal-300',
    num: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
    border: 'border-teal-200/80 dark:border-teal-800/60',
  },
  emerald: {
    iconBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    iconText: 'text-emerald-600 dark:text-emerald-300',
    num: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
    border: 'border-emerald-200/80 dark:border-emerald-800/60',
  },
  mint: {
    iconBg: 'bg-cyan-100 dark:bg-cyan-950/60',
    iconText: 'text-cyan-600 dark:text-cyan-300',
    num: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
    border: 'border-cyan-200/80 dark:border-cyan-800/60',
  },
  lavender: {
    iconBg: 'bg-violet-100 dark:bg-violet-950/60',
    iconText: 'text-violet-600 dark:text-violet-300',
    num: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    border: 'border-violet-200/80 dark:border-violet-800/60',
  },
};

export const GitHubLearningRoutine = ({ content }: Props) => {
  return (
    <section id="section-routine" aria-labelledby="heading-routine" className="space-y-lg">
      <SectionHeader
        id="routine"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<BookIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-2 items-stretch">
        {content.steps.map((step, idx) => {
          const t = toneClasses[step.tone];
          const Icon = routineIconByName[step.icon];
          const isLast = idx === content.steps.length - 1;
          return [
            <li key={step.num} className="flex">
              <article
                className={cn(
                  'group relative flex flex-col items-center text-center w-full gap-sm',
                  'rounded-lg border bg-[var(--term-bg)] p-md transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                )}
              >
                {/* 좌상 step num */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-2 left-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold tabular-nums',
                    t.num,
                  )}
                >
                  {step.num}
                </span>

                {/* 아이콘 */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-12 h-12 rounded-full mt-2',
                    t.iconBg,
                    t.iconText,
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <Icon className="h-[1.25rem] w-[1.25rem]" />
                </span>

                <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep leading-snug">
                  {step.title}
                </h3>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {step.description}
                </p>
              </article>
            </li>,
            !isLast && (
              <li
                key={`arrow-${step.num}`}
                aria-hidden="true"
                className="hidden lg:flex items-center justify-center text-sky-500 dark:text-sky-400"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </li>
            ),
          ];
        })}
      </ol>
    </section>
  );
};
