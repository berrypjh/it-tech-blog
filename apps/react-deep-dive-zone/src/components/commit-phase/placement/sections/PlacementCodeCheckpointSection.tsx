import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { CodePreviewPanel } from '../../../start/_shared/CodePreviewPanel';
import type { PlacementContent } from '../content';
import { CodeIcon, FileCodeIcon, HelpCircleIcon, ListChecksIcon, PackageOpenIcon } from '../icons';

type Props = { content: PlacementContent['checkpoint'] };

export const PlacementCodeCheckpointSection = ({ content }: Props) => (
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

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.6fr)] gap-3">
      <InfoCard info={content.info} />
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1.55fr)_minmax(0,_0.55fr)] gap-3 min-w-0">
        <CodeCard code={content.code} />
        <CommentsCard title={content.rightCommentsTitle} comments={content.rightComments} />
      </div>
    </div>
  </section>
);

const InfoCard = ({ info }: { info: PlacementContent['checkpoint']['info'] }) => (
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
      value={info.filePath}
    />
    <InfoRow
      label={info.watchLabel}
      icon={<PackageOpenIcon className="h-4 w-4" />}
      value={info.watchValue}
    />
    <InfoRow
      label={info.questionLabel}
      icon={<HelpCircleIcon className="h-4 w-4" />}
      callout
      value={info.question}
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
          'block rounded-md border bg-slate-50/60 px-sm py-1 text-xsm text-[var(--term-fg)] break-all',
          'border-[var(--term-border)] dark:bg-slate-900/40',
          mono && 'font-mono font-bold',
        )}
      >
        {value}
      </code>
    )}
  </div>
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

const CommentsCard = ({ title, comments }: { title: string; comments: string[] }) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
      'border-violet-200/80 bg-violet-50/60',
      'dark:border-violet-800/70 dark:bg-violet-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
          'bg-violet-100 text-violet-700 border-violet-200/80',
          'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        <ListChecksIcon className="h-4 w-4" />
      </span>
      <h3 className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
        {title}
      </h3>
    </header>
    <ol className="flex flex-col gap-1.5">
      {comments.map((c, idx) => (
        <li
          key={c}
          className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-violet-900 dark:text-violet-100 break-keep"
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-mono font-bold tabular-nums',
              'bg-violet-100 text-violet-700 border-violet-200/80',
              'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
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
