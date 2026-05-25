import { cn } from '@it-tech-blog/utils';

import type { React19ChangeMapContent } from '../content';
import { ArrowRightIcon, CircleIcon, SparklesIcon } from '../icons';
import { layerTone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ChangeMapContent['featureListTrap'] };

export const FeatureListTrapSection = ({ content }: Props) => (
  <section aria-labelledby="feature-list-trap-heading" className="flex flex-col">
    <SectionHeader
      id="feature-list-trap-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
    />

    <div
      className={cn(
        'rounded-2xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/40',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div
        className={cn(
          'grid grid-cols-1 gap-md items-stretch',
          'lg:grid-cols-[minmax(0,_5fr)_auto_minmax(0,_7fr)] lg:gap-lg',
        )}
      >
        {/* LEFT: muted feature list */}
        <article
          className={cn(
            'rounded-xl border-2 p-md flex flex-col gap-sm',
            'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
            >
              <CircleIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-sm font-bold text-[var(--term-muted)] break-keep">
              {content.leftCard.title}
            </h3>
          </header>

          <ul className="flex flex-col gap-1.5 mt-1">
            {content.leftCard.items.map((item) => (
              <li
                key={item}
                className={cn(
                  'flex items-center gap-2 rounded-lg border px-3 py-2',
                  'border-slate-200 bg-slate-50/70 text-[var(--term-fg)]',
                  'dark:border-slate-700 dark:bg-slate-900/40',
                )}
              >
                <span
                  aria-hidden="true"
                  className="block h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"
                />
                <span className="text-xsm font-mono break-keep">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* CENTER: arrow */}
        <div className="flex lg:flex-col items-center justify-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full',
              'border-2 border-blue-300 bg-blue-50 text-blue-700',
              'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <ArrowRightIcon className="h-4 w-4 lg:rotate-0" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200 break-keep">
            {content.arrowLabel}
          </span>
        </div>

        {/* RIGHT: structural reading */}
        <article
          className={cn(
            'relative rounded-xl border-2 p-md flex flex-col gap-sm overflow-hidden',
            'border-blue-300/80 bg-blue-50/40 dark:border-blue-700/70 dark:bg-blue-950/30',
            'shadow-[0_3px_0_var(--term-border)]',
          )}
        >
          <span
            aria-hidden="true"
            className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-white text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-300 shadow-[0_1px_0_var(--term-border)]"
          >
            <SparklesIcon className="h-3.5 w-3.5" />
          </span>

          <header className="flex items-center gap-2 pr-9">
            <h3 className="text-sm font-bold text-blue-700 dark:text-blue-200 break-keep">
              {content.rightCard.title}
            </h3>
          </header>

          <ul className="flex flex-col gap-2">
            {content.rightCard.items.map((item) => {
              const tone = layerTone[item.layer];
              return (
                <li
                  key={item.feature}
                  className={cn(
                    'grid grid-cols-[auto_auto_minmax(0,_1fr)] items-center gap-2',
                    'rounded-lg border-2 px-3 py-2',
                    'border-blue-200 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
                  )}
                >
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
                      tone.chip,
                      'font-mono text-xxsm font-bold',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('block h-1.5 w-1.5 rounded-full', tone.dot)}
                    />
                    {item.feature}
                  </span>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className={cn('h-3 w-3 shrink-0', tone.text)}
                  />
                  <span className={cn('text-xsm font-bold break-keep', tone.text)}>
                    {item.body}
                  </span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </div>
  </section>
);
