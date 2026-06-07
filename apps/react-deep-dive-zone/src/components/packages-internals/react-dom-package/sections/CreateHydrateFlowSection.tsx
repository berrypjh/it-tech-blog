import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { CreateHydrateCard, ReactDomContent } from '../content';
import { MapIcon } from '../icons';

type Props = { content: ReactDomContent['flow']; sectionId: string };

export const CreateHydrateFlowSection = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-flow" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
        {content.cards.map((card) => (
          <CreateHydrateCardView key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

const CreateHydrateCardView = ({ card }: { card: CreateHydrateCard }) => {
  const tone = toneTokens[card.tone];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        tone.chip,
        tone.borderHover,
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex flex-col gap-1">
        <h3 className={cn('text-lg font-bold font-mono tracking-tight', tone.text)}>{card.name}</h3>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold">
          {card.subtitle}
        </span>
      </header>

      <CodePreviewPanel code={card.code} />

      {/* 3단계 흐름 */}
      <ol className="flex flex-col gap-sm">
        {card.steps.map((step, i) => (
          <li key={step.id} className="flex items-stretch gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0 font-mono text-[10px] font-bold mt-1',
                tone.chip,
              )}
            >
              {i + 1}
            </span>
            <div
              className={cn(
                'flex-1 flex flex-col gap-1 rounded-lg border p-3',
                'bg-[var(--term-bg)] border-[var(--term-border)]',
              )}
            >
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
                {step.step}
              </span>
              <span
                className={cn('text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep')}
              >
                {step.title}
              </span>
              {step.caption && (
                <code
                  className={cn(
                    'text-[11px] leading-snug font-mono rounded-md border px-2 py-1 w-fit max-w-full overflow-x-auto',
                    'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
                    tone.text,
                  )}
                >
                  {step.caption}
                </code>
              )}
            </div>
          </li>
        ))}
      </ol>

      <p
        className={cn(
          'mt-auto rounded-lg border p-md text-xsm leading-relaxed break-keep',
          'border-dashed border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        {card.description}
      </p>
    </article>
  );
};
