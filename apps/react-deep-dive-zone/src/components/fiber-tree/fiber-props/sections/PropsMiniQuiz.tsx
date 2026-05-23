import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberPropsContent } from '../content';
import { HelpCircleIcon, LightbulbIcon, MessageQuestionIcon, SparklesIcon } from '../icons';

type Props = { content: FiberPropsContent['quiz'] };

export const PropsMiniQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        {/* Q/A column */}
        <div className="flex flex-col gap-md">
          <div className="flex items-start gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-lg shrink-0',
                'bg-sky-100 text-sky-700 font-mono font-bold',
                'dark:bg-sky-950/60 dark:text-sky-200',
              )}
            >
              Q
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
                {content.questionLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.question}
              </p>
            </div>
          </div>

          <div
            className={cn(
              'flex items-start gap-sm rounded-2xl border-2 p-md',
              'border-emerald-300/70 bg-emerald-50/70',
              'dark:border-emerald-700/70 dark:bg-emerald-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-lg shrink-0',
                'bg-emerald-600 text-white font-mono font-bold',
                'dark:bg-emerald-500 dark:text-slate-950',
              )}
            >
              A
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-200">
                {content.answerLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
                {content.answer}
              </p>
            </div>
          </div>

          <div
            className={cn(
              'flex items-start gap-sm rounded-xl border px-sm py-2',
              'border-amber-200/80 bg-amber-50/60',
              'dark:border-amber-800/60 dark:bg-amber-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 shrink-0"
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider font-mono text-amber-700/80 dark:text-amber-300/80">
                {content.explanationLabel}
              </span>
              <p className="text-[12px] leading-relaxed text-amber-900/90 dark:text-amber-100/90 break-keep">
                {content.explanationParts.map((part, i) =>
                  part.bold ? (
                    <strong
                      key={i}
                      className="font-bold text-amber-900 dark:text-amber-100 underline decoration-amber-400/60 underline-offset-2"
                    >
                      {part.text}
                    </strong>
                  ) : (
                    <span key={i}>{part.text}</span>
                  ),
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <QuizIllustration />
      </div>
    </article>
  </section>
);

const QuizIllustration = () => (
  <div
    className={cn(
      'relative flex items-center justify-center rounded-2xl border-2 border-dashed p-md min-h-[180px]',
      'border-[var(--term-border)] bg-slate-50/60 dark:bg-slate-900/40',
    )}
  >
    {/* ? bubble */}
    <span
      aria-hidden="true"
      className={cn(
        'absolute left-6 top-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl',
        'bg-sky-100 text-sky-700 border border-sky-200/80',
        'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
        'shadow-[0_8px_24px_-12px_rgba(2,132,199,0.45)]',
      )}
    >
      <MessageQuestionIcon className="h-7 w-7" />
    </span>
    {/* ! bubble */}
    <span
      aria-hidden="true"
      className={cn(
        'absolute right-6 bottom-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl',
        'bg-emerald-100 text-emerald-700 border border-emerald-200/80',
        'dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
        'shadow-[0_8px_24px_-12px_rgba(16,185,129,0.45)]',
      )}
    >
      <SparklesIcon className="h-7 w-7" />
    </span>
    <p className="text-[11px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
      {'// question → answer'}
    </p>
  </div>
);
