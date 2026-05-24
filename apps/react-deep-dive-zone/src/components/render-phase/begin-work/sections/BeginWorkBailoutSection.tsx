import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { BeginWorkContent } from '../content';
import { ArrowDownIcon, FastForwardIcon, GitForkIcon, SparklesIcon } from '../icons';

type Props = { content: BeginWorkContent['bailout'] };

export const BeginWorkBailoutSection = ({ content }: Props) => (
  <section id="bailout" aria-labelledby="heading-bailout" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="bailout"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.intro}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
      {/* Normal descent */}
      <article
        className={cn(
          'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-md sm:text-lg font-bold leading-tight text-teal-800 dark:text-teal-100 break-keep">
            {content.normal.title}
          </h3>
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60',
            )}
          >
            descend
          </span>
        </header>

        <ol className="flex flex-col items-start gap-1.5">
          {content.normal.items.map((item, idx) => (
            <li key={item} className="flex w-full flex-col items-start">
              <span
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl border px-3 py-1.5',
                  'border-teal-300/80 bg-white text-teal-800',
                  'dark:border-teal-700/70 dark:bg-slate-950/40 dark:text-teal-100',
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400"
                />
                <span className="text-xsm sm:text-sm font-bold break-keep">{item}</span>
              </span>
              {idx < content.normal.items.length - 1 && (
                <span aria-hidden="true" className="ml-3 text-teal-500/80 dark:text-teal-300/80">
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ol>

        <p className="mt-auto text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.normal.description}
        </p>
      </article>

      {/* Bailout */}
      <article
        className={cn(
          'flex h-full flex-col gap-3 rounded-3xl border-2 border-dashed p-md sm:p-lg',
          'border-violet-300/80 bg-violet-50/30 dark:border-violet-700/70 dark:bg-violet-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-md sm:text-lg font-bold leading-tight text-violet-800 dark:text-violet-100 break-keep">
            {content.bailout.title}
          </h3>
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              'border-violet-300/70 bg-white/70 text-violet-700 dark:bg-slate-950/60 dark:text-violet-200 dark:border-violet-700/60',
            )}
          >
            <FastForwardIcon className="h-3 w-3" />
            skip
          </span>
        </header>

        <ol className="flex flex-col items-start gap-1.5">
          {content.bailout.items.map((item, idx) => {
            const isMiddle = idx > 0 && idx < content.bailout.items.length - 1;
            return (
              <li key={item} className="flex w-full flex-col items-start">
                <span
                  className={cn(
                    'inline-flex items-center gap-2 rounded-xl border px-3 py-1.5',
                    isMiddle
                      ? 'border-dashed border-slate-300/80 bg-slate-50/40 text-slate-500 dark:border-slate-700/70 dark:bg-slate-950/30 dark:text-slate-400'
                      : 'border-violet-300/80 bg-white text-violet-800 dark:border-violet-700/70 dark:bg-slate-950/40 dark:text-violet-100',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-block h-1.5 w-1.5 rounded-full',
                      isMiddle
                        ? 'bg-slate-400 dark:bg-slate-500'
                        : 'bg-violet-500 dark:bg-violet-400',
                    )}
                  />
                  <span
                    className={cn(
                      'text-xsm sm:text-sm font-bold break-keep',
                      isMiddle && 'line-through opacity-80',
                    )}
                  >
                    {item}
                  </span>
                </span>
                {idx < content.bailout.items.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="ml-3 text-violet-500/80 dark:text-violet-300/80"
                  >
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <p className="mt-auto text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.bailout.description}
        </p>
      </article>
    </div>

    {/* Bottom emphasis */}
    <aside
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-amber-200/80 bg-amber-50/70',
        'dark:border-amber-800/70 dark:bg-amber-950/40',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
          'bg-amber-100 text-amber-700 border border-amber-200/80',
          'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
        )}
      >
        <SparklesIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 font-bold break-keep">
        {content.emphasis}
      </p>
    </aside>
  </section>
);
