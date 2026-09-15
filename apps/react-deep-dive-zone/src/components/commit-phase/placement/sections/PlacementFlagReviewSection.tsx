import { cx } from '@berrypjh/react-ui';
import { ArrowDown, Eye, Flag, Sparkles, Workflow } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PlacementContent, ReviewStep, ReviewStepIcon } from '../content';

type Props = { content: PlacementContent['review'] };

const iconMap: Record<ReviewStepIcon, typeof Eye> = {
  eye: Eye,
  flag: Flag,
};

export const PlacementFlagReviewSection = ({ content }: Props) => (
  <section
    id="placement-flag-review"
    aria-labelledby="heading-placement-flag-review"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="placement-flag-review"
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

      <aside
        className={cx(
          'mt-md flex items-start gap-sm rounded-lg border-2 p-md',
          toneTokens.violet.fill.border,
          toneTokens.violet.fill.bg,
        )}
      >
        <ToneIconBox tone="violet" size="sm" className="mt-0.5 shrink-0">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <p
          className={cx(
            'text-xsm sm:text-sm leading-relaxed break-keep font-bold',
            toneTokens.violet.fill.text,
          )}
        >
          {content.bottomNote}
        </p>
      </aside>
    </article>
  </section>
);

const StepCard = ({ step, index }: { step: ReviewStep; index: number }) => {
  const Icon = iconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-md rounded-lg border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={step.tone}>
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
        {step.title}
      </h3>
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};
