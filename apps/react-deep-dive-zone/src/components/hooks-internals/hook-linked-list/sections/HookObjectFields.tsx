import { cx } from '@berrypjh/react-ui';
import {
  Anchor,
  Box,
  Clock,
  Database,
  Lightbulb,
  Link2,
  ListPlus,
  type LucideIcon,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HookFieldId, HookLinkedListContent } from '../content';

type Props = { content: HookLinkedListContent['fields'] };

const fieldIcon: Record<HookFieldId, LucideIcon> = {
  memoized: Database,
  'base-state': Anchor,
  'base-queue': Clock,
  queue: ListPlus,
  next: Link2,
};

export const HookObjectFields = ({ content }: Props) => (
  <section id="fields" aria-labelledby="heading-fields" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="fields"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Box className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-md items-stretch">
      {content.fields.map((field) => {
        const Icon = fieldIcon[field.id];
        return (
          <ToneCardItem
            key={field.id}
            tone={field.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={field.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-sm font-bold tracking-tight break-all',
                  toneTokens[field.tone].text,
                )}
              >
                {field.name}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {field.detail}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
