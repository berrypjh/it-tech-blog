import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { CoreChangeCard, ReactElementRefReact19Content } from '../content';
import { CheckCircleIcon, ListChecksIcon, UserCheckIcon, WorkflowIcon, ZapIcon } from '../icons';

type Props = { content: ReactElementRefReact19Content['core'] };

const iconMap = {
  user: UserCheckIcon,
  flow: WorkflowIcon,
  zap: ZapIcon,
} as const;

export const RefChangeCoreCards = ({ content }: Props) => (
  <section aria-labelledby="heading-core" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="core"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: CoreChangeCard }) => {
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
      <header className="flex items-center justify-between gap-sm">
        <span
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full border font-mono text-sm font-bold tabular-nums',
            t.chip,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>

      <ul className="flex flex-col gap-1.5 mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        {card.checks.map((check) => (
          <li key={check} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5"
            >
              <CheckCircleIcon className="h-3 w-3" />
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{check}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
