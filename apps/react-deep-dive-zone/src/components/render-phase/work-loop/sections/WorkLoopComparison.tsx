import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ComparisonCard, WorkLoopContent } from '../content';
import { CheckCircleIcon, LayersIcon, RefreshCcwIcon } from '../icons';

type Props = { content: WorkLoopContent['comparison'] };

export const WorkLoopComparison = ({ content }: Props) => (
  <section
    id="work-loop-comparison"
    aria-labelledby="heading-work-loop-comparison"
    className="space-y-md"
  >
    <SectionHeader
      id="work-loop-comparison"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
      <Card card={content.cards.left} />
      <Card card={content.cards.right} />

      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute z-10 inline-flex items-center justify-center',
          'h-12 w-12 sm:h-14 sm:w-14 rounded-full border bg-[var(--term-bg)] text-[var(--term-fg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'text-xsm sm:text-sm font-bold tracking-wider',
          'md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
          'top-[calc(50%-1.5rem)] left-1/2 -translate-x-1/2 -translate-y-1/2',
        )}
      >
        {content.vsLabel}
      </span>
    </div>
  </section>
);

const Card = ({ card }: { card: ComparisonCard }) => {
  const tone: ToneKey = card.kind === 'sync' ? 'sky' : 'teal';
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <RefreshCcwIcon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {card.kind}
        </span>
      </header>

      <h3 className={cn('text-md sm:text-lg font-bold tracking-tight break-keep', t.text)}>
        {card.title}
      </h3>

      <ul className="flex flex-col gap-1.5 flex-1">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
          >
            <CheckCircleIcon aria-hidden="true" className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'mt-auto inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-xxsm font-mono uppercase tracking-wider',
          t.chip,
        )}
      >
        {card.bottomBadge}
      </div>
    </article>
  );
};
