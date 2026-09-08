import { cn } from '@it-tech-blog/utils';

import { Lightbulb, Pencil, ShieldCheck } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberFlagsContent } from '../content';

type Props = { content: FiberFlagsContent['commitPreview'] };

export const CommitPhasePreview = ({ content }: Props) => {
  const steps: FlowStepItem[] = [
    {
      id: 'render',
      badge: content.renderCard.subtitle,
      title: content.renderCard.title,
      body: content.renderCard.body,
      tone: 'sky',
      icon: <Pencil className={cn('h-5 w-5', toneTokens.sky.text)} aria-hidden="true" />,
    },
    {
      id: 'commit',
      badge: content.commitCard.subtitle,
      title: content.commitCard.title,
      body: content.commitCard.body,
      tone: 'emerald',
      icon: <ShieldCheck className={cn('h-5 w-5', toneTokens.emerald.text)} aria-hidden="true" />,
    },
  ];

  return (
    <section id="commit" aria-labelledby="heading-commit" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="commit"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
      />

      <FlowStepsGrid steps={steps} columns={2} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
        {content.emphasis}
      </SectionNote>
    </section>
  );
};
