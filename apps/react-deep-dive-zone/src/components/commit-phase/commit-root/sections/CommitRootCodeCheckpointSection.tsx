import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CommitRootContent, PipelineFunction } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CodeIcon, FileCodeIcon, PackageOpenIcon } from '../icons';

type Props = { content: CommitRootContent['checkpoint'] };

const chipCode =
  'inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono font-bold text-[var(--term-fg)]';

export const CommitRootCodeCheckpointSection = ({ content }: Props) => (
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

    {/* Top: info + code panel */}
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-3">
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
      <CodeCard code={content.code} />
    </div>

    {/* Bottom: pipeline pills */}
    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="mb-md flex items-center justify-between gap-2">
        <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)]">
          {content.pipelineTitle}
        </h3>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
          pipeline
        </span>
      </header>

      <PipelineRail items={content.pipeline} />
    </article>
  </section>
);

const CodeCard = ({ code }: { code: CommitRootContent['checkpoint']['code'] }) => (
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

const PipelineRail = ({ items }: { items: PipelineFunction[] }) => (
  <ol className="flex flex-col md:flex-row md:flex-wrap md:items-stretch gap-2">
    {items.map((item, idx) => (
      <Fragment key={item.name}>
        <li className="flex-1 min-w-0 md:min-w-[180px]">
          <PipelineCard item={item} />
        </li>
        {idx < items.length - 1 && (
          <li
            aria-hidden="true"
            className="flex items-center justify-center text-[var(--term-dim)]"
          >
            <ArrowRightIcon className="h-4 w-4 hidden md:inline-block" />
            <ArrowDownIcon className="h-4 w-4 md:hidden" />
          </li>
        )}
      </Fragment>
    ))}
  </ol>
);

const PipelineCard = ({ item }: { item: PipelineFunction }) => {
  const t = toneTokens[item.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-lg border bg-[var(--term-bg)] p-sm',
        t.border,
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <code className={cn('text-[11px] sm:text-xsm font-bold font-mono break-all', t.text)}>
        {item.name}
      </code>
      <span className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {item.description}
      </span>
    </article>
  );
};
