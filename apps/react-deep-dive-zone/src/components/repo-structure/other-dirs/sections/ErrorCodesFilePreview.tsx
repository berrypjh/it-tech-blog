import { cx } from '@berrypjh/react-ui';
import { ExternalLink, FileJson, Info, Lightbulb } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { SurroundingContent } from '../content';

type Props = { content: SurroundingContent['errorCodes'] };

export const ErrorCodesFilePreview = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-error-codes" className="space-y-md">
      <SectionHeader
        id="error-codes"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileJson className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        {/* 좌측 정보 카드 */}
        <article
          className={cx(
            'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
          )}
        >
          <InfoRow
            label={content.fileLabel}
            value={<code className="font-mono break-all">{content.filePath}</code>}
            icon={<FileJson className="h-4 w-4 text-[var(--term-accent)]" aria-hidden="true" />}
          />
          <InfoRow
            label={content.descriptionLabel}
            value={<span>{content.descriptionValue}</span>}
            icon={<Info className={cx('h-4 w-4', toneTokens.sky.text)} aria-hidden="true" />}
          />

          <div
            className={cx(
              'mt-auto flex items-start gap-2 rounded-lg border p-3',
              'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
            )}
          >
            <Lightbulb
              className={cx('mt-0.5 h-4 w-4 shrink-0', toneTokens.sky.text)}
              aria-hidden="true"
            />
            <p className="text-xsm leading-relaxed font-medium break-keep whitespace-pre-line">
              {content.pointValue}
            </p>
          </div>
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
              className={cx(
                'group/cta inline-flex items-center justify-center gap-2 rounded-md px-lg py-3 text-xsm font-bold',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'transition-colors hover:bg-[var(--term-surface)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.secondaryCta}
              <span className="sr-only">(새 창에서 열림)</span>
              <ExternalLink
                className="h-3.5 w-3.5 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                aria-hidden="true"
              />
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
