import { Boxes, Layers, Map, Star } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { FiberTreeGraphic } from '../components/FiberTreeGraphic';
import { FieldCard } from '../components/FieldCard';
import { JsxExampleCard } from '../components/JsxExampleCard';
import type { ReconcilerContent } from '../content';

type Props = { content: ReconcilerContent['elementFiber'] };

export const ElementFiberSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-element-fiber" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="element-fiber"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Map className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        <JsxExampleCard title={content.jsxTitle} code={content.jsxCode} />
        <FieldCard
          title={content.elementTitle}
          subtitle={content.elementSubtitle}
          fields={content.elementFields}
          icon={Layers}
          tone="violet"
        />
        <FieldCard
          title={content.fiberTitle}
          subtitle={content.fiberSubtitle}
          fields={content.fiberFields}
          icon={Boxes}
          tone="teal"
          emphasized
        />
        <FiberTreeGraphic title={content.treeTitle} description={content.treeDescription} />
      </div>

      <SectionNote icon={<Star className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};
