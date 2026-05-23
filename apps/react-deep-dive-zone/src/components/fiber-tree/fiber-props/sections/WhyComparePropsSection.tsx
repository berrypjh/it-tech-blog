import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberPropsContent, ReasonCard } from '../content';
import { GaugeIcon, HelpCircleIcon, ScaleIcon, TrendingUpIcon } from '../icons';

type Props = { content: FiberPropsContent['reasons'] };

const iconMap = {
  scales: ScaleIcon,
  gauge: GaugeIcon,
  trending: TrendingUpIcon,
} as const;

const tone = {
  emerald: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    title: 'text-emerald-900 dark:text-emerald-100',
    examplePill:
      'bg-emerald-50 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60',
  },
  sky: {
    border:
      'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
    iconWrap: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
    title: 'text-sky-900 dark:text-sky-100',
    examplePill:
      'bg-sky-50 text-sky-800 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
  },
  violet: {
    border:
      'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
    iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    title: 'text-violet-900 dark:text-violet-100',
    examplePill:
      'bg-violet-50 text-violet-800 border-violet-200/80 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/60',
  },
} as const;

export const WhyComparePropsSection = ({ content }: Props) => (
  <section id="reasons" aria-labelledby="heading-reasons" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="reasons"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <ReasonCardItem card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const ReasonCardItem = ({ card }: { card: ReasonCard }) => {
  const t = tone[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('inline-flex items-center justify-center w-12 h-12 rounded-xl', t.iconWrap)}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-snug break-keep', t.title)}>
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
      <div
        className={cn(
          'mt-auto inline-flex items-center self-start rounded-full border px-3 py-1 font-mono text-[11.5px] font-bold break-all',
          t.examplePill,
        )}
      >
        {card.example}
      </div>
    </article>
  );
};
