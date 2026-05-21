import { cn } from '@it-tech-blog/utils';

type Props = {
  header: string;
  badge: string;
  caption: string;
  code: string;
};

/**
 * ReactClient.js 같은 React 소스코드 발췌를 보여주는 코드 에디터 패널.
 * 헤더에 파일 경로 / branch pill / 보조 caption을 둔다.
 */
export const CodeEditorPanel = ({ header, badge, caption, code }: Props) => {
  const lines = code.replace(/\n$/, '').split('\n');

  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border bg-[var(--term-surface)] overflow-hidden',
        'border-[var(--term-border)] shadow-[0_3px_0_var(--term-border)]',
      )}
    >
      {/* macOS dots + tabs */}
      <div className="flex items-center gap-sm px-md py-2 border-b border-dashed border-[var(--term-border)] bg-[var(--term-bg)]">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span
          className={cn(
            'truncate text-[11px] font-mono px-2 py-0.5 rounded',
            'bg-[var(--term-surface)] text-[var(--term-fg)] border border-[var(--term-border)]',
          )}
        >
          {header}
        </span>
        <span className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-sky-200 bg-sky-50 text-[10px] uppercase tracking-wider text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200">
          <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" />
          {badge}
        </span>
      </div>

      {/* 캡션 */}
      <div className="px-md py-1.5 border-b border-dashed border-[var(--term-border)]">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {caption}
        </span>
      </div>

      <pre className="overflow-x-auto px-md py-3 text-[12px] leading-[1.7] font-mono text-[var(--term-fg)]">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-7 shrink-0 pr-3 text-right text-[var(--term-dim)] tabular-nums"
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

const KEYWORDS = new Set(['import', 'export', 'from', 'as', 'function', 'const', 'let', 'return']);

const highlight = (line: string): React.ReactNode => {
  if (line.trim().startsWith('//')) {
    return <span className="text-[var(--term-dim)] italic">{line}</span>;
  }

  const tokens = line.split(/(\s+|[{}();,])/);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (KEYWORDS.has(tok)) {
      return (
        <span key={idx} className="text-sky-600 dark:text-sky-300">
          {tok}
        </span>
      );
    }
    if (/^['"`].*['"`]$/.test(tok)) {
      return (
        <span key={idx} className="text-emerald-700 dark:text-emerald-300">
          {tok}
        </span>
      );
    }
    if (/^[A-Z][A-Za-z0-9_]*$/.test(tok)) {
      return (
        <span key={idx} className="text-amber-700 dark:text-amber-200">
          {tok}
        </span>
      );
    }
    if (tok === '*' || tok === '=') {
      return (
        <span key={idx} className="text-violet-600 dark:text-violet-300">
          {tok}
        </span>
      );
    }
    return <span key={idx}>{tok}</span>;
  });
};
