import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { FiberTreeGraphic } from '../components/FiberTreeGraphic';
import { FieldCard } from '../components/FieldCard';
import { JsxExampleCard } from '../components/JsxExampleCard';
import type { ReconcilerContent } from '../content';
import { MapIcon, StarIcon } from '../icons';

type Props = { content: ReconcilerContent['elementFiber']; sectionId: string };

export const ElementFiberSection = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-element-fiber"
      className="space-y-md scroll-mt-2xl"
    >
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

      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-[var(--term-accent)]">
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};
