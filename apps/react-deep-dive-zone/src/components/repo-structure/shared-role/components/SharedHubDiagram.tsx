import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { PackageBranch, SharedContent } from '../content';
import { iconByName, PackageIcon } from '../icons';

type Props = { content: SharedContent['hero'] };

/**
 * Hero 우측 시각: shared 허브 카드 → 곡선 SVG로 분기 → react / react-dom / react-reconciler 카드.
 */
export const SharedHubDiagram = ({ content }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_3px_0_var(--term-border)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(45,212,191,0.18),transparent_55%)]"
      />

      <div className="relative flex flex-col items-center gap-md">
        {/* 상단 shared 허브 카드 */}
        <SharedHubCard
          title={content.hubTitle}
          subtitle={content.hubSubtitle}
          tags={content.hubTags}
        />

        {/* 곡선 SVG connector (가로 3열 배치일 때) */}
        <div className="relative hidden sm:block w-full h-12" aria-hidden="true">
          <svg
            viewBox="0 0 320 48"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M160 0 C 100 16, 60 28, 56 44"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeDasharray="3 4"
              className="text-blue-300 dark:text-blue-700"
            />
            <path
              d="M160 0 C 160 18, 160 28, 160 44"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeDasharray="3 4"
              className="text-indigo-300 dark:text-indigo-700"
            />
            <path
              d="M160 0 C 220 16, 260 28, 264 44"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeDasharray="3 4"
              className="text-violet-300 dark:text-violet-700"
            />
          </svg>
        </div>

        {/* 세로 스택(모바일)일 때 단일 세로 커넥터 */}
        <div className="sm:hidden flex h-8 w-full items-center justify-center" aria-hidden="true">
          <span className="h-full w-px border-l border-dashed border-teal-300 dark:border-teal-700" />
        </div>

        {/* 3개 패키지 카드 */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
          {content.branches.map((branch) => (
            <li key={branch.id} className="min-w-0">
              <BranchCard branch={branch} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type HubProps = { title: string; subtitle: string; tags: string[] };

const SharedHubCard = ({ title, subtitle, tags }: HubProps) => (
  <article
    className={cn(
      'flex flex-col items-center gap-2 rounded-xl border w-full',
      'px-md py-md',
      'border-teal-300 bg-teal-50/80 text-teal-900',
      'dark:border-teal-700/60 dark:bg-teal-950/40 dark:text-teal-100',
      'shadow-[0_3px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-9 h-9 rounded-md border',
          'border-teal-300 bg-teal-100/80 text-teal-700',
          'dark:border-teal-700/60 dark:bg-teal-950/60 dark:text-teal-200',
        )}
      >
        <PackageIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-col">
        <h3 className="text-md font-bold font-mono tracking-tight">{title}</h3>
        <span className="text-[10px] uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80">
          {subtitle}
        </span>
      </div>
    </header>
    <ul className="flex flex-wrap justify-center gap-1.5">
      {tags.map((tag) => (
        <li key={tag}>
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold',
              'border-teal-300 bg-teal-100/60 text-teal-800',
              'dark:border-teal-700/60 dark:bg-teal-950/60 dark:text-teal-200',
            )}
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  </article>
);

type BranchProps = { branch: PackageBranch };

const BranchCard = ({ branch }: BranchProps) => {
  const tone = toneTokens[branch.tone];
  const Icon = iconByName[branch.icon];
  const tintClass =
    branch.tone === 'blue'
      ? 'bg-blue-50/80 dark:bg-blue-950/30'
      : branch.tone === 'indigo'
        ? 'bg-indigo-50/80 dark:bg-indigo-950/30'
        : 'bg-violet-50/80 dark:bg-violet-950/30';

  return (
    <article
      className={cn(
        'flex flex-col items-center gap-1 rounded-lg border p-3 text-center',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.border,
        tintClass,
        tone.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 rounded-md border',
          tone.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <h4
        className={cn('text-xsm font-bold font-mono tracking-tight min-w-0 break-words', tone.text)}
      >
        {branch.title}
      </h4>
      <p className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
        {branch.description}
      </p>
    </article>
  );
};
