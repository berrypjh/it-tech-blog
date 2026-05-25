import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { UseEffectEventContent } from '../content';
import { ArrowRightIcon } from '../icons';
import { effectTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UseEffectEventContent['problem'] };

export const ExistingEffectProblem = ({ content }: Props) => (
  <section aria-labelledby="problem-heading" className="flex flex-col">
    <SectionHeader
      id="problem-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ol
      className={cn(
        'grid grid-cols-1 gap-md sm:grid-cols-2 sm:gap-3',
        'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-3 items-stretch',
      )}
    >
      {content.cards.map((card, idx) => {
        const tone = effectTone[card.tone];
        const Icon = iconRegistry[card.iconKey];
        return (
          <Fragment key={card.title}>
            <li>
              <article
                className={cn(
                  'flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
                  tone.border,
                  card.tone === 'problem' ? tone.bg : 'bg-white dark:bg-[var(--term-bg)]',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-11 w-11 items-center justify-center rounded-xl border',
                      tone.iconChip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                      tone.chip,
                    )}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </header>
                <h3
                  className={cn('text-sm sm:text-md font-bold break-keep leading-snug', tone.text)}
                >
                  {card.title}
                </h3>
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.caption}
                </p>
                <div
                  className={cn(
                    'mt-auto inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 w-fit',
                    tone.chip,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn('block h-1.5 w-1.5 rounded-full', tone.dot)}
                  />
                  <span className={cn('text-xxsm font-bold break-keep', tone.text)}>
                    {card.conclusion}
                  </span>
                </div>
              </article>
            </li>
            {card.connector && (
              <li aria-hidden="true" className="hidden lg:flex items-center justify-center">
                <span
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full border-2',
                    card.connector === '+'
                      ? 'border-blue-300 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200'
                      : 'border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200',
                    'font-mono text-sm font-bold',
                  )}
                >
                  {card.connector === '+' ? '+' : <ArrowRightIcon className="h-4 w-4" />}
                </span>
              </li>
            )}
          </Fragment>
        );
      })}
    </ol>
  </section>
);
