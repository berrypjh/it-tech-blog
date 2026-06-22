import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { commitToneTokens } from '../../_shared/tones';
import type { PassiveEffectsContent, PositionStep } from '../content';
import { ArrowDownIcon, ClockIcon, TargetIcon } from '../icons';

type Props = { content: PassiveEffectsContent['position'] };

export const PassiveEffectsPositionSection = ({ content }: Props) => (
  <section
    id="passive-position"
    aria-labelledby="heading-passive-position"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="passive-position"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_0.7fr)] gap-3">
      {/* Left: vertical flow */}
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
                <span
                  aria-hidden="true"
                  className="my-2 flex justify-center text-[var(--term-dim)]"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>

      {/* Right: callout */}
      <article
        className={cn(
          'flex h-full flex-col items-center justify-center gap-2 rounded-3xl border-2 p-md sm:p-lg text-center',
          'border-teal-300/80 bg-teal-50/60',
          'dark:border-teal-700/70 dark:bg-teal-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
          'ring-2 ring-teal-300/30 dark:ring-teal-500/20',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2',
            'bg-teal-100 text-teal-700 border-teal-200/80',
            'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
          )}
        >
          <ClockIcon className="h-7 w-7" />
        </span>
        <p className="text-md sm:text-lg font-bold leading-tight text-teal-900 dark:text-teal-100 break-keep">
          <span className="block">{content.callout.line1}</span>
          <span className="block">{content.callout.line2}</span>
        </p>
        <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300">
          after paint
        </span>
      </article>
    </div>
  </section>
);

const StepCard = ({ step, index }: { step: PositionStep; index: number }) => {
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
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-xsm font-mono font-bold',
          t.chipSolid,
        )}
      >
        {index}
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
        <p className="text-xsm leading-snug text-[var(--term-muted)] break-keep">{step.body}</p>
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
