import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { RelationCard, SchedulerContent } from '../content';
import { CheckCircleIcon, iconByName, RefreshIcon } from '../icons';

type Props = { content: SchedulerContent['relation'] };

export const ReconcilerSchedulerRelation = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-relation" className="space-y-md">
      <SectionHeader
        id="relation"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<RefreshIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <RelationCardItem card={content.left} />
        <CenterIcon />
        <RelationCardItem card={content.right} />
      </div>

      <div
        className={cn(
          'flex items-start gap-sm rounded-2xl border px-md py-md',
          'border-teal-200/80 bg-teal-50/70 text-teal-900',
          'dark:border-teal-800/60 dark:bg-teal-950/30 dark:text-teal-100',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0',
            'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-950',
          )}
        >
          <RefreshIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md leading-relaxed font-medium break-keep">
          <span>{content.banner.lead}</span>
          <span className="font-bold text-teal-700 dark:text-teal-200">
            {content.banner.accent1}
          </span>
          <span>{content.banner.mid}</span>
          <span className="font-bold text-teal-700 dark:text-teal-200">
            {content.banner.accent2}
          </span>
          <span>{content.banner.tail}</span>
        </p>
      </div>
    </section>
  );
};

type ItemProps = { card: RelationCard };

const RelationCardItem = ({ card }: ItemProps) => {
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];
  const tintClass =
    card.tone === 'indigo'
      ? 'bg-indigo-50/70 dark:bg-indigo-950/30'
      : 'bg-teal-50/70 dark:bg-teal-950/30';

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tintClass,
        tone.border,
        tone.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-md border',
            tone.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-lg font-bold font-mono tracking-tight', tone.text)}>
            {card.title}
          </h3>
          <p className="text-[11px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {card.subtitle}
          </p>
        </div>
      </header>

      <ul className="flex flex-col gap-2">
        {card.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <CheckCircleIcon
              className={cn('mt-0.5 h-4 w-4 shrink-0', tone.text)}
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const CenterIcon = () => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center justify-center w-14 h-14 rounded-full',
        'border-2 border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_3px_0_var(--term-border)] text-[var(--term-accent)]',
      )}
    >
      <RefreshIcon className="h-6 w-6" />
    </span>
  </div>
);
