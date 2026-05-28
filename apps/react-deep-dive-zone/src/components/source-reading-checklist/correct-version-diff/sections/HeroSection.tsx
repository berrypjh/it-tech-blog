import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { CorrectVersionDiffContent } from '../content';
import { ArchiveIcon, ArrowRightIcon, CompassIcon, FileCheckIcon, HistoryIcon } from '../icons';
import { RoleBadge } from '../RoleBadge';

type Props = { content: CorrectVersionDiffContent['hero'] };

export const HeroSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="source-reading-checklist/correct-version-diff.md"
        suffix={
          <span className="text-[var(--term-dim)]">
            {' // old lecture → version check → modern note'}
          </span>
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
            <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
          </h1>

          <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep max-w-[44ch]">
            {content.description}
          </p>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[52ch]">
            {content.supporting}
          </p>

          <div className="mt-sm flex flex-col sm:flex-row gap-2">
            <a
              href="#section-timeline"
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
              href="#section-note-template"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-3',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300',
                'text-xsm font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.secondaryCta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* RIGHT — Visual: old → version check → modern */}
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
              <CompassIcon className="h-3.5 w-3.5" />
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
            {/* Left mini panel — Old lecture */}
            <article
              className={cn(
                'rounded-xl border-2 p-3 sm:p-md',
                'border-amber-200 bg-amber-50/60',
                'dark:border-amber-800/60 dark:bg-amber-950/30',
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 items-center justify-center rounded-md',
                      'border border-amber-300 bg-amber-100 text-amber-700',
                      'dark:border-amber-700/70 dark:bg-amber-900/60 dark:text-amber-200',
                    )}
                  >
                    <ArchiveIcon className="h-3.5 w-3.5" />
                  </span>
                  <h4 className="text-xsm font-bold text-amber-800 dark:text-amber-200 break-keep">
                    {content.leftPanelTitle}
                  </h4>
                </div>
                <RoleBadge tone="old" size="sm">
                  old
                </RoleBadge>
              </div>

              <ul className="flex flex-col gap-1.5">
                {content.leftItems.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      'flex items-center gap-2 rounded-md border px-2 py-1.5',
                      'border-amber-200/70 bg-white dark:border-amber-800/40 dark:bg-[var(--term-bg)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-amber-500/70 shrink-0"
                    />
                    <code className="font-mono text-[11px] text-[var(--term-fg)] truncate">
                      {item}
                    </code>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-[11px] leading-relaxed text-amber-800/80 dark:text-amber-200/80 break-keep">
                {content.leftCaption}
              </p>
            </article>

            {/* Center connector */}
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
                <HistoryIcon className="h-3 w-3" aria-hidden="true" />
                {content.connectorLabel}
              </span>
              <ul className="hidden sm:flex flex-col gap-1">
                {content.connectorChips.map((chip) => (
                  <li key={chip}>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
                        'border-violet-300 bg-violet-50 text-violet-800',
                        'dark:border-violet-700/70 dark:bg-violet-950/30 dark:text-violet-200',
                        'text-[9px] font-mono font-bold uppercase tracking-wider',
                      )}
                    >
                      {chip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right mini panel — Modern note */}
            <article
              className={cn(
                'rounded-xl border-2 p-3 sm:p-md',
                'border-blue-200 bg-blue-50/40',
                'dark:border-blue-800/60 dark:bg-blue-950/20',
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 items-center justify-center rounded-md',
                      'border border-blue-300 bg-blue-100 text-blue-700',
                      'dark:border-blue-700/70 dark:bg-blue-900/60 dark:text-blue-200',
                    )}
                  >
                    <FileCheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <h4 className="text-xsm font-bold text-blue-800 dark:text-blue-200 break-keep">
                    {content.rightPanelTitle}
                  </h4>
                </div>
                <RoleBadge tone="modern" size="sm">
                  modern
                </RoleBadge>
              </div>

              <ul className="flex flex-col gap-1.5">
                {content.rightItems.map((item) => (
                  <li
                    key={item}
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
                      {item}
                    </code>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-[11px] leading-relaxed text-blue-800/80 dark:text-blue-200/80 break-keep">
                {content.rightCaption}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
