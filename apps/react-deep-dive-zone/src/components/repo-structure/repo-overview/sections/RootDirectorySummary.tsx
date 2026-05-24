import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneBadge } from '../../../getting-started/_shared/ToneBadge';
import { ToneCard } from '../../../getting-started/_shared/ToneCard';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { RepoOverviewContent } from '../content';
import { directoryIconByName, FolderIcon } from '../icons';

type Props = { content: RepoOverviewContent['directory']; sectionId?: string };

export const RootDirectorySummary = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-directory" className="space-y-md scroll-mt-24">
      <SectionHeader
        id="directory"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FolderIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = directoryIconByName[card.icon] ?? FolderIcon;
          const tone = toneTokens[card.tone];

          return (
            <li key={card.id}>
              <ToneCard tone={card.tone}>
                <header className="flex items-center justify-between gap-sm">
                  <div className="flex items-center gap-sm min-w-0">
                    <ToneIconBox tone={card.tone} size="sm">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </ToneIconBox>
                    <span className={cn('text-md font-bold tracking-tight font-mono', tone.text)}>
                      {card.name}
                    </span>
                  </div>
                  <ToneBadge tone={card.tone}>{card.priority}</ToneBadge>
                </header>

                <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
                  {card.title}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.description}
                </p>
              </ToneCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
