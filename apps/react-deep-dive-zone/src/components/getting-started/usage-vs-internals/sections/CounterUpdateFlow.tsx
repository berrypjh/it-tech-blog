import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { UsageVsInternalsContent } from '../content';
import { CursorIcon, flowIconByName } from '../icons';
import { formatInline } from '../utils/inlineCode';

type Props = { content: UsageVsInternalsContent['flow'] };

const stepTones: ToneKey[] = ['sky', 'blue', 'indigo', 'cyan', 'teal', 'emerald'];

export const CounterUpdateFlow = ({ content }: Props) => {
  return (
    <section id="section-flow" aria-labelledby="heading-flow" className="space-y-lg">
      <SectionHeader
        id="flow"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CursorIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.steps.map((step, idx) => {
          const tone = stepTones[idx] ?? 'sky';
          const t = toneTokens[tone];
          const Icon = flowIconByName[step.icon];
          return (
            <li key={step.id} className="flex">
              <article
                className={cn(
                  'group flex flex-col items-start gap-sm h-full w-full',
                  'rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg',
                  'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={cn(
                      'inline-flex items-center justify-center w-10 h-10 rounded-md border',
                      t.chip,
                    )}
                    aria-hidden="true"
                  >
                    <Icon className={cn('h-5 w-5', t.text)} />
                  </span>
                  <span className="text-xsm tabular-nums text-[var(--term-dim)] font-bold">
                    {step.num.padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight break-keep [overflow-wrap:anywhere]">
                  {step.title}
                </h3>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                  {formatInline(step.hint)}
                </p>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
