import { cx } from '@berrypjh/react-ui';
import { Crosshair, Layers, Lightbulb, ListOrdered, type LucideIcon, Package } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DispatchQueueContent, PartId } from '../content';

type Props = { content: DispatchQueueContent['shape'] };

const partIcon: Record<PartId, LucideIcon> = {
  event: Package,
  listeners: ListOrdered,
  phase: Crosshair,
};

export const QueueEntryShape = ({ content }: Props) => (
  <section id="shape" aria-labelledby="heading-shape" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="shape"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <CodePreviewPanel header={content.codeHeader} badge="main" code={content.code} language="ts" />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.parts.map((part) => {
        const Icon = partIcon[part.id];
        return (
          <ToneCardItem
            key={part.id}
            tone={part.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={part.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-sm font-bold tracking-tight break-all',
                  toneTokens[part.tone].text,
                )}
              >
                {part.name}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {part.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
