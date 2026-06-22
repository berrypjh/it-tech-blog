import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { commitToneTokens } from '../../_shared/tones';
import type { LayoutPhaseContent, TooltipStep } from '../content';
import { ArrowDownIcon, CheckCircleIcon, RulerIcon, SparklesIcon, TargetIcon } from '../icons';

type Props = { content: LayoutPhaseContent['tooltip'] };

export const TooltipMeasurementExampleSection = ({ content }: Props) => (
  <section
    id="tooltip-measurement"
    aria-labelledby="heading-tooltip-measurement"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="tooltip-measurement"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<RulerIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)] gap-3">
        {/* Left: 3-step flow */}
        <ol className="flex flex-col">
          {content.steps.map((step, idx) => (
            <li key={step.title} className="flex flex-col">
              <FlowCard step={step} index={idx + 1} />
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

        {/* Right: before/after mock */}
        <div className="flex flex-col gap-2">
          <TooltipMock
            title={content.beforeTitle}
            content={content.beforeContent}
            variant="before"
          />
          <span aria-hidden="true" className="flex justify-center text-[var(--term-dim)]">
            <ArrowDownIcon className="h-4 w-4" />
          </span>
          <TooltipMock title={content.afterTitle} content={content.afterContent} variant="after" />
        </div>
      </div>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-teal-200/80 bg-teal-50/70',
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
        <p className="text-xsm sm:text-sm leading-relaxed text-teal-900 dark:text-teal-100 break-keep font-bold">
          {content.bottomMessage}
        </p>
      </aside>
    </article>
  </section>
);

const FlowCard = ({ step, index }: { step: TooltipStep; index: number }) => {
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-start gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-xsm font-mono font-bold',
          t.chipSolid,
        )}
      >
        {index}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.textStrong)}>
          {step.title}
        </h3>
        <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
    </article>
  );
};

const TooltipMock = ({
  title,
  content,
  variant,
}: {
  title: string;
  content: string;
  variant: 'before' | 'after';
}) => {
  const isAfter = variant === 'after';
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        isAfter
          ? 'border-teal-300/80 dark:border-teal-700/70'
          : 'border-violet-300/80 dark:border-violet-700/70',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-[10px] sm:text-xsm font-bold uppercase tracking-wider break-keep',
            isAfter ? 'text-teal-700 dark:text-teal-300' : 'text-violet-700 dark:text-violet-300',
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isAfter
              ? 'border-teal-200/80 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200'
              : 'border-violet-200/80 bg-violet-50 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200',
          )}
        >
          {isAfter ? 'fixed' : 'wrong'}
        </span>
      </header>

      <div
        className={cn(
          'relative rounded-lg border bg-white dark:bg-slate-950 overflow-hidden h-32',
          isAfter
            ? 'border-teal-300/80 dark:border-teal-700/70'
            : 'border-violet-300/80 dark:border-violet-700/70',
        )}
      >
        {isAfter ? <AfterMock /> : <BeforeMock />}
      </div>

      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {content}
      </p>
    </article>
  );
};

const BeforeMock = () => (
  <div className="relative h-full bg-gradient-to-br from-slate-50 to-violet-50/40 dark:from-slate-950 dark:to-violet-950/20 p-2">
    {/* Target button */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="inline-flex items-center gap-1 rounded-md border-2 border-slate-300 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        <TargetIcon aria-hidden="true" className="h-3 w-3" />
        target
      </span>
    </div>
    {/* Tooltip in wrong position - far below, clipped */}
    <div className="absolute left-1 right-1 bottom-1 rounded-md border-2 border-violet-300/80 bg-violet-100/90 px-2 py-1 dark:border-violet-700/70 dark:bg-violet-950/60">
      <p className="text-[9px] font-bold text-violet-900 dark:text-violet-100">도움말 텍스트</p>
      <p className="text-[8px] text-violet-700 dark:text-violet-300">대상에서 떨어진 위치</p>
    </div>
  </div>
);

const AfterMock = () => (
  <div className="relative h-full bg-gradient-to-br from-slate-50 to-teal-50/40 dark:from-slate-950 dark:to-teal-950/20 p-2">
    {/* Target button */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="inline-flex items-center gap-1 rounded-md border-2 border-slate-300 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        <TargetIcon aria-hidden="true" className="h-3 w-3" />
        target
      </span>
    </div>
    {/* Tooltip in correct position - right above target */}
    <div
      className="absolute left-1/2 -translate-x-1/2 rounded-md border-2 border-teal-400/80 bg-teal-100/95 px-2 py-1 dark:border-teal-500/70 dark:bg-teal-950/70"
      style={{ top: 'calc(50% - 38px)' }}
    >
      <p className="text-[9px] font-bold text-teal-900 dark:text-teal-100">도움말 텍스트</p>
      <p className="text-[8px] text-teal-700 dark:text-teal-300">측정 후 보정된 위치</p>
    </div>
    {/* Sparkle indicator */}
    <SparklesIcon
      aria-hidden="true"
      className="absolute top-1 right-1 h-3 w-3 text-teal-500 dark:text-teal-300"
    />
  </div>
);
