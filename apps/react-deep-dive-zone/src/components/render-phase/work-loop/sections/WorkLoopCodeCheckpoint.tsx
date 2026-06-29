import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CodeCallout, WorkLoopContent } from '../content';
import { CodeIcon, FileCodeIcon } from '../icons';

type Props = { content: WorkLoopContent['code'] };

export const WorkLoopCodeCheckpoint = ({ content }: Props) => (
  <section
    id="source-checkpoint"
    aria-labelledby="heading-source-checkpoint"
    className="space-y-md"
  >
    <SectionHeader
      id="source-checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
      <CheckpointInfoCard
        rows={[
          {
            label: content.fileLabel,
            value: <code className="font-mono break-all">{content.fileName}</code>,
            icon: FileCodeIcon,
          },
          {
            label: content.functionsLabel,
            value: (
              <ul className="flex flex-col gap-1.5">
                {content.functions.map((fn) => (
                  <li key={fn}>
                    <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                      {fn}
                    </code>
                  </li>
                ))}
              </ul>
            ),
            icon: CodeIcon,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <Callout callout={content.callouts.primary} />
          <Callout callout={content.callouts.secondary} />
        </div>
      </div>
    </div>
  </section>
);

const Callout = ({ callout }: { callout: CodeCallout }) => {
  const tone: ToneKey = callout.kind === 'sync' ? 'sky' : 'teal';
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-lg border p-md shadow-[0_1px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {callout.conditionLabel}
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {callout.kind}
        </span>
      </header>
      <p className={cn('text-xsm sm:text-sm leading-snug font-bold break-keep', t.text)}>
        {callout.conditionBody}
      </p>
      <div className="my-1 h-px w-full bg-[var(--term-border)]" aria-hidden="true" />
      <div className="flex items-baseline gap-2">
        <span className={cn('text-xxsm font-mono uppercase tracking-wider', t.text)}>
          {callout.meaningLabel}
        </span>
        <span className="flex-1 text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep">
          {callout.meaningBody}
        </span>
      </div>
    </article>
  );
};
