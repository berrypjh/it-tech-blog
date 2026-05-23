import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ToneKey } from '../../../start/_shared/tones';
import type { FiberStateNodeContent, ReasonCard } from '../content';
import { AlertTriangleIcon, LinkIcon, SparklesIcon, WorkflowIcon } from '../icons';

type Props = { content: FiberStateNodeContent['reasons'] };

const iconMap = {
  alert: AlertTriangleIcon,
  workflow: WorkflowIcon,
  link: LinkIcon,
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

export const WhyStateNodeMatters = ({ content }: Props) => (
  <section id="reasons" aria-labelledby="heading-reasons" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="reasons"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
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
          'inline-flex items-center justify-center w-12 h-12 rounded-xl',
          iconWrap[card.tone],
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3
        className={cn(
          'text-xsm sm:text-sm font-bold tracking-tight leading-snug break-keep',
          titleColor[card.tone],
        )}
      >
        {card.title}
      </h3>
      <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.body}
      </p>
    </article>
  );
};
