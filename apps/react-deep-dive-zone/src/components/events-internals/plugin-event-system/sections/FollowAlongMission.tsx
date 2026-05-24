import { cn } from '@it-tech-blog/utils';

import type { PluginEventSystemContent } from '../content';
import { ListChecksIcon, SquareIcon } from '../icons';
import { SectionFrame } from '../SectionFrame';

type Props = { content: PluginEventSystemContent['mission'] };

export const FollowAlongMission = ({ content }: Props) => (
  <SectionFrame
    id="mission"
    sectionNumber={content.sectionNumber}
    title={content.title}
    icon={<ListChecksIcon className="h-5 w-5" />}
  >
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {content.items.map((item, i) => (
        <li key={item.title}>
          <div
            className={cn(
              'group flex h-full items-start gap-3 rounded-xl border bg-[var(--term-bg)] px-md py-3 sm:py-md',
              'border-[var(--term-border)] transition-all',
              'hover:border-blue-300/70 hover:bg-blue-50/30 dark:hover:border-blue-700/70 dark:hover:bg-blue-950/20',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2',
                'border-[var(--term-border)] bg-white',
                'transition-colors group-hover:border-blue-400 group-hover:bg-blue-50',
                'dark:bg-slate-950/40 dark:group-hover:bg-blue-950/40',
              )}
            >
              <SquareIcon className="h-2 w-2 opacity-0 group-hover:opacity-60 text-blue-500" />
            </span>

            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-5 w-7 shrink-0 items-center justify-center rounded text-[10px] font-mono font-bold tabular-nums text-[var(--term-muted)] border border-[var(--term-border)] bg-[var(--term-surface)]"
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <p className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                {item.title}
              </p>
              <p className="text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
                {item.body}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </SectionFrame>
);
