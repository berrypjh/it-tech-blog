import {
  Activity,
  Code,
  FileInput,
  FileText,
  Lightbulb,
  Loader,
  type LucideIcon,
  Map,
  RefreshCw,
  Server,
  Signal,
  Telescope,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { React19ChangeMapContent, RoadmapId } from '../content';

type Props = { content: React19ChangeMapContent['roadmap'] };

const roadmapIcon: Record<RoadmapId, LucideIcon> = {
  map: Map,
  actions: RefreshCw,
  form: FileInput,
  use: Loader,
  ref: Code,
  metadata: FileText,
  server: Server,
  activity: Activity,
  'effect-event': Signal,
  after: Telescope,
};

export const ChapterRoadmap = ({ content }: Props) => {
  const rows: StepRow[] = content.steps.map((step) => {
    const Icon = roadmapIcon[step.id];
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
    <section id="roadmap" aria-labelledby="heading-roadmap" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="roadmap"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Map className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
