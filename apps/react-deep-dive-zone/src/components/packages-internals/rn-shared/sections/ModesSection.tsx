import { cx } from '@berrypjh/react-ui';
import { Layers, type LucideIcon, Pencil, Sparkles } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ModeCard, RnContent } from '../content';

type Props = { content: RnContent['modes'] };

const modeIcon: Record<ModeCard['id'], LucideIcon> = {
  mutation: Pencil,
  persistence: Layers,
};

export const ModesSection = ({ content }: Props) => {
  return (
    <section id="modes" aria-labelledby="heading-modes" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="modes"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ModeColumn card={content.cards[0]} pill={content.pills[0]} />
        <CompareVs />
        <ModeColumn card={content.cards[1]} pill={content.pills[1]} />
      </div>
    </section>
  );
};

const ModeColumn = ({
  card,
  pill,
}: {
  card: ModeCard;
  pill?: RnContent['modes']['pills'][number];
}) => (
  <div className="flex flex-col gap-sm">
    <ToneDetailCard
      tone={card.tone}
      icon={modeIcon[card.id]}
      title={card.name}
      description={card.subtitle}
      bullets={card.items}
      className="h-full"
    />
    {pill && <ModePill pill={pill} />}
  </div>
);

const ModePill = ({ pill }: { pill: RnContent['modes']['pills'][number] }) => (
  <span
    className={cx(
      'flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 rounded-full border px-md py-2 text-center text-xsm font-bold font-mono tracking-tight',
      'bg-[var(--term-surface)] border-[var(--term-border)]',
      toneTokens[pill.tone].text,
    )}
  >
    <span className="break-keep">{pill.left}</span>
    <span aria-hidden="true" className="text-[var(--term-accent)]">
      →
    </span>
    <span className="break-keep">{pill.right}</span>
  </span>
);
