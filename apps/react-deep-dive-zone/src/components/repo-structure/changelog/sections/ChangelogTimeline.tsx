import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { Timeline } from '../../../shared/timeline';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ChangelogContent } from '../content';
import { BookOpenIcon, StarIcon } from '../icons';

type Props = { content: ChangelogContent['timeline'] };

const toneCycle: ToneKey[] = ['amber', 'sky', 'violet'];

export const ChangelogTimeline = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-timeline" className="space-y-lg">
      <SectionHeader
        id="timeline"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<BookOpenIcon className="h-5 w-5" />}
      />

      <Timeline
        entries={content.items.map((item, idx) => {
          const toneKey = toneCycle[idx % toneCycle.length];
          return {
            id: item.id,
            tone: toneKey,
            body: (
              <div className="flex flex-col gap-1">
                <h3
                  className={cn(
                    'text-md sm:text-lg font-bold tracking-tight leading-none',
                    toneTokens[toneKey].text,
                  )}
                >
                  {item.version}
                </h3>
                <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep">
                  {formatInline(item.description)}
                </p>
              </div>
            ),
          };
        })}
      />

      <SectionNote icon={<StarIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};
