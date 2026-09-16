import { cx } from '@berrypjh/react-ui';
import { Download, type LucideIcon, Radio, Sparkles, Zap } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ApiId, React19HooksContent } from '../content';

type Props = { content: React19HooksContent['apis'] };

const apiIcon: Record<ApiId, LucideIcon> = {
  use: Download,
  'action-state': Zap,
  optimistic: Sparkles,
  'effect-event': Radio,
};

export const NewApiCards = ({ content }: Props) => (
  <section id="apis" aria-labelledby="heading-apis" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="apis"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.cards.map((card) => {
        const Icon = apiIcon[card.id];
        return (
          <ToneCardItem
            key={card.id}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={card.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-sm font-bold tracking-tight break-all',
                  toneTokens[card.tone].text,
                )}
              >
                {card.name}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
              <code className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10px] text-[var(--term-fg)] [overflow-wrap:anywhere]">
                {card.signature}
              </code>
            </div>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
