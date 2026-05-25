import { cn } from '@it-tech-blog/utils';

type Props = {
  code: string;
  fileLabel?: string;
  language?: string;
  withLineNumbers?: boolean;
  variant?: 'dark' | 'light';
  className?: string;
};

const KEYWORDS = new Set([
  'const',
  'let',
  'function',
  'return',
  'import',
  'from',
  'export',
  'default',
]);
const LITERALS = new Set(['null', 'undefined', 'true', 'false']);

const renderToken = (tok: string, variant: 'dark' | 'light', i: number) => {
  if (!tok) return null;
  const dark = variant === 'dark';
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className={dark ? 'text-violet-300' : 'text-violet-600'}>
        {tok}
      </span>
    );
  if (LITERALS.has(tok))
    return (
      <span key={i} className={dark ? 'text-amber-200' : 'text-amber-700'}>
        {tok}
      </span>
    );
  if (
    tok === 'hydrateRoot' ||
    tok === 'enterHydrationState' ||
    tok === 'getFirstHydratableChildWithinContainer' ||
    tok === 'getElementById'
  )
    return (
      <span key={i} className={dark ? 'text-amber-200' : 'text-amber-700'}>
        {tok}
      </span>
    );
  if (
    tok === 'nextHydratableInstance' ||
    tok === 'hydrationParentFiber' ||
    tok === 'isHydrating' ||
    tok === 'hydrationErrors' ||
    tok === 'parentInstance' ||
    tok === 'fiber' ||
    tok === 'stateNode' ||
    tok === 'containerInfo' ||
    tok === 'document' ||
    tok === 'App'
  )
    return (
      <span key={i} className={dark ? 'text-cyan-200' : 'text-blue-600'}>
        {tok}
      </span>
    );
  if (tok === 'div' || tok === 'button' || tok === 'h1')
    return (
      <span key={i} className={dark ? 'text-rose-300' : 'text-rose-600'}>
        {tok}
      </span>
    );
  if (tok === 'id' || tok === 'class')
    return (
      <span key={i} className={dark ? 'text-emerald-300' : 'text-emerald-600'}>
        {tok}
      </span>
    );
  if ((tok.startsWith('"') && tok.endsWith('"')) || (tok.startsWith("'") && tok.endsWith("'")))
    return (
      <span key={i} className={dark ? 'text-emerald-300' : 'text-emerald-700'}>
        {tok}
      </span>
    );
  if (tok.startsWith('#text'))
    return (
      <span key={i} className={dark ? 'text-slate-500 italic' : 'text-slate-500 italic'}>
        {tok}
      </span>
    );
  return (
    <span key={i} className={dark ? 'text-slate-200' : 'text-slate-700'}>
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
  withLineNumbers = true,
  variant = 'dark',
  className,
}: Props) => {
  const lines = code.split('\n');
  const dark = variant === 'dark';
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border',
        dark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50',
        className,
      )}
    >
      {fileLabel && (
        <div
          className={cn(
            'flex items-center justify-between gap-2 border-b px-3 py-2',
            dark ? 'border-slate-800' : 'border-slate-200',
          )}
        >
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-rose-400/80" />
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
            <span
              className={cn(
                'ml-2 text-[10px] font-mono uppercase tracking-wider',
                dark ? 'text-slate-500' : 'text-slate-500',
              )}
            >
              {fileLabel}
            </span>
          </div>
          <span
            className={cn(
              'text-[10px] font-mono uppercase tracking-wider',
              dark ? 'text-slate-500' : 'text-slate-500',
            )}
          >
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
                    className={cn(
                      'select-none w-7 shrink-0 pr-3 text-right tabular-nums',
                      dark ? 'text-slate-600' : 'text-slate-400',
                    )}
                  >
                    {i + 1}
                  </span>
                )}
                <span className="whitespace-pre">
                  {tokens.map((tok, j) => renderToken(tok, variant, j))}
                </span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
};
