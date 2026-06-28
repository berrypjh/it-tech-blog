import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CurrentWipAlternateContent } from '../content';
import { BracesIcon, EyeIcon, FileCodeIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['checkpoint'] };

export const AlternateCodeCheckpoint = ({ content }: Props) => {
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
              label: info.fileLabel,
              value: <code className="font-mono break-all">{info.file}</code>,
              icon: FileCodeIcon,
            },
            {
              label: info.functionLabel,
              value: (
                <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                  {info.functionName}
                </code>
              ),
              icon: BracesIcon,
            },
            {
              label: info.lookForLabel,
              value: (
                <ul className="flex flex-col gap-0.5">
                  {info.lookForLines.map((line) => (
                    <li key={line} className="font-mono text-xsm break-all">
                      {line}
                    </li>
                  ))}
                </ul>
              ),
              icon: EyeIcon,
            },
          ]}
          question={info.question}
        />

        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel
            header={info.file}
            badge="main"
            code={content.code.content}
            language="js"
          />

          <ul className="flex flex-wrap gap-2">
            {content.annotations.map((annotation) => (
              <li key={annotation.label}>
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-bold tracking-tight',
                    toneTokens[annotation.tone].chip,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-block h-1 w-1 rounded-full',
                      toneTokens[annotation.tone].dot,
                    )}
                  />
                  {annotation.label}
                </span>
              </li>
            ))}
          </ul>

          <GithubButton href={info.buttonHref} label={info.buttonLabel} />
        </div>
      </div>
    </section>
  );
};
