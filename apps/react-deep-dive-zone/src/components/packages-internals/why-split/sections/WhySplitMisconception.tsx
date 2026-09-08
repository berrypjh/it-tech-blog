import { Boxes, Clock, HelpCircle, type LucideIcon, Monitor } from 'lucide-react';

import type { MisconceptionItem } from '../../../shared/misconception';
import { MisconceptionCardGrid } from '../../../shared/misconception';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { MisconceptionCard, WhySplitContent } from '../content';

type Props = { content: WhySplitContent['misconception'] };

const cardIcon: Record<MisconceptionCard['id'], LucideIcon> = {
  'all-in-react': Boxes,
  'react-dom-is-react': Monitor,
  'scheduler-renders': Clock,
};

export const WhySplitMisconception = ({ content }: Props) => {
  const items: MisconceptionItem[] = content.cards.map((card) => ({
    id: card.id,
    icon: cardIcon[card.id],
    accentClassName: toneTokens[card.iconTone].text,
    badgeWrong: card.badgeWrong,
    wrong: card.wrong,
    right: card.right,
    note: card.note,
  }));

  return (
    <section
      id="misconception"
      aria-labelledby="heading-misconception"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        id="misconception"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}
      />

      <MisconceptionCardGrid items={items} />
    </section>
  );
};
