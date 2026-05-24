import { cn } from '@it-tech-blog/utils';

type Props = {
  caption: string;
  code: string;
  className?: string;
};

const KEYWORDS = new Set([
  'import',
  'export',
  'from',
  'const',
  'let',
  'var',
  'function',
  'return',
  'true',
  'false',
  'null',
  'default',
]);

const SYMBOL_NAMES = new Set([
  'REACT_FRAGMENT_TYPE',
  'REACT_SUSPENSE_TYPE',
  'REACT_PROVIDER_TYPE',
  'REACT_CONTEXT_TYPE',
  'REACT_FORWARD_REF_TYPE',
  'REACT_MEMO_TYPE',
  'REACT_PORTAL_TYPE',
]);

/**
 * shared 페이지에서 두 곳(ReactSymbols.js / ReactClient.js import)에서 공유하는 dark navy 코드 패널.
 * footer 버튼은 외부 섹션에서 따로 둔다.
 */
export const SharedCodePanel = ({ caption, code, className }: Props) => {
  const lines = code.split('\n');

  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border overflow-hidden h-full',
        'border-slate-800 bg-slate-950 text-slate-100',
        'shadow-[0_4px_0_var(--term-border)] transition-shadow hover:shadow-[0_6px_0_var(--term-border)]',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-sm px-md py-2 border-b border-slate-800 bg-slate-900">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 truncate">
            {caption}
          </span>
          <span
            className={cn(
              'inline-flex items-center rounded-md border border-cyan-500/60 bg-cyan-500/15 px-1.5 py-0.5',
              'text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-200',
            )}
          >
            js
          </span>
        </div>
      </div>

      <pre
        className={cn(
          'flex-1 overflow-auto px-md py-md text-[11.5px] sm:text-[12px] leading-[1.65] font-mono',
          'max-h-[520px]',
        )}
      >
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
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

const highlight = (line: string): React.ReactNode => {
  const commentMatch = line.match(/^(\s*)(\/\/.*)$/);
  if (commentMatch) {
    return (
      <>
        <span>{commentMatch[1]}</span>
        <span className="text-emerald-400/80 italic">{commentMatch[2]}</span>
      </>
    );
  }

  const tokens = line.split(/(\s+|[(){}[\];,.])/);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (/^['"`].*['"`]$/.test(tok)) {
      return (
        <span key={idx} className="text-amber-300">
          {tok}
        </span>
      );
    }
    if (KEYWORDS.has(tok)) {
      return (
        <span key={idx} className="text-pink-400">
          {tok}
        </span>
      );
    }
    if (SYMBOL_NAMES.has(tok)) {
      return (
        <span key={idx} className="text-violet-300 font-bold">
          {tok}
        </span>
      );
    }
    if (/^Symbol$/.test(tok)) {
      return (
        <span key={idx} className="text-cyan-300">
          {tok}
        </span>
      );
    }
    if (/^[A-Z][A-Za-z0-9_$]*$/.test(tok)) {
      return (
        <span key={idx} className="text-cyan-300">
          {tok}
        </span>
      );
    }
    if (/^[a-z_$][\w$]*$/.test(tok)) {
      return (
        <span key={idx} className="text-slate-100">
          {tok}
        </span>
      );
    }
    return (
      <span key={idx} className="text-slate-400">
        {tok}
      </span>
    );
  });
};
