import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { FindPublicApiEntryContent } from '../content';
import { ArrowRightIcon, CableIcon, CpuIcon, FileCodeIcon, PlugIcon, SparkIcon } from '../icons';

type Props = { content: FindPublicApiEntryContent['bridge'] };

export const BridgeToFiberHooksSection = ({ content }: Props) => {
  return (
    <section id="section-bridge" aria-labelledby="heading-bridge" className="space-y-lg">
      <SectionHeader
        id="bridge"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<CableIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
          {/* LEFT — ReactHooks.js */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-xl border-2 p-md',
              'border-blue-200 bg-blue-50/60',
              'dark:border-blue-800/60 dark:bg-blue-950/30',
              'transition-all motion-safe:hover:border-blue-400 dark:motion-safe:hover:border-blue-500/80',
            )}
            aria-labelledby="bridge-left-title"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-md',
                    'border border-blue-300 bg-blue-100 text-blue-700',
                    'dark:border-blue-700/70 dark:bg-blue-900/60 dark:text-blue-200',
                  )}
                >
                  <PlugIcon className="h-4 w-4" />
                </span>
                <h3
                  id="bridge-left-title"
                  className="text-md font-bold text-blue-800 dark:text-blue-100"
                >
                  {content.leftTitle}
                </h3>
              </div>
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-2 py-0.5',
                  'border-blue-300 bg-white text-blue-700',
                  'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                )}
              >
                {content.leftBadge}
              </span>
            </div>

            <code
              className={cn(
                'flex items-center gap-1.5 overflow-x-auto rounded-md border px-2 py-1',
                'border-blue-200 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
                'font-mono text-[11px] text-[var(--term-fg)]',
              )}
            >
              <FileCodeIcon className="h-3 w-3 shrink-0 text-blue-500" aria-hidden="true" />
              <span className="whitespace-nowrap">{content.leftFile}</span>
            </code>

            <p className="text-xsm leading-relaxed text-blue-900/80 dark:text-blue-100/80 break-keep">
              {content.leftBody}
            </p>
          </article>

          {/* Center bridge */}
          <div className="relative flex lg:flex-col items-center justify-center gap-2 lg:py-md">
            <span
              aria-hidden="true"
              className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-cyan-300/60 dark:border-cyan-700/50"
            />
            <span
              aria-hidden="true"
              className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t-2 border-dashed border-cyan-300/60 dark:border-cyan-700/50"
            />

            <div
              className={cn(
                'relative inline-flex flex-col items-center gap-1 rounded-2xl border-2 px-3 py-2',
                'border-cyan-300 bg-white text-cyan-800 shadow-[0_3px_0_var(--term-border)]',
                'dark:border-cyan-700/70 dark:bg-[var(--term-bg)] dark:text-cyan-200',
              )}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-700/70 dark:text-cyan-300/70">
                {content.bridgeSub}
              </span>
              <code className="font-mono text-xsm font-bold inline-flex items-center gap-1">
                <ArrowRightIcon className="h-3 w-3" aria-hidden="true" />
                {content.bridgeLabel}
              </code>
            </div>
          </div>

          {/* RIGHT — ReactFiberHooks.js */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-xl border-2 p-md',
              'border-violet-200 bg-violet-50/60',
              'dark:border-violet-800/60 dark:bg-violet-950/30',
              'transition-all motion-safe:hover:border-violet-400 dark:motion-safe:hover:border-violet-500/80',
            )}
            aria-labelledby="bridge-right-title"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-md',
                    'border border-violet-300 bg-violet-100 text-violet-700',
                    'dark:border-violet-700/70 dark:bg-violet-900/60 dark:text-violet-200',
                  )}
                >
                  <CpuIcon className="h-4 w-4" />
                </span>
                <h3
                  id="bridge-right-title"
                  className="text-md font-bold text-violet-800 dark:text-violet-100"
                >
                  {content.rightTitle}
                </h3>
              </div>
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-2 py-0.5',
                  'border-violet-300 bg-white text-violet-700',
                  'dark:border-violet-700/70 dark:bg-[var(--term-bg)] dark:text-violet-200',
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                )}
              >
                {content.rightBadge}
              </span>
            </div>

            <code
              className={cn(
                'flex items-center gap-1.5 overflow-x-auto rounded-md border px-2 py-1',
                'border-violet-200 bg-white dark:border-violet-800/60 dark:bg-[var(--term-bg)]',
                'font-mono text-[11px] text-[var(--term-fg)]',
              )}
            >
              <FileCodeIcon className="h-3 w-3 shrink-0 text-violet-500" aria-hidden="true" />
              <span className="whitespace-nowrap">{content.rightFile}</span>
            </code>

            <p className="text-xsm leading-relaxed text-violet-900/80 dark:text-violet-100/80 break-keep">
              {content.rightBody}
            </p>
          </article>
        </div>

        {/* Key sentence */}
        <aside
          className={cn(
            'mt-md flex items-center gap-3 rounded-xl border-2 p-md',
            'border-slate-800 bg-slate-900 text-slate-50',
            'dark:border-slate-700 dark:bg-slate-950',
          )}
          aria-label="key sentence"
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
              'border border-cyan-400/60 bg-cyan-500/15 text-cyan-200',
            )}
          >
            <SparkIcon className="h-4 w-4" />
          </span>
          <p className="text-sm sm:text-md font-bold leading-snug break-keep">
            <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
              {content.keySentence}
            </span>
          </p>
        </aside>
      </div>
    </section>
  );
};
