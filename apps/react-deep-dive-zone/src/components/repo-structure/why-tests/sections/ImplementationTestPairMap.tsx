import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { FilePair, TestCodeContent } from '../content';
import { ArrowLeftRightIcon, CodeIcon, FlaskIcon, StarIcon } from '../icons';

type Props = { content: TestCodeContent['pairMap'] };

export const ImplementationTestPairMap = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-pair" className="space-y-md">
      <SectionHeader
        id="pair"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ArrowLeftRightIcon className="h-5 w-5" />}
      />

      <ul className="flex flex-col gap-md">
        {content.rows.map((row) => (
          <li key={row.id}>
            <PairRow
              row={row}
              implementationLabel={content.implementationLabel}
              testLabel={content.testLabel}
            />
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'flex items-start gap-sm rounded-lg border px-md py-md',
          'border-emerald-200/80 bg-emerald-50/70 text-emerald-900',
          'dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-100',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0',
            'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
          )}
        >
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md leading-snug font-bold break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

type RowProps = { row: FilePair; implementationLabel: string; testLabel: string };

const PairRow = ({ row, implementationLabel, testLabel }: RowProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-sm items-stretch">
    <FileCard
      label={implementationLabel}
      name={row.implementation.name}
      description={row.implementation.description}
      variant="impl"
    />
    <Connector />
    <FileCard
      label={testLabel}
      name={row.test.name}
      description={row.test.description}
      variant="test"
    />
  </div>
);

const Connector = () => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-full border',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'text-[var(--term-accent)] lg:rotate-0 rotate-90',
      )}
    >
      <ArrowLeftRightIcon className="h-4 w-4" />
    </span>
  </div>
);

type FileCardProps = {
  label: string;
  name: string;
  description: string;
  variant: 'impl' | 'test';
};

const FileCard = ({ label, name, description, variant }: FileCardProps) => {
  const isImpl = variant === 'impl';
  const Icon = isImpl ? CodeIcon : FlaskIcon;
  const tintClass = isImpl
    ? 'bg-blue-50/70 border-blue-300 dark:bg-blue-950/30 dark:border-blue-700/60'
    : 'bg-emerald-50/70 border-emerald-300 dark:bg-emerald-950/30 dark:border-emerald-700/60';
  const iconClass = isImpl
    ? 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-700/60'
    : 'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/60';
  const labelTextClass = isImpl
    ? 'text-blue-700 dark:text-blue-200'
    : 'text-emerald-700 dark:text-emerald-200';

  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border p-md',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tintClass,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-md border shrink-0',
          iconClass,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className={cn('text-[10px] uppercase tracking-wider font-bold', labelTextClass)}>
          {label}
        </span>
        <h3
          className={cn(
            'text-sm sm:text-md font-bold font-mono tracking-tight break-all',
            labelTextClass,
          )}
        >
          {name}
        </h3>
        <p className="text-xsm text-[var(--term-muted)] break-keep">{description}</p>
      </div>
    </article>
  );
};
