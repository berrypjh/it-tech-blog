import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { FragmentModeFiberContent, SpecialTypeCard } from '../content';
import {
  AtomIcon,
  CircleDashedIcon,
  EyeIcon,
  InfoIcon,
  ListIcon,
  ScanLineIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FragmentModeFiberContent['others'] };

const iconMap = {
  loader: CircleDashedIcon,
  list: ListIcon,
  eye: EyeIcon,
  zap: ZapIcon,
  scan: ScanLineIcon,
} as const;

const accentTokens = {
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-500/70',
    chip: 'bg-sky-100 text-sky-700 border-sky-300/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/70',
    text: 'text-sky-700 dark:text-sky-300',
  },
  cyan: {
    border: 'border-cyan-300/80 dark:border-cyan-700/70',
    borderHover: 'hover:border-cyan-400 dark:hover:border-cyan-500/70',
    chip: 'bg-cyan-100 text-cyan-700 border-cyan-300/80 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-700/70',
    text: 'text-cyan-700 dark:text-cyan-300',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/70',
    chip: 'bg-violet-100 text-violet-700 border-violet-300/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
    text: 'text-violet-700 dark:text-violet-300',
  },
  amber: {
    border: 'border-amber-300/80 dark:border-amber-700/70',
    borderHover: 'hover:border-amber-400 dark:hover:border-amber-500/70',
    chip: 'bg-amber-100 text-amber-800 border-amber-300/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-700/70',
    text: 'text-amber-700 dark:text-amber-300',
  },
  emerald: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/70',
    chip: 'bg-emerald-100 text-emerald-700 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/70',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
} as const;

export const OtherSpecialTypes = ({ content }: Props) => (
  <section id="others" aria-labelledby="heading-others" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="others"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<AtomIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <div
      className={cn(
        'flex items-start gap-sm rounded-xl border px-md py-3',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
      >
        <InfoIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {content.footnote}
      </p>
    </div>
  </section>
);

const CardView = ({ card }: { card: SpecialTypeCard }) => {
  const a = accentTokens[card.accent];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        a.border,
        a.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-2xl border self-start',
          a.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={cn('text-xsm sm:text-sm font-bold tracking-tight break-keep', a.text)}>
        {card.title}
      </h3>
      <p className="text-[11px] leading-relaxed text-[var(--term-fg)] break-keep">
        {card.subtitle}
      </p>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep font-bold">
        {card.description}
      </p>
    </article>
  );
};
