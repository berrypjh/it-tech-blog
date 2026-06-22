import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CommitPhaseIntroContent, FlagRow } from '../content';
import { FileCodeIcon, FlagIcon, LightbulbIcon, SparklesIcon } from '../icons';
import { commitToneTokens } from '../palette';

type Props = { content: CommitPhaseIntroContent['flags'] };

export const CommitFlagsSection = ({ content }: Props) => (
  <section
    id="commit-flags"
    aria-labelledby="heading-commit-flags"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="commit-flags"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<FlagIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-3">
      {/* Left column: related files + learning points */}
      <div className="flex flex-col gap-3">
        <RelatedFilesCard title={content.relatedFilesTitle} files={content.relatedFiles} />
        <LearningPointCard title={content.learningTitle} items={content.learningItems} />
      </div>

      {/* Right column: flag table */}
      <FlagTableCard
        title={content.flagTableTitle}
        rows={content.flagRows}
        bottomNote={content.bottomNote}
      />
    </div>
  </section>
);

const RelatedFilesCard = ({
  title,
  files,
}: {
  title: string;
  files: CommitPhaseIntroContent['flags']['relatedFiles'];
}) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
          'bg-violet-100 text-violet-700 border-violet-200/80',
          'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        <FileCodeIcon className="h-4 w-4" />
      </span>
      <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)]">{title}</h3>
    </header>

    <ul className="flex flex-col gap-2">
      {files.map((file) => (
        <li
          key={file.name}
          className={cn(
            'flex items-start gap-sm rounded-xl border p-sm',
            'border-[var(--term-border)] bg-slate-50/40 dark:bg-slate-900/30',
          )}
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/40"
          >
            <FileCodeIcon className="h-3.5 w-3.5" />
          </span>
          <div className="flex flex-col min-w-0">
            <code className="text-xsm font-bold font-mono text-[var(--term-fg)] break-all">
              {file.name}
            </code>
            <span className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
              {file.description}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </article>
);

const LearningPointCard = ({ title, items }: { title: string; items: string[] }) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-sky-200/80 bg-sky-50/60',
      'dark:border-sky-800/70 dark:bg-sky-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
          'bg-sky-100 text-sky-700 border-sky-200/80',
          'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
        )}
      >
        <LightbulbIcon className="h-4 w-4" />
      </span>
      <h3 className="text-sm sm:text-md font-bold text-sky-900 dark:text-sky-100">{title}</h3>
    </header>

    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-sky-900 dark:text-sky-100 break-keep"
        >
          <span
            aria-hidden="true"
            className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </article>
);

const FlagTableCard = ({
  title,
  rows,
  bottomNote,
}: {
  title: string;
  rows: FlagRow[];
  bottomNote: string;
}) => (
  <article
    className={cn(
      'flex flex-col rounded-3xl border bg-[var(--term-bg)] overflow-hidden',
      'border-[var(--term-border)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center justify-between gap-2 border-b border-[var(--term-border)] px-md py-sm bg-slate-50/60 dark:bg-slate-900/30">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] font-mono">{title}</h3>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        flags
      </span>
    </header>

    <ul className="divide-y divide-[var(--term-border)]">
      {rows.map((row) => (
        <FlagRowItem key={row.name} row={row} />
      ))}
    </ul>

    <footer className="flex items-start gap-2 border-t border-[var(--term-border)] px-md py-sm bg-amber-50/40 dark:bg-amber-950/20">
      <SparklesIcon
        aria-hidden="true"
        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700 dark:text-amber-300"
      />
      <p className="text-[11px] sm:text-xsm leading-snug text-amber-800 dark:text-amber-200 break-keep">
        {bottomNote}
      </p>
    </footer>
  </article>
);

const FlagRowItem = ({ row }: { row: FlagRow }) => {
  const t = commitToneTokens[row.tone];
  return (
    <li
      className={cn(
        'grid grid-cols-1 sm:grid-cols-[auto_minmax(0,_1fr)_minmax(0,_1.4fr)] items-center gap-2 px-md py-2.5',
        'transition-colors',
        'hover:bg-[var(--term-surface)]',
      )}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
            t.chipSolid,
          )}
        >
          <FlagIcon className="h-3.5 w-3.5" />
        </span>
        <code className={cn('text-xsm font-bold font-mono break-all', t.text)}>{row.name}</code>
      </div>
      <code className="text-[11px] sm:text-xsm font-mono text-[var(--term-muted)] break-all">
        {row.bitMask}
      </code>
      <span className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep">
        {row.meaning}
      </span>
    </li>
  );
};
