import { History, Layers, Lightbulb, type LucideIcon, Split, Timer, Zap } from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { BranchId, UpdateToLaneContent } from '../content';

type Props = { content: UpdateToLaneContent['branches'] };

const branchIcon: Record<BranchId, LucideIcon> = {
  legacy: History,
  render: Layers,
  transition: Timer,
  event: Zap,
};

export const LaneBranches = ({ content }: Props) => {
  const rows: StepRow[] = content.items.map((branch) => {
    const Icon = branchIcon[branch.id];
    return {
      id: branch.id,
      num: branch.num,
      tone: branch.tone,
      icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
      title: branch.title,
      description: branch.description,
    };
  });

  return (
    <section id="branches" aria-labelledby="heading-branches" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="branches"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
