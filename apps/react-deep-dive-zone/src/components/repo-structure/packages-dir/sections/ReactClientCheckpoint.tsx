import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { GithubIcon } from '../../repo-overview/icons';
import { CodeEditorPanel } from '../components/CodeEditorPanel';
import type { PackagesDirectoryContent } from '../content';
import { ArrowRightIcon, CodeIcon, ExternalLinkIcon, FileCodeIcon, LightbulbIcon } from '../icons';

type Props = { content: PackagesDirectoryContent['checkpoint'] };

export const ReactClientCheckpoint = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-checkpoint" className="space-y-md">
      <SectionHeader
        id="checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        {/* 좌측 정보 카드 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            'p-md sm:p-lg',
          )}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
              {content.fileLabel}
            </span>
            <div className="flex items-center gap-2">
              <FileCodeIcon className="h-4 w-4 text-sky-600 dark:text-sky-300" aria-hidden="true" />
              <code className="text-xsm font-mono text-[var(--term-fg)] break-all">
                {content.filePath}
              </code>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
              {content.seeLabel}
            </span>
            <ul className="flex flex-wrap gap-1.5">
              {content.seeItems.map((item) => (
                <li key={item}>
                  <code className="inline-flex items-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[11px] font-mono text-[var(--term-fg)]">
                    {item}
                  </code>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              'flex items-start gap-2 rounded-lg border p-3 mt-auto',
              'border-sky-200/80 bg-sky-50/70 text-sky-900',
              'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
            )}
          >
            <LightbulbIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-300"
              aria-hidden="true"
            />
            <p className="text-xsm leading-relaxed font-medium break-keep whitespace-pre-line">
              {content.learningQuestion}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-xs">
            <a
              href={content.primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold',
                'bg-sky-600 text-white transition-colors hover:bg-sky-700',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
              )}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              {content.primaryCta}
              <ArrowRightIcon
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={content.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.secondaryCta}
              <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </article>

        {/* 우측 코드 패널 */}
        <div className="min-w-0">
          <CodeEditorPanel
            header={content.codeHeader}
            badge={content.codeBadge}
            caption={content.codeCaption}
            code={content.code}
          />
        </div>
      </div>
    </section>
  );
};
