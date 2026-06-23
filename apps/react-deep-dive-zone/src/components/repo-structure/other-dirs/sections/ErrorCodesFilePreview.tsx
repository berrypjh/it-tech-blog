import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { SurroundingContent } from '../content';
import { ExternalLinkIcon, FileJsonIcon, GraduationCapIcon, InfoIcon } from '../icons';

type Props = { content: SurroundingContent['errorCodes'] };

export const ErrorCodesFilePreview = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-error-codes" className="space-y-md">
      <SectionHeader
        id="error-codes"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileJsonIcon className="h-5 w-5" />}
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
            icon={<FileJsonIcon className="h-4 w-4 text-[var(--term-accent)]" />}
          />
          <InfoRow
            label={content.descriptionLabel}
            value={<span>{content.descriptionValue}</span>}
            icon={<InfoIcon className={cn('h-4 w-4', toneTokens.sky.text)} />}
          />
          <InfoRow
            label={content.pointLabel}
            value={<span>{content.pointValue}</span>}
            icon={<GraduationCapIcon className={cn('h-4 w-4', toneTokens.violet.text)} />}
          />
        </article>

        {/* 우측 코드 패널 + 버튼 */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel
            header={content.codeHeader}
            badge={content.codeBadge}
            code={content.code}
          />

          <div className="flex flex-col sm:flex-row gap-sm">
            <GithubButton href={content.primaryHref} label={content.primaryCta} />
            <a
              href={content.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-lg py-3 text-xsm font-bold',
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

type InfoRowProps = { label: string; value: React.ReactNode; icon: React.ReactNode };

const InfoRow = ({ label, value, icon }: InfoRowProps) => (
  <div className="flex flex-col gap-1">
    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
      <span aria-hidden="true" className="inline-flex items-center justify-center">
        {icon}
      </span>
      {label}
    </span>
    <div className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{value}</div>
  </div>
);
