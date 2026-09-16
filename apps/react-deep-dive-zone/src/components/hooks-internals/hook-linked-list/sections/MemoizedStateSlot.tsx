import { Layers, Lightbulb } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { HookLinkedListContent } from '../content';

type Props = { content: HookLinkedListContent['slot'] };

export const MemoizedStateSlot = ({ content }: Props) => (
  <section id="slot" aria-labelledby="heading-slot" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="slot"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <CodePreviewPanel header={content.codeHeader} badge="main" code={content.code} />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
