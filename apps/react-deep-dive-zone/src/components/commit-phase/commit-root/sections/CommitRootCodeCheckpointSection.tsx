import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { CommitRootContent, PipelineFunction } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CodeIcon,
  FileCodeIcon,
  HelpCircleIcon,
  PackageOpenIcon,
} from '../icons';

type Props = { content: CommitRootContent['checkpoint'] };

export const CommitRootCodeCheckpointSection = ({ content }: Props) => (
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

    {/* Top: info + code panel */}
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-3">
      <InfoCard info={content.info} />
      <CodeCard code={content.code} />
    </div>

    {/* Bottom: pipeline pills */}
    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/20 to-teal-50/20',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-teal-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
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

const InfoCard = ({ info }: { info: CommitRootContent['checkpoint']['info'] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <InfoRow
      label={info.fileLabel}
      value={info.filePath}
      icon={<FileCodeIcon className="h-4 w-4" />}
      mono
    />
    <InfoRow
      label={info.watchLabel}
      value={info.watchValue}
      icon={<PackageOpenIcon className="h-4 w-4" />}
      mono
    />
    <InfoRow
      label={info.questionLabel}
      value={info.question}
      icon={<HelpCircleIcon className="h-4 w-4" />}
      callout
    />
  </article>
);

type InfoRowProps = {
  label: string;
  value: string;
  icon: React.ReactNode;
  mono?: boolean;
  callout?: boolean;
};

const InfoRow = ({ label, value, icon, mono, callout }: InfoRowProps) => (
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
        {value}
      </p>
    ) : (
      <code
        className={cn(
          'rounded-md border bg-slate-50/60 px-sm py-1.5 text-xsm text-[var(--term-fg)] break-all',
          'border-[var(--term-border)] dark:bg-slate-900/40',
          mono && 'font-mono font-bold',
        )}
      >
        {value}
      </code>
    )}
  </div>
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
            <span className="hidden md:inline-block">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
            <span className="md:hidden">
              <ArrowDownIcon className="h-4 w-4" />
            </span>
          </li>
        )}
      </Fragment>
    ))}
  </ol>
);

const PipelineCard = ({ item }: { item: PipelineFunction }) => {
  const t = commitToneTokens[item.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-sm',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-colors hover:bg-[var(--term-surface)]',
        t.borderHover,
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
