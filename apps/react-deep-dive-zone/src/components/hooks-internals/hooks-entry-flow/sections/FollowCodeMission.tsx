import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { HooksEntryFlowContent } from '../content';
import { ChevronRightIcon, ListChecksIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['mission'] };

export const FollowCodeMission = ({ content }: Props) => (
  <section
    aria-labelledby="heading-mission"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="mission"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="flex flex-col gap-1.5">
      {content.items.map((item, i) => (
        <li key={item.title}>
          <div
            className={cn(
              'group flex items-center gap-3 rounded-xl border bg-[var(--term-bg)] p-md',
              'border-[var(--term-border)] transition-all',
              'hover:border-sky-300/70 hover:bg-sky-50/30 dark:hover:border-sky-700/70 dark:hover:bg-sky-950/20',
            )}
          >
            {/* Checkbox */}
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-[var(--term-border)] bg-white text-[var(--term-muted)] text-[10px] font-mono font-bold tabular-nums',
                'dark:bg-slate-950/40',
              )}
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <p className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                {item.title}
              </p>
              <p className="text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
                {item.description}
              </p>
              {item.path && (
                <code className="mt-1 inline-flex w-fit items-center rounded-md border border-[var(--term-border)] bg-[var(--term-border)]/20 px-2 py-0.5 font-mono text-[10px] text-[var(--term-fg)] break-all">
                  {item.path}
                </code>
              )}
            </div>

            <ChevronRightIcon
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-[var(--term-muted)] transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
            />
          </div>
          {i < content.items.length - 1 && (
            <div
              aria-hidden="true"
              className="my-1 border-t border-dashed border-[var(--term-border)]/60"
            />
          )}
        </li>
      ))}
    </ul>
  </section>
);
