import { cn } from '@it-tech-blog/utils';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { ReactElementObjectStructureContent } from '../content';
import { SparklesIcon, TableIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['compare'] };

export const PlainObjectComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-compare-plain" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare-plain"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TableIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.headers.aspect, content.headers.plain, content.headers.element]}
      columnWidths={['22%', '39%', '39%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [formatInline(row.plain), formatInline(row.element)],
      }))}
    />

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);
