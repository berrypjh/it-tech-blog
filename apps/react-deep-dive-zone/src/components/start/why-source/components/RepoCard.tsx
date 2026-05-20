import type { WhySourceContent } from '../content';
import { ArrowRightIcon, GithubIcon } from '../icons';

type Props = { repo: WhySourceContent['firstCode']['repo'] };

/**
 * GitHub 저장소 정보 카드: 저장소명/visibility, 경로·파라미터, 통계.
 * FirstCodePreview의 우측 사이드 카드로 사용.
 */
export const RepoCard = ({ repo }: Props) => {
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
    </article>
  );
};
