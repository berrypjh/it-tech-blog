import { cx } from '@berrypjh/react-ui';
import { FileText, Star } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RepoOverviewContent } from '../content';

type Props = { content: RepoOverviewContent['rootFiles'] };

export const RootFilesSummary = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-root-files" className="space-y-lg">
      <SectionHeader
        id="root-files"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileText className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {content.cards.map((card) => (
          <ToneCardItem
            key={card.id}
            tone={card.tone}
            icon={<FileText className="h-5 w-5" aria-hidden="true" />}
            badge={card.badge}
          >
            <h3
              className={cx(
                'text-md sm:text-lg font-bold tracking-tight font-mono',
                toneTokens[card.tone].text,
              )}
            >
              {card.name}
            </h3>

            <p className="text-sm font-bold text-[var(--term-fg)] break-keep">
              {card.shortDescription}
            </p>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.longDescription}
            </p>
          </ToneCardItem>
        ))}
      </ul>

      <SectionNote icon={<Star className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};
