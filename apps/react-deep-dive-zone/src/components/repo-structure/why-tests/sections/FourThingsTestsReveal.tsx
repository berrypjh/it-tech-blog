import { cx } from '@berrypjh/react-ui';
import { type LucideIcon, RefreshCw, Search, ShieldCheck, Sparkles, Target } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { InsightCard, TestCodeContent } from '../content';

const cardIcon: Record<InsightCard['id'], LucideIcon> = {
  input: Target,
  must: ShieldCheck,
  edge: Search,
  compat: RefreshCw,
};

type Props = { content: TestCodeContent['insights'] };

export const FourThingsTestsReveal = ({ content }: Props) => {
  return (
    <section id="insights" aria-labelledby="heading-insights" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="insights"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = cardIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              topRight={card.number}
            >
              <h3
                className={cx(
                  'text-md sm:text-lg font-bold tracking-tight break-keep whitespace-pre-line',
                  toneTokens[card.tone].text,
                )}
              >
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>
    </section>
  );
};
