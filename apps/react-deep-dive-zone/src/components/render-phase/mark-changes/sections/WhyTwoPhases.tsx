import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { MarkChangesContent } from '../content';
import { ClockIcon, GaugeIcon, ShieldIcon, SparklesIcon, TargetIcon } from '../icons';

type Props = { content: MarkChangesContent['whyTwoPhases'] };

const reasonIconMap = {
  shield: ShieldIcon,
  target: TargetIcon,
  clock: ClockIcon,
  gauge: GaugeIcon,
} as const;

export const WhyTwoPhases = ({ content }: Props) => (
  <section
    id="why-two-phases"
    aria-labelledby="heading-why-two-phases"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="why-two-phases"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
      {content.reasons.map((reason, idx) => {
        const tone = reason.tone as ToneKey;
        const Icon = reasonIconMap[reason.iconName];
        return (
          <ToneCardItem
            key={reason.title}
            tone={tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={idx + 1}
          >
            <h3
              className={cn('text-md font-bold tracking-tight break-keep', toneTokens[tone].text)}
            >
              {reason.title}
            </h3>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {reason.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
