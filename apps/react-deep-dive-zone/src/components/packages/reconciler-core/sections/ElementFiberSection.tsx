import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { FiberTreeGraphic } from '../components/FiberTreeGraphic';
import { FieldCard } from '../components/FieldCard';
import { JsxExampleCard } from '../components/JsxExampleCard';
import type { ReconcilerContent } from '../content';
import { ChevronRightIcon, MapIcon, StarIcon } from '../icons';

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

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_auto_minmax(0,_1.1fr)_auto_minmax(0,_1.1fr)_auto_minmax(0,_0.85fr)] gap-md items-stretch">
        <JsxExampleCard title="JSX 예시" code={content.jsxCode} />
        <FlowArrow />
        <FieldCard
          title={content.elementTitle}
          subtitle={content.elementSubtitle}
          fields={content.elementFields}
          iconName="layers"
          tone="violet"
        />
        <FlowArrow />
        <FieldCard
          title={content.fiberTitle}
          subtitle={content.fiberSubtitle}
          fields={content.fiberFields}
          iconName="cube"
          tone="teal"
          emphasized
        />
        <FlowArrow />
        <FiberTreeGraphic title={content.treeTitle} description={content.treeDescription} />
      </div>

      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-sky-300/80 bg-sky-50 text-sky-900',
          'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-sky-600 dark:text-sky-300">
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

const FlowArrow = () => (
  <div className="flex items-center justify-center text-[var(--term-accent)]" aria-hidden="true">
    <span className="hidden lg:inline-flex">
      <ChevronRightIcon className="h-5 w-5" />
    </span>
    <span className="inline-flex lg:hidden text-xl">↓</span>
  </div>
);
