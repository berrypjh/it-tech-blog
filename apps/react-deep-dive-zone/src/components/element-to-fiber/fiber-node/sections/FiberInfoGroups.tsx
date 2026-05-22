import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberStoredInformationContent, InfoGroupCard } from '../content';
import { BoxesIcon, FlagIcon, LinkIcon, NetworkIcon, RefreshIcon } from '../icons';

type Props = { content: FiberStoredInformationContent['groups'] };

const iconMap = {
  network: NetworkIcon,
  refresh: RefreshIcon,
  flag: FlagIcon,
  link: LinkIcon,
} as const;

const accentTokens = {
  emerald: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/70',
    surface: 'bg-emerald-50/40 dark:bg-emerald-950/20',
    chip: 'bg-emerald-100 text-emerald-700 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/70',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/70',
    surface: 'bg-violet-50/40 dark:bg-violet-950/20',
    chip: 'bg-violet-100 text-violet-700 border-violet-300/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
    text: 'text-violet-700 dark:text-violet-300',
  },
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-500/70',
    surface: 'bg-sky-50/40 dark:bg-sky-950/20',
    chip: 'bg-sky-100 text-sky-700 border-sky-300/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/70',
    text: 'text-sky-700 dark:text-sky-300',
  },
  amber: {
    border: 'border-amber-300/80 dark:border-amber-700/70',
    borderHover: 'hover:border-amber-400 dark:hover:border-amber-500/70',
    surface: 'bg-amber-50/40 dark:bg-amber-950/20',
    chip: 'bg-amber-100 text-amber-800 border-amber-300/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-700/70',
    text: 'text-amber-700 dark:text-amber-300',
  },
} as const;

export const FiberInfoGroups = ({ content }: Props) => (
  <section id="groups" aria-labelledby="heading-groups" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="groups"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BoxesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: InfoGroupCard }) => {
  const a = accentTokens[card.accent];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        a.border,
        a.borderHover,
        a.surface,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            a.chip,
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            a.chip,
          )}
        >
          {card.fields.length} fields
        </span>
      </header>
      <h3 className={cn('text-sm sm:text-md font-extrabold tracking-tight break-keep', a.text)}>
        {card.title}
      </h3>
      <ul className="flex flex-wrap gap-1.5">
        {card.fields.map((field) => (
          <li key={field}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-1',
                'font-mono text-[11px] font-bold',
                'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                'text-[var(--term-fg)]',
              )}
            >
              {field}
            </code>
          </li>
        ))}
      </ul>
    </article>
  );
};
