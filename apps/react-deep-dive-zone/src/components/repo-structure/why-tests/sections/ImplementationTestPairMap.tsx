import { cn } from '@it-tech-blog/utils';

import { MappingRowCard } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { TestCodeContent } from '../content';
import { ArrowLeftRightIcon } from '../icons';

type Props = { content: TestCodeContent['pairMap'] };

export const ImplementationTestPairMap = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-pair" className="space-y-lg">
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
            <MappingRowCard
              arrow={
                <>
                  <ArrowLeftRightIcon className="h-4 w-4 hidden md:block" />
                  <ArrowLeftRightIcon className="h-4 w-4 md:hidden rotate-90" />
                </>
              }
              left={
                <FileColumn
                  label={content.implementationLabel}
                  name={row.implementation.name}
                  description={row.implementation.description}
                  tone={toneTokens.sky.text}
                />
              }
              right={
                <FileColumn
                  label={content.testLabel}
                  name={row.test.name}
                  description={row.test.description}
                  tone="text-[var(--term-accent)]"
                />
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

type FileColumnProps = { label: string; name: string; description: string; tone: string };

const FileColumn = ({ label, name, description, tone }: FileColumnProps) => (
  <div className="flex flex-col gap-1.5">
    <span className={cn('text-[10px] uppercase tracking-wider', tone)}>{label}</span>
    <code className="inline-flex w-fit items-center px-2 py-1 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-xsm sm:text-sm font-mono font-bold text-[var(--term-fg)] break-all">
      {name}
    </code>
    <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">{description}</p>
  </div>
);
