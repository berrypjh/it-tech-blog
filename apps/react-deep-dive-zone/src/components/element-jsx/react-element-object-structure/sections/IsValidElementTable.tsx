import { CheckCircle2, ListChecks, XCircle } from 'lucide-react';

import { StatusPill } from '../../../shared/compare';
import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { ReactElementObjectStructureContent } from '../content';

type Props = { content: ReactElementObjectStructureContent['isValid'] };

export const IsValidElementTable = ({ content }: Props) => (
  <section id="is-valid" aria-labelledby="heading-is-valid" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="is-valid"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[
        content.headers.input,
        content.headers.code,
        content.headers.result,
        content.headers.description,
      ]}
      columnWidths={['18%', '34%', '14%', '34%']}
      rows={content.rows.map((row) => ({
        label: (
          <code className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
            {row.input}
          </code>
        ),
        cells: [
          <code
            key="code"
            className="font-mono text-xsm tracking-tight text-[var(--term-muted)] break-all"
          >
            {row.code}
          </code>,
          row.result ? (
            <StatusPill
              key="result"
              icon={<CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
              tone="text-[var(--term-accent)]"
            >
              {content.trueLabel}
            </StatusPill>
          ) : (
            <StatusPill
              key="result"
              icon={<XCircle className="h-3.5 w-3.5" aria-hidden="true" />}
              tone="text-rose-600 dark:text-rose-300"
            >
              {content.falseLabel}
            </StatusPill>
          ),
          formatInline(row.description),
        ],
      }))}
    />
  </section>
);
