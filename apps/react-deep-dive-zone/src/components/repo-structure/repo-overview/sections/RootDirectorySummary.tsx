import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RepoOverviewContent } from '../content';
import { directoryIconByName, FolderIcon } from '../icons';

type Props = { content: RepoOverviewContent['directory'] };

export const RootDirectorySummary = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-directory" className="space-y-lg">
      <SectionHeader
        id="directory"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FolderIcon className="h-5 w-5" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = directoryIconByName[card.icon] ?? FolderIcon;

          return (
            <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
              <h3
                className={cn(
                  'text-md sm:text-lg font-bold tracking-tight font-mono',
                  toneTokens[card.tone].text,
                )}
              >
                {card.name}
              </h3>

              <p className="text-sm font-bold text-[var(--term-fg)] break-keep">{card.title}</p>

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
