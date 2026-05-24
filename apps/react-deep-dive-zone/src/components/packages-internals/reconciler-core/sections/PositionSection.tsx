import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { PositionCard, ReconcilerContent } from '../content';
import { LightbulbIcon, MapIcon, reconcilerIcon } from '../icons';

type Props = { content: ReconcilerContent['position'] };

export const PositionSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-position" className="space-y-md">
      <SectionHeader
        id="position"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)_auto_minmax(0,1fr)] items-stretch gap-md">
        <PositionCardView card={content.cards[0]} />
        <FlowArrow />
        <PositionCardView card={content.cards[1]} emphasized />
        <FlowArrow />
        <PositionCardView card={content.cards[2]} />
      </div>

      {/* 강조 배너 */}
      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-teal-300/80 bg-teal-50 text-teal-900',
          'dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-100',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-teal-600 dark:text-teal-300">
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

const PositionCardView = ({
  card,
  emphasized = false,
}: {
  card: PositionCard;
  emphasized?: boolean;
}) => {
  const tone = toneTokens[card.tone];
  const Icon = reconcilerIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        emphasized
          ? `${tone.chip} ${tone.border}`
          : `bg-[var(--term-bg)] border-[var(--term-border)] ${tone.borderHover}`,
        emphasized && 'lg:scale-[1.03] lg:shadow-[0_3px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-md sm:text-lg font-bold font-mono tracking-tight', tone.text)}>
            {card.name}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {card.subtitle}
          </span>
        </div>
      </header>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

const FlowArrow = () => (
  <div className="flex items-center justify-center text-[var(--term-accent)]" aria-hidden="true">
    <span className="hidden lg:inline-flex text-xl">→</span>
    <span className="inline-flex lg:hidden text-xl">↓</span>
  </div>
);
