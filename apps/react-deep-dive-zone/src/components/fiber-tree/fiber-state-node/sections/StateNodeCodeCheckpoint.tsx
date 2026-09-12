import { cn } from '@it-tech-blog/utils';

import { Eye, FileCode } from 'lucide-react';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberStateNodeContent } from '../content';

type Props = { content: FiberStateNodeContent['checkpoint'] };

export const StateNodeCodeCheckpoint = ({ content }: Props) => {
  const { info } = content;
  return (
    <section
      id="checkpoint"
      aria-labelledby="heading-checkpoint"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        id="checkpoint"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileCode className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        <CheckpointInfoCard
          rows={[
            {
              label: info.filesLabel,
              value: <code className="font-mono break-all">{info.file}</code>,
              icon: FileCode,
            },
            {
              label: info.lookForLabel,
              value: (
                <ul className="flex flex-wrap gap-1.5">
                  {info.lookForLines.map((line) => (
                    <li key={line}>
                      <code className="inline-flex items-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[11px] font-mono text-[var(--term-fg)]">
                        {line}
                      </code>
                    </li>
                  ))}
                </ul>
              ),
              icon: Eye,
            },
          ]}
          question={info.question}
        />

        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel
            header={info.file}
            badge="main"
            code={content.code.content}
            language={content.code.language}
          />

          <ul className="flex flex-wrap gap-2">
            {content.code.annotations.map((annotation) => (
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
