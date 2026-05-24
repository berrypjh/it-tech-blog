import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { PriorityKey, SchedulerPackageContent } from '../content';
import { ArrowRightIcon, ClockIcon, GaugeIcon, MoonIcon, UserIcon, ZapIcon } from '../icons';
import { pkgCardBorder, pkgIconBox, pkgPill, pkgTextStrong } from '../packageAccent';

type Props = { content: SchedulerPackageContent['priorities'] };

const cardIcon: Record<PriorityKey, typeof ZapIcon> = {
  immediate: ZapIcon,
  userBlocking: UserIcon,
  normal: GaugeIcon,
  low: ClockIcon,
  idle: MoonIcon,
};

export const PriorityLevelCards = ({ content }: Props) => (
  <section aria-labelledby="heading-priorities">
    <NumberedSectionHeader
      id="priorities"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<GaugeIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-md items-stretch">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.key];
        const isNormal = card.key === 'normal';
        return (
          <li key={card.key} className="h-full">
            <article
              className={cn(
                'relative flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)] transition-colors',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                pkgCardBorder[card.accent],
                isNormal &&
                  'border-teal-500 shadow-[0_3px_0_rgba(13,148,136,0.25)] dark:border-teal-400',
              )}
            >
              {card.badge && (
                <span
                  className={cn(
                    'absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full border px-2 py-0.5',
                    'text-[10px] font-mono font-bold uppercase tracking-wider whitespace-nowrap',
                    pkgPill[card.accent],
                  )}
                >
                  {card.badge}
                </span>
              )}

              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 items-center justify-center rounded-xl border',
                    pkgIconBox[card.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums',
                    'bg-white border border-current/30 text-[var(--term-muted)] shadow-sm dark:bg-slate-950/40',
                  )}
                >
                  {card.sortKey + 1}
                </span>
              </header>

              <div className="flex flex-col gap-0.5">
                <h3
                  className={cn(
                    'text-md sm:text-lg font-bold break-keep',
                    pkgTextStrong[card.accent],
                  )}
                >
                  {card.title}
                </h3>
                <code className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-all">
                  {card.subtitle}
                </code>
              </div>

              <p className="mt-auto text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>

    {/* direction */}
    <div
      className={cn(
        'mt-md flex items-center justify-between gap-3 rounded-2xl border-2 px-md py-3',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
      )}
    >
      <span className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
        <ZapIcon aria-hidden="true" className="h-4 w-4" />
        {content.directionStart}
      </span>
      <ArrowRightIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-[var(--term-muted)]" />
      <span className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
        {content.directionEnd}
        <MoonIcon aria-hidden="true" className="h-4 w-4" />
      </span>
    </div>
  </section>
);
