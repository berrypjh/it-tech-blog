import { cx } from '@berrypjh/react-ui';
import { Anchor, Lightbulb, type LucideIcon, Package, Zap } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { BindStepId, UseStateInternalsContent } from '../content';

type Props = { content: UseStateInternalsContent['dispatchBind'] };

const stepIcon: Record<BindStepId, LucideIcon> = {
  raw: Package,
  bind: Anchor,
  handed: Zap,
};

export const DispatchBindFlow = ({ content }: Props) => {
  const steps: FlowStepItem[] = content.steps.map((step) => {
    const Icon = stepIcon[step.id];
    return {
      id: step.id,
      badge: step.badge,
      title: step.title,
      body: step.body,
      tone: step.tone,
      icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
    };
  });

  return (
    <section id="dispatch" aria-labelledby="heading-dispatch" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="dispatch"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Zap className="h-5 w-5" aria-hidden="true" />}
      />

      <FlowStepsGrid steps={steps} columns={3} />

      <CodePreviewPanel header={content.codeHeader} badge="main" code={content.code} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
