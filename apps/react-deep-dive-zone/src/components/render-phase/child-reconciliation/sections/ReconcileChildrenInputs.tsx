import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { InputCard, ReconcileChildrenContent } from '../content';
import { BoxIcon, FileTextIcon, ListChecksIcon, NetworkIcon } from '../icons';

type Props = { content: ReconcileChildrenContent['inputs'] };

const iconMap = {
  tree: NetworkIcon,
  cube: BoxIcon,
  fileText: FileTextIcon,
} as const;

export const ReconcileChildrenInputs = ({ content }: Props) => (
  <section id="inputs" aria-labelledby="heading-inputs" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="inputs"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {content.cards.map((card, idx) => (
        <Card key={card.title} card={card} index={idx + 1} />
      ))}
    </ol>
  </section>
);

const Card = ({ card, index }: { card: InputCard; index: number }) => {
  const Icon = iconMap[card.iconName];
  const tone = card.tone as ToneKey;
  return (
    <ToneCardItem tone={tone} icon={<Icon className="h-5 w-5" />} topRight={index}>
      <h3
        className={cn(
          'font-mono text-md font-bold tracking-tight break-keep',
          toneTokens[tone].text,
        )}
      >
        {card.title}
      </h3>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {card.description}
      </p>
      <p className="mt-auto text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {card.detail}
      </p>
    </ToneCardItem>
  );
};
