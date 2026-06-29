import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LayoutPhaseContent, TooltipStep } from '../content';
import { ArrowDownIcon, CheckCircleIcon, RulerIcon, SparklesIcon, TargetIcon } from '../icons';

type Props = { content: LayoutPhaseContent['tooltip'] };

export const TooltipMeasurementExampleSection = ({ content }: Props) => (
  <section
    id="tooltip-measurement"
    aria-labelledby="heading-tooltip-measurement"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="tooltip-measurement"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<RulerIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
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
          'mt-md flex items-start gap-sm rounded-lg border-2 p-md',
          toneTokens.teal.fill.border,
          toneTokens.teal.fill.bg,
        )}
      >
        <ToneIconBox tone="teal" size="sm" className="mt-0.5 shrink-0">
          <CheckCircleIcon className="h-4 w-4" />
        </ToneIconBox>
        <p
          className={cn(
            'text-xsm sm:text-sm leading-relaxed break-keep font-bold',
            toneTokens.teal.fill.text,
          )}
        >
          {content.bottomMessage}
        </p>
      </aside>
    </article>
  </section>
);

const FlowCard = ({ step, index }: { step: TooltipStep; index: number }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-start gap-md rounded-lg border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-xsm font-mono font-bold',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        {index}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
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
  const t = toneTokens[isAfter ? 'teal' : 'violet'];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-[10px] sm:text-xsm font-bold uppercase tracking-wider break-keep',
            t.text,
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {isAfter ? 'fixed' : 'wrong'}
        </span>
      </header>

      {/* Tooltip UI mockup (intentional UI mimicry) */}
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

// 실제 툴팁 UI를 흉내 낸 목업 (tones 토큰 예외).
const BeforeMock = () => (
  <div className="relative h-full bg-gradient-to-br from-slate-50 to-violet-50/40 dark:from-slate-950 dark:to-violet-950/20 p-2">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="inline-flex items-center gap-1 rounded-md border-2 border-slate-300 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        <TargetIcon aria-hidden="true" className="h-3 w-3" />
        target
      </span>
    </div>
    <div className="absolute left-1 right-1 bottom-1 rounded-md border-2 border-violet-300/80 bg-violet-100/90 px-2 py-1 dark:border-violet-700/70 dark:bg-violet-950/60">
      <p className="text-[9px] font-bold text-violet-900 dark:text-violet-100">도움말 텍스트</p>
      <p className="text-[8px] text-violet-700 dark:text-violet-300">대상에서 떨어진 위치</p>
    </div>
  </div>
);

const AfterMock = () => (
  <div className="relative h-full bg-gradient-to-br from-slate-50 to-teal-50/40 dark:from-slate-950 dark:to-teal-950/20 p-2">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="inline-flex items-center gap-1 rounded-md border-2 border-slate-300 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        <TargetIcon aria-hidden="true" className="h-3 w-3" />
        target
      </span>
    </div>
    <div
      className="absolute left-1/2 -translate-x-1/2 rounded-md border-2 border-teal-400/80 bg-teal-100/95 px-2 py-1 dark:border-teal-500/70 dark:bg-teal-950/70"
      style={{ top: 'calc(50% - 38px)' }}
    >
      <p className="text-[9px] font-bold text-teal-900 dark:text-teal-100">도움말 텍스트</p>
      <p className="text-[8px] text-teal-700 dark:text-teal-300">측정 후 보정된 위치</p>
    </div>
    <SparklesIcon
      aria-hidden="true"
      className="absolute top-1 right-1 h-3 w-3 text-teal-500 dark:text-teal-300"
    />
  </div>
);
