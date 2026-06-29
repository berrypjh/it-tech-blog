import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EffectCard, HeroFlagIcon, MutationPhaseContent } from '../content';
import { LayersIcon, PencilIcon, PlusIcon, TrashIcon } from '../icons';

type Props = { content: MutationPhaseContent['effects'] };

const iconMap: Record<HeroFlagIcon, typeof PencilIcon> = {
  plus: PlusIcon,
  pencil: PencilIcon,
  trash: TrashIcon,
};

export const MutationEffectsSection = ({ content }: Props) => (
  <section
    id="mutation-effects"
    aria-labelledby="heading-mutation-effects"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="mutation-effects"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card, idx) => (
        <Card key={card.title} card={card} index={idx + 1} examplesLabel={content.examplesLabel} />
      ))}
    </ul>
  </section>
);

const Card = ({
  card,
  index,
  examplesLabel,
}: {
  card: EffectCard;
  index: number;
  examplesLabel: string;
}) => {
  const Icon = iconMap[card.iconName];
  const t = toneTokens[card.tone];
  return (
    <ToneCardItem tone={card.tone} icon={<Icon className="h-5 w-5" />} topRight={index}>
      <div className="flex flex-col gap-1">
        <h3 className={cn('text-md font-bold tracking-tight font-mono break-keep', t.text)}>
          {card.title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center self-start gap-1 rounded-full border px-2 py-0.5 text-[10px] font-mono lowercase tracking-wider',
            t.chip,
          )}
        >
          {card.subtitle}
        </span>
      </div>

      <div className="mt-1 flex flex-col gap-1.5 border-t border-dashed border-[var(--term-border)] pt-sm">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {examplesLabel}
        </span>
        <ul className="flex flex-wrap gap-1.5">
          {card.examples.map((ex) => (
            <li
              key={ex}
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-1 text-[11px] font-mono',
                t.chip,
              )}
            >
              {ex}
            </li>
          ))}
        </ul>
      </div>
    </ToneCardItem>
  );
};
