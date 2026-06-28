import { cn } from '@it-tech-blog/utils';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { EffectBadge } from '../components/EffectBadge';
import { effectText } from '../components/effectStyles';
import type { EffectKind, FiberFlagsContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: FiberFlagsContent['simulation'] };

const flagLabel: Record<EffectKind, string> = {
  placement: 'Placement',
  update: 'Update',
  childDeletion: 'ChildDeletion',
};

const CodeCell = ({ code }: { code: string }) => (
  <pre className="overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[11px] leading-snug text-[var(--term-fg)]">
    {code}
  </pre>
);

export const ChangeSimulationSection = ({ content }: Props) => (
  <section id="simulation" aria-labelledby="heading-simulation" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="simulation"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[
        content.columns.situation,
        content.columns.before,
        content.columns.after,
        content.columns.change,
        content.columns.result,
      ]}
      columnWidths={['16%', '19%', '19%', '19%', '27%']}
      rows={content.rows.map((row) => ({
        label: row.situation,
        cells: [
          <CodeCell key="before" code={row.before} />,
          <CodeCell key="after" code={row.after} />,
          row.change,
          <div key="result" className="flex flex-col gap-1">
            <EffectBadge effect={row.resultFlag}>{flagLabel[row.resultFlag]}</EffectBadge>
            <span
              className={cn('text-[11.5px] leading-snug break-keep', effectText[row.resultFlag])}
            >
              {row.resultDescription}
            </span>
          </div>,
        ],
      }))}
    />
  </section>
);
