import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { CreateFiberFromElementContent, MappingRow } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  InspectIcon,
  KeyRoundIcon,
  ListTreeIcon,
  PackageIcon,
} from '../icons';

type Props = { content: CreateFiberFromElementContent['mapping'] };

const iconMap = {
  inspect: InspectIcon,
  key: KeyRoundIcon,
  package: PackageIcon,
} as const;

export const ElementFieldMapping = ({ content }: Props) => (
  <section id="mapping" aria-labelledby="heading-mapping" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="mapping"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListTreeIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ul className="flex flex-col gap-md">
        {content.rows.map((row) => (
          <li key={row.id}>
            <Row row={row} />
          </li>
        ))}
      </ul>
    </article>
  </section>
);

const Row = ({ row }: { row: MappingRow }) => {
  const Icon = iconMap[row.iconName];
  return (
    <div
      className={cn(
        'grid items-stretch min-w-0',
        'grid-cols-1 sm:grid-cols-[minmax(0,_220px)_auto_minmax(0,_1fr)]',
        'gap-sm sm:gap-md',
      )}
    >
      {/* Field card */}
      <div
        className={cn(
          'flex items-center justify-center rounded-xl border-2 px-md py-sm min-h-[68px]',
          'border-sky-300/80 bg-sky-50',
          'dark:border-sky-700/70 dark:bg-sky-950/40',
        )}
      >
        <code className="font-mono text-sm font-bold tracking-tight text-sky-800 dark:text-sky-200 break-all text-center">
          {row.field}
        </code>
      </div>

      {/* Arrow */}
      <div
        aria-hidden="true"
        className="flex items-center justify-center text-sky-600 dark:text-sky-300"
      >
        <span className="contents">
          <ArrowDownIcon className="h-5 w-5 sm:hidden" />
          <ArrowRightIcon className="h-5 w-5 hidden sm:block" />
        </span>
      </div>

      {/* Description card */}
      <article
        className={cn(
          'group flex items-start gap-sm rounded-xl border p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
          'transition-all hover:-translate-y-0.5 hover:border-sky-300/80 dark:hover:border-sky-700/60',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-lg border shrink-0',
            'border-sky-200/80 bg-white text-sky-700',
            'dark:border-sky-700/60 dark:bg-[var(--term-bg)] dark:text-sky-200',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {row.title}
          </h3>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {row.description}
          </p>
        </div>
      </article>
    </div>
  );
};
