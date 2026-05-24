import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { CodePreviewPanel } from '../../../start/_shared/CodePreviewPanel';
import { commitToneTokens } from '../../_shared/tones';
import type { BeforeMutationContent, PipelineFunction } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CodeIcon,
  EyeIcon,
  FileCodeIcon,
  FlagIcon,
  HelpCircleIcon,
  PackageOpenIcon,
} from '../icons';

type Props = { content: BeforeMutationContent['checkpoint'] };

export const BeforeMutationCodeCheckpointSection = ({ content }: Props) => (
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

    {/* Top: info card + code panel + callout */}
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.6fr)] gap-3">
      <InfoCard info={content.info} />
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1.4fr)_minmax(0,_0.6fr)] gap-3 min-w-0">
        <CodeCard code={content.code} />
        <SnapshotCallout callout={content.snapshotCallout} />
      </div>
    </div>

    {/* Bottom: pipeline */}
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
        <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
          current step
        </span>
      </header>
      <PipelineRail items={content.pipeline} />
    </article>
  </section>
);

const InfoCard = ({ info }: { info: BeforeMutationContent['checkpoint']['info'] }) => (
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
      mono
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
}) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border p-md sm:p-lg',
      'border-slate-700 bg-slate-900 text-slate-100',
      'dark:border-slate-700 dark:bg-slate-950',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
          'bg-teal-500/15 text-teal-300 border-teal-500/30',
        )}
      >
        <FlagIcon className="h-4 w-4" />
      </span>
      <h3 className="text-xsm sm:text-sm font-bold text-slate-100 break-keep">{callout.title}</h3>
    </header>
    <ul className="flex flex-col gap-1.5">
      {callout.items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-[11px] sm:text-xsm leading-snug text-slate-200 break-keep"
        >
          <span
            aria-hidden="true"
            className="mt-1.5 inline-block h-1 w-1 rounded-full bg-teal-300 shrink-0"
          />
          <code className="font-mono">{item}</code>
        </li>
      ))}
    </ul>
  </article>
);

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
  const t = commitToneTokens[item.tone];
  return (
    <article
      className={cn(
        'relative flex h-full flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-sm',
        item.active
          ? cn('border-2', t.borderStrong, t.bg, 'ring-2 ring-teal-300/40 dark:ring-teal-500/30')
          : t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-colors hover:bg-[var(--term-surface)]',
        t.borderHover,
      )}
    >
      {item.active && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute -top-2 left-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
            'text-[9px] font-mono uppercase tracking-wider font-bold',
            'bg-teal-500 text-white border-teal-600',
            'dark:bg-teal-400 dark:text-slate-950 dark:border-teal-300',
          )}
        >
          <EyeIcon className="h-2.5 w-2.5" />
          active
        </span>
      )}
      <code
        className={cn(
          'text-[11px] sm:text-xsm font-bold font-mono break-all',
          item.active ? t.textStrong : t.text,
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
