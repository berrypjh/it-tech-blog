import { cn } from '@it-tech-blog/utils';

import { Atom, EyeOff, Info, ShieldCheck, Sparkles, Zap } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CreateFiberFromTypeAndPropsContent } from '../content';

type Props = { content: CreateFiberFromTypeAndPropsContent['special'] };

const iconMap = {
  shield: ShieldCheck,
  eyeoff: EyeOff,
  zap: Zap,
  sparkles: Sparkles,
} as const;

export const SpecialFiberTypes = ({ content }: Props) => (
  <section id="special" aria-labelledby="heading-special" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="special"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Atom className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-sm font-bold tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] font-bold">
                type
              </span>
              <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
                {card.type}
              </code>
            </div>
            <p
              className={cn('font-mono text-xsm font-bold break-keep', toneTokens[card.tone].text)}
            >
              {card.result}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Info className="h-4 w-4" aria-hidden="true" />}>
      {content.bottomNote}
    </SectionNote>
  </section>
);
