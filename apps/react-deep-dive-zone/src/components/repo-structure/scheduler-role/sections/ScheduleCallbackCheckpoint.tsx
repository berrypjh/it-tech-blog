import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { SchedulerContent } from '../content';
import { CodeIcon, FileCodeIcon, InfoIcon } from '../icons';

type Props = { content: SchedulerContent['checkpoint'] };

export const ScheduleCallbackCheckpoint = ({ content }: Props) => (
  <section aria-labelledby="heading-checkpoint" className="space-y-md">
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
            label: content.functionLabel,
            value: (
              <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                {content.functionName}
              </code>
            ),
            icon: CodeIcon,
          },
          {
            label: content.descriptionLabel,
            value: <span>{content.descriptionValue}</span>,
            icon: InfoIcon,
          },
        ]}
        question={content.learningQuestion}
      />

      {/* 우측 코드 패널 + 버튼 */}
      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel
          header={content.codeHeader}
          badge={content.codeBadge}
          code={content.code}
          language="js"
        />

        <GithubButton href={content.primaryHref} label={content.primaryCta} />
      </div>
    </div>
  </section>
);
