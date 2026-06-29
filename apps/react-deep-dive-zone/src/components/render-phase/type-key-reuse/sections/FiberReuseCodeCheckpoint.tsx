import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { CodeCallout, TypeKeyReuseContent } from '../content';
import { facetFor } from '../facets';
import { CodeIcon, FileCodeIcon } from '../icons';

type Props = { content: TypeKeyReuseContent['code'] };

export const FiberReuseCodeCheckpoint = ({ content }: Props) => (
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
            label: content.pointsLabel,
            value: (
              <ul className="flex flex-col gap-1">
                {content.points.map((p) => (
                  <li key={p}>{p}</li>
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
        <ol className="flex flex-col gap-2">
          {content.callouts.map((callout) => (
            <li key={callout.number} className="flex">
              <Callout callout={callout} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const Callout = ({ callout }: { callout: CodeCallout }) => {
  const t = facetFor(callout.tone);
  return (
    <article
      className={cn(
        'flex w-full items-start gap-3 rounded-lg border p-md',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border font-mono font-bold text-xsm tabular-nums',
          t.chip,
        )}
      >
        {callout.number}
      </span>
      <p className={cn('text-xsm sm:text-sm leading-snug font-bold break-keep', t.text)}>
        {callout.body}
      </p>
    </article>
  );
};
