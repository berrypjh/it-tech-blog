import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementOwnerDevInfoContent } from '../content';
import { LayersIcon, SparklesIcon, WorkflowIcon } from '../icons';

type Props = { content: ReactElementOwnerDevInfoContent['debug'] };

const iconMap = {
  stack: LayersIcon,
  task: WorkflowIcon,
} as const;

export const DebugMetaInfoCards = ({ content }: Props) => (
  <section aria-labelledby="heading-debug" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="debug"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <code
              className={cn(
                'font-mono text-md font-bold tracking-tight',
                toneTokens[card.tone].text,
              )}
            >
              {card.field}
            </code>

            <p className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
              {card.short}
            </p>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<SparklesIcon className="h-4 w-4" />}>{content.summary}</SectionNote>
  </section>
);
