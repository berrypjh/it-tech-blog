import { cn } from '@it-tech-blog/utils';

type Props = {
  code: string;
  fileLabel?: string;
  language?: string;
  variant?: 'dark' | 'subtle';
  withLineNumbers?: boolean;
  className?: string;
};

const KEYWORDS = new Set([
  'const',
  'let',
  'function',
  'if',
  'else',
  'return',
  'throw',
  'new',
  'typeof',
  'export',
]);
const LITERALS = new Set(['null', 'undefined', 'true', 'false']);
const STRINGS = /^(['"`]).*\1$/;

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (LITERALS.has(tok))
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'Error' || tok === 'value' || tok === 'wakeable' || tok === 'promise')
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'then' || tok === 'fetchData')
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (STRINGS.test(tok))
    return (
      <span key={i} className="text-rose-300">
        {tok}
      </span>
    );
  if (tok.startsWith('//'))
    return (
      <span key={i} className="text-slate-500 italic">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

const tokenize = (line: string) => {
  if (line.trim().startsWith('//')) return [line];
  return line.split(/(\s+|[(){}[\];,.<>=!?])/);
};

export const CodeBlock = ({
  code,
  fileLabel,
  language = 'ts',
  variant = 'dark',
  withLineNumbers = true,
  className,
}: Props) => {
  const lines = code.split('\n');
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border',
        variant === 'dark' ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50',
        className,
      )}
    >
      {fileLabel && (
        <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-rose-400/80" />
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
              {fileLabel}
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
            {language}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto px-3 py-3 text-[11.5px] sm:text-xsm leading-[1.7] font-mono">
        <code>
          {lines.map((line, i) => {
            const tokens = tokenize(line);
            return (
              <div key={i} className="flex">
                {withLineNumbers && (
                  <span
                    aria-hidden="true"
                    className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                  >
                    {i + 1}
                  </span>
                )}
                <span className="whitespace-pre">{tokens.map(renderToken)}</span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
};
