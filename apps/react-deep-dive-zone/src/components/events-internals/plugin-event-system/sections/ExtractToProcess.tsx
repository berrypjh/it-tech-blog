import { cx } from '@berrypjh/react-ui';
import {
  Lightbulb,
  ListOrdered,
  type LucideIcon,
  PlayCircle,
  Puzzle,
  SquareDashed,
  Workflow,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ExtractStepId, PluginEventSystemContent } from '../content';

type Props = { content: PluginEventSystemContent['extraction'] };

const stepIcon: Record<ExtractStepId, LucideIcon> = {
  'queue-init': SquareDashed,
  extract: Puzzle,
  accumulate: ListOrdered,
  process: PlayCircle,
};

export const ExtractToProcess = ({ content }: Props) => {
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
    <section
      id="extraction"
      aria-labelledby="heading-extraction"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="extraction"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
      />

      <FlowStepsGrid steps={steps} columns={4} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
