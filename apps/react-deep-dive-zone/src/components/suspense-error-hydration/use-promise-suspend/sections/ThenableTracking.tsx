import { cx } from '@berrypjh/react-ui';
import { Bell, Hash, Lightbulb, type LucideIcon, Radar, Tag } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { TrackFactId, UsePromiseSuspendContent } from '../content';

type Props = { content: UsePromiseSuspendContent['tracking'] };

const factIcon: Record<TrackFactId, LucideIcon> = {
  index: Hash,
  status: Tag,
  ping: Bell,
};

export const ThenableTracking = ({ content }: Props) => (
  <section id="tracking" aria-labelledby="heading-tracking" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="tracking"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Radar className="h-5 w-5" aria-hidden="true" />}
    />

    <CodePreviewPanel header={content.codeHeader} badge="main" code={content.code} />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.facts.map((fact) => {
        const Icon = factIcon[fact.id];
        return (
          <ToneCardItem
            key={fact.id}
            tone={fact.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={fact.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[fact.tone].text,
                )}
              >
                {fact.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {fact.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
