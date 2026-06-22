import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { ChangelogContent, ScenarioCard } from '../content';
import { ArrowRightIcon, iconByName, SparklesIcon } from '../icons';
import { accentByTone } from '../tone-accent';

type Props = { content: ChangelogContent['scenarios'] };

export const SourceChoiceScenarioCards = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-scenarios" className="space-y-md">
      <SectionHeader
        id="scenarios"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <ScenarioCardItem card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ItemProps = { card: ScenarioCard };

const ScenarioCardItem = ({ card }: ItemProps) => {
  const tone = accentByTone[card.tone];
  const resultTone = accentByTone[card.resultTone];
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'flex w-full flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'p-md sm:p-lg transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-lg border shrink-0',
          'bg-[var(--term-surface)] border-[var(--term-border)]',
          tone.text,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>

      <h3
        className={cn(
          'text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep whitespace-pre-line',
        )}
      >
        {card.question}
      </h3>

      <span
        className={cn(
          'inline-flex items-center gap-1.5 self-start rounded-full border px-3 py-1.5 text-xsm font-bold',
          resultTone.chip,
          resultTone.border,
        )}
      >
        <span
          aria-hidden="true"
          className={cn('inline-block w-1.5 h-1.5 rounded-full', resultTone.dot)}
        />
        {card.resultBadge}
      </span>

      <ol className="flex flex-col gap-1.5 mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        {card.flow.map((step, i) => (
          <li key={i} className="flex flex-col gap-1">
            <div
              className={cn(
                'flex items-center gap-2 rounded-md border px-2 py-1.5 text-xsm',
                'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn('inline-block w-1 h-1 rounded-full shrink-0', resultTone.dot)}
              />
              <div className="flex flex-col min-w-0">
                <span className="font-bold font-mono text-xsm break-keep">{step.label}</span>
                {step.sublabel && (
                  <span className="text-[10px] text-[var(--term-muted)] break-keep">
                    {step.sublabel}
                  </span>
                )}
              </div>
            </div>
            {i < card.flow.length - 1 && (
              <span aria-hidden="true" className="flex justify-center text-[var(--term-dim)]">
                <ArrowRightIcon className="h-3 w-3 rotate-90" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  );
};
