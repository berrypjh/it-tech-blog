import { cn } from '@it-tech-blog/utils';

type Props = {
  header: string;
  badge: string;
  code: string;
  language?: string;
};

/**
 * codes.json 같은 데이터 파일을 강조하기 위한 dark navy code panel.
 * 라이트/다크 테마와 무관하게 항상 어둡게 보인다(시각 강조).
 */
export const DarkCodePanel = ({ header, badge, code, language = 'json' }: Props) => {
  const lines = code.replace(/\n$/, '').split('\n');

  return (
    <div
      className={cn(
        'flex flex-col rounded-xl overflow-hidden border',
        'border-slate-700 bg-slate-900 text-slate-100',
        'shadow-[0_3px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-center gap-sm px-md py-2 border-b border-slate-700/70 bg-slate-950/60">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="truncate text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
          {header}
        </span>
        <span className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-sky-700/60 bg-sky-900/40 text-[10px] uppercase tracking-wider text-sky-200">
          <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400" />
          {badge}
        </span>
      </div>

      <pre className="overflow-x-auto px-md py-3 text-[12px] leading-[1.75] font-mono">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-7 shrink-0 pr-3 text-right text-slate-500 tabular-nums"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre">{highlight(line, language)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const JSON_DELIMITERS = /(\s+|[{}[\]:,])/;
const JS_DELIMITERS = /(\s+|[(){}[\];,.<>/=])/;

const JS_KEYWORDS = new Set([
  'import',
  'from',
  'export',
  'function',
  'return',
  'const',
  'let',
  'var',
  'if',
  'else',
  'new',
  'throw',
  'true',
  'false',
  'null',
  'undefined',
  'as',
  'default',
]);

const highlight = (line: string, language: string): React.ReactNode => {
  if (language === 'json') return highlightJson(line);
  if (language === 'tsx' || language === 'jsx' || language === 'ts' || language === 'js') {
    return highlightJs(line);
  }
  return <span>{line}</span>;
};

const highlightJson = (line: string): React.ReactNode => {
  const tokens = line.split(JSON_DELIMITERS);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (/^"[^"]*"$/.test(tok)) {
      const next = tokens.slice(idx + 1).find((t) => t.trim() !== '');
      if (next === ':') {
        return (
          <span key={idx} className="text-cyan-300">
            {tok}
          </span>
        );
      }
      return (
        <span key={idx} className="text-lime-300">
          {tok}
        </span>
      );
    }
    if (tok === ':' || tok === ',') {
      return (
        <span key={idx} className="text-slate-400">
          {tok}
        </span>
      );
    }
    if (tok === '{' || tok === '}' || tok === '[' || tok === ']') {
      return (
        <span key={idx} className="text-slate-300">
          {tok}
        </span>
      );
    }
    return <span key={idx}>{tok}</span>;
  });
};

const highlightJs = (line: string): React.ReactNode => {
  const tokens = line.split(JS_DELIMITERS);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (JS_KEYWORDS.has(tok)) {
      return (
        <span key={idx} className="text-violet-300">
          {tok}
        </span>
      );
    }
    if (/^['"`].*['"`]$/.test(tok)) {
      return (
        <span key={idx} className="text-lime-300">
          {tok}
        </span>
      );
    }
    if (/^[A-Z][A-Za-z0-9_]*$/.test(tok)) {
      return (
        <span key={idx} className="text-amber-200">
          {tok}
        </span>
      );
    }
    if (/^\d+$/.test(tok)) {
      return (
        <span key={idx} className="text-orange-300">
          {tok}
        </span>
      );
    }
    if (/[<>/=]/.test(tok)) {
      return (
        <span key={idx} className="text-sky-300">
          {tok}
        </span>
      );
    }
    return <span key={idx}>{tok}</span>;
  });
};
