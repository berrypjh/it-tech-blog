import { cx } from '@berrypjh/react-ui';
import { BookOpen, Star } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { Timeline } from '../../../shared/timeline';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ChangelogContent } from '../content';

type Props = { content: ChangelogContent['timeline'] };

const toneCycle: ToneKey[] = ['amber', 'sky', 'violet'];

export const ChangelogTimeline = ({ content }: Props) => {
  return (
    <section id="timeline" aria-labelledby="heading-timeline" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="timeline"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
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
                  className={cx(
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

      <SectionNote icon={<Star className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};
