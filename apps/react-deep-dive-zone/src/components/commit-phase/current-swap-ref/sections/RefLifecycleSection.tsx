import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ListChecks } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { LifecycleStep, RootCurrentRefContent } from '../content';

type Props = { content: RootCurrentRefContent['lifecycle'] };

export const RefLifecycleSection = ({ content }: Props) => (
  <section
    id="refs-lifecycle"
    aria-labelledby="heading-refs-lifecycle"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="refs-lifecycle"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      {/* Desktop: horizontal flow */}
      <ol className="hidden md:grid grid-cols-5 gap-2 items-stretch">
        {content.steps.map((step) => (
          <li key={step.label} className="flex">
            <LifecycleStepCard step={step} />
          </li>
        ))}
      </ol>

      {/* Mobile: vertical */}
      <ol className="md:hidden flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.label} className="flex flex-col">
            <LifecycleStepCard step={step} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const LifecycleStepCard = ({ step }: { step: LifecycleStep }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-2 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <h3
        className={cx(
          'text-[10px] sm:text-xsm font-bold uppercase tracking-wider break-keep',
          t.text,
        )}
      >
        {step.label}
      </h3>
      <code
        className={cx(
          'inline-block rounded-md border px-2 py-1 text-[11px] font-mono break-all',
          t.chip,
        )}
      >
        {step.value}
      </code>
    </article>
  );
};
