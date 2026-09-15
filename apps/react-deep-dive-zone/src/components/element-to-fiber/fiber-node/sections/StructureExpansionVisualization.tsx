import { cx } from '@berrypjh/react-ui';
import { Workflow } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ExpansionDiagram } from '../components/ExpansionDiagram';
import type { FiberStoredInformationContent } from '../content';

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
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <article
      className={cx(
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
