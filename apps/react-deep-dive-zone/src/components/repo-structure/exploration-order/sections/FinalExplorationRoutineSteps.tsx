import {
  ClipboardCheck,
  Code2,
  FileCode2,
  FolderOpen,
  type LucideIcon,
  Map,
  PackageSearch,
  Tag,
  Workflow,
} from 'lucide-react';

import { NumberedStepList } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ToneKey } from '../../../shared/tones';
import type { ExplorationContent, RoutineStep } from '../content';

const stepIcon: Record<RoutineStep['number'], LucideIcon> = {
  '1': FolderOpen,
  '2': PackageSearch,
  '3': Code2,
  '4': FileCode2,
  '5': ClipboardCheck,
  '6': Tag,
  '7': Workflow,
};

type Props = { content: ExplorationContent['routine'] };

const toneCycle: ToneKey[] = ['amber', 'sky', 'violet'];

export const FinalExplorationRoutineSteps = ({ content }: Props) => {
  return (
    <section id="routine" aria-labelledby="heading-routine" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="routine"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Map className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList
        rows={content.steps.map((step, idx) => {
          const Icon = stepIcon[step.number];
          return {
            id: step.number,
            num: step.number,
            tone: toneCycle[idx % toneCycle.length],
            icon: <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />,
            title: step.title,
            description: step.description,
          };
        })}
      />
    </section>
  );
};
