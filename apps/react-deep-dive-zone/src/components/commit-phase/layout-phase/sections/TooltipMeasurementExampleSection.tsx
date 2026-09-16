import { cx } from '@berrypjh/react-ui';
import { ArrowDown, Lightbulb, Ruler, Sparkles, Target } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { LayoutPhaseContent, TooltipStep } from '../content';

type Props = { content: LayoutPhaseContent['tooltip'] };

type MockLabels = LayoutPhaseContent['tooltip']['mock'];

export const TooltipMeasurementExampleSection = ({ content }: Props) => (
  <section
    id="tooltip-measurement"
    aria-labelledby="heading-tooltip-measurement"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="tooltip-measurement"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Ruler className="h-5 w-5" aria-hidden="true" />}
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
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
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
            labels={content.mock}
            variant="before"
          />
          <span aria-hidden="true" className="flex justify-center text-[var(--term-dim)]">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
          <TooltipMock
            title={content.afterTitle}
            content={content.afterContent}
            labels={content.mock}
            variant="after"
          />
        </div>
      </div>
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const FlowCard = ({ step, index }: { step: TooltipStep; index: number }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-start gap-md rounded-lg border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-xsm font-mono font-bold',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        {index}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cx('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
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
  labels,
  variant,
}: {
  title: string;
  content: string;
  labels: MockLabels;
  variant: 'before' | 'after';
}) => {
  const isAfter = variant === 'after';
  const t = toneTokens[isAfter ? 'teal' : 'violet'];
  return (
    <article
      className={cx(
        'flex flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <h3
        className={cx(
          'text-[10px] sm:text-xsm font-bold uppercase tracking-wider break-keep',
          t.text,
        )}
      >
        {title}
      </h3>

      {/* Tooltip UI mockup (intentional UI mimicry) */}
      <div
        aria-hidden="true"
        className={cx(
          'relative rounded-lg border bg-white dark:bg-slate-950 overflow-hidden h-32',
          isAfter
            ? 'border-teal-300/80 dark:border-teal-700/70'
            : 'border-violet-300/80 dark:border-violet-700/70',
        )}
      >
        {isAfter ? <AfterMock labels={labels} /> : <BeforeMock labels={labels} />}
      </div>

      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {content}
      </p>
    </article>
  );
};

const TargetChip = ({ label }: { label: string }) => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <span className="inline-flex items-center gap-1 rounded-md border-2 border-slate-300 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <Target className="h-3.5 w-3.5" />
      {label}
    </span>
  </div>
);

// 실제 툴팁 UI를 흉내 낸 목업 (tones 토큰 예외).
const BeforeMock = ({ labels }: { labels: MockLabels }) => (
  <div className="relative h-full bg-gradient-to-br from-slate-50 to-violet-50/40 dark:from-slate-950 dark:to-violet-950/20 p-2">
    <TargetChip label={labels.target} />
    <div className="absolute left-1 right-1 bottom-1 rounded-md border-2 border-violet-300/80 bg-violet-100/90 px-2 py-1 dark:border-violet-700/70 dark:bg-violet-950/60">
      <p className="text-[10px] font-bold text-violet-900 dark:text-violet-100">{labels.tooltip}</p>
      <p className="text-[10px] text-violet-700 dark:text-violet-300">{labels.beforeHint}</p>
    </div>
  </div>
);

const AfterMock = ({ labels }: { labels: MockLabels }) => (
  <div className="relative h-full bg-gradient-to-br from-slate-50 to-teal-50/40 dark:from-slate-950 dark:to-teal-950/20 p-2">
    <TargetChip label={labels.target} />
    <div
      className="absolute left-1/2 -translate-x-1/2 rounded-md border-2 border-teal-400/80 bg-teal-100/95 px-2 py-1 dark:border-teal-500/70 dark:bg-teal-950/70"
      style={{ top: 'calc(50% - 38px)' }}
    >
      <p className="text-[10px] font-bold text-teal-900 dark:text-teal-100">{labels.tooltip}</p>
      <p className="text-[10px] text-teal-700 dark:text-teal-300">{labels.afterHint}</p>
    </div>
    <Sparkles className="absolute top-1 right-1 h-3.5 w-3.5 text-teal-500 dark:text-teal-300" />
  </div>
);
