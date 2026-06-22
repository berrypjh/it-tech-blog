import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { commitToneTokens } from '../../_shared/tones';
import type { LifecycleCard, PassiveEffectsContent } from '../content';
import { LeafIcon, LightbulbIcon, RepeatIcon, TrashIcon, WorkflowIcon } from '../icons';

type Props = { content: PassiveEffectsContent['lifecycle'] };

const iconMap: Record<LifecycleCard['iconName'], typeof LeafIcon> = {
  leaf: LeafIcon,
  trash: TrashIcon,
};

export const PassiveMountUnmountSection = ({ content }: Props) => (
  <section
    id="passive-lifecycle"
    aria-labelledby="heading-passive-lifecycle"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="passive-lifecycle"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <LifecycleCardView card={content.mount} />
        <CenterSwap />
        <LifecycleCardView card={content.unmount} />
      </div>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-200/80 bg-sky-50/70',
          'dark:border-sky-800/70 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-sky-100 text-sky-700 border border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 break-keep font-bold">
          {content.insight}
        </p>
      </aside>
    </article>
  </section>
);

const CenterSwap = () => (
  <div
    aria-hidden="true"
    className="flex items-center justify-center text-sky-500 dark:text-sky-300 py-1 md:py-0"
  >
    <span
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
        'border-sky-300/80 bg-gradient-to-br from-sky-100 to-teal-100',
        'dark:border-sky-700/70 dark:from-sky-950/70 dark:to-teal-950/60',
      )}
    >
      <RepeatIcon className="h-5 w-5" />
    </span>
  </div>
);

const LifecycleCardView = ({ card }: { card: LifecycleCard }) => {
  const Icon = iconMap[card.iconName];
  const t = commitToneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        t.borderStrong,
        t.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
              t.chipSolid,
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <h3 className={cn('text-sm sm:text-md font-bold leading-tight', t.textStrong)}>
              {card.title}
            </h3>
            {card.subtitle && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {card.subtitle}
              </span>
            )}
          </div>
        </div>
      </header>

      <span
        className={cn(
          'inline-flex items-center self-start gap-1.5 rounded-md border px-2 py-1',
          'text-[10px] font-mono uppercase tracking-wider font-bold',
          t.chip,
        )}
      >
        <span aria-hidden="true" className={cn('inline-block h-1.5 w-1.5 rounded-full', t.dot)} />
        {card.pill}
      </span>

      <ul className="flex flex-col gap-2 mt-auto">
        {card.items.map((item, idx) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-2 rounded-xl border bg-[var(--term-bg)] p-sm',
              t.border,
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-mono font-bold tabular-nums',
                t.chipSolid,
              )}
            >
              {idx + 1}
            </span>
            <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
