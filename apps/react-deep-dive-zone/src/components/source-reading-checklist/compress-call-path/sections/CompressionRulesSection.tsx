import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import { ArrowRight, ListTree } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import type { CallPathCompressionContent } from '../content';
import { getStepClasses, StepBadge } from '../StepBadge';

type Props = { content: CallPathCompressionContent['rules'] };

export const CompressionRulesSection = ({ content }: Props) => {
  return (
    <section id="section-rules" aria-labelledby="heading-rules" className="space-y-lg scroll-mt-24">
      <SectionHeader
        id="rules"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ListTree className="h-5 w-5" aria-hidden="true" />}
      />

      {/* Stepper: desktop 4-col, mobile vertical */}
      <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-md xl:gap-3 items-stretch">
        {content.cards.map((card, i) => {
          const t = getStepClasses(card.kind);
          const isLast = i === content.cards.length - 1;
          return (
            <Fragment key={card.number}>
              <li>
                <article
                  className={cx(
                    'group flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
                    'bg-white dark:bg-[var(--term-bg)]',
                    t.border,
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    t.borderHover,
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      aria-hidden="true"
                      className={cx(
                        'inline-flex h-8 w-8 items-center justify-center rounded-full border-2',
                        t.border,
                        t.chip,
                        'font-mono text-xsm font-bold tabular-nums',
                      )}
                    >
                      {card.number}
                    </span>
                    <StepBadge kind={card.kind} size="sm" />
                  </div>

                  <h3 className={cx('text-md font-bold leading-snug break-keep', t.text)}>
                    {card.title}
                  </h3>

                  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {card.body}
                  </p>

                  <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] block mb-1.5">
                      {content.examplesLabel}
                    </span>
                    <ul className="flex flex-wrap gap-1">
                      {card.examples.map((ex) => (
                        <li key={ex}>
                          <code
                            className={cx(
                              'inline-flex items-center rounded-md border px-1.5 py-0.5',
                              t.border,
                              'bg-white dark:bg-[var(--term-bg)]',
                              t.text,
                              'font-mono text-[10.5px] font-bold',
                            )}
                          >
                            {ex}
                          </code>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
              {!isLast && (
                <li aria-hidden="true" className="hidden xl:flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </section>
  );
};
