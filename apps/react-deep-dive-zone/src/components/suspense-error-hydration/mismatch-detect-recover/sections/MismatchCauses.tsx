import { cx } from '@berrypjh/react-ui';
import { Braces, Clock, Dices, Lightbulb, type LucideIcon, Monitor, Search } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CauseId, MismatchDetectRecoverContent } from '../content';

type Props = { content: MismatchDetectRecoverContent['causes'] };

const causeIcon: Record<CauseId, LucideIcon> = {
  date: Clock,
  random: Dices,
  'browser-only': Monitor,
  'invalid-nesting': Braces,
};

export const MismatchCauses = ({ content }: Props) => (
  <section id="causes" aria-labelledby="heading-causes" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="causes"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Search className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.items.map((cause) => {
        const Icon = causeIcon[cause.id];
        return (
          <ToneCardItem
            key={cause.id}
            tone={cause.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={cause.example}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[cause.tone].text,
                )}
              >
                {cause.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {cause.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
