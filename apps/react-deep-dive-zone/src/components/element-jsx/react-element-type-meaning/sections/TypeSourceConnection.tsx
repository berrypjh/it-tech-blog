import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ReactElementTypeMeaningContent } from '../content';
import { CheckCircleIcon, CodeIcon, FileTextIcon } from '../icons';

type Props = { content: ReactElementTypeMeaningContent['source'] };

export const TypeSourceConnection = ({ content }: Props) => (
  <section aria-labelledby="heading-source" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="source"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
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
                className="h-4 w-4 shrink-0 text-[var(--term-accent)]"
                aria-hidden="true"
              />
              <code className="font-mono break-all">{content.fileName}</code>
            </span>
          }
        />

        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.descriptionTitle}
          </h3>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.descriptionBody}
          </p>
        </div>

        <ul className="mt-auto flex flex-col gap-2">
          {content.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)] shrink-0 mt-0.5"
              >
                <CheckCircleIcon className="h-3.5 w-3.5" />
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{bullet}</p>
            </li>
          ))}
        </ul>
      </article>

      {/* 우측 코드 패널 + 버튼 */}
      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel caption={content.fileName} code={content.code} />

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
