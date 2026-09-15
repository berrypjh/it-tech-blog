import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  Atom,
  Braces,
  FunctionSquare,
  Link2,
  type LucideIcon,
  Target,
} from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReactCreateElementContent, RelationCard } from '../content';

type Props = { content: ReactCreateElementContent['relation'] };

const cardIcon: Record<RelationCard['id'], LucideIcon> = {
  runtime: Braces,
  'create-element': FunctionSquare,
  goal: Target,
};

export const JsxRuntimeCreateElementRelation = ({ content }: Props) => (
  <section aria-labelledby="heading-relation" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="relation"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Link2 className="h-5 w-5" aria-hidden="true" />}
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
        <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </div>

    <article
      className={cx(
        'flex items-center justify-center gap-md rounded-2xl border-2 p-md',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
      >
        <Atom className="h-6 w-6" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="font-mono text-md sm:text-lg font-bold tracking-tight text-[var(--term-accent)]">
          {content.resultLabel}
        </span>
        <span className="text-xsm text-[var(--term-muted)] break-keep">{content.resultNote}</span>
      </div>
    </article>
  </section>
);

const RelationCardView = ({ card }: { card: RelationCard }) => {
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
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3
          className={cx(
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
