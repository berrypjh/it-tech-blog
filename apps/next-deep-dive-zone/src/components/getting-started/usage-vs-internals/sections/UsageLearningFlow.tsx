import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { UsageVsInternalsContent } from '../content';
import { UsageIcon, usageIconByName } from '../icons';

type Props = { content: UsageVsInternalsContent['usageFlow'] };

export const UsageLearningFlow = ({ content }: Props) => {
  return (
    <section
      id="section-usage-flow"
      aria-labelledby="heading-usage-flow"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <SectionHeader
        id="usage-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<UsageIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.steps.map((step) => {
          const t = toneTokens[step.tone];
          const Icon = usageIconByName[step.icon];

          return (
            <li key={step.number} className="flex">
              <article
                className={cn(
                  'flex h-full w-full flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md transition-all',
                  'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                  'border-[var(--term-border)]',
                  t.borderHover,
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-md border',
                      t.chip,
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={cn('text-lg font-bold tabular-nums', t.text)} aria-hidden="true">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
                  {step.title}
                </h3>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                    {content.learnLabel}
                  </span>
                  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {step.learn}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-0.5 pt-sm border-t border-dashed border-[var(--term-border)]">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                    {content.resultLabel}
                  </span>
                  <p className={cn('text-xsm leading-relaxed break-keep font-medium', t.text)}>
                    {step.result}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
