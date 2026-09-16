import { cx } from '@berrypjh/react-ui';
import { Box, FileText, ListChecks, type LucideIcon, Network } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { InputCard, ReconcileChildrenContent } from '../content';

const inputIconByName: Record<InputCard['icon'], LucideIcon> = {
  tree: Network,
  cube: Box,
  fileText: FileText,
} as const;

type Props = { content: ReconcileChildrenContent['inputs'] };

export const ReconcileChildrenInputs = ({ content }: Props) => (
  <section id="inputs" aria-labelledby="heading-inputs" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="inputs"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card, idx) => (
        <Card key={card.title} card={card} index={idx + 1} />
      ))}
    </ul>
  </section>
);

const Card = ({ card, index }: { card: InputCard; index: number }) => {
  const Icon = inputIconByName[card.icon];
  return (
    <ToneCardItem tone={card.tone} icon={<Icon className="h-5 w-5" />} topRight={index}>
      <h3
        className={cx(
          'font-mono text-md font-bold tracking-tight break-keep',
          toneTokens[card.tone].text,
        )}
      >
        {card.title}
      </h3>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {card.description}
      </p>
      <p className="mt-auto text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {card.detail}
      </p>
    </ToneCardItem>
  );
};
