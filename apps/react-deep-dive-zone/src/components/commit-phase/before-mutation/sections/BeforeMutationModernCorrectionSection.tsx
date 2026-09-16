import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowRight, Lightbulb, Sparkles } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { BeforeMutationContent, ModernStep } from '../content';

type Props = { content: BeforeMutationContent['modern'] };

export const BeforeMutationModernCorrectionSection = ({ content }: Props) => (
  <section
    id="modern-correction"
    aria-labelledby="heading-modern-correction"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="modern-correction"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <StepRail steps={content.steps} />
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const StepRail = ({ steps }: { steps: ModernStep[] }) => (
  <ol className="flex flex-col md:flex-row md:items-stretch gap-2">
    {steps.map((step, idx) => (
      <Fragment key={step.label}>
        <li className="flex-1 min-w-0">
          <StepPill step={step} index={idx + 1} />
        </li>
        {idx < steps.length - 1 && (
          <li
            aria-hidden="true"
            className="flex md:items-center justify-center text-[var(--term-dim)]"
          >
            <ArrowRight className="h-4 w-4 hidden md:inline-block" aria-hidden="true" />
            <ArrowDown className="h-4 w-4 md:hidden my-1" aria-hidden="true" />
          </li>
        )}
      </Fragment>
    ))}
  </ol>
);

const StepPill = ({ step, index }: { step: ModernStep; index: number }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-1 rounded-lg border-2 p-sm sm:p-md text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'self-center inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-mono font-bold tabular-nums',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
      <span className={cx('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
        {step.label}
      </span>
      {step.subLabel && (
        <span className="text-[10px] font-mono lowercase tracking-wider text-[var(--term-muted)]">
          {step.subLabel}
        </span>
      )}
    </article>
  );
};
