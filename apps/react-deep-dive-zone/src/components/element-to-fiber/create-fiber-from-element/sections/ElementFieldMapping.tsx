import { cn } from '@it-tech-blog/utils';

import { MappingRowCard } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CreateFiberFromElementContent, MappingRow } from '../content';
import { ArrowRightIcon, InspectIcon, KeyRoundIcon, ListTreeIcon, PackageIcon } from '../icons';

type Props = { content: CreateFiberFromElementContent['mapping'] };

const iconMap = {
  inspect: InspectIcon,
  key: KeyRoundIcon,
  package: PackageIcon,
} as const;

export const ElementFieldMapping = ({ content }: Props) => (
  <section id="mapping" aria-labelledby="heading-mapping" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="mapping"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListTreeIcon className="h-5 w-5" />}
    />

    <ul className="flex flex-col gap-md">
      {content.rows.map((row) => (
        <li key={row.id}>
          <Row row={row} />
        </li>
      ))}
    </ul>
  </section>
);

const Row = ({ row }: { row: MappingRow }) => {
  const Icon = iconMap[row.iconName];
  return (
    <MappingRowCard
      columns="md:grid-cols-[minmax(0,220px)_auto_minmax(0,1fr)]"
      arrow={
        <>
          <ArrowRightIcon className="h-4 w-4 hidden md:block" />
          <ArrowRightIcon className="h-4 w-4 md:hidden rotate-90" />
        </>
      }
      left={
        <code
          className={cn(
            'inline-flex w-fit items-center rounded-md border px-2 py-1',
            'font-mono text-sm font-bold tracking-tight break-all',
            toneTokens.sky.chip,
          )}
        >
          {row.field}
        </code>
      }
      right={
        <div className="flex items-start gap-sm min-w-0">
          <ToneIconBox tone="sky" size="sm">
            <Icon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
              {row.title}
            </h3>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {row.description}
            </p>
          </div>
        </div>
      }
    />
  );
};
