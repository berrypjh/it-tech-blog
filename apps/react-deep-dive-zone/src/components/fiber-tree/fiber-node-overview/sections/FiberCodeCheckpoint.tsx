import { Eye, FileCode } from 'lucide-react';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberNodeOverviewContent } from '../content';

type Props = { content: FiberNodeOverviewContent['checkpoint'] };

export const FiberCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="checkpoint"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
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
            label: content.lookForLabel,
            value: (
              <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                {content.lookForValue}
              </code>
            ),
            icon: Eye,
          },
        ]}
      />

      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel
          header={content.codeHeader}
          badge={content.codeBadge}
          code={content.code}
          language="ts"
        />

        <GithubButton href={content.primaryHref} label={content.primaryCta} />
      </div>
    </div>
  </section>
);
