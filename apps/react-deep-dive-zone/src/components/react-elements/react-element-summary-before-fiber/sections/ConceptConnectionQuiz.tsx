import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../start/_shared/tones';
import { CodePanel } from '../../_shared/CodePanel';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { AnswerStep, ReactElementSummaryBeforeFiberContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CheckCircleIcon, HelpCircleIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['quiz'] };

export const ConceptConnectionQuiz = ({ content }: Props) => (
  <section aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-stretch">
      {/* Question card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border p-md',
          'border-sky-200/80 bg-sky-50/60',
          'dark:border-sky-800/70 dark:bg-sky-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 font-mono font-bold"
          >
            Q.
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700 dark:text-sky-300">
            {content.questionLabel}
          </span>
        </div>
        <p className="text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
          {content.question}
        </p>
        <CodePanel code={content.questionCode} language="JSX" />
        <p className="text-xsm leading-relaxed text-sky-800/90 dark:text-sky-200/80 break-keep">
          {content.hint}
        </p>
      </article>

      {/* Answer flow */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
          {content.answerLabel}
        </span>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,_minmax(0,_1fr))] gap-md items-stretch">
          {content.answerSteps.map((step, idx) => (
            <li key={step.id} className="relative flex">
              <StepCard step={step} />
              {idx < content.answerSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute hidden lg:flex items-center justify-center',
                    'top-1/2 -right-2 -translate-y-1/2 w-5 h-5 rounded-full z-10',
                    'bg-[var(--term-bg)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300',
                  )}
                >
                  <ArrowRightIcon className="h-3 w-3" />
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* mobile arrows */}
        <div className="flex flex-col gap-2 lg:hidden" aria-hidden="true">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            <ArrowDownIcon className="h-3 w-3" /> 흐름이 위에서 아래로 이어집니다
          </span>
        </div>

        <div
          className={cn(
            'flex items-center gap-sm rounded-xl border p-md mt-sm',
            'border-emerald-300/80 bg-emerald-50',
            'dark:border-emerald-800/70 dark:bg-emerald-950/40',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0"
          >
            <CheckCircleIcon className="h-5 w-5" />
          </span>
          <p className="text-xsm sm:text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
            {content.emphasis}
          </p>
        </div>
      </article>
    </div>
  </section>
);

const StepCard = ({ step }: { step: AnswerStep }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex flex-1 flex-col gap-2 rounded-xl border p-sm bg-[var(--term-bg)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-full border font-mono text-[11px] font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
      </header>
      <code className={cn('font-mono text-xsm font-bold tracking-tight break-all', t.text)}>
        {step.title}
      </code>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>
    </article>
  );
};
