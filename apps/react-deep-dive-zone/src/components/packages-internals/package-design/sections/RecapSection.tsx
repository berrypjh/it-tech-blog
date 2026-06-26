import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PackageDesignContent } from '../content';
import { pdIcon, SparklesIcon } from '../icons';

type Props = { content: PackageDesignContent['recap'] };

export const RecapSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-recap" className="space-y-md">
      <SectionHeader
        id="recap"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = pdIcon[card.iconName];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" />}
              className={
                card.emphasized
                  ? 'border-[var(--term-accent)] lg:shadow-[0_3px_0_var(--term-border)]'
                  : undefined
              }
            >
              <h3
                className={cn(
                  'text-sm font-bold font-mono tracking-tight',
                  toneTokens[card.tone].text,
                )}
              >
                {card.name}
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono">
                {card.role}
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ul>
    </section>
  );
};
