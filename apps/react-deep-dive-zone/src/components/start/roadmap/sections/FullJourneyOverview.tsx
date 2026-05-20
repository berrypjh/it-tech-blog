import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { RoadmapContent } from '../content';
import { CheckCircleIcon, EyeIcon } from '../icons';

type Props = { content: RoadmapContent['journey'] };

export const FullJourneyOverview = ({ content }: Props) => {
  return (
    <section id="section-journey" aria-labelledby="heading-journey" className="space-y-lg">
      <SectionHeader
        id="journey"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<EyeIcon className="h-5 w-5" />}
      />

      <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        {/* 현재 위치 + 완료 pill */}
        <header className="flex items-center justify-between gap-sm pb-md border-b border-dashed border-[var(--term-border)]">
          <div className="flex items-center gap-sm min-w-0">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900 shadow-[0_1px_0_var(--term-border)]"
            >
              <CheckCircleIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                current
              </span>
              <span className="text-sm font-bold text-[var(--term-fg)] break-keep">
                {content.currentLabel}
              </span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900 text-[10px] font-bold shadow-[0_1px_0_var(--term-border)]">
            <CheckCircleIcon className="h-3 w-3" />
            {content.statusLabel}
          </span>
        </header>

        {/* 세로 타임라인 */}
        <ol className="relative mt-md pl-5 flex flex-col gap-1.5">
          <span
            aria-hidden="true"
            className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--term-border)] via-[var(--term-border)] to-transparent"
          />
          {content.items.map((item) => (
            <li key={item.id} className="relative flex items-center gap-2 group">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -left-[1.05rem] inline-block w-2 h-2 rounded-full ring-2 ring-[var(--term-bg)]',
                  'bg-[var(--term-dim)]',
                )}
              />
              <span className="text-xsm text-[var(--term-muted)] leading-tight break-keep truncate flex-1">
                {item.label}
              </span>
              <span
                aria-hidden="true"
                className="text-[10px] text-[var(--term-dim)] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
              >
                upcoming
              </span>
            </li>
          ))}
        </ol>

        {/* footer note */}
        <footer className="mt-md pt-sm border-t border-dashed border-[var(--term-border)]">
          <p className="text-[10px] text-[var(--term-dim)] inline-flex items-center gap-1">
            <span
              aria-hidden="true"
              className="inline-block w-1 h-1 rounded-full bg-[var(--term-dim)] animate-pulse"
            />
            {content.footerNote}
          </p>
        </footer>
      </article>
    </section>
  );
};
