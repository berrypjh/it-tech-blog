import { cn } from '@it-tech-blog/utils';

import type { RootNativeEventContent } from '../content';
import { ContainerIcon, EyeIcon, LayersIcon, NetworkIcon } from '../icons';
import { ListenerPill } from '../ListenerPill';
import { NumberedSectionHeader } from '../NumberedSectionHeader';

type Props = { content: RootNativeEventContent['rootViz'] };

export const RootContainerVisualization = ({ content }: Props) => (
  <section aria-labelledby="heading-root-viz">
    <NumberedSectionHeader
      id="root-viz"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-md lg:gap-lg items-start">
        {/* LEFT: DOM box + listener pills with dashed connectors */}
        <div className="flex flex-col gap-md">
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-md items-stretch">
            {/* DOM box */}
            <article
              className={cn(
                'flex flex-col gap-2 rounded-2xl border-2 p-md',
                'border-violet-300/90 bg-gradient-to-br from-violet-50 to-blue-50/60',
                'dark:border-violet-600/80 dark:from-violet-950/40 dark:to-blue-950/30',
                'shadow-[0_3px_0_var(--term-border)]',
              )}
            >
              <header className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-violet-200 bg-white text-violet-700 dark:border-violet-800/60 dark:bg-slate-950/40 dark:text-violet-200"
                >
                  <ContainerIcon className="h-3.5 w-3.5" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-violet-700 dark:text-violet-300">
                  DOM
                </span>
              </header>
              <pre className="overflow-x-auto rounded-lg border border-violet-200/70 bg-white px-3 py-2 font-mono text-[11px] sm:text-xsm leading-[1.7] text-slate-700 dark:border-violet-800/60 dark:bg-slate-950/40 dark:text-slate-200">
                <code className="whitespace-pre">{content.domCode}</code>
              </pre>

              {/* root badge */}
              <div
                className={cn(
                  'mt-1 flex items-start gap-2 rounded-xl border-2 p-3',
                  'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/60 dark:bg-teal-950/30',
                )}
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-sm dark:bg-teal-400 dark:text-slate-900"
                >
                  <NetworkIcon className="h-3.5 w-3.5" />
                </span>
                <div className="flex flex-col">
                  <code className="font-mono text-xsm sm:text-sm font-bold text-teal-700 dark:text-teal-200">
                    {content.rootBadgeTitle}
                  </code>
                  <span className="text-[11px] text-teal-700/80 dark:text-teal-200/80 break-keep">
                    {content.rootBadgeBody}
                  </span>
                </div>
              </div>
            </article>

            {/* listener pills — vertical list */}
            <div
              className={cn(
                'flex flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-md',
                'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
              )}
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                registered listeners
              </span>
              <ul className="flex flex-col gap-1.5">
                {content.listeners.map((l) => (
                  <li key={l.label} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="block h-px w-3 border-t border-dashed border-blue-300/80 dark:border-blue-700/60"
                    />
                    <ListenerPill label={l.label} kind={l.kind} size="sm" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: explanation + note */}
        <div className="flex flex-col gap-md">
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-800/60"
              >
                <EyeIcon className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                {content.explanation.label}
              </span>
            </header>
            <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
              {content.explanation.body}
            </p>
          </article>

          <aside
            className={cn(
              'flex items-start gap-sm rounded-2xl border-2 p-md',
              'border-amber-300/80 bg-amber-50/60 dark:border-amber-800/60 dark:bg-amber-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
            >
              <NetworkIcon className="h-4 w-4" />
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
              {content.note}
            </p>
          </aside>
        </div>
      </div>
    </div>
  </section>
);
