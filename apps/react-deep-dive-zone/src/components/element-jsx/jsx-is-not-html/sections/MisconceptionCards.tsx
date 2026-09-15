import { Boxes, HelpCircle, type LucideIcon, Monitor, Network } from 'lucide-react';

import { MisconceptionCardGrid, type MisconceptionItem } from '../../../shared/misconception';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { JsxIsNotHtmlContent, MisconceptionCard } from '../content';

type Props = { content: JsxIsNotHtmlContent['misconception'] };

const sideIcon: Record<MisconceptionCard['id'], LucideIcon> = {
  'jsx-is-html': Boxes,
  'jsx-is-dom': Network,
  'jsx-renders-directly': Monitor,
};

export const MisconceptionCards = ({ content }: Props) => {
  const items: MisconceptionItem[] = content.cards.map((card) => ({
    id: card.id,
    icon: sideIcon[card.id],
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
        descriptionFullWidth
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
