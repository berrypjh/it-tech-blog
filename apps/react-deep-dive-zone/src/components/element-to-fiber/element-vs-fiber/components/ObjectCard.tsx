import { cn } from '@it-tech-blog/utils';

type Variant = 'element' | 'fiber';

type Props = {
  label: string;
  code: string;
  variant: Variant;
  caption: string;
};

/**
 * Hero 비주얼의 객체 카드. Element와 Fiber에 서로 다른 톤을 입힌다.
 * - element: 파란색 계열
 * - fiber: 민트/초록 계열
 */
export const ObjectCard = ({ label, code, variant, caption }: Props) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border-2 p-sm sm:p-md min-w-0',
      'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      variant === 'element'
        ? 'border-sky-300/80 dark:border-sky-700/70'
        : 'border-teal-300/80 dark:border-teal-700/70',
    )}
    aria-label={label}
  >
    <header className="flex items-center justify-between gap-2">
      <span
        className={cn(
          'inline-flex items-center gap-1.5 text-xsm font-bold tracking-tight font-mono',
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
      <span
        className={cn(
          'text-[10px] uppercase tracking-wider font-mono',
          variant === 'element'
            ? 'text-sky-700/80 dark:text-sky-300/80'
            : 'text-teal-700/80 dark:text-teal-300/80',
        )}
      >
        {caption}
      </span>
    </header>

    <ObjectCodeBlock code={code} />
  </article>
);

const ObjectCodeBlock = ({ code }: { code: string }) => {
  const lines = code.split('\n');
  return (
    <pre
      className={cn(
        'overflow-hidden rounded-lg border border-slate-800 bg-slate-950',
        'px-sm py-sm font-mono text-[12.5px] leading-[1.65] text-slate-100',
        'shadow-[0_8px_24px_-12px_rgba(15,23,42,0.65)]',
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
            <span className="whitespace-pre">{highlightLine(line)}</span>
          </div>
        ))}
      </code>
    </pre>
  );
};

const highlightLine = (line: string) => {
  const tokens = line.split(/(\s+|[{}(),])/g);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (tok === '{' || tok === '}') {
      return (
        <span key={idx} className="text-fuchsia-300">
          {tok}
        </span>
      );
    }
    if (tok === ',') {
      return (
        <span key={idx} className="text-slate-400">
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
