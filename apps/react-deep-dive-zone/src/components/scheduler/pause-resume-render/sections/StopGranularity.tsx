import { cx } from '@berrypjh/react-ui';
import { Lightbulb, Lock, type LucideIcon, Scissors, Split, Zap } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { GranularityId, PauseResumeContent } from '../content';

type Props = { content: PauseResumeContent['granularity'] };

const itemIcon: Record<GranularityId, LucideIcon> = {
  unit: Scissors,
  commit: Lock,
  sync: Zap,
};

export const StopGranularity = ({ content }: Props) => (
  <section
    id="granularity"
    aria-labelledby="heading-granularity"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="granularity"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((item) => {
        const Icon = itemIcon[item.id];
        return (
          <ToneCardItem
            key={item.id}
            tone={item.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={item.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[item.tone].text,
                )}
              >
                {item.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {item.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
