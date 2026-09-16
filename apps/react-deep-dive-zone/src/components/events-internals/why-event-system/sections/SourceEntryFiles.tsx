import { cx } from '@berrypjh/react-ui';
import { FileCode, Lightbulb, type LucideIcon, Package, Radio, Sprout } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EntryFileId, WhyEventSystemContent } from '../content';

type Props = { content: WhyEventSystemContent['entryFiles'] };

const fileIcon: Record<EntryFileId, LucideIcon> = {
  root: Sprout,
  listener: Radio,
  plugin: Package,
};

export const SourceEntryFiles = ({ content }: Props) => (
  <section
    id="entry-files"
    aria-labelledby="heading-entry-files"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="entry-files"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<FileCode className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.files.map((file) => {
        const Icon = fileIcon[file.id];
        return (
          <ToneCardItem
            key={file.id}
            tone={file.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={file.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-sm font-bold tracking-tight break-all',
                  toneTokens[file.tone].text,
                )}
              >
                {file.fileName}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {file.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
