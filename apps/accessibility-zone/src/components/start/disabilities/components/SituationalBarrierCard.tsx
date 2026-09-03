import { ArrowRight, Lightbulb } from 'lucide-react';

import type { BarrierCard } from '../content';

type Props = {
  card: BarrierCard;
  illustration: React.ReactNode;
};

export const SituationalBarrierCard = ({ card, illustration }: Props) => {
  return (
    <article className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm transition-all hover:-translate-y-0.5 hover:border-stroke-primary hover:shadow-md">
      <div
        className="flex h-24 items-center justify-center rounded-md bg-background-default/60"
        aria-hidden="true"
      >
        {illustration}
      </div>

      <h3 className="whitespace-pre-line text-sm font-bold leading-snug text-text-default">
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-text-light">{card.body}</p>

      <button
        type="button"
        className="mt-auto inline-flex items-center justify-between gap-1 rounded-md border border-stroke-default bg-background-surface px-sm py-1.5 text-xsm font-semiBold text-text-primary transition-colors hover:border-stroke-primary hover:bg-primary-pr100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2 dark:hover:bg-primary-pr900/30"
      >
        <span className="flex items-center gap-1.5">
          <Lightbulb className="h-3 w-3" aria-hidden="true" />
          {card.pointLabel}
        </span>
        <ArrowRight className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
      </button>
    </article>
  );
};
