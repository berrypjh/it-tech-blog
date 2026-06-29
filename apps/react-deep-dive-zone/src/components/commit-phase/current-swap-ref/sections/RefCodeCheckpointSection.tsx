import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CodeBlock, RootCurrentRefContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CodeIcon, FileCodeIcon, PackageOpenIcon } from '../icons';

type Props = { content: RootCurrentRefContent['checkpoint'] };

export const RefCodeCheckpointSection = ({ content }: Props) => (
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

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.65fr)_minmax(0,_1.75fr)] gap-3">
      <CheckpointInfoCard
        rows={[
          {
            label: content.info.fileLabel,
            icon: FileCodeIcon,
            value: <PathList items={content.info.filePaths} mono />,
          },
          {
            label: content.info.watchLabel,
            icon: PackageOpenIcon,
            value: <PathList items={content.info.watchItems} />,
          },
        ]}
        question={content.info.question}
      />
      <PanelArea title={content.panelTitle} blocks={content.blocks} />
    </div>
  </section>
);

const PathList = ({ items, mono }: { items: string[]; mono?: boolean }) => (
  <ul className="flex flex-col gap-1">
    {items.map((v) => (
      <li key={v}>
        <code
          className={cn(
            'block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-1 text-xsm text-[var(--term-fg)] break-all',
            mono && 'font-mono font-bold',
          )}
        >
          {v}
        </code>
      </li>
    ))}
  </ul>
);

const PanelArea = ({ title, blocks }: { title: string; blocks: CodeBlock[] }) => (
  <div className="flex flex-col gap-3 min-w-0">
    <header className="flex items-center justify-between gap-2 px-1">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] font-mono break-keep">
        {title}
      </h3>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        3-step pipeline
      </span>
    </header>

    {/* Desktop: 3 columns */}
    <div className="hidden xl:grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-2 items-stretch">
      {blocks.map((block, idx) => (
        <Fragment key={block.title}>
          <CodeBlockCard block={block} />
          {idx < blocks.length - 1 && (
            <div
              aria-hidden="true"
              className="flex items-center justify-center text-[var(--term-dim)]"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </div>
          )}
        </Fragment>
      ))}
    </div>

    {/* Tablet / mobile: vertical */}
    <ol className="xl:hidden flex flex-col">
      {blocks.map((block, idx) => (
        <li key={block.title} className="flex flex-col">
          <CodeBlockCard block={block} />
          {idx < blocks.length - 1 && (
            <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
              <ArrowDownIcon className="h-4 w-4" />
            </span>
          )}
        </li>
      ))}
    </ol>
  </div>
);

const CodeBlockCard = ({ block }: { block: CodeBlock }) => {
  const t = toneTokens[block.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-sm',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2 px-1">
        <h4 className={cn('text-xsm font-bold leading-tight break-keep', t.fill.text)}>
          {block.title}
        </h4>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {block.phase}
        </span>
      </header>
      <div className="min-w-0">
        <CodePreviewPanel code={block.code} language="ts" />
      </div>
    </article>
  );
};
