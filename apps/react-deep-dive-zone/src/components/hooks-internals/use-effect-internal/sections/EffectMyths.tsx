import { AlertTriangle, Clock, Lightbulb, ListChecks, type LucideIcon, Trash2 } from 'lucide-react';

import { MisconceptionCardGrid, type MisconceptionItem } from '../../../shared/misconception';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { MythId, UseEffectInternalsContent } from '../content';

type Props = { content: UseEffectInternalsContent['myths'] };

const mythIcon: Record<MythId, LucideIcon> = {
  timing: Clock,
  cleanup: Trash2,
  deps: ListChecks,
};

export const EffectMyths = ({ content }: Props) => {
  const items: MisconceptionItem[] = content.items.map((myth) => ({
    id: myth.id,
    icon: mythIcon[myth.id],
    accentClassName: toneTokens[myth.tone].text,
    badgeWrong: myth.badgeWrong,
    wrong: myth.wrong,
    right: myth.right,
    note: myth.note,
  }));

  return (
    <section id="myths" aria-labelledby="heading-myths" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="myths"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
      />

      <MisconceptionCardGrid items={items} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
