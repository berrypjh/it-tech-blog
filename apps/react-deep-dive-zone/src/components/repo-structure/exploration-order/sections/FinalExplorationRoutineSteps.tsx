import { NumberedStepList } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import type { ToneKey } from '../../../shared/tones';
import type { ExplorationContent } from '../content';
import { iconByName, MapIcon } from '../icons';

type Props = { content: ExplorationContent['routine'] };

const toneCycle: ToneKey[] = ['amber', 'sky', 'violet'];

export const FinalExplorationRoutineSteps = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-routine" className="space-y-lg">
      <SectionHeader
        id="routine"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <NumberedStepList
        rows={content.steps.map((step, idx) => {
          const Icon = iconByName[step.icon];
          return {
            id: step.number,
            num: step.number,
            tone: toneCycle[idx % toneCycle.length],
            icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
            title: step.title,
            description: step.description,
          };
        })}
      />
    </section>
  );
};
