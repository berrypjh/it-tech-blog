import { Code2, FileCode } from 'lucide-react';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { PackagesDirectoryContent } from '../content';

type Props = { content: PackagesDirectoryContent['checkpoint'] };

export const ReactClientCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Code2 className="h-5 w-5" aria-hidden="true" />}
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
            label: content.seeLabel,
            value: (
              <ul className="flex flex-wrap gap-1.5">
                {content.seeItems.map((item) => (
                  <li key={item}>
                    <code className="inline-flex items-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[11px] font-mono text-[var(--term-fg)]">
                      {item}
                    </code>
                  </li>
                ))}
              </ul>
            ),
            icon: Code2,
          },
        ]}
      />

      {/* 우측 코드 패널 + 버튼 */}
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
