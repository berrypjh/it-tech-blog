import { cn } from '@it-tech-blog/utils';

type Variant = 'element' | 'fiber';

type Props = {
  variant: Variant;
  label: string;
  code: string;
  badgeText?: string;
};

/**
 * Element/Fiber 객체 미리보기 카드. 어두운 navy 코드 패널을 포함한다.
 * - element: blue tone
 * - fiber: teal/mint tone
 */
export const ObjectPreviewCard = ({ variant, label, code, badgeText }: Props) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border-2 p-md min-w-0 h-full',
      'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      variant === 'element'
        ? 'border-sky-300/80 dark:border-sky-700/70'
        : 'border-teal-300/80 dark:border-teal-700/70',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <span
        className={cn(
          'inline-flex items-center gap-1.5 font-mono text-xsm font-bold tracking-tight',
          variant === 'element'
            ? 'text-sky-700 dark:text-sky-300'
            : 'text-teal-700 dark:text-teal-300',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-block w-2 h-2 rounded-full',
            variant === 'element' ? 'bg-sky-500 dark:bg-sky-400' : 'bg-teal-500 dark:bg-teal-400',
          )}
        />
        {label}
      </span>
      {badgeText && (
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono font-bold',
            variant === 'element'
              ? 'border-sky-200/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200'
              : 'border-teal-200/80 bg-teal-50 text-teal-700 dark:border-teal-800/70 dark:bg-teal-950/60 dark:text-teal-200',
          )}
        >
          {badgeText}
        </span>
      )}
    </header>

    <CodeBlock code={code} />
  </article>
);

const CodeBlock = ({ code }: { code: string }) => {
  const lines = code.split('\n');
  return (
    <pre
      className={cn(
        'overflow-hidden rounded-lg border border-slate-800 bg-slate-950',
        'px-sm py-sm font-mono text-[12.5px] leading-[1.65] text-slate-100',
        'shadow-[0_8px_24px_-12px_rgba(15,23,42,0.65)]',
        'overflow-x-auto',
      )}
    >
      <code className="block">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span
              aria-hidden="true"
              className="select-none w-6 shrink-0 pr-2 text-right tabular-nums text-slate-600"
            >
              {i + 1}
            </span>
            <span className="whitespace-pre">{highlight(line)}</span>
          </div>
        ))}
      </code>
    </pre>
  );
};

const highlight = (line: string) => {
  const tokens = line.split(/(\s+|[{}():,]|'[^']*'|"[^"]*")/g);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (tok === '{' || tok === '}') {
      return (
        <span key={idx} className="text-fuchsia-300">
          {tok}
        </span>
      );
    }
    if (tok === ',' || tok === ':' || tok === '(' || tok === ')') {
      return (
        <span key={idx} className="text-slate-400">
          {tok}
        </span>
      );
    }
    if (/^['"][^'"]*['"]$/.test(tok)) {
      return (
        <span key={idx} className="text-emerald-300">
          {tok}
        </span>
      );
    }
    if (/^(null|true|false|undefined)$/.test(tok)) {
      return (
        <span key={idx} className="text-amber-200">
          {tok}
        </span>
      );
    }
    if (/^[A-Z][\w$]*$/.test(tok)) {
      return (
        <span key={idx} className="text-amber-200">
          {tok}
        </span>
      );
    }
    if (/^[a-zA-Z_$][\w$]*$/.test(tok)) {
      return (
        <span key={idx} className="text-sky-200">
          {tok}
        </span>
      );
    }
    return (
      <span key={idx} className="text-slate-300">
        {tok}
      </span>
    );
  });
};
