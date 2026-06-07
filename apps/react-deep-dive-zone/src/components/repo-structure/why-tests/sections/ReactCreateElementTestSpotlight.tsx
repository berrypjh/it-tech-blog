import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionHeader } from '../../../shared/SectionHeader';
import { GithubIcon } from '../../repo-overview/icons';
import type { TestCodeContent } from '../content';
import {
  ArrowRightIcon,
  CircleHelpIcon,
  ExternalLinkIcon,
  FileCodeIcon,
  LightbulbIcon,
} from '../icons';

type Props = { content: TestCodeContent['spotlight'] };

export const ReactCreateElementTestSpotlight = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-spotlight" className="space-y-md">
      <SectionHeader
        id="spotlight"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        {/* 좌측 정보 카드 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
          )}
        >
          <InfoRow
            label={content.leftFileTitle}
            value={<code className="font-mono break-all">{content.leftFile}</code>}
          />
          <InfoRow
            label={content.leftCoreLabel}
            value={
              <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                {content.leftCore}
              </code>
            }
          />
          <InfoRow
            label={content.leftPointLabel}
            value={<span className="leading-relaxed">{content.leftPoint}</span>}
          />

          <div
            className={cn(
              'mt-auto flex items-start gap-2 rounded-md border p-3',
              'border-emerald-200/80 bg-emerald-50/70 text-emerald-900',
              'dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-100',
            )}
          >
            <CircleHelpIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-xsm leading-relaxed font-medium break-keep whitespace-pre-line">
              {content.middleQuestion}
            </p>
          </div>
        </article>

        {/* 우측 코드 패널 + 포인트 */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel
            header={content.codeHeader}
            badge={content.codeBadge}
            code={content.code}
            language="js"
          />

          <div
            className={cn(
              'flex items-start gap-sm rounded-lg border px-md py-md',
              'border-emerald-200/80 bg-emerald-50/70 text-emerald-900',
              'dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-100',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-8 h-8 rounded-md shrink-0',
                'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
              )}
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider font-bold">
                {content.rightPointLabel}
              </span>
              <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">
                {content.rightPoint}
              </p>
            </div>
          </div>

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
