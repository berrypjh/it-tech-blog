import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CreateHydrateCard, ReactDomContent } from '../content';
import { MapIcon } from '../icons';

type Props = { content: ReactDomContent['flow'] };

export const CreateHydrateFlowSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-flow" className="space-y-lg">
      <SectionHeader
        id="flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
        {content.cards.map((card) => (
          <CreateHydrateCardView key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

const CreateHydrateCardView = ({ card }: { card: CreateHydrateCard }) => {
  const t = toneTokens[card.tone];

  return (
    <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="flex flex-col gap-0.5 pb-sm border-b border-dashed border-[var(--term-border)]">
        <h3 className={cn('text-md sm:text-lg font-bold font-mono tracking-tight', t.text)}>
          {card.name}
        </h3>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold">
          {card.subtitle}
        </span>
      </header>

      <CodePreviewPanel code={card.code} />

      <ol className="flex flex-col gap-sm">
        {card.steps.map((step) => (
          <li key={step.id} className="group">
            <div className="flex min-w-0 flex-col gap-0.5 p-md rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] transition-colors group-hover:bg-[var(--term-surface)]">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
                {step.step}
              </span>
              <span className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep leading-snug">
                {step.title}
              </span>
              {step.caption && (
                <code
                  className={cn(
                    'mt-0.5 w-fit max-w-full overflow-x-auto rounded-md px-2 py-1 text-[11px] leading-snug font-mono',
                    'bg-[var(--term-surface)]',
                    t.text,
                  )}
                >
                  {step.caption}
                </code>
              )}
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-auto rounded-md bg-[var(--term-surface)] p-md text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
