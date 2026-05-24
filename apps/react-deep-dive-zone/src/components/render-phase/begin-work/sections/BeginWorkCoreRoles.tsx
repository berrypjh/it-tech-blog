import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { BeginWorkContent, RoleCard } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  GitForkIcon,
  ListChecksIcon,
  NetworkIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: BeginWorkContent['roles'] };

const roleIconMap = {
  checklist: ListChecksIcon,
  branch: GitForkIcon,
  tree: NetworkIcon,
} as const;

const palette = {
  teal: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/60 dark:bg-teal-950/25',
    chip: 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    text: 'text-teal-800 dark:text-teal-100',
    arrow: 'text-teal-500/80 dark:text-teal-300/80',
  },
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    bg: 'bg-sky-50/60 dark:bg-sky-950/25',
    chip: 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    text: 'text-sky-800 dark:text-sky-100',
    arrow: 'text-sky-500/80 dark:text-sky-300/80',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/60 dark:bg-violet-950/25',
    chip: 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    text: 'text-violet-800 dark:text-violet-100',
    arrow: 'text-violet-500/80 dark:text-violet-300/80',
  },
} as const;

export const BeginWorkCoreRoles = ({ content }: Props) => (
  <section id="core-roles" aria-labelledby="heading-core-roles" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="core-roles"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    {/* Desktop: 3 cards + arrows */}
    <div className="hidden md:flex items-stretch gap-2">
      {content.cards.map((card, idx) => (
        <Fragment key={card.number}>
          <div className="flex-1 min-w-0">
            <Card card={card} />
          </div>
          {idx < content.cards.length - 1 && (
            <span
              aria-hidden="true"
              className={cn(
                'flex shrink-0 items-center justify-center px-1',
                palette[card.accent].arrow,
              )}
            >
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          )}
        </Fragment>
      ))}
    </div>

    {/* Mobile: vertical */}
    <ol className="md:hidden flex flex-col">
      {content.cards.map((card, idx) => (
        <li key={card.number} className="flex flex-col">
          <Card card={card} />
          {idx < content.cards.length - 1 && (
            <span
              aria-hidden="true"
              className={cn('my-1 flex justify-center', palette[card.accent].arrow)}
            >
              <ArrowDownIcon className="h-5 w-5" />
            </span>
          )}
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ card }: { card: RoleCard }) => {
  const p = palette[card.accent];
  const Icon = roleIconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
        p.border,
        p.bg,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            p.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 min-w-[2rem] items-center justify-center rounded-md border-2 px-2 text-xsm font-mono font-bold tabular-nums',
            p.chip,
          )}
        >
          {String(card.number).padStart(2, '0')}
        </span>
      </header>
      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', p.text)}>
        {card.title}
      </h3>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
