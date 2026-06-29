import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CodeCallout, PerformUnitContent } from '../content';
import { CodeIcon, FileCodeIcon } from '../icons';

type Props = { content: PerformUnitContent['code'] };

export const PerformUnitCodeCheckpoint = ({ content }: Props) => (
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
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          {content.callouts.map((callout) => (
            <li key={callout.number} className="flex h-full">
              <Callout callout={callout} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const Callout = ({ callout }: { callout: CodeCallout }) => {
  const t = toneTokens[callout.tone];
  return (
    <article
      className={cn(
        'flex w-full flex-col gap-1.5 rounded-lg border p-md',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
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
          callout
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-md border font-mono font-bold text-xsm tabular-nums',
            t.chip,
          )}
        >
          {callout.number}
        </span>
      </header>
      <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
        {callout.title}
      </h4>
      <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {callout.description}
      </p>
    </article>
  );
};
