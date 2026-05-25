import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { TestAsDocContent } from '../content';
import { ArrowRightIcon, FileCheckIcon, FileCodeIcon, RepeatIcon, RouteIcon } from '../icons';

type Props = { content: TestAsDocContent['hero'] };

export const HeroSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="source-reading-checklist/verify-intent-with-tests.md"
        suffix={
          <span className="text-[var(--term-dim)]">{' // implementation → test → intent'}</span>
        }
      />

      <div className="mt-md grid grid-cols-1 gap-lg lg:gap-xl lg:grid-cols-[minmax(0,_40fr)_minmax(0,_60fr)] items-stretch">
        {/* LEFT — Text */}
        <div className="flex flex-col gap-md">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
              'border-blue-300 bg-blue-50 text-blue-700',
              'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
              'text-[11px] font-mono font-bold uppercase tracking-wider',
            )}
          >
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-blue-500" />
            {content.badge}
          </span>

          <h1
            id="hero-heading"
            className={cn(
              'text-3xl sm:text-4xl lg:text-[2.4rem]',
              'font-bold leading-[1.18] tracking-tight text-[var(--term-fg)] break-keep',
            )}
          >
            <span className="block">{content.titleLines[0]}</span>
            <span className="block">{content.titleLines[1]}</span>
            <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[2]}</span>
          </h1>

          <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep max-w-[44ch]">
            {content.description}
          </p>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[52ch]">
            {content.supporting}
          </p>

          <div className="mt-sm flex flex-col sm:flex-row gap-2">
            <a
              href="#section-test-directory-map"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-3',
                'bg-blue-600 text-white hover:bg-blue-700',
                'dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950',
                'text-xsm font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.primaryCta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#section-explorer"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-3',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'hover:border-violet-400 hover:text-violet-700 dark:hover:text-violet-300',
                'text-xsm font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.secondaryCta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* RIGHT — implementation vs implementation+tests */}
        <div
          className={cn(
            'relative rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
            'dark:border-slate-700 dark:bg-[var(--term-bg)]',
          )}
        >
          <div className="flex items-center gap-2 mb-md">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-lg',
                'border border-blue-300 bg-blue-100 text-blue-700',
                'dark:border-blue-700/70 dark:bg-blue-950/60 dark:text-blue-200',
              )}
            >
              <RouteIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.visualTitle}
            </h3>
          </div>

          <div
            className={cn(
              'grid grid-cols-1 items-stretch gap-md',
              'sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] sm:gap-3 lg:gap-md',
            )}
          >
            {/* Left mini panel: implementation only */}
            <article
              className={cn(
                'rounded-xl border-2 p-3 sm:p-md',
                'border-blue-200 bg-blue-50/40',
                'dark:border-blue-800/60 dark:bg-blue-950/20',
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-6 w-6 items-center justify-center rounded-md',
                    'border border-blue-300 bg-blue-100 text-blue-700',
                    'dark:border-blue-700/70 dark:bg-blue-900/60 dark:text-blue-200',
                  )}
                >
                  <FileCodeIcon className="h-3.5 w-3.5" />
                </span>
                <h4 className="text-xsm font-bold text-blue-800 dark:text-blue-200 break-keep">
                  {content.leftPanelTitle}
                </h4>
              </div>

              <ul className="flex flex-col gap-1.5">
                {content.leftFiles.map((file) => (
                  <li
                    key={file}
                    className={cn(
                      'flex items-center gap-2 rounded-md border px-2 py-1.5',
                      'border-blue-200/70 bg-white dark:border-blue-800/40 dark:bg-[var(--term-bg)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-blue-500/70 shrink-0"
                    />
                    <code className="font-mono text-[11px] text-[var(--term-fg)] truncate">
                      {file}
                    </code>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-[11px] leading-relaxed text-blue-800/80 dark:text-blue-200/80 break-keep">
                {content.leftCaption}
              </p>
            </article>

            {/* Connector */}
            <div className="relative flex sm:flex-col items-center justify-center gap-2 sm:py-md">
              <span
                aria-hidden="true"
                className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
              />
              <span
                aria-hidden="true"
                className="sm:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
              />
              <span
                className={cn(
                  'relative inline-flex items-center gap-1 rounded-full border-2 px-3 py-1.5',
                  'border-violet-300 bg-white text-violet-700 shadow-[0_2px_0_var(--term-border)]',
                  'dark:border-violet-700/70 dark:bg-[var(--term-bg)] dark:text-violet-200',
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                )}
              >
                <RepeatIcon className="h-3 w-3" aria-hidden="true" />
                {content.connectorLabel}
              </span>
              <span className="hidden sm:block text-[10px] font-mono text-[var(--term-muted)] break-keep text-center max-w-[10ch]">
                {content.connectorSub}
              </span>
            </div>

            {/* Right mini panel: tests + intent */}
            <article
              className={cn(
                'rounded-xl border-2 p-3 sm:p-md',
                'border-violet-200 bg-violet-50/40',
                'dark:border-violet-800/60 dark:bg-violet-950/20',
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-6 w-6 items-center justify-center rounded-md',
                    'border border-violet-300 bg-violet-100 text-violet-700',
                    'dark:border-violet-700/70 dark:bg-violet-900/60 dark:text-violet-200',
                  )}
                >
                  <FileCheckIcon className="h-3.5 w-3.5" />
                </span>
                <h4 className="text-xsm font-bold text-violet-800 dark:text-violet-200 break-keep">
                  {content.rightPanelTitle}
                </h4>
              </div>

              <ul className="flex flex-col gap-1.5">
                {content.rightMap.map((row) => (
                  <li
                    key={row.from}
                    className={cn(
                      'flex flex-wrap items-center gap-2 rounded-md border px-2 py-1.5',
                      'border-violet-200/70 bg-white dark:border-violet-800/40 dark:bg-[var(--term-bg)]',
                    )}
                  >
                    <code
                      className={cn(
                        'inline-flex items-center rounded-md border px-1.5 py-0.5',
                        'border-violet-200 bg-violet-50 text-violet-800',
                        'dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200',
                        'font-mono text-[10.5px] font-bold',
                      )}
                    >
                      {row.from}
                    </code>
                    <span
                      aria-hidden="true"
                      className="text-[10px] text-violet-500 dark:text-violet-400 shrink-0"
                    >
                      →
                    </span>
                    <span className="text-[11px] text-[var(--term-fg)] break-keep">{row.to}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-[11px] leading-relaxed text-violet-800/80 dark:text-violet-200/80 break-keep">
                {content.rightCaption}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
