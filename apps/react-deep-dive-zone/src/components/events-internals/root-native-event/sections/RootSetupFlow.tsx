import {
  Crosshair,
  Layers,
  Lightbulb,
  ListOrdered,
  type LucideIcon,
  Radio,
  Sprout,
  Stamp,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { RootNativeEventContent, SetupStepId } from '../content';

type Props = { content: RootNativeEventContent['setup'] };

const stepIcon: Record<SetupStepId, LucideIcon> = {
  'create-root': Sprout,
  'resolve-container': Crosshair,
  'listen-all': Radio,
  iterate: ListOrdered,
  register: Layers,
  mark: Stamp,
};

export const RootSetupFlow = ({ content }: Props) => {
  const rows: StepRow[] = content.steps.map((step) => {
    const Icon = stepIcon[step.id];
    return {
      id: step.id,
      num: step.num,
      tone: step.tone,
      icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
      title: step.title,
      description: step.description,
    };
  });

  return (
    <section id="setup" aria-labelledby="heading-setup" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="setup"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sprout className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
