import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { DocsLimitsContent, GapCard } from '../content';
import { GapIcon, gapIconByName } from '../icons';

type Props = { content: DocsLimitsContent['gaps'] };

const Card = ({
  card,
  missLabel,
  sourcesLabel,
}: {
  card: GapCard;
  missLabel: string;
  sourcesLabel: string;
}) => {
  const t = toneTokens[card.tone];
  const Icon = gapIconByName[card.id];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md border',
            t.chip,
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xxsm font-bold tabular-nums text-[var(--term-muted)]">
          {card.number}
        </span>
      </div>

      <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {card.title}
      </h3>

      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {missLabel}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.miss}</p>
      </div>

      <div className="mt-auto flex flex-col gap-0.5 pt-sm border-t border-dashed border-[var(--term-border)]">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {sourcesLabel}
        </span>
        <p className={cn('text-[11px] leading-relaxed break-keep font-medium', t.text)}>
          {card.sources}
        </p>
      </div>
    </article>
  );
};

export const DocsGapCards = ({ content }: Props) => {
  return (
    <section id="section-gaps" aria-labelledby="heading-gaps" className="space-y-lg">
      <SectionHeader
        id="gaps"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<GapIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <Card card={card} missLabel={content.missLabel} sourcesLabel={content.sourcesLabel} />
          </li>
        ))}
      </ul>
    </section>
  );
};
