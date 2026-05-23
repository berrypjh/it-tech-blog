import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type {
  MisconceptionCard,
  MisconceptionIconName,
  UpdateToRenderSummaryContent,
} from '../content';
import {
  AlertCircleIcon,
  CheckCircleIcon,
  DatabaseIcon,
  PanelsTopLeftIcon,
  ZapIcon,
} from '../icons';

type Props = { content: UpdateToRenderSummaryContent['misconceptions'] };

const iconMap: Record<MisconceptionIconName, typeof PanelsTopLeftIcon> = {
  panels: PanelsTopLeftIcon,
  database: DatabaseIcon,
  zap: ZapIcon,
};

export const MisconceptionsSection = ({ content }: Props) => (
  <section
    id="misconceptions"
    aria-labelledby="heading-misconceptions"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="misconceptions"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<AlertCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.title} className="flex">
          <Card card={card} />
        </li>
      ))}
    </ul>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 px-md py-3',
        'border-sky-200/80 bg-sky-50/70',
        'dark:border-sky-800/70 dark:bg-sky-950/40',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl',
          'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
        )}
      >
        <CheckCircleIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.summary}
      </p>
    </div>
  </section>
);

const Card = ({ card }: { card: MisconceptionCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg w-full',
        'border-rose-300/70 bg-rose-50/40',
        'dark:border-rose-700/70 dark:bg-rose-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
            'border-rose-300/80 bg-rose-100 text-rose-700',
            'dark:border-rose-700/70 dark:bg-rose-950/60 dark:text-rose-200',
          )}
        >
          <AlertCircleIcon aria-hidden="true" className="h-3 w-3" />
          {card.badge}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-2xl',
            'bg-rose-100 text-rose-700 border border-rose-200/80',
            'dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>

      <h3 className="text-md sm:text-lg font-bold leading-tight text-rose-900 dark:text-rose-100 break-keep">
        {card.title}
      </h3>

      <div
        className={cn(
          'mt-auto flex items-start gap-2 rounded-xl border px-3 py-2',
          'border-emerald-300/70 bg-emerald-50/70',
          'dark:border-emerald-700/70 dark:bg-emerald-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
            'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
          )}
        >
          <CheckCircleIcon className="h-3 w-3" />
        </span>
        <p className="text-xsm leading-relaxed text-emerald-900 dark:text-emerald-100 break-keep">
          {card.correction}
        </p>
      </div>
    </article>
  );
};
