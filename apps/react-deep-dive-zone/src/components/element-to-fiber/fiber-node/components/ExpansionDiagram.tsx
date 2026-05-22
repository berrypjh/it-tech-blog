import { cn } from '@it-tech-blog/utils';

import { ArrowDownIcon, ArrowRightIcon, BoxIcon, HexagonIcon } from '../icons';

type Props = {
  elementTitle: string;
  elementFields: string[];
  fiberTitle: string;
  fiberFields: string[];
  /** sm: Hero용 컴팩트, md: 본문 시각화용 */
  size?: 'sm' | 'md';
};

/**
 * Element 작은 객체 카드 → 화살표 → Fiber 큰 객체 카드 다이어그램.
 * Element는 emerald, Fiber는 violet, 화살표는 sky.
 */
export const ExpansionDiagram = ({
  elementTitle,
  elementFields,
  fiberTitle,
  fiberFields,
  size = 'sm',
}: Props) => (
  <>
    <div
      className={cn(
        'grid items-stretch min-w-0',
        'grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_auto_minmax(0,_1.4fr)]',
        'gap-sm lg:gap-md',
      )}
    >
      <ElementCard title={elementTitle} fields={elementFields} size={size} />
      <ExpansionArrow />
      <FiberCard title={fiberTitle} fields={fiberFields} size={size} />
    </div>
    <p className="sr-only">
      Element는 type, key, props 세 가지 필드만 가지지만, Fiber는 그 위에 트리 구조(child / sibling
      / return), 업데이트 상태(memoizedState, updateQueue 등), 작업 상태(flags, lanes 등), alternate
      등 훨씬 많은 필드를 추가로 가집니다.
    </p>
  </>
);

const ElementCard = ({
  title,
  fields,
  size,
}: {
  title: string;
  fields: string[];
  size: 'sm' | 'md';
}) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border-2 min-w-0 h-full',
      'border-emerald-400 bg-emerald-50/60',
      'dark:border-emerald-500/70 dark:bg-emerald-950/30',
      'shadow-[0_8px_22px_-12px_rgba(16,185,129,0.55)]',
      size === 'sm' ? 'p-md' : 'p-md sm:p-lg',
    )}
  >
    <header className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
          'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
        )}
      >
        <BoxIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-emerald-700/80 dark:text-emerald-300/80">
          source
        </span>
        <code
          className={cn(
            'font-mono font-extrabold tracking-tight text-emerald-800 dark:text-emerald-100',
            size === 'sm' ? 'text-md' : 'text-lg',
          )}
        >
          {title}
        </code>
      </div>
    </header>

    <CodeBlock fields={fields} variant="emerald" />
  </article>
);

const FiberCard = ({
  title,
  fields,
  size,
}: {
  title: string;
  fields: string[];
  size: 'sm' | 'md';
}) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border-2 min-w-0 h-full',
      'border-violet-400 bg-violet-50/60',
      'dark:border-violet-500/70 dark:bg-violet-950/30',
      'shadow-[0_8px_22px_-12px_rgba(139,92,246,0.55)]',
      size === 'sm' ? 'p-md' : 'p-md sm:p-lg',
    )}
  >
    <header className="flex items-center justify-between gap-sm">
      <div className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
            'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
          )}
        >
          <HexagonIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-violet-700/80 dark:text-violet-300/80">
            expanded
          </span>
          <code
            className={cn(
              'font-mono font-extrabold tracking-tight text-violet-800 dark:text-violet-100',
              size === 'sm' ? 'text-md' : 'text-lg',
            )}
          >
            {title}
          </code>
        </div>
      </div>
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5',
          'text-[10px] font-bold uppercase tracking-wider font-mono',
          'border-violet-300/80 bg-white text-violet-700',
          'dark:border-violet-700/60 dark:bg-[var(--term-bg)] dark:text-violet-200',
        )}
      >
        {fields.length} fields
      </span>
    </header>

    <CodeBlock fields={fields} variant="violet" columns />
  </article>
);

const ExpansionArrow = () => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <div className="flex flex-col items-center gap-1">
      <span
        className={cn(
          'inline-flex items-center justify-center rounded-full w-12 h-12',
          'bg-gradient-to-br from-sky-500 to-sky-600 text-white',
          'dark:from-sky-400 dark:to-sky-500 dark:text-slate-950',
          'shadow-[0_10px_24px_-10px_rgba(2,132,199,0.55)]',
        )}
      >
        <span className="contents">
          <ArrowDownIcon className="h-5 w-5 lg:hidden" />
          <ArrowRightIcon className="h-5 w-5 hidden lg:block" />
        </span>
      </span>
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5',
          'text-[10px] font-bold uppercase tracking-wider font-mono',
          'border-sky-300/80 bg-sky-50 text-sky-700',
          'dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
        )}
      >
        expand
      </span>
    </div>
  </div>
);

/**
 * 객체 형태의 navy 코드 블록.
 * - emerald: 작은 한 줄씩 (Element용)
 * - violet + columns: 2열 (Fiber용)
 */
const CodeBlock = ({
  fields,
  variant,
  columns = false,
}: {
  fields: string[];
  variant: 'emerald' | 'violet';
  columns?: boolean;
}) => (
  <pre
    className={cn(
      'overflow-hidden rounded-lg border bg-slate-950',
      'px-sm py-sm font-mono text-[12.5px] leading-[1.65] text-slate-100',
      'shadow-[0_8px_24px_-12px_rgba(15,23,42,0.65)]',
      'border-slate-800',
    )}
  >
    <code className="block">
      <div className="flex">
        <span
          aria-hidden="true"
          className="select-none w-6 shrink-0 pr-2 text-right tabular-nums text-slate-600"
        >
          1
        </span>
        <span className="text-fuchsia-300">{'{'}</span>
      </div>
      <ul className={cn('pl-8 pr-1', columns ? 'grid grid-cols-2 gap-x-3' : 'flex flex-col')}>
        {fields.map((field, idx) => (
          <li key={field} className="flex">
            <span
              aria-hidden="true"
              className="select-none w-6 shrink-0 pr-2 text-right tabular-nums text-slate-600"
            >
              {idx + 2}
            </span>
            <span
              className={cn(
                'whitespace-pre',
                variant === 'emerald' ? 'text-emerald-200' : 'text-violet-200',
                'font-bold',
              )}
            >
              {field}
              <span className="text-slate-500">,</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex">
        <span
          aria-hidden="true"
          className="select-none w-6 shrink-0 pr-2 text-right tabular-nums text-slate-600"
        >
          {fields.length + 2}
        </span>
        <span className="text-fuchsia-300">{'}'}</span>
      </div>
    </code>
  </pre>
);
