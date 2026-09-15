import { cx } from '@berrypjh/react-ui';
import { Code, FileText, FlaskConical, type LucideIcon, MessageCircle } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PerspectiveCard, WhyOpenSourceContent } from '../content';

const cardIcon: Record<PerspectiveCard['id'], LucideIcon> = {
  docs: FileText,
  code: Code,
  tests: FlaskConical,
  pr: MessageCircle,
};

type Props = { content: WhyOpenSourceContent['perspectives'] };

export const GitHubPerspectiveCards = ({ content }: Props) => {
  return (
    <section
      id="section-perspectives"
      aria-labelledby="heading-perspectives"
      className="space-y-lg"
    >
      <SectionHeader
        id="perspectives"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileText className="h-5 w-5" aria-hidden="true" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = cardIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
            >
              <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                {card.title}
              </h3>

              <p className={cx('text-xsm font-bold', toneTokens[card.tone].text)}>
                {card.subtitle}
              </p>

              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>
    </section>
  );
};
