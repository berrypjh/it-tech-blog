import { cn } from '@it-tech-blog/utils';

import { ArrowRight, Lightbulb } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberStoredInformationContent } from '../content';

type Props = { content: FiberStoredInformationContent['mapping'] };

export const ElementFiberMappingTable = ({ content }: Props) => (
  <section id="mapping" aria-labelledby="heading-mapping" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="mapping"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.headers.element, content.headers.description, content.headers.fiber]}
      columnWidths={['24%', '40%', '36%']}
      rows={content.rows.map((row) => ({
        label: (
          <code className={cn('font-mono font-bold break-all', toneTokens.emerald.text)}>
            {row.element}
          </code>
        ),
        cells: [
          row.description,
          <span key="fiber" className="flex items-center gap-2">
            <ArrowRight
              className="h-3.5 w-3.5 shrink-0 text-[var(--term-muted)]"
              aria-hidden="true"
            />
            <code className={cn('font-mono font-bold break-all', toneTokens.violet.text)}>
              {row.fiber}
            </code>
          </span>,
        ],
      }))}
    />

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.note}
    </SectionNote>
  </section>
);
