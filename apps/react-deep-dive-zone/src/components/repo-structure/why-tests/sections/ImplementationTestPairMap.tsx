import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { FilePair, TestCodeContent } from '../content';
import { ArrowLeftRightIcon, CodeIcon, FlaskIcon } from '../icons';

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
  const accentText = isImpl ? 'text-sky-600 dark:text-sky-300' : 'text-[var(--term-accent)]';
  const tintClass =
    'bg-[var(--term-surface)] border-[var(--term-border)] hover:border-[var(--term-accent)]';
  const iconClass = cn('bg-[var(--term-surface)] border-[var(--term-border)]', accentText);
  const labelTextClass = accentText;

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
