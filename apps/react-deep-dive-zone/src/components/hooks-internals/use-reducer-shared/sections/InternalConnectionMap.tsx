import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { Tone, UseReducerSharedContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, MergeIcon, RouteIcon } from '../icons';

type Props = { content: UseReducerSharedContent['connectionMap'] };

const pathTone: Record<Tone, { card: string; node: string; arrow: string }> = {
  sky: {
    card: 'border-sky-300/80 bg-sky-50/40 dark:border-sky-700/70 dark:bg-sky-950/30',
    node: 'border-sky-300/80 bg-white text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/60 dark:text-sky-100',
    arrow: 'text-sky-600 dark:text-sky-300',
  },
  cyan: {
    card: 'border-cyan-300/80 bg-cyan-50/40 dark:border-cyan-700/70 dark:bg-cyan-950/30',
    node: 'border-cyan-300/80 bg-white text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/60 dark:text-cyan-100',
    arrow: 'text-cyan-600 dark:text-cyan-300',
  },
  teal: {
    card: 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/30',
    node: 'border-teal-300/80 bg-white text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/60 dark:text-teal-100',
    arrow: 'text-teal-600 dark:text-teal-300',
  },
  emerald: {
    card: 'border-emerald-300/80 bg-emerald-50/40 dark:border-emerald-700/70 dark:bg-emerald-950/30',
    node: 'border-emerald-300/80 bg-white text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-100',
    arrow: 'text-emerald-600 dark:text-emerald-300',
  },
  violet: {
    card: 'border-violet-300/80 bg-violet-50/40 dark:border-violet-700/70 dark:bg-violet-950/30',
    node: 'border-violet-300/80 bg-white text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/60 dark:text-violet-100',
    arrow: 'text-violet-600 dark:text-violet-300',
  },
  amber: {
    card: 'border-amber-300/80 bg-amber-50/40 dark:border-amber-700/70 dark:bg-amber-950/30',
    node: 'border-amber-300/80 bg-white text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/60 dark:text-amber-100',
    arrow: 'text-amber-600 dark:text-amber-300',
  },
  indigo: {
    card: 'border-indigo-300/80 bg-indigo-50/40 dark:border-indigo-700/70 dark:bg-indigo-950/30',
    node: 'border-indigo-300/80 bg-white text-indigo-800 dark:border-indigo-700/70 dark:bg-indigo-950/60 dark:text-indigo-100',
    arrow: 'text-indigo-600 dark:text-indigo-300',
  },
};

export const InternalConnectionMap = ({ content }: Props) => (
  <section
    aria-labelledby="heading-connection-map"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="connection-map"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RouteIcon className="h-5 w-5" />}
    />

    <div className="flex flex-col gap-md">
      {/* Two parallel paths */}
      <div className="flex flex-col gap-md">
        {content.paths.map((path) => {
          const t = pathTone[path.tone];
          return (
            <article
              key={path.label}
              className={cn(
                'rounded-2xl border-2 p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)] transition-all',
                t.card,
              )}
            >
              <p
                className={cn(
                  'mb-2 text-[10px] font-mono font-bold uppercase tracking-wider',
                  t.arrow,
                )}
              >
                {path.label}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {path.nodes.map((node, i) => {
                  const isLast = i === path.nodes.length - 1;
                  return (
                    <span key={node} className="inline-flex items-center gap-1.5 sm:gap-2">
                      <code
                        className={cn(
                          'inline-flex items-center rounded-lg border-2 px-2.5 py-1.5 font-mono text-[11px] sm:text-xsm font-bold break-all',
                          t.node,
                        )}
                      >
                        {node}
                      </code>
                      {!isLast && (
                        <ArrowRightIcon aria-hidden="true" className={cn('h-4 w-4', t.arrow)} />
                      )}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      {/* Convergence arrow */}
      <div
        aria-hidden="true"
        className="flex items-center justify-center text-violet-600 dark:text-violet-300"
      >
        <ArrowDownIcon className="h-6 w-6" />
      </div>

      {/* Common pipeline box */}
      <article
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg text-center',
          'border-violet-400/80 bg-violet-50/70 shadow-[0_3px_0_var(--term-border)]',
          'dark:border-violet-600/70 dark:bg-violet-950/40',
        )}
      >
        <div className="flex items-center justify-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
          >
            <MergeIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-violet-800 dark:text-violet-100 break-keep">
            {content.pipelineTitle}
          </h3>
        </div>
        <p className="mt-1 text-[11px] sm:text-xsm font-mono text-violet-700 dark:text-violet-300 break-keep">
          {content.pipelineSubtitle}
        </p>
      </article>
    </div>
  </section>
);
