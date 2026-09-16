import { cx } from '@berrypjh/react-ui';
import { Boxes, Database, Lightbulb, ListPlus, type LucideIcon, PlayCircle } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HooksRecapContent, StructureId } from '../content';

type Props = { content: HooksRecapContent['structures'] };

const structureIcon: Record<StructureId, LucideIcon> = {
  hook: Database,
  queue: ListPlus,
  effect: PlayCircle,
};

export const CoreStructures = ({ content }: Props) => (
  <section id="structures" aria-labelledby="heading-structures" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="structures"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Boxes className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((item) => {
        const Icon = structureIcon[item.id];
        return (
          <ToneCardItem
            key={item.id}
            tone={item.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={item.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-sm font-bold tracking-tight break-all',
                  toneTokens[item.tone].text,
                )}
              >
                {item.name}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {item.description}
              </p>
              <code className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10px] text-[var(--term-fg)] [overflow-wrap:anywhere]">
                {item.fields}
              </code>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
