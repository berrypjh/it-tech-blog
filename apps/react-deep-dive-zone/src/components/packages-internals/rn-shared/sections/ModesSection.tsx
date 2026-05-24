import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { ModeCard, RnContent } from '../content';
import { CheckCircleIcon, rnIcon, SparklesIcon } from '../icons';

type Props = { content: RnContent['modes'] };

export const ModesSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-modes" className="space-y-md">
      <SectionHeader
        id="modes"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <ModeCardView card={card} />
          </li>
        ))}
      </ul>

      <ul className="flex flex-col sm:flex-row gap-sm">
        {content.pills.map((pill) => {
          const tone = toneTokens[pill.tone];
          return (
            <li key={pill.id} className="flex-1">
              <span
                className={cn(
                  'flex items-center justify-center gap-2 rounded-full border px-md py-2 text-xsm font-bold font-mono tracking-tight',
                  tone.chip,
                )}
              >
                <span>{pill.left}</span>
                <span aria-hidden="true" className="text-[var(--term-accent)]">
                  →
                </span>
                <span>{pill.right}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const ModeCardView = ({ card }: { card: ModeCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = rnIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        tone.chip,
        tone.border,
        tone.borderHover,
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', tone.text)}>
            {card.name}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {card.subtitle}
          </span>
        </div>
      </header>

      <ul className="flex flex-col gap-2">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <span aria-hidden="true" className={cn('shrink-0 mt-0.5', tone.text)}>
              <CheckCircleIcon className="h-3.5 w-3.5" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
