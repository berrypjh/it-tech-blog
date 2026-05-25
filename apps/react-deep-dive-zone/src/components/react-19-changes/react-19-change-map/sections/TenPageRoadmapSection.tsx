import { cn } from '@it-tech-blog/utils';

import type { React19ChangeMapContent } from '../content';
import { CheckCircleIcon, MapPinIcon, RouteIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ChangeMapContent['tenPageRoadmap'] };

export const TenPageRoadmapSection = ({ content }: Props) => (
  <section aria-labelledby="ten-page-roadmap-heading" className="flex flex-col">
    <SectionHeader
      id="ten-page-roadmap-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div
      className={cn(
        'rounded-2xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] lg:gap-lg items-start">
        {/* roadmap list */}
        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {content.items.map((item) => (
            <li key={item.number}>
              <article
                aria-current={item.active ? 'step' : undefined}
                className={cn(
                  'flex h-full items-start gap-3 rounded-xl border-2 p-3',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  item.active
                    ? cn(
                        'border-blue-400 bg-blue-50/80 shadow-[0_3px_0_var(--term-border)]',
                        'dark:border-blue-600 dark:bg-blue-950/40',
                      )
                    : cn(
                        'border-slate-200 bg-white hover:border-blue-300',
                        'dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-blue-700/70',
                      ),
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 font-mono text-xxsm font-bold tabular-nums',
                    item.active
                      ? 'border-blue-500 bg-blue-600 text-white dark:bg-blue-500 dark:border-blue-400'
                      : 'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300',
                  )}
                >
                  {item.number}
                </span>

                <div className="flex min-w-0 flex-col gap-0.5">
                  <div className="flex items-center gap-1.5">
                    {item.active && (
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center gap-0.5 rounded-full bg-blue-600 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase text-white dark:bg-blue-500"
                      >
                        <span className="block h-1 w-1 rounded-full bg-white/90" />
                        NOW
                      </span>
                    )}
                    <h3
                      className={cn(
                        'text-xsm sm:text-sm font-bold break-keep',
                        item.active ? 'text-blue-700 dark:text-blue-200' : 'text-[var(--term-fg)]',
                      )}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xxsm text-[var(--term-muted)] break-keep leading-relaxed">
                    {item.body}
                  </p>
                </div>

                {item.active && (
                  <span aria-hidden="true" className="ml-auto text-blue-600 dark:text-blue-300">
                    <MapPinIcon className="h-4 w-4" />
                  </span>
                )}
              </article>
            </li>
          ))}
        </ol>

        {/* side panel */}
        <aside
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-300/80 bg-white dark:border-blue-700/70 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <RouteIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-blue-700 dark:text-blue-200 break-keep">
              {content.sidePanel.title}
            </h3>
          </div>

          <ul className="flex flex-col gap-1.5">
            {content.sidePanel.bodyLines.map((line) => (
              <li
                key={line}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500 dark:text-blue-300"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="pt-sm">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] mb-1.5">
              {content.sidePanel.tagLabel}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {content.sidePanel.tags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200"
                >
                  <span
                    aria-hidden="true"
                    className="block h-1 w-1 rounded-full bg-blue-500 dark:bg-blue-400"
                  />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
);
