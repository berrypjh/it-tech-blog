import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ToneKey } from '../../../getting-started/_shared/tones';
import type { FiberNodeOverviewContent, FiveFieldCard } from '../content';
import {
  BoxesIcon,
  DatabaseIcon,
  FingerprintIcon,
  FlagIcon,
  LayersIcon,
  NetworkIcon,
} from '../icons';

type Props = { content: FiberNodeOverviewContent['fieldGroups'] };

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  flag: FlagIcon,
  layers: LayersIcon,
} as const;

const cardBorder: Record<ToneKey, string> = {
  sky: 'border-sky-200/80 dark:border-sky-800/60',
  cyan: 'border-cyan-200/80 dark:border-cyan-800/60',
  violet: 'border-violet-200/80 dark:border-violet-800/60',
  emerald: 'border-emerald-200/80 dark:border-emerald-800/60',
  blue: 'border-blue-200/80 dark:border-blue-800/60',
  teal: 'border-teal-200/80 dark:border-teal-800/60',
  indigo: 'border-indigo-200/80 dark:border-indigo-800/60',
  amber: 'border-amber-200/80 dark:border-amber-800/60',
};

const cardHoverBorder: Record<ToneKey, string> = {
  sky: 'hover:border-sky-400/70 dark:hover:border-sky-500/60',
  cyan: 'hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
  violet: 'hover:border-violet-400/70 dark:hover:border-violet-500/60',
  emerald: 'hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  blue: 'hover:border-blue-400/70 dark:hover:border-blue-500/60',
  teal: 'hover:border-teal-400/70 dark:hover:border-teal-500/60',
  indigo: 'hover:border-indigo-400/70 dark:hover:border-indigo-500/60',
  amber: 'hover:border-amber-400/70 dark:hover:border-amber-500/60',
};

const numberBadge: Record<ToneKey, string> = {
  sky: 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
  cyan: 'bg-cyan-600 text-white dark:bg-cyan-500 dark:text-slate-950',
  violet: 'bg-violet-600 text-white dark:bg-violet-500 dark:text-slate-950',
  emerald: 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
  blue: 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-950',
  teal: 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-950',
  indigo: 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-slate-950',
  amber: 'bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-950',
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

const dotColor: Record<ToneKey, string> = {
  sky: 'bg-sky-500',
  cyan: 'bg-cyan-500',
  violet: 'bg-violet-500',
  emerald: 'bg-emerald-500',
  blue: 'bg-blue-500',
  teal: 'bg-teal-500',
  indigo: 'bg-indigo-500',
  amber: 'bg-amber-500',
};

export const FiberFieldGroups = ({ content }: Props) => (
  <section
    id="field-groups"
    aria-labelledby="heading-field-groups"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="field-groups"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BoxesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-sm lg:gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <FieldCard card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const FieldCard = ({ card }: { card: FiveFieldCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cardBorder[card.tone],
        cardHoverBorder[card.tone],
      )}
    >
      <header className="flex items-center justify-between">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-xxsm',
            numberBadge[card.tone],
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-lg border',
            cardBorder[card.tone],
            titleColor[card.tone],
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>

      <h3 className={cn('text-sm font-bold tracking-tight break-keep', titleColor[card.tone])}>
        {card.title}
      </h3>

      <ul className="flex flex-col gap-1">
        {card.fields.map((f) => (
          <li
            key={f}
            className="flex items-center gap-1.5 rounded-md bg-slate-50 dark:bg-slate-900/60 px-2 py-1"
          >
            <span
              aria-hidden="true"
              className={cn('inline-block h-1.5 w-1.5 rounded-full shrink-0', dotColor[card.tone])}
            />
            <code className="font-mono text-[11.5px] text-[var(--term-fg)] break-all">{f}</code>
          </li>
        ))}
      </ul>

      <p className="mt-auto pt-1 text-[12px] leading-relaxed text-[var(--term-muted)] break-keep">
        {card.body}
      </p>
    </article>
  );
};
