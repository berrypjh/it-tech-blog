import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CheckpointCallout, EnqueueConcurrentHookUpdateContent } from '../content';
import { FileCodeIcon, FunctionSquareIcon } from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['checkpoint'] };

export const CodeCheckpointSection = ({ content }: Props) => (
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
            label: content.functionLabel,
            value: (
              <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                {content.functionName}
              </code>
            ),
            icon: FunctionSquareIcon,
          },
        ]}
        question={content.learningQuestion}
      />

      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel
          header={content.codeHeader}
          badge={content.codeBadge}
          code={content.code}
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          {content.callouts.map((callout) => (
            <CalloutCard key={callout.number} callout={callout} />
          ))}
        </ul>

        <GithubButton href={content.primaryHref} label={content.primaryCta} />
      </div>
    </div>
  </section>
);

const CalloutCard = ({ callout }: { callout: CheckpointCallout }) => {
  const t = toneTokens[callout.tone];
  return (
    <li
      className={cn(
        'flex gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono font-bold text-sm',
          t.chip,
        )}
      >
        {callout.number}
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
          {callout.title}
        </h4>
        <p className="text-xxsm leading-snug text-[var(--term-muted)] break-keep">{callout.body}</p>
        <span
          className={cn(
            'mt-0.5 inline-flex w-fit items-center rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          line {callout.linkedLine}
        </span>
      </div>
    </li>
  );
};
