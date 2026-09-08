import { Boxes, Code, Lightbulb, RotateCcw, Wand2 } from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ElementVsFiberContent, RecapStep } from '../content';

type Props = { content: ElementVsFiberContent['recap'] };

const iconMap = {
  code: Code,
  wand: Wand2,
  box: Boxes,
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
      descriptionFullWidth
      id="recap"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<RotateCcw className="h-5 w-5" aria-hidden="true" />}
    />

    <NumberedStepList rows={content.steps.map(toRow)} />

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.notice}
    </SectionNote>
  </section>
);
