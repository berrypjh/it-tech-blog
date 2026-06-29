import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BeforeMutationContent, PipelineFunction } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CodeIcon,
  EyeIcon,
  FileCodeIcon,
  FlagIcon,
  PackageOpenIcon,
} from '../icons';

type Props = { content: BeforeMutationContent['checkpoint'] };

export const BeforeMutationCodeCheckpointSection = ({ content }: Props) => (
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

    {/* Top: info card + code panel + callout */}
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.6fr)] gap-3">
      <CheckpointInfoCard
        rows={[
          {
            label: content.info.fileLabel,
            icon: FileCodeIcon,
            value: <PathList items={content.info.filePaths} />,
          },
          {
            label: content.info.watchLabel,
            icon: PackageOpenIcon,
            value: <PathList items={content.info.watchItems} />,
          },
        ]}
        question={content.info.question}
      />
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1.4fr)_minmax(0,_0.6fr)] gap-3 min-w-0">
        <CodeCard code={content.code} />
        <SnapshotCallout callout={content.snapshotCallout} />
      </div>
    </div>

    {/* Bottom: pipeline */}
    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="mb-md flex items-center justify-between gap-2">
        <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)]">
          {content.pipelineTitle}
        </h3>
        <span
          className={cn(
            'text-[10px] font-mono uppercase tracking-wider rounded-md border px-2 py-0.5',
            toneTokens.teal.chip,
          )}
        >
          current step
        </span>
      </header>
      <PipelineRail items={content.pipeline} />
    </article>
  </section>
);

const PathList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-1">
    {items.map((v) => (
      <li key={v}>
        <code className="block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-1 text-xsm font-mono font-bold text-[var(--term-fg)] break-all">
          {v}
        </code>
      </li>
    ))}
  </ul>
);

const CodeCard = ({ code }: { code: BeforeMutationContent['checkpoint']['code'] }) => (
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

const SnapshotCallout = ({
  callout,
}: {
  callout: BeforeMutationContent['checkpoint']['snapshotCallout'];
}) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="teal" size="sm">
          <FlagIcon className="h-4 w-4" />
        </ToneIconBox>
        <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', t.fill.text)}>
          {callout.title}
        </h3>
      </header>
      <ul className="flex flex-col gap-1.5">
        {callout.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep"
          >
            <span
              aria-hidden="true"
              className={cn('mt-1.5 inline-block h-1 w-1 rounded-full shrink-0', t.dot)}
            />
            <code className="font-mono">{item}</code>
          </li>
        ))}
      </ul>
    </article>
  );
};

const PipelineRail = ({ items }: { items: PipelineFunction[] }) => (
  <ol className="flex flex-col md:flex-row md:flex-wrap md:items-stretch gap-2">
    {items.map((item, idx) => (
      <Fragment key={item.name}>
        <li className="flex-1 min-w-0 md:min-w-[180px]">
          <PipelinePill item={item} />
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

const PipelinePill = ({ item }: { item: PipelineFunction }) => {
  const t = toneTokens[item.tone];
  return (
    <article
      className={cn(
        'relative flex h-full flex-col gap-1 rounded-lg border bg-[var(--term-bg)] p-sm',
        item.active ? cn('border-2', t.fill.border, t.fill.bg) : t.border,
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      {item.active && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute -top-2 left-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
            'text-[9px] font-mono uppercase tracking-wider font-bold',
            t.fill.bg,
            t.fill.border,
            t.fill.text,
          )}
        >
          <EyeIcon className="h-2.5 w-2.5" />
          active
        </span>
      )}
      <code
        className={cn(
          'text-[11px] sm:text-xsm font-bold font-mono break-all',
          item.active ? t.fill.text : t.text,
        )}
      >
        {item.name}
      </code>
      <span className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {item.description}
      </span>
    </article>
  );
};
