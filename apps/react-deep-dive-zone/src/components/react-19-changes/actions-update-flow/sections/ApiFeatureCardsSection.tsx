import { cn } from '@it-tech-blog/utils';

import type { ActionsUpdateFlowContent } from '../content';
import { CheckCircleIcon } from '../icons';
import { stateTone } from '../tone';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActionsUpdateFlowContent['apiCards'] };

export const ApiFeatureCardsSection = ({ content }: Props) => (
  <section aria-labelledby="api-cards-heading" className="flex flex-col">
    <SectionHeader
      id="api-cards-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
      {content.cards.map((card) => {
        const tone = stateTone[card.state];
        return (
          <li key={card.hookName} className="h-full">
            <article
              className={cn(
                'group flex h-full flex-col overflow-hidden rounded-2xl border-2',
                'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                'hover:border-blue-300 dark:hover:border-blue-700/70',
              )}
            >
              {/* top accent line */}
              <span
                aria-hidden="true"
                className={cn('block h-1 w-full', tone.solidBg, 'opacity-80')}
              />

              <div className="flex flex-col gap-sm p-md sm:p-lg">
                {/* head: number badge + hook name */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex items-center rounded-md px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider',
                        tone.chip,
                        'border',
                      )}
                    >
                      {card.number}
                    </span>
                    <span
                      className={cn(
                        'inline-flex items-center rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase',
                        tone.chip,
                      )}
                    >
                      Hook
                    </span>
                  </div>
                </div>

                <h3 className={cn('text-md sm:text-lg font-mono font-bold break-all', tone.text)}>
                  {card.hookName}()
                </h3>

                {/* code panel */}
                <CodePanel code={card.code} langBadge={card.langBadge} />

                {/* checklist points */}
                <ul className="flex flex-col gap-1.5 mt-1">
                  {card.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
                    >
                      <CheckCircleIcon
                        aria-hidden="true"
                        className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', tone.text)}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
