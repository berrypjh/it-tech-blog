import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { EagerBailoutContent } from '../content';
import { FileCodeIcon, SearchIcon } from '../icons';

type Props = { content: EagerBailoutContent['checkpoint'] };

export const EagerBailoutCodeCheckpoint = ({ content }: Props) => (
  <section id="section-checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md">
    <SectionHeader
      id="checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
      <CheckpointInfoCard
        rows={[
          {
            label: content.fileLabel,
            value: <code className="font-mono break-all">{content.filePath}</code>,
            icon: FileCodeIcon,
          },
          {
            label: content.focusLabel,
            value: <span className="font-medium">{content.focusText}</span>,
            icon: SearchIcon,
          },
        ]}
        question={content.learningQuestion}
      />

      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel
          header={content.codeHeader}
          badge={content.codeBadge}
          caption={content.codeCaption}
          code={content.code}
        />

        <GithubButton href={content.primaryHref} label={content.primaryCta} />
      </div>
    </div>
  </section>
);
