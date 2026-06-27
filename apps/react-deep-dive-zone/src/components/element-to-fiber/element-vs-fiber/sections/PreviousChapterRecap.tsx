import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ElementVsFiberContent, RecapStep } from '../content';
import { BoxesIcon, CodeIcon, LightbulbIcon, RotateIcon, WandIcon } from '../icons';

type Props = { content: ElementVsFiberContent['recap'] };

const iconMap = {
  code: CodeIcon,
  wand: WandIcon,
  box: BoxesIcon,
} as const;

const toRow = (step: RecapStep, idx: number): StepRow => {
  const Icon = iconMap[step.iconName];
  return {
    id: step.id,
    num: String(idx + 1),
    tone: 'sky',
    icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
    title: step.title,
    description: step.subtitle,
  };
};

export const PreviousChapterRecap = ({ content }: Props) => (
  <section id="recap" aria-labelledby="heading-recap" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="recap"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<RotateIcon className="h-5 w-5" />}
    />

    <NumberedStepList rows={content.steps.map(toRow)} />

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.notice}</SectionNote>
  </section>
);
