import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ExampleCard, MarkChangesContent } from '../content';
import { ArrowDownIcon, markIconByName, SparklesIcon } from '../icons';
import { facetFor } from '../markFacet';

type Props = { content: MarkChangesContent['examples'] };

export const ChangeExamples = ({ content }: Props) => (
  <section id="examples" aria-labelledby="heading-examples" className="space-y-md">
    <SectionHeader
      id="examples"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ card }: { card: ExampleCard }) => {
  const t = facetFor(card.tone);
  const Icon = markIconByName[card.icon];
  const beforeTokens = card.before.split(' ').filter(Boolean);
  const afterTokens = card.after.split(' ').filter(Boolean);
  const mark = card.icon === 'flag' ? 'insert' : card.icon === 'trash' ? 'delete' : 'move';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {card.badgeLabel}
        </span>
      </header>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>

      <div className="flex flex-col gap-2">
        <TokenRow label="before" tokens={beforeTokens} mark={null} tone={card.tone} />
        <ArrowDownIcon aria-hidden="true" className="mx-auto h-5 w-5 text-[var(--term-accent)]" />
        <TokenRow label="after" tokens={afterTokens} mark={mark} tone={card.tone} />
      </div>

      <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

const TokenRow = ({
  label,
  tokens,
  mark,
  tone,
}: {
  label: string;
  tokens: string[];
  mark: 'insert' | 'delete' | 'move' | null;
  tone: ExampleCard['tone'];
}) => {
  const t = facetFor(tone);
  const moved = toneTokens.amber;
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-1">
        {tokens.map((tok, idx) => {
          const isLast = idx === tokens.length - 1;
          const highlight = mark === 'insert' && isLast;
          const isMoved = mark === 'move' && (idx === 0 || idx === 1);
          return (
            <span
              key={`${tok}-${idx}`}
              className={cn(
                'inline-flex h-8 min-w-[2rem] items-center justify-center rounded-md border font-mono text-xsm font-bold',
                highlight
                  ? cn(t.fill.bg, t.fill.border, t.fill.text)
                  : isMoved
                    ? cn(moved.fill.bg, moved.fill.border, moved.fill.text)
                    : 'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-fg)]',
              )}
            >
              {tok}
            </span>
          );
        })}
      </div>
    </div>
  );
};
