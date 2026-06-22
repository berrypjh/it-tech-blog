import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { WhyEventSystemContent } from '../content';
import { ListChecksIcon } from '../icons';

type Props = { content: WhyEventSystemContent['mission'] };

export const FollowAlongMission = ({ content }: Props) => (
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
        <li key={item}>
          <div
            className={cn(
              'group flex items-start gap-3 rounded-xl border bg-[var(--term-bg)] px-md py-3 sm:py-md',
              'border-[var(--term-border)] transition-all',
              'hover:border-blue-300/70 hover:bg-blue-50/30 dark:hover:border-blue-700/70 dark:hover:bg-blue-950/20',
            )}
          >
            {/* Checkbox visual */}
            <span
              aria-hidden="true"
              role="checkbox"
              aria-checked="false"
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2',
                'border-[var(--term-border)] bg-white text-blue-600',
                'transition-colors group-hover:border-blue-400 group-hover:bg-blue-50',
                'dark:bg-slate-950/40 dark:group-hover:bg-blue-950/40',
              )}
            >
              <span className="inline-block h-2 w-2 rounded-sm bg-transparent group-hover:bg-blue-500/60 dark:group-hover:bg-blue-400/60 transition-colors" />
            </span>

            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-5 w-7 shrink-0 items-center justify-center rounded text-[10px] font-mono font-bold tabular-nums text-[var(--term-muted)] border border-[var(--term-border)] bg-[var(--term-surface)]"
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <p className="text-xsm sm:text-sm font-medium text-[var(--term-fg)] break-keep flex-1">
              {item}
            </p>
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
