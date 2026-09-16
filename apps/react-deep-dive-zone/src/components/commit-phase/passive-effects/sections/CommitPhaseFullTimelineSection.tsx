import { cx } from '@berrypjh/react-ui';
import {
  CheckCircle2,
  Clock,
  Link,
  ListChecks,
  type LucideIcon,
  Sparkles,
  Star,
} from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PassiveEffectsContent, SummaryItem, TimelineStep } from '../content';

type Props = { content: PassiveEffectsContent['fullTimeline'] };

const summaryIconMap: Record<SummaryItem['id'], LucideIcon> = {
  check: CheckCircle2,
  clock: Clock,
  link: Link,
  star: Star,
};

export const CommitPhaseFullTimelineSection = ({ content }: Props) => (
  <section
    id="full-timeline"
    aria-labelledby="heading-full-timeline"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="full-timeline"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.45fr)_minmax(0,_0.55fr)] gap-3 items-start">
      <TimelineRail steps={content.steps} />
      <SummaryCard title={content.summaryTitle} items={content.summaryItems} />
    </div>
  </section>
);

const TimelineRail = ({ steps }: { steps: TimelineStep[] }) => (
  <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
    <ol className="flex flex-col">
      {steps.map((step, idx) => (
        <li key={step.number} className="flex items-stretch gap-3">
          <div className="flex flex-col items-center pt-1">
            <NumberCircle step={step} />
            {idx < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="mt-1 mb-1 w-px flex-1 border-l border-dashed border-[var(--term-border)]"
              />
            )}
          </div>
          <div className="flex-1 min-w-0 pb-2">
            <StepCard step={step} />
          </div>
        </li>
      ))}
    </ol>
  </article>
);

const NumberCircle = ({ step }: { step: TimelineStep }) => {
  const t = toneTokens[step.tone];
  return (
    <span
      aria-hidden="true"
      className={cx(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-mono font-bold tabular-nums',
        t.fill.bg,
        t.fill.border,
        t.fill.text,
      )}
    >
      {step.number}
    </span>
  );
};

const StepCard = ({ step }: { step: TimelineStep }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'flex flex-col gap-1.5 rounded-lg border p-md',
        step.isAsync
          ? cx('border-2', t.fill.border, t.fill.bg)
          : cx(t.border, 'bg-[var(--term-bg)]'),
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex flex-wrap items-center justify-between gap-2">
        <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
          {step.title}
        </h3>
        <span
          className={cx(
            'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
            t.chip,
          )}
        >
          {step.badge}
        </span>
      </header>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {step.body}
      </p>
    </article>
  );
};

const SummaryCard = ({ title, items }: { title: string; items: SummaryItem[] }) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="teal">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cx('text-sm sm:text-md font-bold', t.fill.text)}>{title}</h3>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          const Icon = summaryIconMap[item.id];
          return (
            <li
              key={item.text}
              className={cx(
                'flex items-start gap-2 rounded-md border bg-[var(--term-bg)] p-sm',
                t.border,
              )}
            >
              <span
                aria-hidden="true"
                className={cx(
                  'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border',
                  t.chip,
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className={cx('text-xsm leading-snug break-keep', t.fill.text)}>
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
