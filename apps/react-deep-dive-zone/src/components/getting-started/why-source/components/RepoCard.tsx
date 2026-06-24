import { ExternalLink } from '../../../shared/link';
import type { WhySourceContent } from '../content';
import { GithubIcon } from '../icons';

type Props = { repo: WhySourceContent['firstCode']['repo'] };

export const RepoCard = ({ repo }: Props) => {
  return (
    <article
      aria-label={`${repo.owner} / ${repo.name} 저장소 정보`}
      className="flex flex-col gap-sm h-full rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md"
    >
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

      <div className="flex flex-col gap-1">
        <p className="text-[11px] font-mono text-[var(--term-muted)] break-all">{repo.path}</p>
        <p className="text-[11px] text-[var(--term-muted)]">{repo.parameters}</p>
        <ExternalLink
          href="https://github.com/facebook/react"
          className="self-start text-xxsm font-bold text-[var(--term-accent)]"
        >
          {repo.link}
        </ExternalLink>
      </div>

      <ul className="grid grid-cols-3 gap-1 mt-sm">
        {(
          [
            ['★', 'Stars', repo.stats.stars],
            ['⑂', 'Forks', repo.stats.forks],
            ['◉', 'Watchers', repo.stats.watchers],
          ] as const
        ).map(([sym, label, val]) => (
          <li
            key={sym}
            className="flex flex-col items-center gap-0.5 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] py-1"
          >
            <span className="text-[10px] text-[var(--term-muted)]" aria-hidden="true">
              {sym}
            </span>
            <span className="text-xsm font-bold text-[var(--term-fg)] tabular-nums">
              <span className="sr-only">{label}: </span>
              {val}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
