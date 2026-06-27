import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ReactElementOwnerDevInfoContent } from '../content';
import { CodeIcon, FileTextIcon } from '../icons';

type Props = { content: ReactElementOwnerDevInfoContent['checkpoint'] };

export const OwnerDevSourceCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
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
          {
            label: content.fileLabel,
            value: <code className="font-mono break-all">{content.filePath}</code>,
            icon: FileTextIcon,
          },
          {
            label: content.pointsLabel,
            value: (
              <ul className="flex flex-wrap gap-1.5">
                {content.points.map((point) => (
                  <li key={point}>
                    <code className="inline-flex items-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[11px] font-mono text-[var(--term-fg)]">
                      {point}
                    </code>
                  </li>
                ))}
              </ul>
            ),
            icon: CodeIcon,
          },
        ]}
        question={content.question}
      />

      {/* 우측 코드 패널 + 버튼 */}
      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel
          header={content.filePath}
          caption="ReactJSXElement.js"
          code={content.code}
        />

        <GithubButton href={content.primaryHref} label={content.primaryCta} />
      </div>
    </div>
  </section>
);
