import { cx } from '@berrypjh/react-ui';
import { Braces, Eye, Lightbulb, type LucideIcon, Puzzle, TreePine } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { JsxIsNotHtmlContent, ValueCard } from '../content';

type Props = { content: JsxIsNotHtmlContent['uiFit'] };

const cardIcon: Record<ValueCard['id'], LucideIcon> = {
  structure: Eye,
  'js-combine': Braces,
  'component-model': Puzzle,
  'tree-shape': TreePine,
};

export const JsxUiFitSection = ({ content }: Props) => (
  <section id="uifit" aria-labelledby="heading-uifit" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="uifit"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Lightbulb className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.id];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cx(
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
