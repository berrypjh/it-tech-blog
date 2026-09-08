import { cn } from '@it-tech-blog/utils';

import { Clock, Gauge, type LucideIcon, Shield, Sparkles, Target } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { MarkChangesContent, ReasonCard } from '../content';

const reasonIconByName: Record<ReasonCard['icon'], LucideIcon> = {
  shield: Shield,
  target: Target,
  clock: Clock,
  gauge: Gauge,
} as const;

type Props = { content: MarkChangesContent['whyTwoPhases'] };

export const WhyTwoPhases = ({ content }: Props) => (
  <section id="why-two-phases" aria-labelledby="heading-why-two-phases" className="space-y-md">
    <SectionHeader
      id="why-two-phases"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.reasons.map((reason, idx) => {
        const Icon = reasonIconByName[reason.icon];
        return (
          <ToneCardItem
            key={reason.title}
            tone={reason.tone}
            icon={<Icon className={cn('h-5 w-5', toneTokens[reason.tone].text)} />}
            topRight={idx + 1}
          >
            <h3
              className={cn(
                'text-md font-bold tracking-tight break-keep',
                toneTokens[reason.tone].text,
              )}
            >
              {reason.title}
            </h3>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {reason.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>
  </section>
);
