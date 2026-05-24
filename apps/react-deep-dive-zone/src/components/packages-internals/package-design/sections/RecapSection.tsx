import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { PackageDesignContent, RecapCard } from '../content';
import { pdIcon, SparklesIcon } from '../icons';

type Props = { content: PackageDesignContent['recap'] };

export const RecapSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-recap" className="space-y-md">
      <SectionHeader
        id="recap"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <RecapCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const RecapCardView = ({ card }: { card: RecapCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = pdIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        card.emphasized
          ? `${tone.chip} ${tone.border} lg:shadow-[0_3px_0_var(--term-border)]`
          : `bg-[var(--term-bg)] border-[var(--term-border)] ${tone.borderHover}`,
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>

      <h3 className={cn('text-sm font-bold font-mono tracking-tight', tone.text)}>{card.name}</h3>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono">
        {card.role}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
