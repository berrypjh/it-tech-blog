import { cn } from '@it-tech-blog/utils';

type Props = {
  caption: string;
  code: string;
  /** dark navy + JS 배지 색상 강조 */
  accent: 'teal' | 'violet';
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

export const MiniCodePanel = ({ caption, code, accent, className }: Props) => {
  const lines = code.split('\n');
  const accentClass =
    accent === 'teal'
      ? 'border-teal-500/60 bg-teal-500/15 text-teal-200'
      : 'border-violet-500/60 bg-violet-500/15 text-violet-200';

  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border overflow-hidden h-full',
        'border-slate-800 bg-slate-950 text-slate-100',
        'shadow-[0_3px_0_var(--term-border)]',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-sm px-md py-2 border-b border-slate-800 bg-slate-900">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 truncate">
            {caption}
          </span>
          <span
            className={cn(
              'inline-flex items-center rounded-md border px-1.5 py-0.5',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              accentClass,
            )}
          >
            js
          </span>
        </div>
      </div>

      <pre
        className={cn(
          'flex-1 overflow-auto px-md py-md text-[11px] sm:text-[11.5px] leading-[1.65] font-mono',
          'max-h-[360px]',
        )}
      >
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-6 shrink-0 pr-2 text-right text-slate-600 tabular-nums"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre">{highlight(line, accent)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const highlight = (line: string, accent: 'teal' | 'violet'): React.ReactNode => {
  const commentMatch = line.match(/^(\s*)(\/\/.*)$/);
  if (commentMatch) {
    return (
      <>
        <span>{commentMatch[1]}</span>
        <span className="text-emerald-400/80 italic">{commentMatch[2]}</span>
      </>
    );
  }

  const accentColor = accent === 'teal' ? 'text-teal-300' : 'text-violet-300';
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
    if (
      /^(createFiberFromElement|createFiberFromTypeAndProps|createRoot|isValidContainer|createContainer|ReactDOMRoot|ConcurrentRoot|Error)$/.test(
        tok,
      )
    ) {
      return (
        <span key={idx} className={cn('font-bold', accentColor)}>
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
