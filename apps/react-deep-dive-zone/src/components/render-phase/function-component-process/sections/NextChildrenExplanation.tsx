import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FunctionComponentContent } from '../content';
import { ArrowRightIcon, BracesIcon, CodeIcon } from '../icons';

type Props = { content: FunctionComponentContent['nextChildren'] };

export const NextChildrenExplanation = ({ content }: Props) => (
  <section
    id="next-children"
    aria-labelledby="heading-next-children"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="next-children"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BracesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-md lg:gap-3">
      {/* Left: JSX */}
      <article
        className={cn(
          'flex h-full flex-col gap-2 rounded-3xl border-2 p-md sm:p-lg',
          'border-slate-300/80 bg-slate-50/60',
          'dark:border-slate-700/70 dark:bg-slate-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
            {content.leftTitle}
          </h3>
          <span
            aria-hidden="true"
            className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border-slate-300/70 bg-white/70 text-slate-700 dark:bg-slate-950/60 dark:text-slate-200 dark:border-slate-700/60"
          >
            jsx
          </span>
        </header>
        <pre
          className={cn(
            'overflow-x-auto rounded-xl border p-md text-[12px] sm:text-xsm leading-[1.7] font-mono',
            'border-slate-300/70 bg-white dark:bg-slate-950/40 dark:border-slate-700/60',
            'text-slate-800 dark:text-slate-100',
          )}
        >
          <code className="whitespace-pre">{content.leftCode}</code>
        </pre>
      </article>

      {/* Center arrow */}
      <div className="flex lg:flex-col items-center justify-center gap-2 py-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 text-center">
          {content.arrowLabel}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed',
            'border-violet-300/80 bg-white text-violet-600',
            'dark:border-violet-700/70 dark:bg-slate-950 dark:text-violet-300',
            'lg:rotate-0',
          )}
        >
          <ArrowRightIcon className="h-5 w-5" />
        </span>
      </div>

      {/* Right: nextChildren */}
      <article
        className={cn(
          'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
          'border-violet-300/80 bg-violet-50/40',
          'dark:border-violet-700/70 dark:bg-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                'bg-violet-100 text-violet-700 border-violet-200/80',
                'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
              )}
            >
              <CodeIcon className="h-4 w-4" />
            </span>
            <code className="font-mono text-sm sm:text-md font-bold leading-tight text-violet-800 dark:text-violet-100">
              {content.rightTitle}
            </code>
          </div>
          <span
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              'border-violet-300/70 bg-white/70 text-violet-700 dark:bg-slate-950/60 dark:text-violet-200 dark:border-violet-700/60',
            )}
          >
            element tree
          </span>
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-violet-900 dark:text-violet-100 font-bold break-keep">
          {content.rightDescription}
        </p>
        <ul className="flex flex-col gap-1.5">
          {content.rightChecklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-violet-900 dark:text-violet-100 break-keep"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border',
                  'bg-violet-100 text-violet-700 border-violet-200/80',
                  'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
                )}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
