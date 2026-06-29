import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PlacementContent } from '../content';
import { CodeIcon, FileCodeIcon, ListChecksIcon, PackageOpenIcon } from '../icons';

type Props = { content: PlacementContent['checkpoint'] };

const chipCode =
  'inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]';

export const PlacementCodeCheckpointSection = ({ content }: Props) => (
  <section
    id="code-checkpoint"
    aria-labelledby="heading-code-checkpoint"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="code-checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.6fr)] gap-3">
      <CheckpointInfoCard
        rows={[
          {
            label: content.info.fileLabel,
            icon: FileCodeIcon,
            value: <code className="font-mono break-all">{content.info.filePath}</code>,
          },
          {
            label: content.info.watchLabel,
            icon: PackageOpenIcon,
            value: <code className={chipCode}>{content.info.watchValue}</code>,
          },
        ]}
        question={content.info.question}
      />
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1.55fr)_minmax(0,_0.55fr)] gap-3 min-w-0">
        <CodeCard code={content.code} />
        <CommentsCard title={content.rightCommentsTitle} comments={content.rightComments} />
      </div>
    </div>
  </section>
);

const CodeCard = ({ code }: { code: PlacementContent['checkpoint']['code'] }) => (
  <article className="flex flex-col gap-2 min-w-0">
    <header className="flex items-center justify-between gap-2 px-1">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] font-mono break-keep">
        {code.title}
      </h3>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        ts
      </span>
    </header>
    <div className="min-w-0">
      <CodePreviewPanel code={code.code} language="ts" />
    </div>
  </article>
);

const CommentsCard = ({ title, comments }: { title: string; comments: string[] }) => {
  const t = toneTokens.violet;
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="violet" size="sm">
          <ListChecksIcon className="h-4 w-4" />
        </ToneIconBox>
        <h3 className={cn('text-[10px] font-mono uppercase tracking-wider font-bold', t.text)}>
          {title}
        </h3>
      </header>
      <ol className="flex flex-col gap-1.5">
        {comments.map((c, idx) => (
          <li
            key={c}
            className={cn(
              'flex items-start gap-2 text-xsm sm:text-sm leading-snug break-keep',
              t.fill.text,
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-mono font-bold tabular-nums',
                t.chip,
              )}
            >
              {idx + 1}
            </span>
            <span>{c}</span>
          </li>
        ))}
      </ol>
    </article>
  );
};
