import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionHeader } from '../../../shared/SectionHeader';
import { GithubIcon } from '../../repo-overview/icons';
import type { SharedContent } from '../content';
import { ArrowRightIcon, CircleHelpIcon, ExternalLinkIcon, FileCodeIcon } from '../icons';

type Props = { content: SharedContent['checkpoint'] };

export const SharedUsageCheckpoint = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-checkpoint" className="space-y-md">
      <SectionHeader
        id="checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.36fr)_minmax(0,_0.64fr)] gap-md items-stretch">
        {/* 좌측 정보 카드 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
          )}
        >
          <InfoRow
            label={content.fileLabel}
            value={<code className="font-mono break-all">{content.filePath}</code>}
          />
          <InfoRow
            label={content.whyLabel}
            value={<span className="leading-relaxed">{content.whyValue}</span>}
          />

          <div
            className={cn(
              'mt-auto flex items-start gap-2 rounded-md border p-3',
              'border-teal-200/80 bg-teal-50/70 text-teal-900',
              'dark:border-teal-800/60 dark:bg-teal-950/30 dark:text-teal-100',
            )}
          >
            <CircleHelpIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-300"
              aria-hidden="true"
            />
            <p className="text-xsm leading-relaxed font-medium break-keep whitespace-pre-line">
              {content.learningQuestion}
            </p>
          </div>
        </article>

        {/* 우측 dark code panel + 버튼 */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel
            header={content.codeHeader}
            badge={content.codeBadge}
            code={content.code}
            language="js"
          />

          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={content.primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold',
                'bg-[var(--term-accent)] text-[var(--term-bg)] transition-all hover:opacity-90',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
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
        </div>
      </div>
    </section>
  );
};

type InfoRowProps = { label: string; value: React.ReactNode };

const InfoRow = ({ label, value }: InfoRowProps) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
      {label}
    </span>
    <div className="text-xsm text-[var(--term-fg)] break-keep">{value}</div>
  </div>
);
