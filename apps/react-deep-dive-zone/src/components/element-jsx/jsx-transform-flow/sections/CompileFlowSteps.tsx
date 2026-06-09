import { type FlowStepItem, FlowStepsGrid } from '../../../shared/FlowStepsGrid';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FlowStep, JsxTransformFlowContent } from '../content';
import { AtomIcon, BoxIcon, CodeIcon, SettingsIcon, WorkflowIcon } from '../icons';

type Props = { content: JsxTransformFlowContent['compileFlow'] };

const iconMap = {
  code: CodeIcon,
  gear: SettingsIcon,
  box: BoxIcon,
  atom: AtomIcon,
} as const;

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return { ...step, icon: <Icon className="h-5 w-5" /> };
};

export const CompileFlowSteps = ({ content }: Props) => (
  <section
    id="compile-flow"
    aria-labelledby="heading-compile-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="compile-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} />
  </section>
);
