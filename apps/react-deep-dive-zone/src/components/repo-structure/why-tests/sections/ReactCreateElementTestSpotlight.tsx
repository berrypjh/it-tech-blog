import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { DarkCodePanel } from '../../other-dirs/components/DarkCodePanel';
import { GithubIcon } from '../../repo-overview/icons';
import type { TestCodeContent } from '../content';
import {
  ArrowRightIcon,
  CircleHelpIcon,
  CodeIcon,
  ExternalLinkIcon,
  FileCodeIcon,
  FlaskIcon,
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

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.28fr)_minmax(0,_0.28fr)_minmax(0,_0.44fr)] gap-md items-stretch">
        {/* 좌측 구현 파일 정보 카드 */}
        <LeftCard content={content} />

        {/* 중앙 질문 카드 */}
        <MiddleQuestion content={content} />

        {/* 우측 테스트 파일 정보 + 코드 패널 */}
        <RightCard content={content} />
      </div>

      {/* 하단 CTA 버튼 2개 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <a
          href={content.primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-lg px-lg py-4 text-sm font-bold',
            'bg-blue-600 text-white transition-colors hover:bg-blue-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            'dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950',
          )}
        >
          <GithubIcon className="h-4 w-4" />
          <CodeIcon className="h-4 w-4" aria-hidden="true" />
          {content.primaryCta}
          <ArrowRightIcon
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
        <a
          href={content.secondaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-lg px-lg py-4 text-sm font-bold',
            'bg-emerald-600 text-white transition-colors hover:bg-emerald-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            'dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950',
          )}
        >
          <GithubIcon className="h-4 w-4" />
          <FlaskIcon className="h-4 w-4" aria-hidden="true" />
          {content.secondaryCta}
          <ExternalLinkIcon
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
};

type SubProps = { content: TestCodeContent['spotlight'] };

const LeftCard = ({ content }: SubProps) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-xl border p-md sm:p-lg',
      'border-blue-300 bg-blue-50/70',
      'dark:border-blue-700/60 dark:bg-blue-950/30',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-md border',
          'border-blue-300 bg-blue-100 text-blue-700',
          'dark:border-blue-700/60 dark:bg-blue-950/60 dark:text-blue-200',
        )}
      >
        <CodeIcon className="h-5 w-5" />
      </span>
      <span className="text-xsm uppercase tracking-wider font-bold text-blue-700 dark:text-blue-200">
        {content.leftLabel}
      </span>
    </header>

    <InfoRow
      label={content.leftFileTitle}
      value={<code className="font-mono break-all">{content.leftFile}</code>}
    />
    <InfoRow
      label={content.leftCoreLabel}
      value={
        <code className="inline-flex items-center rounded-md border border-blue-300 bg-blue-100/80 px-2 py-0.5 text-xsm font-mono text-blue-800 dark:border-blue-700/60 dark:bg-blue-950/40 dark:text-blue-200">
          {content.leftCore}
        </code>
      }
    />
    <InfoRow
      label={content.leftPointLabel}
      value={<span className="font-medium break-keep">{content.leftPoint}</span>}
    />
  </article>
);

const MiddleQuestion = ({ content }: SubProps) => (
  <article
    className={cn(
      'flex flex-col items-center text-center gap-sm rounded-xl border p-md sm:p-lg',
      'border-teal-300 bg-teal-50/80',
      'dark:border-teal-700/60 dark:bg-teal-950/30',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-full border-2',
        'border-teal-400 bg-teal-100 text-teal-700',
        'dark:border-teal-600/70 dark:bg-teal-950/60 dark:text-teal-200',
      )}
    >
      <CircleHelpIcon className="h-6 w-6" />
    </span>
    <h3
      className={cn(
        'text-md sm:text-lg font-bold tracking-tight break-keep whitespace-pre-line',
        'text-teal-900 dark:text-teal-100',
      )}
    >
      {content.middleQuestion}
    </h3>
    <p className="text-xsm leading-relaxed text-teal-800/90 dark:text-teal-200/90 break-keep">
      {content.middleCaption}
    </p>
  </article>
);

const RightCard = ({ content }: SubProps) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-xl border p-md sm:p-lg',
      'border-emerald-300 bg-emerald-50/70',
      'dark:border-emerald-700/60 dark:bg-emerald-950/30',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-md border',
          'border-emerald-300 bg-emerald-100 text-emerald-700',
          'dark:border-emerald-700/60 dark:bg-emerald-950/60 dark:text-emerald-200',
        )}
      >
        <FlaskIcon className="h-5 w-5" />
      </span>
      <span className="text-xsm uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-200">
        {content.rightLabel}
      </span>
    </header>

    <div className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
        {content.leftFileTitle}
      </span>
      <code className="text-xsm font-mono break-all text-[var(--term-fg)]">
        {content.rightFile}
      </code>
    </div>

    <div className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
        {content.rightPointLabel}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
        {content.rightPoint}
      </p>
    </div>

    <div className="mt-auto min-w-0">
      <DarkCodePanel
        header={content.codeHeader}
        badge={content.codeBadge}
        code={content.code}
        language="js"
      />
    </div>
  </article>
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
