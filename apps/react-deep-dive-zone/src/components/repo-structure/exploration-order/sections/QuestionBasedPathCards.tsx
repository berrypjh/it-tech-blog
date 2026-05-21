import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { ExplorationContent, RouteCard } from '../content';
import { ArrowRightIcon, FileTextIcon, SparklesIcon } from '../icons';

type Props = { content: ExplorationContent['paths'] };

export const QuestionBasedPathCards = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-paths" className="space-y-md">
      <SectionHeader
        id="paths"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <RouteCardItem card={card} relatedLabel={content.relatedLabel} />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ItemProps = { card: RouteCard; relatedLabel: string };

const RouteCardItem = ({ card, relatedLabel }: ItemProps) => {
  const tone = toneTokens[card.tone];
  const tintClass =
    card.tone === 'blue'
      ? 'bg-blue-50/70 dark:bg-blue-950/30'
      : card.tone === 'teal'
        ? 'bg-teal-50/70 dark:bg-teal-950/30'
        : 'bg-violet-50/70 dark:bg-violet-950/30';

  return (
    <article
      className={cn(
        'flex w-full flex-col gap-md rounded-xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.border,
        tintClass,
        tone.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold text-sm',
            tone.chip,
            tone.border,
          )}
        >
          {card.badge}
        </span>
        <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {card.question}
        </h3>
      </header>

      <ol className="flex flex-col gap-1">
        {card.path.map((step, i) => (
          <li key={i} className="flex flex-col items-stretch gap-1">
            <div
              className={cn(
                'flex items-center gap-2 rounded-md border px-2.5 py-1.5',
                'border-[var(--term-border)] bg-[var(--term-bg)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn('inline-block w-1.5 h-1.5 rounded-full shrink-0', tone.dot)}
              />
              <code className="text-xsm font-mono text-[var(--term-fg)] break-all">{step}</code>
            </div>
            {i < card.path.length - 1 && (
              <span aria-hidden="true" className="flex justify-center text-[var(--term-dim)]">
                <ArrowRightIcon className="h-3 w-3 rotate-90" />
              </span>
            )}
          </li>
        ))}
      </ol>

      <div
        className={cn(
          'mt-auto inline-flex items-center gap-2 rounded-lg border px-3 py-2',
          tone.chip,
          tone.border,
        )}
      >
        <FileTextIcon className={cn('h-3.5 w-3.5 shrink-0', tone.text)} aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
          {relatedLabel}
        </span>
        <span className="text-xsm font-mono font-bold text-[var(--term-fg)] break-all">
          {card.relatedTest}
        </span>
      </div>
    </article>
  );
};
