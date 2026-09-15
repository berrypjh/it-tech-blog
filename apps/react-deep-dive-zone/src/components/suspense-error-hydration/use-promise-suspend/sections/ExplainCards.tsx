import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, Hourglass, TriangleAlert } from 'lucide-react';

import type { UsePromiseSuspendContent } from '../content';
import type { PromiseState } from '../tone';
import { sectionNumberBadge, stateAccent } from '../tone';

import { FulfilledPreview, PendingPreview, RejectedPreview } from './_ResultPreview';

type Props = {
  content: UsePromiseSuspendContent['explains'];
};

const stateIcon: Record<PromiseState, React.ComponentType<{ className?: string }>> = {
  pending: Hourglass,
  fulfilled: CheckCircle2,
  rejected: TriangleAlert,
};

export const ExplainCards = ({ content }: Props) => (
  <section aria-label="Per-state explanations" className="grid grid-cols-1 gap-md md:grid-cols-3">
    {content.cards.map((card) => {
      const accent = stateAccent[card.state];
      const Icon = stateIcon[card.state];
      return (
        <article
          key={card.state}
          className={cx(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'bg-white dark:bg-[var(--term-bg)]',
            accent.border,
            'shadow-[0_2px_0_var(--term-border)]',
            'transition-transform motion-safe:hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-2">
            <span aria-hidden="true" className={sectionNumberBadge}>
              {card.number}
            </span>
            <h3 className="text-md font-bold text-[var(--term-fg)] break-keep">{card.title}</h3>
            <span
              aria-hidden="true"
              className={cx(
                'ml-auto inline-flex h-8 w-8 items-center justify-center rounded-xl border',
                accent.iconChip,
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
          </header>

          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {card.description}
          </p>

          <div className="mt-auto">
            {card.preview === 'fulfilled' && card.fulfilledCode && (
              <FulfilledPreview code={card.fulfilledCode} label={content.fulfilledLabel} />
            )}
            {card.preview === 'pending' && card.pendingLabel && (
              <PendingPreview label={card.pendingLabel} />
            )}
            {card.preview === 'rejected' && card.rejectedTitle && (
              <RejectedPreview title={card.rejectedTitle} body={card.rejectedBody} />
            )}
          </div>
        </article>
      );
    })}
  </section>
);
