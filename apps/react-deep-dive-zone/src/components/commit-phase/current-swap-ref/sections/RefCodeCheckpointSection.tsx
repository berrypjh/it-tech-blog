import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { CodeBlock, RootCurrentRefContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CodeIcon,
  FileCodeIcon,
  HelpCircleIcon,
  PackageOpenIcon,
} from '../icons';

type Props = { content: RootCurrentRefContent['checkpoint'] };

export const RefCodeCheckpointSection = ({ content }: Props) => (
  <section
    id="code-checkpoint"
    aria-labelledby="heading-code-checkpoint"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="code-checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.65fr)_minmax(0,_1.75fr)] gap-3">
      <InfoCard info={content.info} />
      <PanelArea title={content.panelTitle} blocks={content.blocks} />
    </div>
  </section>
);

const InfoCard = ({ info }: { info: RootCurrentRefContent['checkpoint']['info'] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <InfoRow
      label={info.fileLabel}
      icon={<FileCodeIcon className="h-4 w-4" />}
      mono
      values={info.filePaths}
    />
    <InfoRow
      label={info.watchLabel}
      icon={<PackageOpenIcon className="h-4 w-4" />}
      values={info.watchItems}
    />
    <InfoRow
      label={info.questionLabel}
      icon={<HelpCircleIcon className="h-4 w-4" />}
      callout
      values={[info.question]}
    />
  </article>
);

type InfoRowProps = {
  label: string;
  values: string[];
  icon: React.ReactNode;
  mono?: boolean;
  callout?: boolean;
};

const InfoRow = ({ label, values, icon, mono, callout }: InfoRowProps) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-md border',
          'bg-sky-50 text-sky-700 border-sky-200/80',
          'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
        )}
      >
        {icon}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
        {label}
      </span>
    </div>
    {callout ? (
      <p
        className={cn(
          'rounded-xl border-2 p-sm text-xsm sm:text-sm leading-relaxed break-keep',
          'border-sky-200/80 bg-sky-50/70 text-sky-900',
          'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100',
        )}
      >
        {values[0]}
      </p>
    ) : (
      <ul className="flex flex-col gap-1">
        {values.map((v) => (
          <li key={v}>
            <code
              className={cn(
                'block rounded-md border bg-slate-50/60 px-sm py-1 text-xsm text-[var(--term-fg)] break-all',
                'border-[var(--term-border)] dark:bg-slate-900/40',
                mono && 'font-mono font-bold',
              )}
            >
              {v}
            </code>
          </li>
        ))}
      </ul>
    )}
  </div>
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
  const t = commitToneTokens[block.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-sm',
        t.borderStrong,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2 px-1">
        <h4 className={cn('text-xsm font-bold leading-tight break-keep', t.textStrong)}>
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
