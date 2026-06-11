import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { GithubButton } from '../../../shared/GithubButton';
import { SectionHeader } from '../../../shared/SectionHeader';
import type { ReactVsReactDomContent } from '../content';
import { FileCodeIcon, HelpCircleIcon } from '../icons';

type Props = { content: ReactVsReactDomContent['checkpoint'] };

export const CreateRootCheckpoint = ({ content }: Props) => (
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
            'mt-auto flex items-start gap-2 rounded-lg border p-3',
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
      </article>

      {/* 우측 코드 패널 + 버튼 */}
      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel
          header={content.codeHeader}
          badge={content.codeBadge}
          caption="ReactDOMRoot.js"
          code={content.code}
        />

        <GithubButton href={content.primaryHref} label={content.primaryCta} />
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
