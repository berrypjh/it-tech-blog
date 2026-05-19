import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../components/CodePreviewPanel';
import { SectionHeader } from '../components/SectionHeader';
import type { WhySourceContent } from '../content';
import { ArrowRightIcon, CodeIcon, GithubIcon } from '../icons';

type Props = { content: WhySourceContent['firstCode'] };

const FileCard = ({ file }: { file: WhySourceContent['firstCode']['file'] }) => {
  return (
    <article className="flex flex-col gap-md h-full rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
      {/* 파일 헤더 */}
      <div className="flex items-center gap-sm pb-sm border-b border-dashed border-[var(--term-border)]">
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-300 text-[10px] font-bold tracking-wider"
          aria-hidden="true"
        >
          JS
        </span>
        <div className="min-w-0 flex flex-col">
          <span className="text-xsm font-bold text-[var(--term-fg)] truncate">{file.fileName}</span>
          <span className="text-[10px] text-[var(--term-muted)] truncate">{file.owner}</span>
        </div>
      </div>

      {/* 설명 블록들 */}
      <ul className="flex flex-col gap-sm">
        {file.blocks.map((block, i) => (
          <li
            key={i}
            className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm"
          >
            <div className="flex items-start gap-1.5">
              <span
                className="text-[var(--term-accent)] text-xxsm font-bold tabular-nums shrink-0 mt-0.5"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <p className="text-xsm font-bold text-[var(--term-fg)] break-keep">{block.title}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                  {block.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

const RepoCard = ({ repo }: { repo: WhySourceContent['firstCode']['repo'] }) => {
  return (
    <article className="flex flex-col gap-sm h-full rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
      {/* 상단: 저장소명 + visibility */}
      <div className="flex items-start gap-sm pb-sm border-b border-dashed border-[var(--term-border)]">
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)] shrink-0"
          aria-hidden="true"
        >
          <GithubIcon className="h-[1.125rem] w-[1.125rem]" />
        </span>
        <div className="min-w-0 flex-1 flex flex-col">
          <span className="text-xsm font-bold text-[var(--term-fg)] truncate">
            {repo.owner} / {repo.name}
          </span>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full border border-[var(--term-border)] text-[10px] text-[var(--term-muted)]">
              {repo.visibility}
            </span>
          </div>
        </div>
      </div>

      {/* 경로 + 파라미터 */}
      <div className="flex flex-col gap-1">
        <p className="text-[11px] font-mono text-[var(--term-muted)] break-all">{repo.path}</p>
        <p className="text-[11px] text-[var(--term-muted)]">{repo.parameters}</p>
        <a
          href="https://github.com/facebook/react"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xxsm font-bold text-[var(--term-accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] rounded"
        >
          {repo.link}
          <ArrowRightIcon className="h-3 w-3" />
        </a>
      </div>

      {/* 통계 3개 */}
      <ul className="grid grid-cols-3 gap-1 mt-sm">
        {(
          [
            ['★', repo.stats.stars],
            ['⑂', repo.stats.forks],
            ['◉', repo.stats.watchers],
          ] as const
        ).map(([sym, val]) => (
          <li
            key={sym}
            className="flex flex-col items-center gap-0.5 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] py-1"
          >
            <span className="text-[10px] text-[var(--term-muted)]" aria-hidden="true">
              {sym}
            </span>
            <span className="text-xsm font-bold text-[var(--term-fg)] tabular-nums">{val}</span>
          </li>
        ))}
      </ul>

      {/* 최근 커밋 */}
      <div className="mt-sm pt-sm border-t border-dashed border-[var(--term-border)]">
        <p className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] mb-1">
          recent commits
        </p>
        <ul className="flex flex-col gap-1">
          {repo.commits.map((c) => (
            <li key={c.title} className="flex items-center justify-between gap-sm text-[11px]">
              <span className="truncate text-[var(--term-fg)]" title={c.title}>
                <span className="text-[var(--term-accent)] mr-1">●</span>
                {c.title}
              </span>
              <span className="text-[var(--term-muted)] shrink-0 tabular-nums">{c.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const FirstCodePreview = ({ content }: Props) => {
  return (
    <section
      id="section-first-code"
      aria-labelledby="heading-first-code"
      className={cn(
        'relative space-y-lg',
        'rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)]',
        'p-md sm:p-lg lg:p-xl',
      )}
    >
      <SectionHeader
        id="first-code"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      {/* 3열: 데스크톱은 좌27 / 중45 / 우28 비율 */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.55fr)_minmax(0,_0.9fr)_minmax(0,_0.55fr)] gap-md">
        <FileCard file={content.file} />
        <div className="lg:row-start-1 lg:col-start-2 min-w-0">
          <CodePreviewPanel code={content.code.code} language={content.code.language} />
        </div>
        <RepoCard repo={content.repo} />
      </div>

      {/* 하단 버튼 */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-sm pt-sm">
        <a
          href="https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md bg-slate-900 dark:bg-slate-800 text-slate-50 text-xsm font-bold transition-colors hover:bg-slate-800 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
        >
          <GithubIcon className="h-4 w-4" />
          {content.primaryCta}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#section-benefits"
          className="group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
        >
          {content.secondaryCta}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
};
