import { cx } from '@berrypjh/react-ui';
import { Database, FileText, Flag, Layers, type LucideIcon, SquareDashed } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnqueueConcurrentHookUpdateContent, FourElementIcon } from '../content';

const elementIconByName: Record<FourElementIcon, LucideIcon> = {
  squareDashed: SquareDashed,
  database: Database,
  fileText: FileText,
  flag: Flag,
};

type Props = { content: EnqueueConcurrentHookUpdateContent['elements'] };

export const FourElementsSection = ({ content }: Props) => (
  <section id="elements" aria-labelledby="heading-elements" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="elements"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.cards.map((card) => {
        const Icon = elementIconByName[card.icon];
        const t = toneTokens[card.tone];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cx(
                'text-md sm:text-lg font-bold font-mono tracking-tight break-keep',
                t.text,
              )}
            >
              {card.title}
            </h3>

            <p className={cx('text-xsm font-bold leading-snug break-keep', t.text)}>
              {card.question}
            </p>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>
  </section>
);
