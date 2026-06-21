import type { WhySourceContent } from '../content';

type Props = { file: WhySourceContent['firstCode']['file'] };

export const FileCard = ({ file }: Props) => {
  return (
    <article
      aria-label={`${file.fileName} 파일 안내`}
      className="flex flex-col gap-md h-full rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md"
    >
      <div className="flex items-center gap-sm pb-sm border-b border-dashed border-[var(--term-border)]">
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-300 text-[10px] font-bold tracking-wider"
          aria-hidden="true"
        >
          JS
        </span>
        <div className="min-w-0 flex flex-col">
          <span className="text-xsm font-bold text-[var(--term-fg)] truncate">{file.fileName}</span>
          <span className="text-[10px] text-[var(--term-muted)] truncate">{file.owner}</span>
        </div>
      </div>

      <ul className="flex flex-col gap-sm">
        {file.blocks.map((block, i) => (
          <li
            key={i}
            className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm"
          >
            <div className="flex items-start gap-1.5">
              <span
                className="text-[var(--term-accent)] text-xxsm font-bold tabular-nums shrink-0 mt-0.5"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <p className="text-xsm font-bold text-[var(--term-fg)] break-keep">{block.title}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                  {block.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
