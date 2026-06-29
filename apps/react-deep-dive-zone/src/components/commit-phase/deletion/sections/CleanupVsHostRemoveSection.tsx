import { cn } from '@it-tech-blog/utils';

import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CleanupVsRemoveRow, DeletionContent } from '../content';
import { LightbulbIcon, ListChecksIcon, SprayCanIcon, TrashIcon } from '../icons';

type Props = { content: DeletionContent['cleanupVsRemove'] };

const iconMap: Record<CleanupVsRemoveRow['iconName'], typeof SprayCanIcon> = {
  broom: SprayCanIcon,
  trash: TrashIcon,
};

export const CleanupVsHostRemoveSection = ({ content }: Props) => (
  <section
    id="cleanup-vs-remove"
    aria-labelledby="heading-cleanup-vs-remove"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="cleanup-vs-remove"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_0.7fr)] gap-3">
      <ComparisonTable
        caption={content.title}
        headers={[content.columns.task, content.columns.meaning]}
        columnWidths={['28%', '72%']}
        rows={content.rows.map((row) => ({
          label: <TaskLabel row={row} />,
          cells: [<MeaningList key="m" row={row} />],
        }))}
      />
      <PointCard title={content.pointTitle} text={content.pointText} />
    </div>
  </section>
);

const TaskLabel = ({ row }: { row: CleanupVsRemoveRow }) => {
  const Icon = iconMap[row.iconName];
  const t = toneTokens[row.tone];
  return (
    <div className="flex items-center gap-2">
      <ToneIconBox tone={row.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <code className={cn('text-xsm font-bold font-mono', t.text)}>{row.task}</code>
    </div>
  );
};

const MeaningList = ({ row }: { row: CleanupVsRemoveRow }) => {
  const t = toneTokens[row.tone];
  return (
    <ul className="flex flex-col gap-1">
      {row.meaning.map((line) => (
        <li
          key={line}
          className="flex items-start gap-1.5 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
        >
          <span
            aria-hidden="true"
            className={cn('mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
          />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
};

const PointCard = ({ title, text }: { title: string; text: string }) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="teal">
          <LightbulbIcon className="h-5 w-5" />
        </ToneIconBox>
        <h3 className={cn('text-xsm sm:text-sm font-bold uppercase tracking-wider', t.fill.text)}>
          {title}
        </h3>
      </header>
      <p className={cn('text-sm sm:text-md leading-relaxed font-bold break-keep', t.fill.text)}>
        {text}
      </p>
    </article>
  );
};
