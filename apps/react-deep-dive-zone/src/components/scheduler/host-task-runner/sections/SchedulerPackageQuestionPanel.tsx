import { cn } from '@it-tech-blog/utils';

import type { PkgAccent, SchedulerPackageContent } from '../content';
import { ClockIcon, HelpCircleIcon, LinkIcon, SplitIcon, ZapIcon } from '../icons';
import { pkgIconBox, pkgPill, pkgTextStrong } from '../packageAccent';

type Props = { content: SchedulerPackageContent['question'] };

const cardIcon: Record<PkgAccent, typeof HelpCircleIcon> = {
  blue: SplitIcon,
  teal: LinkIcon,
  violet: ClockIcon,
  slate: ZapIcon,
  amber: ZapIcon,
};

export const SchedulerPackageQuestionPanel = ({ content }: Props) => (
  <section
    aria-labelledby="question-heading"
    className={cn(
      'relative rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-200/70 bg-gradient-to-br from-blue-50/80 via-white to-teal-50/40',
      'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="flex flex-col gap-md lg:flex-row lg:items-center lg:gap-lg">
      <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full',
            'bg-blue-600 text-white shadow-[0_4px_0_rgba(29,78,216,0.3)] dark:bg-blue-500',
          )}
        >
          <HelpCircleIcon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.4} />
        </span>
        <span className="inline-flex items-center rounded-full border border-blue-300/80 bg-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200">
          {content.eyebrow}
        </span>
      </div>

      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <h2
          id="question-heading"
          className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-[var(--term-fg)] break-keep"
        >
          {content.question}
        </h2>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-col gap-2 lg:gap-2 lg:min-w-[260px]">
        {content.cards.map((card) => {
          const Icon = cardIcon[card.accent];
          return (
            <li
              key={card.title}
              className={cn(
                'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
                'shadow-[0_1px_0_var(--term-border)] transition-colors',
                pkgPill[card.accent],
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
                  pkgIconBox[card.accent],
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="flex flex-col min-w-0">
                <span
                  className={cn(
                    'text-[11px] sm:text-xsm font-bold leading-tight break-keep',
                    pkgTextStrong[card.accent],
                  )}
                >
                  {card.title}
                </span>
                <span className="text-[10px] leading-tight text-[var(--term-muted)] break-keep">
                  {card.description}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
