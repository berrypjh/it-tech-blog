import { cx } from '@berrypjh/react-ui';
import { ArrowUp, Compass, HelpCircle, List, Send } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { FiberCentralContent, PreviewItem } from '../content';

type Props = { content: FiberCentralContent['nextPreview'] };

const iconMap = {
  send: Send,
  list: List,
  compass: Compass,
  arrowUp: ArrowUp,
} as const;

const toFlowStep = (item: PreviewItem): FlowStepItem => {
  const Icon = iconMap[item.iconName];
  return {
    id: item.id,
    number: item.number,
    title: item.title,
    body: item.body,
    tone: item.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[item.tone].text)} />,
  };
};

export const FiberNextChapterPreview = ({ content }: Props) => (
  <section
    id="next-preview"
    aria-labelledby="heading-next-preview"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="next-preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}
    />

    <SectionNote icon={<HelpCircle className="h-4 w-4" aria-hidden="true" />}>
      {formatInline(content.question)}
    </SectionNote>

    <div>
      <h3 className="text-xxsm uppercase tracking-wider font-mono text-[var(--term-muted)] mb-sm">
        {`// ${content.previewTitle}`}
      </h3>
      <FlowStepsGrid steps={content.items.map(toFlowStep)} columns={4} />
    </div>
  </section>
);
