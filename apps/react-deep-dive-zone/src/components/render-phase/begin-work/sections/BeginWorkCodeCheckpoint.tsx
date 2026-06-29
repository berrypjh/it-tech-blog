import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { BeginWorkContent } from '../content';
import { CodeIcon, FileCodeIcon } from '../icons';

type Props = { content: BeginWorkContent['code'] };

export const BeginWorkCodeCheckpoint = ({ content }: Props) => (
  <section
    id="source-checkpoint"
    aria-labelledby="heading-source-checkpoint"
    className="space-y-md"
  >
    <SectionHeader
      id="source-checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
      <CheckpointInfoCard
        rows={[
          {
            label: content.fileLabel,
            value: <code className="font-mono break-all">{content.fileName}</code>,
            icon: FileCodeIcon,
          },
          {
            label: content.functionsLabel,
            value: (
              <ul className="flex flex-col gap-1.5">
                {content.functions.map((fn) => (
                  <li key={fn}>
                    <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                      {fn}
                    </code>
                  </li>
                ))}
              </ul>
            ),
            icon: CodeIcon,
          },
        ]}
        question={content.learningQuestion}
      />

      <div className="min-w-0">
        <CodePreviewPanel
          header={content.codeHeader}
          badge={content.codeBadge}
          code={content.code}
        />
      </div>
    </div>
  </section>
);
