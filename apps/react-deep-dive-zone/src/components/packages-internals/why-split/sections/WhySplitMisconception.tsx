import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { WhySplitContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon, XCircleIcon } from '../icons';

type Props = { content: WhySplitContent['misconception'] };

export const WhySplitMisconception = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-misconception" className="space-y-md">
      <SectionHeader
        id="misconception"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <article
              className={cn(
                'group flex flex-1 flex-col rounded-2xl border bg-[var(--term-bg)]',
                'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
                'overflow-hidden transition-all hover:-translate-y-0.5 hover:border-[var(--term-muted)]',
              )}
            >
              {/* 오해 영역 */}
              <div
                className={cn(
                  'flex flex-col gap-2 p-md',
                  'bg-red-50/70 dark:bg-red-950/30',
                  'border-b border-dashed border-[var(--term-border)]',
                )}
              >
                <div className="flex items-start gap-sm">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-md border',
                      'border-red-300/70 bg-red-100 text-red-700',
                      'dark:border-red-800/70 dark:bg-red-950/60 dark:text-red-300',
                    )}
                  >
                    <XCircleIcon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span
                      className={cn(
                        'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                        'border-red-300/80 bg-red-100 text-red-700',
                        'dark:border-red-800/70 dark:bg-red-950/60 dark:text-red-300',
                      )}
                    >
                      {card.badgeWrong}
                    </span>
                    <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
                      {card.wrong}
                    </p>
                  </div>
                </div>
              </div>

              {/* 정확한 설명 영역 */}
              <div
                className={cn(
                  'flex flex-col gap-2 p-md flex-1',
                  'bg-emerald-50/40 dark:bg-emerald-950/20',
                )}
              >
                <div className="flex items-start gap-sm">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-md border',
                      'border-emerald-300/70 bg-emerald-100 text-emerald-700',
                      'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
                    )}
                  >
                    <CheckCircleIcon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span
                      className={cn(
                        'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                        'border-emerald-300/80 bg-emerald-100 text-emerald-700',
                        'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
                      )}
                    >
                      {card.badgeRight}
                    </span>
                    <p className="text-sm leading-snug text-[var(--term-fg)] break-keep">
                      {card.right}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
