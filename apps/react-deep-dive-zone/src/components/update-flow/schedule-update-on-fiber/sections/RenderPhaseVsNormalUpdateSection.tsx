import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ScheduleUpdateOnFiberContent } from '../content';
import { CheckCircleIcon, MousePointerClickIcon, RefreshIcon, SplitIcon } from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['contextCompare'] };

export const RenderPhaseVsNormalUpdateSection = ({ content }: Props) => (
  <section
    id="context-compare"
    aria-labelledby="heading-context-compare"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="context-compare"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
      <CompareCard card={content.leftCard} />
      <VsBadge label={content.vsLabel} />
      <CompareCard card={content.rightCard} />
    </div>
  </section>
);

const cardIconMap = {
  refresh: RefreshIcon,
  mousePointer: MousePointerClickIcon,
} as const;

const cardToneClass = {
  teal: {
    border: 'border-teal-300/70 dark:border-teal-700/70',
    bg: 'bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/40 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
    iconBox:
      'bg-teal-100 text-teal-700 border border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    title: 'text-teal-800 dark:text-teal-100',
    badge:
      'border-teal-300/70 bg-white text-teal-700 dark:border-teal-700/60 dark:bg-slate-950/40 dark:text-teal-200',
    bullet:
      'border-teal-200/80 bg-teal-50/40 text-teal-900 dark:border-teal-800/60 dark:bg-teal-950/20 dark:text-teal-100',
    bulletIcon: 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-950',
  },
  sky: {
    border: 'border-sky-300/70 dark:border-sky-700/70',
    bg: 'bg-gradient-to-br from-sky-50/70 via-white to-cyan-50/40 dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
    iconBox:
      'bg-sky-100 text-sky-700 border border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    title: 'text-sky-800 dark:text-sky-100',
    badge:
      'border-sky-300/70 bg-white text-sky-700 dark:border-sky-700/60 dark:bg-slate-950/40 dark:text-sky-200',
    bullet:
      'border-sky-200/80 bg-sky-50/40 text-sky-900 dark:border-sky-800/60 dark:bg-sky-950/20 dark:text-sky-100',
    bulletIcon: 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
  },
} as const;

type CardProps = {
  card: ScheduleUpdateOnFiberContent['contextCompare']['leftCard'];
};

const CompareCard = ({ card }: CardProps) => {
  const Icon = cardIconMap[card.iconName];
  const t = cardToneClass[card.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        t.border,
        t.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn('inline-flex h-12 w-12 items-center justify-center rounded-2xl', t.iconBox)}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.badge,
          )}
        >
          {card.badge}
        </span>
      </header>

      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.title)}>
        {card.title}
      </h3>

      <ul className="flex flex-col gap-2">
        {card.bullets.map((b) => (
          <li
            key={b}
            className={cn('flex items-start gap-2 rounded-xl border px-3 py-2', t.bullet)}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                t.bulletIcon,
              )}
            >
              <CheckCircleIcon className="h-3 w-3" />
            </span>
            <span className="text-xsm sm:text-sm leading-snug break-keep">{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const VsBadge = ({ label }: { label: string }) => (
  <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-14 w-14 items-center justify-center rounded-full border-2',
        'border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white',
        'shadow-[0_8px_22px_-10px_rgba(2,6,23,0.55)]',
      )}
    >
      <span className="text-sm font-mono font-bold tracking-wider">{label}</span>
    </span>
  </div>
);
