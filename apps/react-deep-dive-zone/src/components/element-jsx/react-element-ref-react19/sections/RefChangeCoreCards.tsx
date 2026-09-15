import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, ListChecks, type LucideIcon, UserCheck, Workflow, Zap } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CoreChangeCard, ReactElementRefReact19Content } from '../content';

type Props = { content: ReactElementRefReact19Content['core'] };

const cardIcon: Record<CoreChangeCard['id'], LucideIcon> = {
  'as-prop': UserCheck,
  consistent: Workflow,
  wider: Zap,
};

export const RefChangeCoreCards = ({ content }: Props) => (
  <section id="core" aria-labelledby="heading-core" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="core"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
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
  const Icon = cardIcon[card.id];
  return (
    <article
      className={cx(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          className={cx(
            'inline-flex items-center justify-center w-9 h-9 rounded-full border font-mono text-sm font-bold tabular-nums',
            t.chip,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>

      <h3 className={cx('text-md font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>

      <ul className="flex flex-col gap-1.5 mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        {card.checks.map((check) => (
          <li key={check} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)] shrink-0 mt-0.5"
            >
              <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{check}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
