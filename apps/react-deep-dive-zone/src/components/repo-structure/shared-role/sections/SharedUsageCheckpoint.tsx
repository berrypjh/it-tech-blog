import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { SharedContent } from '../content';
import { CircleHelpIcon, FileCodeIcon } from '../icons';

type Props = { content: SharedContent['checkpoint'] };

export const SharedUsageCheckpoint = ({ content }: Props) => (
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
            'mt-auto flex items-start gap-2 rounded-lg border p-3',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          )}
        >
          <CircleHelpIcon
            className={cn('mt-0.5 h-4 w-4 shrink-0', toneTokens.sky.text)}
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
          code={content.code}
          language="js"
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
