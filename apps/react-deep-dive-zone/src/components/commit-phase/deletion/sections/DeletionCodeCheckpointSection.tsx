import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { DeletionContent } from '../content';
import { CodeIcon, FileCodeIcon, PackageOpenIcon } from '../icons';

type Props = { content: DeletionContent['checkpoint'] };

export const DeletionCodeCheckpointSection = ({ content }: Props) => (
  <section
    id="code-checkpoint"
    aria-labelledby="heading-code-checkpoint"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="code-checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.6fr)] gap-3">
      <CheckpointInfoCard
        rows={[
          {
            label: content.info.fileLabel,
            icon: FileCodeIcon,
            value: <PathList items={content.info.filePaths} mono />,
          },
          {
            label: content.info.watchLabel,
            icon: PackageOpenIcon,
            value: <PathList items={content.info.watchItems} />,
          },
        ]}
        question={content.info.question}
      />
      <div className="flex flex-col gap-3 min-w-0">
        <CodeCard code={content.code} />
        <FileLabelsRow title={content.fileLabelsTitle} labels={content.fileLabels} />
      </div>
    </div>
  </section>
);

const PathList = ({ items, mono }: { items: string[]; mono?: boolean }) => (
  <ul className="flex flex-col gap-1">
    {items.map((v) => (
      <li key={v}>
        <code
          className={cn(
            'block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-1 text-xsm text-[var(--term-fg)] break-all',
            mono && 'font-mono font-bold',
          )}
        >
          {v}
        </code>
      </li>
    ))}
  </ul>
);

const CodeCard = ({ code }: { code: DeletionContent['checkpoint']['code'] }) => (
  <article className="flex flex-col gap-2 min-w-0">
    <header className="flex items-center justify-between gap-2 px-1">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] font-mono break-keep">
        {code.title}
      </h3>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        ts
      </span>
    </header>
    <div className="min-w-0">
      <CodePreviewPanel code={code.code} language="ts" />
    </div>
  </article>
);

const FileLabelsRow = ({
  title,
  labels,
}: {
  title: string;
  labels: DeletionContent['checkpoint']['fileLabels'];
}) => (
  <div className="flex flex-col gap-2 rounded-lg border border-dashed border-[var(--term-border)] bg-[var(--term-surface)] p-md">
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
      {title}
    </span>
    <ul className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <li key={label.name}>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-mono font-bold',
              toneTokens[label.tone].chip,
            )}
          >
            <FileCodeIcon aria-hidden="true" className="h-3.5 w-3.5" />
            {label.name}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
