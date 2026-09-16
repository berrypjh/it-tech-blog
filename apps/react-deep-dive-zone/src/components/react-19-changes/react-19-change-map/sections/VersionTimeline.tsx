import { cx } from '@berrypjh/react-ui';
import { Lightbulb, Milestone } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { Timeline, type TimelineEntry } from '../../../shared/timeline';
import { ToneBadge } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { React19ChangeMapContent } from '../content';

type Props = { content: React19ChangeMapContent['versions'] };

export const VersionTimeline = ({ content }: Props) => {
  const entries: TimelineEntry[] = content.entries.map((entry) => ({
    id: entry.id,
    tone: entry.tone,
    body: (
      <div className="flex flex-col gap-sm min-w-0">
        <div className="flex flex-wrap items-baseline gap-sm">
          <code
            className={cx(
              'font-mono text-md sm:text-lg font-bold tracking-tight',
              toneTokens[entry.tone].text,
            )}
          >
            {entry.version}
          </code>
          <span className="font-mono text-xxsm tabular-nums text-[var(--term-muted)]">
            {entry.date}
          </span>
        </div>

        <p className="text-sm font-bold text-[var(--term-fg)] break-keep">{entry.meaning}</p>
        <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
          {entry.description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-sm border-t border-dashed border-[var(--term-border)]">
          {entry.tags.map((tag) => (
            <li key={tag}>
              <ToneBadge tone={entry.tone}>{tag}</ToneBadge>
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <section id="versions" aria-labelledby="heading-versions" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="versions"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Milestone className="h-5 w-5" aria-hidden="true" />}
      />

      <Timeline entries={entries} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
