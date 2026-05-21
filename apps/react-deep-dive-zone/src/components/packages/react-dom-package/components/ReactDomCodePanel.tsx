import { cn } from '@it-tech-blog/utils';

type Props = {
  caption: string;
  code: string;
  primaryLabel: string;
  secondaryLabel: string;
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
  'if',
  'else',
  'true',
  'false',
  'null',
  'new',
  'throw',
  'default',
]);

/**
 * react-dom 페이지용 dark navy 코드 패널.
 * 라이트 하이라이팅 + 상단 dot + 하단 버튼 바.
 */
export const ReactDomCodePanel = ({
  caption,
  code,
  primaryLabel,
  secondaryLabel,
  className,
}: Props) => {
  const lines = code.split('\n');

  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border overflow-hidden h-full',
        'border-slate-800 bg-slate-950 text-slate-100',
        'shadow-[0_4px_0_var(--term-border)]',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-sm px-md py-2 border-b border-slate-800 bg-slate-900">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 truncate">
          {caption}
        </span>
      </div>

      <pre
        className={cn(
          'flex-1 overflow-auto px-md py-md text-[11.5px] sm:text-[12px] leading-[1.65] font-mono',
          'max-h-[460px]',
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

      <div className="flex flex-col sm:flex-row gap-2 px-md py-3 border-t border-slate-800 bg-slate-900">
        <button
          type="button"
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-md px-md py-2 text-xsm font-bold',
            'bg-teal-500 text-slate-950 transition-colors hover:bg-teal-400',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
          )}
        >
          {primaryLabel}
        </button>
        <button
          type="button"
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-md px-md py-2 text-xsm font-bold',
            'border border-slate-600 text-slate-100 bg-transparent transition-colors hover:border-slate-300 hover:text-white',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
          )}
        >
          {secondaryLabel}
        </button>
      </div>
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
    if (/^[A-Z][A-Za-z0-9_$]*$/.test(tok)) {
      return (
        <span key={idx} className="text-cyan-300">
          {tok}
        </span>
      );
    }
    if (/^(create|hydrate|isValidContainer|render)[A-Za-z]*$/.test(tok)) {
      return (
        <span key={idx} className="text-teal-300">
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
