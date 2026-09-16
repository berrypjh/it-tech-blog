import { cx } from '@berrypjh/react-ui';
import { ArrowDown, RotateCw, Workflow } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CommonFlowStep, WorkLoopContent } from '../content';

type Props = { content: WorkLoopContent['common'] };

export const PerformUnitRepeatFlow = ({ content }: Props) => (
  <section
    id="common-loop"
    aria-labelledby="heading-common-loop"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="common-loop"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <ol className="mx-auto flex w-full max-w-[640px] flex-col items-stretch">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <StepCard step={step} highlight={idx === 1} />
            {idx < content.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="my-2 flex justify-center text-[var(--term-accent)]"
              >
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const StepCard = ({ step, highlight }: { step: CommonFlowStep; highlight: boolean }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'grid grid-cols-[auto_minmax(0,_1fr)] gap-md items-center rounded-lg border bg-[var(--term-bg)] p-md',
        highlight ? cx('border-2', t.border) : t.border,
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-11 w-11 items-center justify-center rounded-md border',
          t.chip,
        )}
      >
        <RotateCw className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
          {step.title}
        </h3>
        <p className="text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
    </article>
  );
};
