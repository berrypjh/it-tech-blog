import { cx } from '@berrypjh/react-ui';
import { Layers, type LucideIcon, Sparkles, Workflow } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DebugCard, ReactElementOwnerDevInfoContent } from '../content';

type Props = { content: ReactElementOwnerDevInfoContent['debug'] };

const cardIcon: Record<DebugCard['id'], LucideIcon> = {
  _debugStack: Layers,
  _debugTask: Workflow,
};

export const DebugMetaInfoCards = ({ content }: Props) => (
  <section aria-labelledby="heading-debug" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="debug"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.id];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <code
              className={cx(
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

    <SectionNote icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
      {content.summary}
    </SectionNote>
  </section>
);
