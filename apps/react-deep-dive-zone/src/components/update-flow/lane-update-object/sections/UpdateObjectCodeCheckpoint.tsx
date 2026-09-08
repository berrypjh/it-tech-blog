import { FileCode, FunctionSquare } from 'lucide-react';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { LaneUpdateObjectContent } from '../content';

type Props = { content: LaneUpdateObjectContent['checkpoint'] };

export const UpdateObjectCodeCheckpoint = ({ content }: Props) => (
  <section id="section-checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md">
    <SectionHeader
      id="checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCode className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
      <CheckpointInfoCard
        rows={[
          {
            label: content.fileLabel,
            value: <code className="font-mono break-all">{content.filePath}</code>,
            icon: FileCode,
          },
          {
            label: content.functionLabel,
            value: (
              <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                {content.functionName}
              </code>
            ),
            icon: FunctionSquare,
          },
        ]}
        question={content.learningQuestion}
      />

      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel
          header={content.codeHeader}
          badge={content.codeBadge}
          code={content.code}
        />

        <GithubButton href={content.primaryHref} label={content.primaryCta} />
      </div>
    </div>
  </section>
);
