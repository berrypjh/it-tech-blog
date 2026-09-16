import { Eye, FileCode, Info } from 'lucide-react';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { RootCurrentRefContent } from '../content';

type Props = { content: RootCurrentRefContent['checkpoint'] };

export const RefCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCode className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
      <CheckpointInfoCard
        rows={[
          {
            label: content.fileLabel,
            value: (
              <ul className="flex flex-col gap-0.5">
                {content.filePaths.map((file) => (
                  <li key={file} className="font-mono break-all">
                    {file}
                  </li>
                ))}
              </ul>
            ),
            icon: FileCode,
          },
          {
            label: content.lookForLabel,
            value: (
              <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                {content.lookFor}
              </code>
            ),
            icon: Eye,
          },
          { label: content.whyLabel, value: content.why, icon: Info },
        ]}
      />

      <div className="flex flex-col gap-md min-w-0">
        {content.blocks.map((block) => (
          <div key={block.filePath} className="flex flex-col gap-md min-w-0">
            <CodePreviewPanel header={block.filePath} badge="main" code={block.code} />
            <GithubButton href={block.primaryHref} label={block.primaryCta} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
