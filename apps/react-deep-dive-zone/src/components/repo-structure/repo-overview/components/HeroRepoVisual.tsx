import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { RepoOverviewContent } from '../content';
import { ReactAtomIcon } from '../icons';

import { RepoTreeCard } from './RepoTreeCard';

type Props = { content: RepoOverviewContent['hero'] };

/**
 * Hero 우측 비주얼.
 * 큰 저장소 트리 카드 + 작은 코드 카드 + React atom 카드를
 * 점선 연결선과 함께 배치한다.
 */
export const HeroRepoVisual = ({ content }: Props) => {
  return (
    <div className="relative w-full">
      {/* 옅은 가로 격자 배경 — 학습 카드 느낌 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -m-2 rounded-2xl bg-[linear-gradient(180deg,rgba(56,189,248,0.06),transparent_60%)]"
      />

      <div className="relative grid grid-cols-1 sm:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] gap-md sm:gap-lg">
        {/* 좌측: 저장소 트리 카드 */}
        <div className="relative">
          <RepoTreeCard header={content.treeHeader} rows={content.treeRows} className="h-full" />

          {/* sm 이상: 트리 → 우측 카드들 점선 연결 */}
          <svg
            aria-hidden="true"
            className="hidden sm:block pointer-events-none absolute -right-[18%] top-[18%] h-[64%] w-[18%]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="20"
              x2="100"
              y2="20"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 4"
              className="text-[var(--term-border)]"
            />
            <line
              x1="0"
              y1="80"
              x2="100"
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 4"
              className="text-[var(--term-border)]"
            />
          </svg>
        </div>

        {/* 우측: 코드 카드 + React 카드 */}
        <div className="flex flex-col gap-md">
          <CodeCard caption={content.codeCaption} code={content.codePreview} />
          <ReactBrandCard caption={content.logoCaption} />
        </div>
      </div>
    </div>
  );
};

type CodeCardProps = { caption: string; code: string };

const CodeCard = ({ caption, code }: CodeCardProps) => {
  const lines = code.split('\n');
  return (
    <div
      className={cn(
        'rounded-lg border bg-[var(--term-surface)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] overflow-hidden',
      )}
    >
      <div className="flex items-center justify-between gap-sm px-md py-1.5 border-b border-dashed border-[var(--term-border)]">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] tabular-nums">
          {caption}
        </span>
      </div>
      <pre className="px-md py-3 text-[11px] leading-[1.65] font-mono text-[var(--term-fg)] overflow-x-auto">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-5 shrink-0 pr-2 text-right text-[var(--term-dim)] tabular-nums"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre">{highlight(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const KEYWORDS = new Set(['function', 'return', 'const', 'let', 'var', 'export']);

const highlight = (line: string): React.ReactNode => {
  const tokens = line.split(/(\s+|[(){}[\];,.<>/=])/);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (KEYWORDS.has(tok)) {
      return (
        <span key={idx} className="text-sky-600 dark:text-sky-300">
          {tok}
        </span>
      );
    }
    if (/^[A-Z][A-Za-z0-9]*$/.test(tok)) {
      return (
        <span key={idx} className="text-amber-700 dark:text-amber-200">
          {tok}
        </span>
      );
    }
    if (tok === 'Hello') {
      return (
        <span key={idx} className="text-emerald-700 dark:text-emerald-300">
          {tok}
        </span>
      );
    }
    if (/[<>/=]/.test(tok)) {
      return (
        <span key={idx} className="text-violet-600 dark:text-violet-300">
          {tok}
        </span>
      );
    }
    return <span key={idx}>{tok}</span>;
  });
};

type ReactBrandCardProps = { caption: string };

const ReactBrandCard = ({ caption }: ReactBrandCardProps) => {
  const tone = toneTokens.sky;
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center gap-1 rounded-lg border',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)] px-md py-md',
        'overflow-hidden',
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 -z-0 opacity-60',
          'bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.18),transparent_60%)]',
          'dark:bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.25),transparent_60%)]',
        )}
      />
      <ReactAtomIcon className={cn('relative h-12 w-12', tone.text)} />
      <span className={cn('relative text-[10px] uppercase tracking-wider', tone.text)}>
        {caption}
      </span>
    </div>
  );
};
