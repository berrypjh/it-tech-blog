import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { AspectBadge } from '../AspectBadge';
import type { ReconstructContent } from '../content';
import {
  ArrowRightIcon,
  Code2Icon,
  MessageSquareTextIcon,
  RepeatIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: ReconstructContent['hero'] };

export const HeroSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="source-reading-checklist/reconstruct-with-words-and-flow.md"
        suffix={
          <span className="text-[var(--term-dim)]">
            {' // read code → compress flow → explain in my words'}
          </span>
        }
      />

      <div className="mt-md grid grid-cols-1 gap-lg lg:gap-xl lg:grid-cols-[minmax(0,_42fr)_minmax(0,_58fr)] items-stretch">
        {/* LEFT — Text */}
        <div className="flex flex-col gap-md">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
              'border-violet-300 bg-violet-50 text-violet-700',
              'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
              'text-[11px] font-mono font-bold uppercase tracking-wider',
            )}
          >
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-violet-500" />
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
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              {content.titleLines[1]}
            </span>
          </h1>

          <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep max-w-[44ch]">
            {content.description}
          </p>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[52ch]">
            {content.supporting}
          </p>

          <div className="mt-sm flex flex-col sm:flex-row gap-2">
            <a
              href="#section-builder"
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
              href="#section-checklist"
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

        {/* RIGHT — read → compress → explain */}
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
                'border border-violet-300 bg-violet-100 text-violet-700',
                'dark:border-violet-700/70 dark:bg-violet-950/60 dark:text-violet-200',
              )}
            >
              <WorkflowIcon className="h-3.5 w-3.5" />
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
            {/* Left — raw code */}
            <article
              className={cn(
                'rounded-xl border-2 p-3 sm:p-md',
                'border-slate-200 bg-slate-50/80',
                'dark:border-slate-700 dark:bg-slate-900/40',
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 items-center justify-center rounded-md',
                      'border border-slate-300 bg-white text-slate-700',
                      'dark:border-slate-600 dark:bg-[var(--term-bg)] dark:text-slate-200',
                    )}
                  >
                    <Code2Icon className="h-3.5 w-3.5" />
                  </span>
                  <h4 className="text-xsm font-bold text-slate-700 dark:text-slate-200 break-keep">
                    {content.leftPanelTitle}
                  </h4>
                </div>
                <AspectBadge tone="reading" size="sm">
                  raw
                </AspectBadge>
              </div>

              <ul className="flex flex-col gap-1.5">
                {content.leftItems.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      'flex items-center gap-2 rounded-md border px-2 py-1.5',
                      'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"
                    />
                    <code className="font-mono text-[11px] text-[var(--term-fg)] truncate">
                      {item}
                    </code>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400 break-keep">
                {content.leftCaption}
              </p>
            </article>

            {/* Connector — compress / connect / rebuild */}
            <div className="relative flex sm:flex-col items-center justify-center gap-2 sm:py-md">
              <span
                aria-hidden="true"
                className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
              />
              <span
                aria-hidden="true"
                className="sm:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
              />
              <ul className="flex sm:flex-col gap-1.5 relative z-10">
                {content.connectorLabels.map((label, i) => (
                  <li key={label}>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full border-2 px-2.5 py-1',
                        'border-blue-300 bg-white text-blue-700 shadow-[0_2px_0_var(--term-border)]',
                        'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
                        'text-[10px] font-mono font-bold uppercase tracking-wider',
                      )}
                    >
                      <RepeatIcon className="h-3 w-3" aria-hidden="true" />
                      {i + 1}. {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — note + flow */}
            <article
              className={cn(
                'rounded-xl border-2 p-3 sm:p-md',
                'border-emerald-200 bg-emerald-50/40',
                'dark:border-emerald-800/60 dark:bg-emerald-950/20',
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 items-center justify-center rounded-md',
                      'border border-emerald-300 bg-emerald-100 text-emerald-700',
                      'dark:border-emerald-700/70 dark:bg-emerald-900/60 dark:text-emerald-200',
                    )}
                  >
                    <MessageSquareTextIcon className="h-3.5 w-3.5" />
                  </span>
                  <h4 className="text-xsm font-bold text-emerald-800 dark:text-emerald-200 break-keep">
                    {content.rightPanelTitle}
                  </h4>
                </div>
                <AspectBadge tone="note" size="sm">
                  mine
                </AspectBadge>
              </div>

              <ul className="flex flex-col gap-1.5">
                {content.rightItems.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      'flex items-center gap-2 rounded-md border px-2 py-1.5',
                      'border-emerald-200/70 bg-white dark:border-emerald-800/40 dark:bg-[var(--term-bg)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-emerald-500/70 shrink-0"
                    />
                    <span className="text-[11px] font-bold text-emerald-900 dark:text-emerald-100 truncate">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-[11px] leading-relaxed text-emerald-800/80 dark:text-emerald-200/80 break-keep">
                {content.rightCaption}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
