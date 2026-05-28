import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { StartWithQuestionContent } from '../content';
import {
  ArrowRightIcon,
  FileCodeIcon,
  MessageCircleQuestionIcon,
  QuoteIcon,
  RepeatIcon,
} from '../icons';

type Props = { content: StartWithQuestionContent['hero'] };

export const HeroSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="source-reading-checklist/start-with-question.md"
        suffix={
          <span className="text-[var(--term-dim)]">
            {' // reframe file-first → question-first'}
          </span>
        }
      />

      <div className="mt-md grid grid-cols-1 gap-lg lg:gap-xl lg:grid-cols-[minmax(0,_42fr)_minmax(0,_58fr)] items-stretch">
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
              'text-3xl sm:text-4xl lg:text-[2.6rem]',
              'font-bold leading-[1.15] tracking-tight text-[var(--term-fg)] break-keep',
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
              href="#section-reading-types"
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
              href="#section-question-to-entry"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-3',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
                'text-xsm font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.secondaryCta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* RIGHT — Visual */}
        <div
          className={cn(
            'relative rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
            'dark:border-slate-700 dark:bg-[var(--term-bg)]',
          )}
        >
          <div
            className={cn(
              'grid grid-cols-1 items-stretch gap-md',
              'sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] sm:gap-3 lg:gap-md',
            )}
          >
            {/* Left mini panel: file-first */}
            <article
              className={cn(
                'rounded-xl border-2 p-3 sm:p-md',
                'border-amber-200 bg-amber-50/60',
                'dark:border-amber-800/60 dark:bg-amber-950/30',
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-6 w-6 items-center justify-center rounded-md',
                    'border border-amber-300 bg-amber-100 text-amber-700',
                    'dark:border-amber-700/70 dark:bg-amber-900/60 dark:text-amber-200',
                  )}
                >
                  <FileCodeIcon className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-xsm font-bold text-amber-800 dark:text-amber-200 break-keep">
                  {content.leftPanel.title}
                </h3>
              </div>

              <ul className="flex flex-col gap-1.5">
                {content.leftPanel.files.map((f) => (
                  <li
                    key={f.name}
                    className={cn(
                      'flex items-center gap-2 rounded-md border px-2 py-1.5',
                      'border-amber-200/70 bg-white dark:border-amber-800/40 dark:bg-[var(--term-bg)]',
                      f.muted && 'opacity-55',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-amber-500/70 shrink-0"
                    />
                    <code className="font-mono text-[11px] text-[var(--term-fg)] truncate">
                      {f.name}
                    </code>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-[11px] leading-relaxed text-amber-800/80 dark:text-amber-200/80 break-keep">
                {content.leftPanel.caption}
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
                  'border-blue-300 bg-white text-blue-700 shadow-[0_2px_0_var(--term-border)]',
                  'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                )}
              >
                <RepeatIcon className="h-3 w-3" aria-hidden="true" />
                {content.connectorLabel}
              </span>
              <span className="hidden sm:block text-[10px] font-mono text-[var(--term-muted)] break-keep text-center max-w-[8ch]">
                {content.connectorSub}
              </span>
            </div>

            {/* Right mini panel: question-first */}
            <article
              className={cn(
                'rounded-xl border-2 p-3 sm:p-md',
                'border-cyan-200 bg-cyan-50/60',
                'dark:border-cyan-800/60 dark:bg-cyan-950/30',
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-6 w-6 items-center justify-center rounded-md',
                    'border border-cyan-300 bg-cyan-100 text-cyan-700',
                    'dark:border-cyan-700/70 dark:bg-cyan-900/60 dark:text-cyan-200',
                  )}
                >
                  <MessageCircleQuestionIcon className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-xsm font-bold text-cyan-800 dark:text-cyan-200 break-keep">
                  {content.rightPanel.title}
                </h3>
              </div>

              <blockquote
                className={cn(
                  'rounded-lg border bg-white p-3',
                  'border-cyan-200 dark:border-cyan-800/60 dark:bg-[var(--term-bg)]',
                )}
              >
                <QuoteIcon className="h-3.5 w-3.5 text-cyan-500 mb-1.5" aria-hidden="true" />
                <p className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {content.rightPanel.mainQuestion}
                </p>
              </blockquote>

              <ol className="mt-3 flex flex-wrap items-center gap-1.5">
                {content.rightPanel.flow.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-1.5"
                    aria-label={`${i + 1}. ${step}`}
                  >
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full border px-2 py-0.5',
                        'border-cyan-300 bg-white text-cyan-700',
                        'dark:border-cyan-700/70 dark:bg-[var(--term-bg)] dark:text-cyan-200',
                        'text-[10px] font-mono font-bold',
                      )}
                    >
                      {step}
                    </span>
                    {i < content.rightPanel.flow.length - 1 && (
                      <ArrowRightIcon className="h-3 w-3 text-cyan-500" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>

              <p className="mt-3 text-[11px] leading-relaxed text-cyan-800/80 dark:text-cyan-200/80 break-keep">
                {content.rightPanel.caption}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
