import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LaneUpdateObjectContent, UpdateFieldIconName } from '../content';
import {
  BracesIcon,
  CrosshairIcon,
  GaugeIcon,
  Link2Icon,
  PackageIcon,
  SparklesIcon,
  UndoIcon,
  ZapIcon,
} from '../icons';

type Props = { content: LaneUpdateObjectContent['fields'] };

const iconMap: Record<UpdateFieldIconName, typeof BracesIcon> = {
  crosshair: CrosshairIcon,
  zap: ZapIcon,
  undo: UndoIcon,
  gauge: GaugeIcon,
  sparkles: SparklesIcon,
  link: Link2Icon,
};

export const UpdateFieldsSection = ({ content }: Props) => (
  <section id="fields" aria-labelledby="heading-fields" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="fields"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<PackageIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem
            key={card.name}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={card.badge}
          >
            <h3
              className={cn(
                'text-md sm:text-lg font-bold font-mono tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.name}
            </h3>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
