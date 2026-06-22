import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { StartWithQuestionContent } from '../content';
import { CheckCircleIcon, RepeatIcon, WandIcon } from '../icons';

type Props = { content: StartWithQuestionContent['badGoodCompare'] };

export const BadGoodCompareSection = ({ content }: Props) => {
  return (
    <section id="section-bad-good" aria-labelledby="heading-bad-good" className="space-y-lg">
      <SectionHeader
        id="bad-good"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<WandIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'relative rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
          {/* Bad questions */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-xl border-2 p-md',
              'border-slate-200 bg-slate-50/60',
              'dark:border-slate-700 dark:bg-slate-900/40',
            )}
            aria-labelledby="bad-title"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 id="bad-title" className="text-md font-bold text-slate-600 dark:text-slate-300">
                {content.badTitle}
              </h3>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 px-2 items-center justify-center rounded-md',
                  'border border-slate-300 bg-white text-slate-500',
                  'dark:border-slate-600 dark:bg-slate-900 dark:text-slate-400',
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                )}
              >
                file-first
              </span>
            </div>

            <ul className="flex flex-col gap-2">
              {content.badQuestions.map((q) => (
                <li
                  key={q.label}
                  className={cn(
                    'flex items-start gap-2 rounded-lg border px-3 py-2.5',
                    'border-slate-200 bg-white/60 text-slate-500',
                    'dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"
                  />
                  <p className="text-xsm leading-relaxed break-keep line-through decoration-slate-400/50 decoration-1">
                    {q.label}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 break-keep">
              {content.badCaption}
            </p>
          </article>

          {/* Connector */}
          <div className="relative flex lg:flex-col items-center justify-center gap-2 lg:py-md">
            <span
              aria-hidden="true"
              className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
            />
            <span
              aria-hidden="true"
              className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
            />
            <span
              className={cn(
                'relative inline-flex items-center gap-1 rounded-full border-2 px-3 py-1.5',
                'border-blue-300 bg-white text-blue-700 shadow-[0_2px_0_var(--term-border)]',
                'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
              )}
            >
              <RepeatIcon className="h-3 w-3" aria-hidden="true" />
              {content.connector}
            </span>
          </div>

          {/* Good questions */}
          <article
            className={cn(
              'group/good flex flex-col gap-sm rounded-xl border-2 p-md',
              'border-cyan-300 bg-cyan-50/60',
              'dark:border-cyan-700/70 dark:bg-cyan-950/30',
              'transition-all motion-safe:hover:border-cyan-500',
              'dark:motion-safe:hover:border-cyan-400/80',
            )}
            aria-labelledby="good-title"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 id="good-title" className="text-md font-bold text-cyan-800 dark:text-cyan-200">
                {content.goodTitle}
              </h3>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 px-2 items-center justify-center rounded-md',
                  'border border-cyan-300 bg-white text-cyan-700',
                  'dark:border-cyan-700/70 dark:bg-[var(--term-bg)] dark:text-cyan-200',
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                )}
              >
                question-first
              </span>
            </div>

            <ul className="flex flex-col gap-2">
              {content.goodQuestions.map((q) => (
                <li
                  key={q.label}
                  className={cn(
                    'flex items-start gap-2 rounded-lg border px-3 py-2.5',
                    'border-cyan-300/80 bg-white text-[var(--term-fg)]',
                    'dark:border-cyan-700/70 dark:bg-[var(--term-bg)]',
                    'transition-all motion-safe:group-hover/good:translate-x-0.5',
                  )}
                >
                  <CheckCircleIcon
                    className="mt-0.5 h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-xsm leading-relaxed break-keep font-medium">{q.label}</p>
                </li>
              ))}
            </ul>

            <p className="mt-1 text-[11px] leading-relaxed text-cyan-800/80 dark:text-cyan-200/80 break-keep">
              {content.goodCaption}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
