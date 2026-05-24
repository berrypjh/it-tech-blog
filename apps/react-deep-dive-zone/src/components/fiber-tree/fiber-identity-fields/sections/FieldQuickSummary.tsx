import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ToneKey } from '../../../getting-started/_shared/tones';
import type { FiberIdentityFieldsContent, QuickSummaryCard } from '../content';
import { BoxesIcon, CodeIcon, KeyIcon, ListTreeIcon, TargetIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['summary'] };

const iconMap = {
  cube: BoxesIcon,
  key: KeyIcon,
  code: CodeIcon,
  target: TargetIcon,
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

const fieldColor: Record<ToneKey, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  violet: 'text-violet-700 dark:text-violet-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  blue: 'text-blue-700 dark:text-blue-200',
  teal: 'text-teal-700 dark:text-teal-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
  amber: 'text-amber-800 dark:text-amber-200',
};

export const FieldQuickSummary = ({ content }: Props) => (
  <section id="summary" aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="summary"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListTreeIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm lg:gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <QuickCard card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const QuickCard = ({ card }: { card: QuickSummaryCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cardBorder[card.tone],
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-xl',
          iconWrap[card.tone],
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <code className={cn('font-mono text-md font-bold tracking-tight', fieldColor[card.tone])}>
        {card.field}
      </code>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.question}
      </p>
      <p className="mt-auto text-[12px] leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
