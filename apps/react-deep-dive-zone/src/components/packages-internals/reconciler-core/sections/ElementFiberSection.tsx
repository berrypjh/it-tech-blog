import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { FiberTreeGraphic } from '../components/FiberTreeGraphic';
import { FieldCard } from '../components/FieldCard';
import { JsxExampleCard } from '../components/JsxExampleCard';
import type { ReconcilerContent } from '../content';
import { MapIcon, StarIcon } from '../icons';

type Props = { content: ReconcilerContent['elementFiber'] };

export const ElementFiberSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-element-fiber" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="element-fiber"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        <JsxExampleCard title="JSX 예시" code={content.jsxCode} />
        <FieldCard
          title={content.elementTitle}
          subtitle={content.elementSubtitle}
          fields={content.elementFields}
          iconName="layers"
          tone="violet"
        />
        <FieldCard
          title={content.fiberTitle}
          subtitle={content.fiberSubtitle}
          fields={content.fiberFields}
          iconName="cube"
          tone="teal"
          emphasized
        />
        <FiberTreeGraphic title={content.treeTitle} description={content.treeDescription} />
      </div>

      <SectionNote icon={<StarIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};
