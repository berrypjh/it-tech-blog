import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { HostComponentFiberContent, ModernHostCard } from '../content';
import { BoxIcon, PackageIcon, SparklesIcon, TargetIcon, WaypointsIcon } from '../icons';

type Props = { content: HostComponentFiberContent['modern'] };

const iconMap = {
  box: BoxIcon,
  package: PackageIcon,
  target: TargetIcon,
} as const;

const accentTokens = {
  green: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/70',
    chip: 'bg-emerald-100 text-emerald-800 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/70',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
  blue: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-500/70',
    chip: 'bg-sky-100 text-sky-800 border-sky-300/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/70',
    text: 'text-sky-700 dark:text-sky-300',
  },
  purple: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/70',
    chip: 'bg-violet-100 text-violet-800 border-violet-300/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
    text: 'text-violet-700 dark:text-violet-300',
  },
} as const;

export const ModernHostFamily = ({ content }: Props) => (
  <section id="modern" aria-labelledby="heading-modern" className="space-y-md scroll-mt-xl">
    <div className="flex flex-col gap-sm">
      <SectionBadgeHeader
        id="modern"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<WaypointsIcon className="h-5 w-5" />}
      />
      <div className="flex items-center gap-sm flex-wrap pl-1">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            'border-violet-300/80 bg-violet-50 text-violet-700',
            'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
          )}
        >
          <SparklesIcon className="h-3 w-3" aria-hidden="true" />
          {content.pill}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep max-w-[72ch]">
          {content.description}
        </p>
      </div>
    </div>

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <p className="text-[11px] text-[var(--term-muted)] italic break-keep text-right">
      {content.footnote}
    </p>
  </section>
);

const CardView = ({ card }: { card: ModernHostCard }) => {
  const a = accentTokens[card.accent];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border-2 p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        a.border,
        a.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl border shrink-0',
            a.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <h3 className={cn('font-mono text-sm font-bold tracking-tight', a.text)}>{card.title}</h3>
          <span className="text-[11px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {card.subtitle}
          </span>
        </div>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
