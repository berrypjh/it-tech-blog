import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Eye,
  Lightbulb,
  Link,
  type LucideIcon,
  Replace,
  Unlink,
  Workflow,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type {
  RefTimelineId,
  RefTimelineStep,
  RefValueStep,
  RootCurrentRefContent,
} from '../content';

type Props = { content: RootCurrentRefContent['refTimeline'] };

const iconMap: Record<RefTimelineId, LucideIcon> = {
  eye: Eye,
  unlink: Unlink,
  replace: Replace,
  link: Link,
  check: CheckCircle2,
};

export const RefDetachAttachTimelineSection = ({ content }: Props) => (
  <section
    id="ref-detach-attach"
    aria-labelledby="heading-ref-detach-attach"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="ref-detach-attach"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      {/* Top: 5-step timeline */}
      <ol className="hidden md:grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-2 items-stretch">
        {content.steps.map((step, idx) => (
          <Fragment key={step.title}>
            <li className="flex">
              <StepCard step={step} index={idx + 1} />
            </li>
            {idx < content.steps.length - 1 && (
              <li
                aria-hidden="true"
                className="flex items-center justify-center text-[var(--term-dim)]"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      {/* Mobile: vertical */}
      <ol className="md:hidden flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <StepCard step={step} index={idx + 1} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Bottom: ref flow */}
      <RefFlow label={content.refFlowLabel} steps={content.refFlow} />
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const StepCard = ({ step, index }: { step: RefTimelineStep; index: number }) => {
  const Icon = iconMap[step.id];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-1.5 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <ToneIconBox tone={step.tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <span
          className={cx(
            'inline-flex h-6 w-6 items-center justify-center rounded-md border text-[10px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {index}
        </span>
      </header>
      <h3 className={cx('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
        {step.title}
      </h3>
      <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
    </article>
  );
};

const RefFlow = ({ label, steps }: { label: string; steps: RefValueStep[] }) => (
  <div className="mt-md pt-md border-t border-dashed border-[var(--term-border)]">
    <header className="mb-sm flex items-center justify-between">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
        {label}
      </span>
    </header>
    <ol className="flex flex-col md:flex-row md:items-center md:flex-wrap gap-2">
      {steps.map((step, idx) => (
        <Fragment key={step.label}>
          <li>
            <code
              className={cx(
                'inline-block rounded-md border px-2 py-1 text-[11px] font-mono break-all',
                toneTokens[step.tone].chip,
              )}
            >
              {step.label}
            </code>
          </li>
          {idx < steps.length - 1 && (
            <li
              aria-hidden="true"
              className="flex md:items-center justify-center text-[var(--term-dim)]"
            >
              <ArrowRight className="h-3.5 w-3.5 hidden md:inline-block" aria-hidden="true" />
              <ArrowDown className="h-3.5 w-3.5 md:hidden" aria-hidden="true" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  </div>
);
