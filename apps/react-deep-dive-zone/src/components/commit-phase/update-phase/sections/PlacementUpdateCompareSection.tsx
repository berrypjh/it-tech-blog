import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, GitCompareArrows } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { SummaryItem, UpdatePhaseContent } from '../content';

type Props = { content: UpdatePhaseContent['compare'] };

export const PlacementUpdateCompareSection = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompareArrows className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_0.7fr)] gap-3">
      <ComparisonTable
        caption={content.title}
        headers={[content.columns.label, content.columns.placement, content.columns.update]}
        columnWidths={['22%', '39%', '39%']}
        rows={content.rows.map((row) => ({
          label: row.label,
          cells: [
            <ToneCell key="p" value={row.placement} tone="violet" />,
            <ToneCell key="u" value={row.update} tone="sky" />,
          ],
        }))}
      />
      <QuickSummary title={content.quickSummaryTitle} items={content.quickSummary} />
    </div>
  </section>
);

const ToneCell = ({ value, tone }: { value: string | string[]; tone: ToneKey }) => {
  const t = toneTokens[tone];
  const items = Array.isArray(value) ? value : [value];
  return (
    <ul className="flex flex-col gap-0.5">
      {items.map((item) => (
        <li
          key={item}
          className={cx('flex items-start gap-1.5 leading-snug break-keep', t.fill.text)}
        >
          <span
            aria-hidden="true"
            className={cx('mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const QuickSummary = ({ title, items }: { title: string; items: SummaryItem[] }) => {
  const card = toneTokens.sky;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        card.fill.border,
        card.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="sky" size="sm">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cx('text-sm sm:text-md font-bold', card.fill.text)}>{title}</h3>
      </header>

      <ol className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.text}>
            <SummaryRow item={item} />
          </li>
        ))}
      </ol>
    </article>
  );
};

const SummaryRow = ({ item }: { item: SummaryItem }) => {
  const t = toneTokens[item.tone];
  return (
    <div className="flex items-start gap-2">
      <span
        aria-hidden="true"
        className={cx(
          'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border',
          t.chip,
        )}
      >
        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep">
          {item.text}
        </span>
        <span className={cx('text-[10px] font-mono lowercase tracking-wider', t.text)}>
          {item.emphasis}
        </span>
      </div>
    </div>
  );
};
