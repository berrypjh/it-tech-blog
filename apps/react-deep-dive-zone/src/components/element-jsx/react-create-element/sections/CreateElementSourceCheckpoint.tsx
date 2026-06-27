import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ReactCreateElementContent } from '../content';
import { CodeIcon, FileTextIcon } from '../icons';

type Props = { content: ReactCreateElementContent['checkpoint'] };

export const CreateElementSourceCheckpoint = ({ content }: Props) => {
  const fileInfo = content.infos.find((info) => info.id === 'file');
  const functionInfo = content.infos.find((info) => info.id === 'function');
  const questionInfo = content.infos.find((info) => info.id === 'question');

  return (
    <section
      id="checkpoint"
      aria-labelledby="heading-checkpoint"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        id="checkpoint"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        <CheckpointInfoCard
          rows={[
            ...(fileInfo
              ? [
                  {
                    label: fileInfo.label,
                    value: <code className="font-mono break-all">{fileInfo.value}</code>,
                    icon: FileTextIcon,
                  },
                ]
              : []),
            ...(functionInfo
              ? [
                  {
                    label: functionInfo.label,
                    value: (
                      <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                        {functionInfo.value}
                      </code>
                    ),
                    icon: CodeIcon,
                  },
                ]
              : []),
          ]}
          question={questionInfo?.value ?? ''}
        />

        {/* 우측 코드 패널 + 버튼 */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel
            header={fileInfo?.value}
            caption="ReactJSXElement.js"
            code={content.code}
          />

          <GithubButton href={content.primaryHref} label={content.primaryCta} />
        </div>
      </div>
    </section>
  );
};
