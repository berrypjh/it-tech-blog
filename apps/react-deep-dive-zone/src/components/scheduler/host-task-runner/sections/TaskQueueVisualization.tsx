import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { SchedulerPackageContent } from '../content';
import { ArrowDownIcon, ListOrderedIcon, PackageIcon } from '../icons';
import { pkgIconBox, pkgPill, pkgTextStrong } from '../packageAccent';

type Props = { content: SchedulerPackageContent['taskQueue'] };

export const TaskQueueVisualization = ({ content }: Props) => (
  <section aria-labelledby="heading-taskqueue">
    <NumberedSectionHeader
      id="taskqueue"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<ListOrderedIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* Left: taskQueue (priorities) */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-blue-50/30',
          'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
              pkgIconBox.teal,
            )}
          >
            <PackageIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <h3 className="text-md sm:text-lg font-bold text-teal-700 dark:text-teal-300 break-keep font-mono">
              {content.queueTitle}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {content.queueSubtitle}
            </span>
          </div>
        </header>

        <ol className="flex flex-col gap-2">
          {content.items.map((item, i) => {
            const isLast = i === content.items.length - 1;
            return (
              <li key={item.label} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 p-3',
                    pkgPill[item.accent],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold tabular-nums bg-white border border-current/30 text-current shadow-sm"
                  >
                    {i + 1}
                  </span>
                  <span className="font-mono text-xsm sm:text-sm font-bold break-keep">
                    {item.label}
                  </span>
                </div>
                {!isLast && (
                  <span aria-hidden="true" className="self-center my-0.5 text-[var(--term-muted)]">
                    <ArrowDownIcon className="h-3 w-3" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </article>

      {/* Right: current queue example */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
              pkgIconBox.blue,
            )}
          >
            <ListOrderedIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            {content.currentQueueTitle}
          </h3>
        </header>

        <ol className="flex flex-col gap-1.5">
          {content.currentItems.map((item, i) => {
            const isLast = i === content.currentItems.length - 1;
            return (
              <li key={item.label + i} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 p-3',
                    pkgPill[item.accent],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)] tabular-nums"
                  >
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'font-mono text-xsm font-bold break-keep',
                      pkgTextStrong[item.accent],
                    )}
                  >
                    {item.label}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[var(--term-muted)] break-keep">
                    ({item.note})
                  </span>
                </div>
                {!isLast && (
                  <span aria-hidden="true" className="self-center my-0.5 text-[var(--term-dim)]">
                    <ArrowDownIcon className="h-3 w-3" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);
