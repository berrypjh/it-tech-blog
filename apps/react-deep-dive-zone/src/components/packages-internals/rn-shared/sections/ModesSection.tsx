import { cn } from '@it-tech-blog/utils';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ModeCard, RnContent } from '../content';
import { rnIcon, SparklesIcon } from '../icons';

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
      icon={rnIcon[card.iconName]}
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
    className={cn(
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
