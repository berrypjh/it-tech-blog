import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AdvancedWrapupContent } from '../content';
import { AtomIcon, CornerDownRightIcon, MapIcon, RocketIcon } from '../icons';

type Props = { content: AdvancedWrapupContent['expansionMap'] };

export const React19ExpansionMap = ({ content }: Props) => (
  <section aria-labelledby="heading-expansion">
    <NumberedSectionHeader
      id="expansion"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-blue-200/80 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/30',
        'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Center node */}
      <div className="flex justify-center mb-md">
        <div
          className={cn(
            'inline-flex items-center gap-3 rounded-full border-2 px-md py-2.5',
            'border-blue-600 bg-blue-600 text-white shadow-[0_4px_0_rgba(29,78,216,0.35)]',
            'dark:border-blue-500 dark:bg-blue-500',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15"
          >
            <AtomIcon className="h-4 w-4" />
          </span>
          <code className="font-mono text-sm sm:text-md font-bold whitespace-nowrap">
            {content.centerLabel}
          </code>
        </div>
      </div>

      {/* Connector */}
      <div aria-hidden="true" className="flex justify-center mb-md">
        <CornerDownRightIcon className="h-5 w-5 text-blue-500 dark:text-blue-300 -rotate-12" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-start">
        {/* LEFT: base system */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-blue-300/80 bg-white dark:border-blue-700/70 dark:bg-slate-950/40',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2 mb-1">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900"
            >
              <AtomIcon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.leftTitle}
            </span>
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.leftItems.map((item) => (
              <li
                key={item.title}
                className={cn(
                  'flex items-start gap-2 rounded-lg border bg-blue-50/40 px-3 py-2',
                  'border-blue-200/70 dark:border-blue-800/60 dark:bg-blue-950/20',
                )}
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-300"
                />
                <div className="flex flex-col min-w-0">
                  <code className="font-mono text-[11px] sm:text-xsm font-bold text-blue-700 dark:text-blue-200 break-all">
                    {item.title}
                  </code>
                  <span className="text-[10px] sm:text-[11px] text-[var(--term-muted)] break-keep">
                    {item.body}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        {/* RIGHT: extension */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-emerald-300/80 bg-white dark:border-emerald-700/70 dark:bg-slate-950/40',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2 mb-1">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900"
            >
              <RocketIcon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              {content.rightTitle}
            </span>
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.rightItems.map((item) => (
              <li
                key={item.title}
                className={cn(
                  'flex items-start gap-2 rounded-lg border bg-emerald-50/40 px-3 py-2',
                  'border-emerald-200/70 dark:border-emerald-800/60 dark:bg-emerald-950/20',
                )}
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-300"
                />
                <div className="flex flex-col min-w-0">
                  <code className="font-mono text-[11px] sm:text-xsm font-bold text-emerald-700 dark:text-emerald-200 break-all">
                    {item.title}
                  </code>
                  <span className="text-[10px] sm:text-[11px] text-[var(--term-muted)] break-keep">
                    {item.body}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </article>
  </section>
);
