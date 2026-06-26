import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SharedContent } from '../content';
import { sharedIcon, SparklesIcon } from '../icons';

type Props = { content: SharedContent['files'] };

export const FilesSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-files" className="space-y-md">
      <SectionHeader
        id="files"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
        {content.cards.map((card) => {
          const Icon = sharedIcon[card.iconName];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" />}
              topRight={
                <span
                  className={cn(
                    'inline-flex items-center justify-center w-7 h-7 rounded-md font-mono font-bold text-sm',
                    'bg-[var(--term-surface)] border border-[var(--term-border)]',
                    toneTokens[card.tone].text,
                  )}
                >
                  {card.badge}
                </span>
              }
            >
              <h3
                className={cn(
                  'text-sm font-bold font-mono tracking-tight truncate',
                  toneTokens[card.tone].text,
                )}
              >
                {card.fileName}
              </h3>

              <p className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold">
                {card.title}
              </p>

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
