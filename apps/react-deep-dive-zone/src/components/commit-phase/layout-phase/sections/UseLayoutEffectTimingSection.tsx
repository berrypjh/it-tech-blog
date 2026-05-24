import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { LayoutPhaseContent, TimingStep } from '../content';
import { ArrowDownIcon, CheckCircleIcon, WorkflowIcon, ZapIcon } from '../icons';

type Props = { content: LayoutPhaseContent['timing'] };

export const UseLayoutEffectTimingSection = ({ content }: Props) => (
  <section
    id="use-layout-effect-timing"
    aria-labelledby="heading-use-layout-effect-timing"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="use-layout-effect-timing"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <StepCard step={step} index={idx + 1} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-teal-200/80 bg-teal-50/60',
          'dark:border-teal-800/70 dark:bg-teal-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-teal-100 text-teal-700 border border-teal-200/80',
            'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
          )}
        >
          <CheckCircleIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-teal-900 dark:text-teal-100 font-bold break-keep">
          {content.bottomMessage}
        </p>
      </aside>
    </article>
  </section>
);

const StepCard = ({ step, index }: { step: TimingStep; index: number }) => {
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-md rounded-2xl border p-md',
        step.active
          ? cn('border-2', t.borderStrong, t.bg, 'ring-2 ring-teal-300/40 dark:ring-teal-500/30')
          : cn(t.border, 'bg-[var(--term-bg)]'),
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
          t.chipSolid,
        )}
      >
        {step.active ? (
          <ZapIcon className="h-5 w-5" />
        ) : (
          <span className="text-xsm font-mono font-bold">{index}</span>
        )}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
            {step.title}
          </h3>
          {step.active && (
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
                t.chip,
              )}
            >
              active
            </span>
          )}
        </div>
        <p className="text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
      <span
        aria-hidden="true"
        className={cn(
          'hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};
