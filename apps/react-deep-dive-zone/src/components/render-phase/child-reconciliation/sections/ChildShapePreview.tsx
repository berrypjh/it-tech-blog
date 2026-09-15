import { cx } from '@berrypjh/react-ui';
import { Boxes, ExternalLink, Layers, type LucideIcon, Sparkles, Square } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ChildShapeCard, ReconcileChildrenContent } from '../content';

const childShapeIconByName: Record<ChildShapeCard['icon'], LucideIcon> = {
  element: Square,
  array: Boxes,
  portal: ExternalLink,
  sparkle: Sparkles,
} as const;

type Props = { content: ReconcileChildrenContent['childShape'] };

export const ChildShapePreview = ({ content }: Props) => (
  <section id="child-shape" aria-labelledby="heading-child-shape" className="space-y-md">
    <SectionHeader
      id="child-shape"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.subtitle}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
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
      icon={<Icon className={cx('h-5 w-5', toneTokens[card.tone].text)} />}
      topRight="shape"
    >
      <h3 className={cx('text-md font-bold tracking-tight break-keep', toneTokens[card.tone].text)}>
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
