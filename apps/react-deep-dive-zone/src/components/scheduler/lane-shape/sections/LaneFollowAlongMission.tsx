import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneBitmaskContent } from '../content';
import { CheckCircleIcon, LightbulbIcon, ListChecksIcon } from '../icons';

type Props = { content: LaneBitmaskContent['mission'] };

export const LaneFollowAlongMission = ({ content }: Props) => (
  <section aria-labelledby="heading-mission">
    <NumberedSectionHeader
      id="mission"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* checklist */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
          >
            <ListChecksIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            {content.checklistTitle}
          </h3>
        </header>

        <ul className="flex flex-col gap-1.5">
          {content.items.map((item, i) => (
            <li key={item}>
              <div
                className={cn(
                  'group flex items-start gap-3 rounded-xl border bg-[var(--term-bg)] px-md py-3',
                  'border-[var(--term-border)] transition-colors',
                  'hover:border-blue-300/80 hover:bg-blue-50/30 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/20',
                )}
              >
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
            </li>
          ))}
        </ul>
      </article>

      {/* think card */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-amber-300/80 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30',
          'dark:border-amber-700/70 dark:from-amber-950/30 dark:via-[var(--term-bg)] dark:to-amber-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
          >
            <LightbulbIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              reflect
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.thinkTitle}
            </h3>
          </div>
        </header>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.thinkBody}
        </p>

        <ul className="mt-auto flex flex-col gap-2">
          {[
            { label: '단순 숫자 방식의 한계', accent: 'text-[var(--term-muted)]' },
            { label: 'bitmask로 얻는 이점', accent: 'text-amber-700 dark:text-amber-300' },
          ].map((it) => (
            <li
              key={it.label}
              className="flex items-start gap-2 text-[11px] sm:text-xsm leading-snug break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', it.accent)}
              />
              <span className="text-[var(--term-fg)]">{it.label}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
