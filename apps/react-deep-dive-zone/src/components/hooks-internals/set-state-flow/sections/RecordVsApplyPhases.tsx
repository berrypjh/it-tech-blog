import { Clock, Lightbulb } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { SetStateFlowContent } from '../content';

type Props = { content: SetStateFlowContent['phases'] };

export const RecordVsApplyPhases = ({ content }: Props) => {
  const [call, render, commit] = content.columns;

  const rows: ComparisonRow[] = [
    {
      label: content.rowLabels.work,
      cells: [call.work, render.work, commit.work],
    },
    {
      label: content.rowLabels.dom,
      cells: [call.dom, render.dom, commit.dom],
    },
    {
      label: content.rowLabels.screen,
      cells: [call.screen, render.screen, commit.screen],
    },
  ];

  return (
    <section id="phases" aria-labelledby="heading-phases" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="phases"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Clock className="h-5 w-5" aria-hidden="true" />}
      />

      <ComparisonTable
        headers={content.headers}
        rows={rows}
        caption={content.title}
        columnWidths={['16%', '28%', '28%', '28%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
