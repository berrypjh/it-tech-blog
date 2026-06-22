import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { ReconstructContent } from '../content';
import { FileTextIcon, QuoteIcon } from '../icons';

type Props = { content: ReconstructContent['oneSentence'] };

export const OneSentenceSection = ({ content }: Props) => {
  return (
    <section
      id="section-one-sentence"
      aria-labelledby="heading-one-sentence"
      className="space-y-lg"
    >
      <SectionHeader
        id="one-sentence"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<QuoteIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'rounded-2xl border-2 overflow-hidden',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        {/* Notebook header */}
        <header
          className={cn(
            'flex items-center justify-between gap-2 border-b-2 px-md py-3',
            'border-slate-200 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/40',
          )}
        >
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="flex items-center gap-1.5">
              <span className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </span>
            <FileTextIcon
              className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400"
              aria-hidden="true"
            />
            <code className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
              {content.noteHeader}
            </code>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {content.templateTitle}
          </span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(140px,_auto)_minmax(0,_1fr)] gap-x-md gap-y-3 px-md sm:px-lg py-md">
          {/* Topic */}
          <span className="pt-3 lg:py-3 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] lg:border-t border-[var(--term-border)] lg:border-t-0">
            {content.topicLabel}
          </span>
          <div className="pb-3 lg:py-3 lg:border-t border-[var(--term-border)] lg:border-solid">
            <code
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5',
                'border-[var(--term-border)] bg-[var(--term-surface)]',
                'font-mono text-[11px] text-[var(--term-fg)]',
              )}
            >
              {content.topicValue}
            </code>
          </div>

          {/* Summary */}
          <span className="pt-3 lg:py-3 text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-300 font-bold border-t border-dashed border-[var(--term-border)] lg:border-solid">
            {content.summaryLabel}
          </span>
          <div className="pb-3 lg:py-3 border-t border-dashed border-[var(--term-border)] lg:border-solid">
            <blockquote
              className={cn(
                'flex items-start gap-3 rounded-xl border-2 p-md',
                'border-blue-300 bg-blue-50/60 text-blue-900',
                'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
              )}
            >
              <QuoteIcon className="mt-1 h-5 w-5 shrink-0 text-blue-500" aria-hidden="true" />
              <p className="text-md sm:text-lg font-bold leading-snug break-keep">
                {content.summaryLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </blockquote>
          </div>
        </div>

        {/* Helper bar */}
        <footer
          className={cn(
            'border-t-2 px-md sm:px-lg py-3',
            'border-slate-200 bg-slate-50/60',
            'dark:border-slate-700 dark:bg-slate-900/30',
          )}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.helperLabel}
            </span>
            <ul className="flex flex-wrap items-center gap-1.5">
              {content.helperFlow.map((step, i) => (
                <li key={step} className="flex items-center gap-1.5">
                  <code
                    className={cn(
                      'inline-flex items-center rounded-md border px-2 py-0.5',
                      'border-blue-200 bg-white text-blue-800',
                      'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
                      'font-mono text-[10.5px] font-bold',
                    )}
                  >
                    {step}
                  </code>
                  {i < content.helperFlow.length - 1 && (
                    <span aria-hidden="true" className="text-cyan-500 text-[10px]">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </article>
    </section>
  );
};
