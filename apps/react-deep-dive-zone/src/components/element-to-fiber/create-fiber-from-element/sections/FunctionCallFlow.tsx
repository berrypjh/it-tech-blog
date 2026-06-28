import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CreateFiberFromElementContent, FlowStep } from '../content';
import { BoxIcon, PuzzleIcon, SparklesIcon, SplitIcon, WandIcon, WorkflowIcon } from '../icons';

type Props = { content: CreateFiberFromElementContent['flow'] };

const iconMap = {
  box: BoxIcon,
  wand: WandIcon,
  split: SplitIcon,
  puzzle: PuzzleIcon,
  sparkles: SparklesIcon,
} as const;

const toRow = (step: FlowStep): StepRow => {
  const Icon = iconMap[step.iconName];
  return {
    id: step.id,
    num: step.number,
    tone: step.tone,
    icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
    title: step.title,
    description: step.description,
  };
};

export const FunctionCallFlow = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <NumberedStepList rows={content.steps.map(toRow)} />
  </section>
);
