import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { CreateHydrateCard, ReactDomContent } from '../content';
import { MapIcon } from '../icons';
import { localTone } from '../tone';

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
  const tone = localTone(card.tone);

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
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
      <ol className="flex flex-col gap-2">
        {card.steps.map((step, i) => (
          <li key={step.id} className="flex gap-sm rounded-lg bg-[var(--term-surface)] p-3">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border',
                'bg-[var(--term-bg)] border-[var(--term-border)] font-mono text-[10px] font-bold',
                tone.text,
              )}
            >
              {i + 1}
            </span>
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
                {step.step}
              </span>
              <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
                {step.title}
              </span>
              {step.caption && (
                <code
                  className={cn(
                    'mt-0.5 w-fit max-w-full overflow-x-auto rounded-md px-2 py-1 text-[11px] leading-snug font-mono',
                    'bg-[var(--term-bg)]',
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

      <p className="mt-auto rounded-lg bg-[var(--term-surface)] p-md text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
