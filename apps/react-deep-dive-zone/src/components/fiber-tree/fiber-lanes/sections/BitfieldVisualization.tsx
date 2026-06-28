import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { laneStyle } from '../components/laneTone';
import type { BitfieldRow, FiberLanesContent } from '../content';
import { ArrowRightIcon, BinaryIcon, LightbulbIcon } from '../icons';

type Props = { content: FiberLanesContent['bitfield'] };

export const BitfieldVisualization = ({ content }: Props) => (
  <section id="bitfield" aria-labelledby="heading-bitfield" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="bitfield"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BinaryIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ul className="flex flex-col gap-2 font-mono">
        {content.rows.map((row) => (
          <li key={row.lane}>
            <BitfieldRowItem row={row} />
          </li>
        ))}
      </ul>
    </div>

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.description}</SectionNote>
  </section>
);

const BitfieldRowItem = ({ row }: { row: BitfieldRow }) => {
  const t = laneStyle(row.tone);
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-[var(--term-surface)]">
      <code
        className={cn('whitespace-pre tracking-wider text-[13px] sm:text-sm font-bold', t.text)}
      >
        {row.bits}
      </code>
      <ArrowRightIcon aria-hidden="true" className="h-4 w-4 text-[var(--term-muted)]" />
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xsm font-bold',
          t.chip,
        )}
      >
        <span aria-hidden="true" className={cn('inline-block h-1 w-1 rounded-full', t.dot)} />
        {row.lane}
      </span>
    </div>
  );
};
