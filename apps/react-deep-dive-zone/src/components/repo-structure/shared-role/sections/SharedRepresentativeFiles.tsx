import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SharedContent } from '../content';
import { FileCodeIcon, iconByName } from '../icons';

type Props = { content: SharedContent['files'] };

export const SharedRepresentativeFiles = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-files" className="space-y-lg">
      <SectionHeader
        id="files"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" />}
              badge={<code className="font-mono break-all">{card.codeLabel}</code>}
            >
              <header className="flex flex-col gap-0.5">
                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold font-mono tracking-tight break-all',
                    toneTokens[card.tone].text,
                  )}
                >
                  {card.title}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
                  {card.subtitle}
                </p>
              </header>

              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>
    </section>
  );
};
