import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { JsxIsNotHtmlContent } from '../content';
import { BracesIcon, EyeIcon, LightbulbIcon, PuzzleIcon, TreeIcon } from '../icons';

type Props = { content: JsxIsNotHtmlContent['uiFit'] };

const iconMap = {
  eye: EyeIcon,
  braces: BracesIcon,
  puzzle: PuzzleIcon,
  tree: TreeIcon,
} as const;

export const JsxUiFitSection = ({ content }: Props) => (
  <section aria-labelledby="heading-uifit" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="uifit"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LightbulbIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-md font-bold tracking-tight break-keep',
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
