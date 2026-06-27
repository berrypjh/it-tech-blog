import { cn } from '@it-tech-blog/utils';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { ReactElementSummaryBeforeFiberContent } from '../content';
import { StarIcon, TableIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['compare'] };

export const JsxElementFiberDomComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TableIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.aspectLabel, ...content.columns.map((col) => col.label)]}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: content.columns.map((col) => formatInline(row.values[col.id])),
      }))}
    />

    <div
      className={cn(
        'flex items-center gap-sm rounded-2xl px-md py-md',
        'border border-[var(--term-border)] bg-[var(--term-surface)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
      >
        <StarIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);
