import { cx } from '@berrypjh/react-ui';
import {
  AlertTriangle,
  CheckCircle2,
  GitFork,
  Lightbulb,
  type LucideIcon,
  Timer,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { StatusId, UseSuspenseErrorModelContent } from '../content';

type Props = { content: UseSuspenseErrorModelContent['branches'] };

const cardIcon: Record<StatusId, LucideIcon> = {
  pending: Timer,
  fulfilled: CheckCircle2,
  rejected: AlertTriangle,
};

export const ThreeOutcomeCards = ({ content }: Props) => (
  <section id="branches" aria-labelledby="heading-branches" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="branches"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitFork className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.cards.map((card) => {
        const Icon = cardIcon[card.id];
        return (
          <ToneCardItem
            key={card.id}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={card.outcome}
          >
            <div className="flex min-w-0 flex-col gap-2">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[card.tone].text,
                )}
              >
                {card.title}
              </h3>
              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                {card.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
