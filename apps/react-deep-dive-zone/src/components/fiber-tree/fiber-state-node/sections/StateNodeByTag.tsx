import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ToneKey } from '../../../getting-started/_shared/tones';
import type { ByTagCard, FiberStateNodeContent } from '../content';
import { BoxesIcon, HomeIcon, NetworkIcon, UserIcon } from '../icons';

type Props = { content: FiberStateNodeContent['byTag'] };

const iconMap = {
  home: HomeIcon,
  cube: BoxesIcon,
  user: UserIcon,
} as const;

const cardBorder: Record<ToneKey, string> = {
  sky: 'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
  cyan: 'border-cyan-200/80 dark:border-cyan-800/60 hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
  violet:
    'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
  emerald:
    'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  blue: 'border-blue-200/80 dark:border-blue-800/60 hover:border-blue-400/70 dark:hover:border-blue-500/60',
  teal: 'border-teal-200/80 dark:border-teal-800/60 hover:border-teal-400/70 dark:hover:border-teal-500/60',
  indigo:
    'border-indigo-200/80 dark:border-indigo-800/60 hover:border-indigo-400/70 dark:hover:border-indigo-500/60',
  amber:
    'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
};

const iconWrap: Record<ToneKey, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
};

const titleColor: Record<ToneKey, string> = {
  sky: 'text-sky-800 dark:text-sky-100',
  cyan: 'text-cyan-800 dark:text-cyan-100',
  violet: 'text-violet-800 dark:text-violet-100',
  emerald: 'text-emerald-800 dark:text-emerald-100',
  blue: 'text-blue-800 dark:text-blue-100',
  teal: 'text-teal-800 dark:text-teal-100',
  indigo: 'text-indigo-800 dark:text-indigo-100',
  amber: 'text-amber-800 dark:text-amber-100',
};

const badgeColor: Record<ToneKey, string> = {
  sky: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  violet:
    'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  emerald:
    'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  blue: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  teal: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  indigo:
    'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/60',
  amber:
    'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
};

const arrowText: Record<ToneKey, string> = {
  sky: 'text-sky-700 dark:text-sky-300',
  cyan: 'text-cyan-700 dark:text-cyan-300',
  violet: 'text-violet-700 dark:text-violet-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  blue: 'text-blue-700 dark:text-blue-300',
  teal: 'text-teal-700 dark:text-teal-300',
  indigo: 'text-indigo-700 dark:text-indigo-300',
  amber: 'text-amber-800 dark:text-amber-300',
};

export const StateNodeByTag = ({ content }: Props) => (
  <section id="by-tag" aria-labelledby="heading-by-tag" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="by-tag"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <ByTagCardItem card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const ByTagCardItem = ({ card }: { card: ByTagCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cardBorder[card.tone],
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl',
            iconWrap[card.tone],
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono whitespace-nowrap',
            badgeColor[card.tone],
          )}
        >
          {card.badge}
        </span>
      </header>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', titleColor[card.tone])}>
        {card.title}
      </h3>
      <p className={cn('font-mono text-xsm sm:text-sm font-bold break-keep', arrowText[card.tone])}>
        {card.mainArrow}
      </p>
      <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.body}
      </p>
    </article>
  );
};
