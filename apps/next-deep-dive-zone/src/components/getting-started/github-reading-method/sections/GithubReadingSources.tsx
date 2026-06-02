import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { GithubReadingContent, SourceCard } from '../content';
import { sourceIconByName, SourcesIcon } from '../icons';

type Props = { content: GithubReadingContent['sources'] };

const Card = ({
  card,
  labels,
}: {
  card: SourceCard;
  labels: GithubReadingContent['sources']['labels'];
}) => {
  const t = toneTokens[card.tone];
  const Icon = sourceIconByName[card.id];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <div className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border',
            t.chip,
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', t.text)}>
            {card.title}
          </h3>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {card.subtitle}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.shows}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{card.shows}</p>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.question}
        </span>
        <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {card.question}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-1.5 pt-sm border-t border-dashed border-[var(--term-border)]">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.examples}
        </span>
        <ul className="flex flex-col gap-1">
          {card.examples.map((ex) => (
            <li key={ex}>
              <code
                className={cn(
                  'block rounded border px-1.5 py-0.5 font-mono text-[10.5px] leading-snug [overflow-wrap:anywhere]',
                  t.chip,
                )}
              >
                {ex}
              </code>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const GithubReadingSources = ({ content }: Props) => {
  return (
    <section id="section-sources" aria-labelledby="heading-sources" className="space-y-lg">
      <SectionHeader
        id="sources"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SourcesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <Card card={card} labels={content.labels} />
          </li>
        ))}
      </ul>
    </section>
  );
};
