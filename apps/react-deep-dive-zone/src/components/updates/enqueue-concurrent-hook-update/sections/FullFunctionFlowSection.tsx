import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { EnqueueConcurrentHookUpdateContent, FunctionFlowStep } from '../content';
import { ArrowDownIcon, WorkflowIcon } from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['flow'] };

export const FullFunctionFlowSection = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/25 to-emerald-50/20',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-emerald-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// dispatch → register → linkUpdate → findRoot'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          4 ordered calls
        </span>
      </header>

      <ol className="flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.id} className="flex flex-col">
            <StepCard step={step} index={idx} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const variantClass = {
  outline: {
    card: 'border bg-[var(--term-bg)] border-sky-200/80 dark:border-sky-800/70',
    numberBox:
      'bg-sky-100 text-sky-700 border border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    title: 'text-sky-800 dark:text-sky-100',
    body: 'text-[var(--term-muted)]',
  },
  dark: {
    card: cn(
      'border-2 border-slate-800 text-slate-100',
      'bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950',
      'shadow-[0_18px_40px_-20px_rgba(2,6,23,0.65)]',
    ),
    numberBox: 'border border-sky-400/40 bg-sky-400/10 text-sky-200',
    title: 'text-white',
    body: 'text-sky-200/85',
  },
  mint: {
    card: 'border border-emerald-200/80 bg-emerald-50/30 dark:border-emerald-800/70 dark:bg-emerald-950/15',
    numberBox:
      'bg-emerald-100 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    title: 'text-emerald-800 dark:text-emerald-100',
    body: 'text-emerald-900/85 dark:text-emerald-100/85',
  },
  mintBlue: {
    card: 'border border-cyan-200/80 bg-cyan-50/30 dark:border-cyan-800/70 dark:bg-cyan-950/15',
    numberBox:
      'bg-cyan-100 text-cyan-700 border border-cyan-200/80 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
    title: 'text-cyan-800 dark:text-cyan-100',
    body: 'text-cyan-900/85 dark:text-cyan-100/85',
  },
} as const;

const StepCard = ({ step, index }: { step: FunctionFlowStep; index: number }) => {
  const v = variantClass[step.variant];
  return (
    <article
      className={cn(
        'relative grid grid-cols-[auto_minmax(0,_1fr)] gap-sm rounded-2xl p-md',
        v.card,
        step.variant !== 'dark' && 'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      {/* Left: big number */}
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl',
          'text-lg font-mono font-bold tabular-nums',
          v.numberBox,
        )}
      >
        {index + 1}
      </span>

      {/* Right: content */}
      <div className="flex flex-col gap-1 min-w-0">
        <h3
          className={cn(
            'font-mono font-bold leading-snug',
            'text-xsm sm:text-sm md:text-md',
            'break-words [word-break:break-word] [overflow-wrap:anywhere]',
            v.title,
          )}
        >
          {step.title}
        </h3>
        <p className={cn('text-xxsm sm:text-xsm leading-snug break-keep', v.body)}>{step.body}</p>
      </div>

      {step.variant === 'dark' && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute top-2 right-2 inline-flex items-center rounded-md border px-1.5 py-0.5',
            'border-amber-300/30 bg-amber-300/10 text-[9px] font-mono uppercase tracking-wider text-amber-200',
          )}
        >
          hot path
        </span>
      )}
    </article>
  );
};
