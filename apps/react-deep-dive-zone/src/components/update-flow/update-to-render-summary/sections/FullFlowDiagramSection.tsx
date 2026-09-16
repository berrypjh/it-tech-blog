import {
  CheckCircle2,
  CircleHelp,
  Clock,
  Code2,
  Database,
  Flag,
  GitBranch,
  Hourglass,
  type LucideIcon,
  MousePointerClick,
  PanelsTopLeft,
  Search,
  Server,
  Workflow,
  Zap,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneBadge } from '../../../shared/tone';
import type { FlowStepIcon, UpdateToRenderSummaryContent } from '../content';

const flowIconByName: Record<FlowStepIcon, LucideIcon> = {
  mousePointer: MousePointerClick,
  code: Code2,
  workflow: Workflow,
  search: Search,
  panels: PanelsTopLeft,
  server: Server,
  circleHelp: CircleHelp,
  database: Database,
  gitBranch: GitBranch,
  flag: Flag,
  zap: Zap,
  checkCircle: CheckCircle2,
  clock: Clock,
  hourglass: Hourglass,
};

type Props = { content: UpdateToRenderSummaryContent['bigFlow'] };

export const FullFlowDiagramSection = ({ content }: Props) => {
  const rows: StepRow[] = content.steps.map((step) => {
    const Icon = flowIconByName[step.icon];
    return {
      id: step.number,
      num: step.number,
      tone: step.tone,
      icon: <Icon className="h-[18px] w-[18px]" />,
      title: step.title,
      description: step.description,
      extra: step.final ? (
        <div className="col-span-full md:col-auto flex md:items-center md:justify-end mt-sm md:mt-0">
          <ToneBadge tone={step.tone}>{content.finalBadge}</ToneBadge>
        </div>
      ) : undefined,
    };
  });

  return (
    <section id="big-flow" aria-labelledby="heading-big-flow" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="big-flow"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} rowClassName="md:grid-cols-[auto_auto_1fr_auto]" />
    </section>
  );
};
