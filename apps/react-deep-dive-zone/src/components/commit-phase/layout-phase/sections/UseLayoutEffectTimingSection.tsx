import { cx } from '@berrypjh/react-ui';
import { ArrowDown, Lightbulb, Workflow, Zap } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { LayoutPhaseContent, TimingStep } from '../content';

type Props = { content: LayoutPhaseContent['timing'] };

export const UseLayoutEffectTimingSection = ({ content }: Props) => (
  <section
    id="use-layout-effect-timing"
    aria-labelledby="heading-use-layout-effect-timing"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="use-layout-effect-timing"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <ol className="flex flex-col">
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
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const StepCard = ({ step, index }: { step: TimingStep; index: number }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-md rounded-lg border p-md',
        step.active
          ? cx('border-2', t.fill.border, t.fill.bg)
          : cx(t.border, 'bg-[var(--term-bg)]'),
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-11 w-11 items-center justify-center rounded-lg border',
          step.active ? cx(t.fill.bg, t.fill.border, t.fill.text) : t.chip,
        )}
      >
        {step.active ? (
          <Zap className="h-5 w-5" aria-hidden="true" />
        ) : (
          <span className="text-xsm font-mono font-bold">{index}</span>
        )}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
          {step.title}
        </h3>
        <p className="text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
      <span
        aria-hidden="true"
        className={cx(
          'hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};
