import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ChildShapeCard, ReconcileChildrenContent } from '../content';
import { childShapeIconByName, LayersIcon } from '../icons';

type Props = { content: ReconcileChildrenContent['childShape'] };

export const ChildShapePreview = ({ content }: Props) => (
  <section id="child-shape" aria-labelledby="heading-child-shape" className="space-y-md">
    <SectionHeader
      id="child-shape"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.subtitle}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ToneCardGrid>
      {content.cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </ToneCardGrid>
  </section>
);

const Card = ({ card }: { card: ChildShapeCard }) => {
  const Icon = childShapeIconByName[card.icon];
  return (
    <ToneCardItem
      tone={card.tone}
      icon={<Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} />}
      topRight="shape"
    >
      <h3 className={cn('text-md font-bold tracking-tight break-keep', toneTokens[card.tone].text)}>
        {card.title}
      </h3>
      <code className="self-start inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
        {card.example}
      </code>
      <p className="mt-auto text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </ToneCardItem>
  );
};
