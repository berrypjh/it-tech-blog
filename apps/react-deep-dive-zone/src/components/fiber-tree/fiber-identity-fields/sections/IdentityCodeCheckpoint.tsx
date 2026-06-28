import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberIdentityFieldsContent } from '../content';
import { EyeIcon, FileCodeIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['checkpoint'] };

export const IdentityCodeCheckpoint = ({ content }: Props) => {
  const { info } = content;
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
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        <CheckpointInfoCard
          rows={[
            {
              label: info.filesLabel,
              value: (
                <ul className="flex flex-col gap-0.5">
                  {info.files.map((file) => (
                    <li key={file} className="font-mono break-all">
                      {file}
                    </li>
                  ))}
                </ul>
              ),
              icon: FileCodeIcon,
            },
            {
              label: info.lookForLabel,
              value: (
                <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                  {info.lookFor}
                </code>
              ),
              icon: EyeIcon,
            },
          ]}
          question={info.question}
        />

        <div className="flex flex-col gap-md min-w-0">
          {content.blocks.map((block, i) => (
            <div key={block.fileName} className="flex flex-col gap-md min-w-0">
              <CodePreviewPanel
                header={info.files[i]}
                badge="main"
                code={block.content}
                language={block.language}
              />
              <span
                className={cn(
                  'inline-flex w-fit items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-bold tracking-tight',
                  toneTokens[block.annotationTone].chip,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-block h-1 w-1 rounded-full',
                    toneTokens[block.annotationTone].dot,
                  )}
                />
                {block.annotationLabel}
              </span>
              <GithubButton href={block.href} label={block.cta} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
