import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { FlowStep, NotAllFilesContent } from '../content';
import { ArrowRightIcon, DiagramIcon, flowIconByName } from '../icons';

type Props = { content: NotAllFilesContent['followFlow'] };

type FlowTone = FlowStep['tone'];

const toneClasses: Record<
  FlowTone,
  { iconBg: string; iconText: string; num: string; border: string }
> = {
  sky: {
    iconBg: 'bg-sky-100 dark:bg-sky-950/60',
    iconText: 'text-sky-600 dark:text-sky-300',
    num: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
    border: 'border-sky-200/80 dark:border-sky-800/60',
  },
  blue: {
    iconBg: 'bg-blue-100 dark:bg-blue-950/60',
    iconText: 'text-blue-600 dark:text-blue-300',
    num: 'bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900',
    border: 'border-blue-200/80 dark:border-blue-800/60',
  },
  indigo: {
    iconBg: 'bg-indigo-100 dark:bg-indigo-950/60',
    iconText: 'text-indigo-600 dark:text-indigo-300',
    num: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
    border: 'border-indigo-200/80 dark:border-indigo-800/60',
  },
  violet: {
    iconBg: 'bg-violet-100 dark:bg-violet-950/60',
    iconText: 'text-violet-600 dark:text-violet-300',
    num: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    border: 'border-violet-200/80 dark:border-violet-800/60',
  },
  mint: {
    iconBg: 'bg-cyan-100 dark:bg-cyan-950/60',
    iconText: 'text-cyan-600 dark:text-cyan-300',
    num: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
    border: 'border-cyan-200/80 dark:border-cyan-800/60',
  },
  teal: {
    iconBg: 'bg-teal-100 dark:bg-teal-950/60',
    iconText: 'text-teal-600 dark:text-teal-300',
    num: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
    border: 'border-teal-200/80 dark:border-teal-800/60',
  },
};

export const FollowQuestionFlow = ({ content }: Props) => {
  return (
    <section id="section-follow-flow" aria-labelledby="heading-follow-flow" className="space-y-lg">
      <SectionHeader
        id="follow-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<DiagramIcon className="h-5 w-5" />}
      />

      {/* 메인 질문 카드 */}
      <div className="rounded-lg border border-sky-200/80 dark:border-sky-800/60 bg-gradient-to-br from-sky-50 via-white to-teal-50/60 dark:from-sky-950/40 dark:via-transparent dark:to-teal-950/30 p-md sm:p-lg shadow-[0_2px_0_var(--term-border)] text-center">
        <p className="text-[10px] uppercase tracking-wider text-sky-600 dark:text-sky-300 font-bold mb-1">
          main question
        </p>
        <h3 className="text-lg sm:text-xl lg:text-xxl font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
          {content.mainQuestion}
        </h3>
      </div>

      {/* 6-step flow */}
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-1 items-stretch">
        {content.steps.map((step, idx) => {
          const t = toneClasses[step.tone];
          const Icon = flowIconByName[step.icon];
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
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-2 left-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold tabular-nums',
                    t.num,
                  )}
                >
                  {step.num}
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-11 h-11 rounded-full mt-2',
                    t.iconBg,
                    t.iconText,
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </span>

                <h4 className="text-xsm sm:text-sm font-bold font-mono text-[var(--term-fg)] break-keep leading-snug">
                  {step.title}
                </h4>

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
                <ArrowRightIcon className="h-4 w-4" />
              </li>
            ),
          ];
        })}
      </ol>
    </section>
  );
};
