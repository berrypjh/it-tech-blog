import {
  AlertCircle,
  Database,
  Lightbulb,
  type LucideIcon,
  PanelsTopLeft,
  Zap,
} from 'lucide-react';

import { MisconceptionCardGrid, type MisconceptionItem } from '../../../shared/misconception';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { MisconceptionIcon, UpdateToRenderSummaryContent } from '../content';

const misconceptionIconByName: Record<MisconceptionIcon, LucideIcon> = {
  panels: PanelsTopLeft,
  database: Database,
  zap: Zap,
};

type Props = { content: UpdateToRenderSummaryContent['misconceptions'] };

export const MisconceptionsSection = ({ content }: Props) => {
  const items: MisconceptionItem[] = content.cards.map((card) => ({
    id: card.id,
    icon: misconceptionIconByName[card.icon],
    accentClassName: toneTokens[card.tone].text,
    badgeWrong: card.badge,
    wrong: card.wrong,
    right: card.right,
    note: card.note,
  }));

  return (
    <section
      id="misconceptions"
      aria-labelledby="heading-misconceptions"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        id="misconceptions"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<AlertCircle className="h-5 w-5" aria-hidden="true" />}
      />

      <MisconceptionCardGrid items={items} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
