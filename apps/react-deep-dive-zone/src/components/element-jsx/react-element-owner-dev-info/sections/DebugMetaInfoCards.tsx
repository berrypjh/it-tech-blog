import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { DebugCard, ReactElementOwnerDevInfoContent } from '../content';
import { LayersIcon, SparklesIcon, WorkflowIcon } from '../icons';
import { localTone } from '../localTone';

type Props = { content: ReactElementOwnerDevInfoContent['debug'] };

const iconMap = {
  stack: LayersIcon,
  task: WorkflowIcon,
} as const;

export const DebugMetaInfoCards = ({ content }: Props) => (
  <section aria-labelledby="heading-debug" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="debug"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)] shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.summary}
      </p>
    </div>
  </section>
);

const CardView = ({ card }: { card: DebugCard }) => {
  const t = localTone(card.tone);
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        'hover:border-[var(--term-accent)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <code className={cn('font-mono text-md font-bold tracking-tight', t.text)}>
          {card.field}
        </code>
      </header>
      <p className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.short}
      </p>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
