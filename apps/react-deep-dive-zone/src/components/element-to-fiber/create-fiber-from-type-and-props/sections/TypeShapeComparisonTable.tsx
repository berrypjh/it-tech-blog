import { cn } from '@it-tech-blog/utils';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CreateFiberFromTypeAndPropsContent } from '../content';
import { LayersIcon } from '../icons';

type Props = { content: CreateFiberFromTypeAndPropsContent['comparison'] };

export const TypeShapeComparisonTable = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={`${content.title} — type 형태별 분기 비교`}
      headers={[
        content.headers.shape,
        content.headers.jsx,
        content.headers.typeValue,
        content.headers.condition,
        content.headers.fiber,
        content.headers.note,
      ]}
      columnWidths={['16%', '17%', '17%', '17%', '17%', '16%']}
      rows={content.rows.map((row) => {
        const a = toneTokens[row.accent];
        return {
          label: (
            <span className={cn('inline-flex items-center gap-1.5 font-mono', a.text)}>
              <span
                aria-hidden="true"
                className={cn('inline-block w-1.5 h-1.5 rounded-full', a.dot)}
              />
              {row.shape}
            </span>
          ),
          cells: [
            <code
              key="jsx"
              className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all"
            >
              {row.exampleJsx}
            </code>,
            <code key="type" className="font-mono text-xsm text-[var(--term-fg)] break-all">
              {row.typeValue}
            </code>,
            <code key="cond" className="font-mono text-xsm text-[var(--term-fg)] break-all">
              {row.condition}
            </code>,
            <span
              key="fiber"
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
                a.chip,
              )}
            >
              {row.fiber}
            </span>,
            row.note,
          ],
        };
      })}
    />
  </section>
);
