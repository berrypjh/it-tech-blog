import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ExpansionDiagram } from '../components/ExpansionDiagram';
import type { FiberStoredInformationContent } from '../content';
import { WorkflowIcon } from '../icons';

type Props = { content: FiberStoredInformationContent['expansion'] };

export const StructureExpansionVisualization = ({ content }: Props) => (
  <section id="expansion" aria-labelledby="heading-expansion" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="expansion"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ExpansionDiagram
        elementTitle={content.elementTitle}
        elementFields={content.elementFields}
        fiberTitle={content.fiberTitle}
        fiberFields={content.fiberFields}
        size="md"
      />
    </article>
  </section>
);
