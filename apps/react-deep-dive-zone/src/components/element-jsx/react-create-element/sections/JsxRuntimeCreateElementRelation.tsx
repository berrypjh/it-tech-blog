import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { ReactCreateElementContent, RelationCard } from '../content';
import {
  ArrowDownIcon,
  AtomIcon,
  BracesIcon,
  FunctionSquareIcon,
  LinkIcon,
  TargetIcon,
} from '../icons';

type Props = { content: ReactCreateElementContent['relation'] };

const iconMap = {
  braces: BracesIcon,
  functionSquare: FunctionSquareIcon,
  target: TargetIcon,
} as const;

export const JsxRuntimeCreateElementRelation = ({ content }: Props) => (
  <section aria-labelledby="heading-relation" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="relation"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LinkIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <RelationCardView card={card} />
        </li>
      ))}
    </ul>

    <div className="flex justify-center" aria-hidden="true">
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
        <ArrowDownIcon className="h-3.5 w-3.5" />
      </span>
    </div>

    <article
      className={cn(
        'flex items-center justify-center gap-md rounded-2xl border-2 p-md',
        'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-teal-300/80 bg-teal-100 text-teal-700 dark:border-teal-800/70 dark:bg-teal-950/60 dark:text-teal-200 shrink-0"
      >
        <AtomIcon className="h-6 w-6" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="font-mono text-md sm:text-lg font-bold tracking-tight text-teal-700 dark:text-teal-200">
          {content.resultLabel}
        </span>
        <span className="text-xsm text-teal-800/80 dark:text-teal-200/80 break-keep">
          {content.resultNote}
        </span>
      </div>
    </article>
  </section>
);

const RelationCardView = ({ card }: { card: RelationCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3
          className={cn(
            'font-mono text-sm sm:text-md font-bold tracking-tight break-keep whitespace-pre-line',
            t.text,
          )}
        >
          {card.title}
        </h3>
        {card.subtitle && (
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {card.subtitle}
          </span>
        )}
      </div>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
