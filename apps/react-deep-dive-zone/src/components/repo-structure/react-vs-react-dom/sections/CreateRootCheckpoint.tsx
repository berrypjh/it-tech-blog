import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { CodeEditorPanel } from '../../packages-dir/components/CodeEditorPanel';
import { GithubIcon } from '../../repo-overview/icons';
import type { ReactVsReactDomContent } from '../content';
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  FileCodeIcon,
  HelpCircleIcon,
  LightbulbIcon,
} from '../icons';

type Props = { content: ReactVsReactDomContent['checkpoint'] };

export const CreateRootCheckpoint = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-checkpoint" className="space-y-md">
      <SectionHeader
        id="checkpoint"
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
            label={content.fileLabel}
            value={<code className="font-mono break-all">{content.filePath}</code>}
          />
          <InfoRow
            label={content.functionLabel}
            value={
              <code className="inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                {content.functionName}
              </code>
            }
          />
          <InfoRow
            label={content.descriptionLabel}
            value={<span className="leading-relaxed">{content.descriptionValue}</span>}
          />

          <div
            className={cn(
              'mt-auto flex items-start gap-2 rounded-md border p-3',
              'border-sky-200/80 bg-sky-50/70 text-sky-900',
              'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
            )}
          >
            <HelpCircleIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-300"
              aria-hidden="true"
            />
            <p className="text-xsm leading-relaxed font-medium break-keep whitespace-pre-line">
              {content.learningQuestion}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
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

        {/* 우측 코드 패널 + 포인트 */}
        <div className="flex flex-col gap-md min-w-0">
          <CodeEditorPanel
            header={content.codeHeader}
            badge={content.codeBadge}
            caption="ReactDOMRoot.js"
            code={content.code}
          />

          <div
            className={cn(
              'flex items-start gap-sm rounded-lg border px-md py-md',
              'border-sky-200/80 bg-sky-50/70 text-sky-900',
              'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-8 h-8 rounded-md shrink-0',
                'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-950',
              )}
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider font-bold">
                {content.pointLabel}
              </span>
              <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">
                {content.pointMessage}
              </p>
            </div>
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
