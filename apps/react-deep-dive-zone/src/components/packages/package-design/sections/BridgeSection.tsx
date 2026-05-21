import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { toneTokens } from '../../../start/_shared/tones';
import type { BridgeCard, PackageDesignContent } from '../content';
import { ChevronRightIcon, pdIcon } from '../icons';

type Props = { content: PackageDesignContent['bridge'] };

export const BridgeSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-bridge" className="space-y-md">
      <SectionHeader
        id="bridge"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<pdIcon.share className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, index) => (
          <li key={card.id} className="relative flex">
            <BridgeCardView card={card} index={index + 1} />
            {index < content.cards.length - 1 && (
              <span
                aria-hidden="true"
                className="hidden md:inline-flex absolute -right-2 top-1/2 -translate-y-1/2 text-[var(--term-accent)]"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

const BridgeCardView = ({ card, index }: { card: BridgeCard; index: number }) => {
  const tone = toneTokens[card.tone];
  const Icon = pdIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        card.emphasized
          ? `${tone.chip} ${tone.border} lg:shadow-[0_3px_0_var(--term-border)]`
          : `bg-[var(--term-bg)] border-[var(--term-border)] ${tone.borderHover}`,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-mono tabular-nums">
          Step {String(index).padStart(2, '0')}
        </span>
      </header>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>{card.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
