import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RootSchedulerContent, SchedulerAccent } from '../content';
import {
  CompassIcon,
  DatabaseIcon,
  HourglassIcon,
  LayersIcon,
  PauseCircleIcon,
  RefreshIcon,
  TargetIcon,
} from '../icons';
import { schedCardBorder, schedIconBox, schedTextStrong } from '../schedulerAccent';

type Props = { content: RootSchedulerContent['getNext'] };

const cardIcon: Record<SchedulerAccent, typeof DatabaseIcon> = {
  blue: DatabaseIcon,
  teal: RefreshIcon,
  violet: PauseCircleIcon,
  slate: LayersIcon,
};

// pick icon per card name override
const specificIcon: Record<string, typeof DatabaseIcon> = {
  pendingLanes: DatabaseIcon,
  suspendedLanes: PauseCircleIcon,
  pingedLanes: RefreshIcon,
  workInProgressRootRenderLanes: HourglassIcon,
};

export const GetNextLanesCore = ({ content }: Props) => (
  <section aria-labelledby="heading-get-next">
    <NumberedSectionHeader
      id="get-next"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      description={content.description}
      icon={<CompassIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => {
        const Icon = specificIcon[card.name] ?? cardIcon[card.accent];
        return (
          <li key={card.name} className="h-full">
            <article
              className={cn(
                'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)] transition-colors',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                schedCardBorder[card.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    schedIconBox[card.accent],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span
                  className={cn(
                    'font-mono text-[10px] uppercase tracking-wider',
                    schedTextStrong[card.accent],
                  )}
                >
                  factor
                </span>
              </header>
              <code
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold break-keep break-all',
                  schedTextStrong[card.accent],
                )}
              >
                {card.name}
              </code>
              <p className="mt-auto text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>

    {/* core note */}
    <aside
      className={cn(
        'mt-md flex items-start gap-3 rounded-2xl border-2 px-md py-3',
        'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-violet-50/40',
        'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.3)] dark:bg-blue-500"
      >
        <TargetIcon className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {content.coreNote}
      </p>
    </aside>
  </section>
);
