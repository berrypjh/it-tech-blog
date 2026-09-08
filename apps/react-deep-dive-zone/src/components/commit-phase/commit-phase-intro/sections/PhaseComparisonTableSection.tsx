import { cn } from '@it-tech-blog/utils';

import { CheckCircle2, ListChecks, X } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitPhaseIntroContent } from '../content';

type Props = { content: CommitPhaseIntroContent['comparison'] };

export const PhaseComparisonTableSection = ({ content }: Props) => (
  <section
    id="phase-comparison"
    aria-labelledby="heading-phase-comparison"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="phase-comparison"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.columns.label, content.columns.render, content.columns.commit]}
      columnWidths={['18%', '41%', '41%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [
          <ToneCell
            key="render"
            value={row.render}
            tone="sky"
            emphasis={row.emphasis}
            icon={<X className="h-3.5 w-3.5" aria-hidden="true" />}
          />,
          <ToneCell
            key="commit"
            value={row.commit}
            tone="teal"
            emphasis={row.emphasis}
            icon={<CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
          />,
        ],
      }))}
    />
  </section>
);

type ToneCellProps = {
  value: string | string[];
  tone: ToneKey;
  emphasis?: boolean;
  icon: React.ReactNode;
};

const ToneCell = ({ value, tone, emphasis, icon }: ToneCellProps) => {
  const t = toneTokens[tone];
  const items = Array.isArray(value) ? value : [value];

  if (emphasis) {
    return (
      <div className="flex items-start gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          {icon}
        </span>
        <span className={cn('flex flex-col gap-0.5 font-bold', t.fill.text)}>
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
      </div>
    );
  }

  if (Array.isArray(value)) {
    return (
      <ul className="flex flex-col gap-1">
        {value.map((item) => (
          <li key={item} className="flex items-start gap-1.5">
            <span
              aria-hidden="true"
              className={cn('mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <span>{value}</span>;
};
