import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { GithubIcon } from '../../../shared/GithubIcon';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReactElementKeySeparatedContent } from '../content';
import { ArrowRightIcon, CodeIcon, FileTextIcon, HelpCircleIcon } from '../icons';

type Props = { content: ReactElementKeySeparatedContent['checkpoint'] };

export const KeySourceCheckpoint = ({ content }: Props) => (
  <section aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CodeIcon className="h-5 w-5" />}
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
          value={
            <span className="flex items-center gap-2">
              <FileTextIcon
                className="h-4 w-4 shrink-0 text-sky-600 dark:text-sky-300"
                aria-hidden="true"
              />
              <code className="font-mono break-all">{content.filePath}</code>
            </span>
          }
        />

        <InfoRow
          label={content.pointLabel}
          value={
            <code className="inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
              {content.pointValue}
            </code>
          }
        />

        <div
          className={cn(
            'mt-auto flex items-start gap-2 rounded-lg border p-3',
            'border-sky-200/80 bg-sky-50/70 text-sky-900',
            'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
          )}
        >
          <HelpCircleIcon
            className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-300"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider font-bold">
              {content.questionLabel}
            </span>
            <p className="text-xsm leading-relaxed font-medium break-keep whitespace-pre-line">
              {content.question}
            </p>
          </div>
        </div>
      </article>

      {/* 우측 코드 패널 + 버튼 */}
      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel
          header={content.filePath}
          caption="ReactJSXElement.js"
          code={content.code}
        />

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
      </div>
    </div>
  </section>
);

type InfoRowProps = { label: string; value: React.ReactNode };

const InfoRow = ({ label, value }: InfoRowProps) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
      {label}
    </span>
    <div className="text-xsm text-[var(--term-fg)] break-keep">{value}</div>
  </div>
);
