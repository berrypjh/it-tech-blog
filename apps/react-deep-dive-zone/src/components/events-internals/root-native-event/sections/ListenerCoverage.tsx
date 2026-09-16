import { cx } from '@berrypjh/react-ui';
import {
  FileInput,
  Focus,
  Keyboard,
  Lightbulb,
  type LucideIcon,
  MousePointer,
  Pointer,
  Radio,
  SendHorizontal,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ListenerGroupId, RootNativeEventContent } from '../content';

type Props = { content: RootNativeEventContent['coverage'] };

const groupIcon: Record<ListenerGroupId, LucideIcon> = {
  mouse: MousePointer,
  pointer: Pointer,
  keyboard: Keyboard,
  input: FileInput,
  focus: Focus,
  form: SendHorizontal,
};

export const ListenerCoverage = ({ content }: Props) => (
  <section id="coverage" aria-labelledby="heading-coverage" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="coverage"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Radio className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-md items-stretch">
      {content.groups.map((group) => {
        const Icon = groupIcon[group.id];
        return (
          <ToneCardItem key={group.id} tone={group.tone} icon={<Icon className="h-5 w-5" />}>
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[group.tone].text,
                )}
              >
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.events.map((name) => (
                  <li key={name}>
                    <code className="inline-block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--term-fg)]">
                      {name}
                    </code>
                  </li>
                ))}
              </ul>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
