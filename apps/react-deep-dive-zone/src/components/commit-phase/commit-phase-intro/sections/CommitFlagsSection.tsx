import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CommitPhaseIntroContent, FlagRow } from '../content';
import { FileCodeIcon, FlagIcon, LightbulbIcon, SparklesIcon } from '../icons';

type Props = { content: CommitPhaseIntroContent['flags'] };

export const CommitFlagsSection = ({ content }: Props) => (
  <section
    id="commit-flags"
    aria-labelledby="heading-commit-flags"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="commit-flags"
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
  <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
    <header className="flex items-center gap-2">
      <ToneIconBox tone="violet" size="sm">
        <FileCodeIcon className="h-4 w-4" />
      </ToneIconBox>
      <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)]">{title}</h3>
    </header>

    <ul className="flex flex-col gap-2">
      {files.map((file) => (
        <li
          key={file.name}
          className="flex items-start gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-sm"
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)]"
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

const LearningPointCard = ({ title, items }: { title: string; items: string[] }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="sky" size="sm">
          <LightbulbIcon className="h-4 w-4" />
        </ToneIconBox>
        <h3 className={cn('text-sm sm:text-md font-bold', t.fill.text)}>{title}</h3>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-2 text-xsm sm:text-sm leading-snug break-keep',
              t.fill.text,
            )}
          >
            <span
              aria-hidden="true"
              className={cn('mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const FlagTableCard = ({
  title,
  rows,
  bottomNote,
}: {
  title: string;
  rows: FlagRow[];
  bottomNote: string;
}) => (
  <article className="flex flex-col rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
    <header className="flex items-center justify-between gap-2 border-b border-[var(--term-border)] px-md py-sm bg-[var(--term-surface)]">
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

    <footer
      className={cn(
        'flex items-start gap-2 border-t px-md py-sm',
        toneTokens.amber.fill.border,
        toneTokens.amber.fill.bg,
      )}
    >
      <SparklesIcon
        aria-hidden="true"
        className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', toneTokens.amber.text)}
      />
      <p
        className={cn(
          'text-[11px] sm:text-xsm leading-snug break-keep',
          toneTokens.amber.fill.text,
        )}
      >
        {bottomNote}
      </p>
    </footer>
  </article>
);

const FlagRowItem = ({ row }: { row: FlagRow }) => {
  const t = toneTokens[row.tone];
  return (
    <li className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,_1fr)_minmax(0,_1.4fr)] items-center gap-2 px-md py-2.5 transition-colors hover:bg-[var(--term-surface)]">
      <div className="flex items-center gap-2 min-w-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
            t.chip,
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
