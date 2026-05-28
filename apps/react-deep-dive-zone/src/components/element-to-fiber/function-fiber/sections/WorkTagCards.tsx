import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FunctionClassComponentFiberContent, WorkTagCard } from '../content';
import { ComponentIcon, InfoIcon, SquareFunctionIcon, TagIcon } from '../icons';

type Props = { content: FunctionClassComponentFiberContent['workTags'] };

export const WorkTagCards = ({ content }: Props) => (
  <section id="work-tags" aria-labelledby="heading-work-tags" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="work-tags"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TagIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: WorkTagCard }) => {
  if (card.variant === 'info') return <InfoCard card={card} />;
  return <ValueCard card={card} />;
};

const ValueCard = ({ card }: { card: WorkTagCard }) => {
  const isFunction = card.variant === 'function';
  const Icon = isFunction ? SquareFunctionIcon : ComponentIcon;
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        isFunction
          ? 'border-emerald-300/80 dark:border-emerald-700/70 hover:border-emerald-400'
          : 'border-violet-300/80 dark:border-violet-700/70 hover:border-violet-400',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
            isFunction
              ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950'
              : 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <code
          className={cn(
            'font-mono text-sm sm:text-md font-extrabold tracking-tight',
            isFunction
              ? 'text-emerald-700 dark:text-emerald-300'
              : 'text-violet-700 dark:text-violet-300',
          )}
        >
          {card.title}
        </code>
      </header>

      <div
        className={cn(
          'flex items-center justify-between gap-sm rounded-xl border-2 p-md',
          isFunction
            ? 'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/40'
            : 'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/40',
        )}
      >
        <span
          className={cn(
            'text-[10px] uppercase tracking-wider font-mono font-bold',
            isFunction
              ? 'text-emerald-700 dark:text-emerald-300'
              : 'text-violet-700 dark:text-violet-300',
          )}
        >
          {card.label}
        </span>
        <code
          className={cn(
            'font-mono text-3xl sm:text-4xl font-extrabold tabular-nums',
            isFunction
              ? 'text-emerald-700 dark:text-emerald-200'
              : 'text-violet-700 dark:text-violet-200',
          )}
        >
          {card.value}
        </code>
      </div>
    </article>
  );
};

const InfoCard = ({ card }: { card: WorkTagCard }) => (
  <article
    className={cn(
      'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
      'bg-gradient-to-br from-sky-50 via-white to-sky-50/30',
      'dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-sky-950/20',
      'border-sky-300/80 dark:border-sky-700/70',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
          'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
        )}
      >
        <InfoIcon className="h-5 w-5" />
      </span>
      <h3 className="font-mono text-sm sm:text-md font-extrabold tracking-tight text-sky-700 dark:text-sky-300">
        {card.title}
      </h3>
    </header>
    <p className="text-xsm leading-relaxed text-sky-900 dark:text-sky-100 break-keep">
      {card.description}
    </p>
  </article>
);
