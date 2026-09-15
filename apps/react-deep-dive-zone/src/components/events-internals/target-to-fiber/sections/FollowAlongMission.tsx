import { cx } from '@berrypjh/react-ui';
import { ListChecks, Square } from 'lucide-react';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TargetFiberContent } from '../content';

type Props = { content: TargetFiberContent['mission'] };

export const FollowAlongMission = ({ content }: Props) => (
  <section
    aria-labelledby="heading-mission"
    className={cx(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <NumberedSectionHeader
      id="mission"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="flex flex-col gap-2">
      {content.items.map((item, i) => (
        <li key={item.title}>
          <div
            className={cx(
              'group flex items-center gap-3 rounded-xl border bg-[var(--term-bg)] px-md py-3 sm:py-md',
              'border-[var(--term-border)] transition-all',
              'hover:border-blue-300/70 hover:bg-blue-50/30 dark:hover:border-blue-700/70 dark:hover:bg-blue-950/20',
            )}
          >
            <span
              aria-hidden="true"
              className={cx(
                'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2',
                'border-[var(--term-border)] bg-white',
                'transition-colors group-hover:border-blue-400 group-hover:bg-blue-50',
                'dark:bg-slate-950/40 dark:group-hover:bg-blue-950/40',
              )}
            >
              <Square
                className="h-2 w-2 opacity-0 group-hover:opacity-60 text-blue-500"
                aria-hidden="true"
              />
            </span>

            <span
              aria-hidden="true"
              className="inline-flex h-5 w-7 shrink-0 items-center justify-center rounded text-[10px] font-mono font-bold tabular-nums text-[var(--term-muted)] border border-[var(--term-border)] bg-[var(--term-surface)]"
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <p className="text-xsm sm:text-sm font-medium text-[var(--term-fg)] break-keep flex-1">
              {item.title}
            </p>

            <span
              className={cx(
                'inline-flex items-center rounded-full border px-2.5 py-0.5',
                'font-mono text-[10px] sm:text-[11px] font-bold whitespace-nowrap',
                'border-blue-200/80 bg-blue-50 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200',
              )}
            >
              {item.badge}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
