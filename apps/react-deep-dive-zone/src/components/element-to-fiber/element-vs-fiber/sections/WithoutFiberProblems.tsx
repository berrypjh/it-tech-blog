import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ElementVsFiberContent } from '../content';
import { AlertTriangleIcon, HelpCircleIcon, LayersIcon, PauseIcon, TargetIcon } from '../icons';

type Props = { content: ElementVsFiberContent['problems'] };

const iconMap = {
  help: HelpCircleIcon,
  pause: PauseIcon,
  target: TargetIcon,
  layers: LayersIcon,
} as const;

export const WithoutFiberProblems = ({ content }: Props) => (
  <section id="problems" aria-labelledby="heading-problems" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="problems"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<AlertTriangleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-xsm sm:text-sm font-bold tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
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
