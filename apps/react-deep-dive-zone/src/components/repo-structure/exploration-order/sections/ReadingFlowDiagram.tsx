import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { toneTokens } from '../../../start/_shared/tones';
import type { ExplorationContent, FlowCard } from '../content';
import { ArrowRightIcon, iconByName, MapIcon } from '../icons';

type Props = { content: ExplorationContent['flow'] };

export const ReadingFlowDiagram = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-flow" className="space-y-md">
      <SectionHeader
        id="flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-2 items-stretch">
        {content.cards.map((card, idx) => (
          <FlowCardWithArrow key={card.id} card={card} isLast={idx === content.cards.length - 1} />
        ))}
      </ol>

      {/* 하단 예시 라인 */}
      <div
        className={cn(
          'flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 rounded-2xl border px-md py-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)] shrink-0">
          {content.exampleLabel}
        </span>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {content.examplePath.map((step, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 sm:gap-2">
              <code
                className={cn(
                  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xsm font-mono',
                  'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                )}
              >
                {step}
              </code>
              {i < content.examplePath.length - 1 && (
                <ArrowRightIcon
                  className="h-3.5 w-3.5 text-[var(--term-accent)]"
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

type WithArrowProps = { card: FlowCard; isLast: boolean };

const FlowCardWithArrow = ({ card, isLast }: WithArrowProps) => (
  <>
    <FlowCardItem card={card} />
    {!isLast && <FlowArrow />}
  </>
);

const FlowArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center">
    <ArrowRightIcon className="hidden lg:inline-flex h-5 w-5 text-[var(--term-accent)]" />
    <ArrowRightIcon className="inline-flex lg:hidden h-5 w-5 rotate-90 text-[var(--term-accent)]" />
  </div>
);

type FlowItemProps = { card: FlowCard };

const FlowCardItem = ({ card }: FlowItemProps) => {
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];
  const tintClass =
    card.tone === 'blue'
      ? 'bg-blue-50/70 dark:bg-blue-950/30'
      : card.tone === 'teal'
        ? 'bg-teal-50/70 dark:bg-teal-950/30'
        : card.tone === 'emerald'
          ? 'bg-emerald-50/70 dark:bg-emerald-950/30'
          : 'bg-violet-50/70 dark:bg-violet-950/30';

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.border,
        tintClass,
        tone.borderHover,
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>
      <h3 className={cn('text-sm sm:text-md font-bold tracking-tight', tone.text)}>{card.title}</h3>
      <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)] font-mono">
        {card.englishLabel}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep mt-auto">
        {card.description}
      </p>
    </article>
  );
};
