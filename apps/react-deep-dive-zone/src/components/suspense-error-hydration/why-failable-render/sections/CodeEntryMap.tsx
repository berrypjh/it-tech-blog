import { cn } from '@it-tech-blog/utils';

import type { FileCard, WhyFailableRenderContent } from '../content';
import { ExternalLinkIcon, FileCodeIcon, GithubIcon } from '../icons';
import { branchAccent } from '../tone';

type Props = { content: WhyFailableRenderContent['codeEntry'] };

const accentFor = (kind: FileCard['kind']) => {
  if (kind === 'mixed') {
    return {
      border: 'border-violet-300/80 dark:border-violet-700/70',
      text: 'text-violet-700 dark:text-violet-300',
      chip: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
      bg: 'bg-violet-50/70 dark:bg-violet-950/30',
    };
  }
  return branchAccent[kind];
};

export const CodeEntryMap = ({ content }: Props) => (
  <section aria-labelledby="codeentry-heading" className="flex flex-col gap-md">
    <header className="flex flex-col gap-1">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
        {content.eyebrow}
      </span>
      <h2
        id="codeentry-heading"
        className="text-xl sm:text-xxl font-bold text-[var(--term-fg)] break-keep"
      >
        {content.title}
      </h2>
      <p className="text-xsm sm:text-sm text-[var(--term-muted)] break-keep">
        {content.description}
      </p>
    </header>

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 xl:grid-cols-4">
      {content.files.map((file) => {
        const accent = accentFor(file.kind);
        return (
          <li key={file.fileName}>
            <article
              className={cn(
                'flex flex-col gap-3 h-full rounded-2xl border-2 p-md',
                'bg-white dark:bg-[var(--term-bg)]',
                accent.border,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
              )}
            >
              <header className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                    accent.chip,
                  )}
                >
                  <FileCodeIcon className="h-4 w-4" />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className={cn('text-xsm font-mono font-bold break-all', accent.text)}>
                    {file.fileName}
                  </span>
                  <span className="text-[11px] text-[var(--term-muted)] break-keep">
                    {file.role}
                  </span>
                </div>
              </header>

              <pre
                className={cn(
                  'overflow-x-auto rounded-xl border bg-slate-950 px-3 py-2.5 text-[10.5px] sm:text-[11px] leading-[1.55] font-mono text-slate-100',
                  'border-slate-800',
                )}
              >
                <code>{file.code}</code>
              </pre>

              <a
                href={file.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'mt-auto group inline-flex items-center justify-center gap-1.5 rounded-xl border-2 px-3 py-2',
                  'text-xsm font-bold transition-colors',
                  accent.border,
                  accent.text,
                  'hover:bg-slate-50 dark:hover:bg-slate-900/50',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                )}
              >
                <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{content.buttonLabel}</span>
                <ExternalLinkIcon
                  aria-hidden="true"
                  className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </a>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
