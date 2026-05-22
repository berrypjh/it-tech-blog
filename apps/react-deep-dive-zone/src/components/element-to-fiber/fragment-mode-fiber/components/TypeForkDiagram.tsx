import { cn } from '@it-tech-blog/utils';

import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GroupIcon,
  HexagonIcon,
  ShieldCheckIcon,
  TypeIcon,
} from '../icons';

type Props = {
  typeLabel: string;
  fragmentTitle: string;
  fragmentSubtitle: string;
  fragmentResultTitle: string;
  fragmentResultItems: string[];
  strictTitle: string;
  strictSubtitle: string;
  modeResultTitle: string;
  modeResultItems: string[];
};

/**
 * Hero 우측: type → (Fragment / StrictMode) → (Fragment Fiber / Mode Fiber)
 * - lg+: 5열 grid (type / →/ branch-type / →/ result-fiber) × 2행
 * - mobile: 세로 스택, ↓ 화살표
 */
export const TypeForkDiagram = ({
  typeLabel,
  fragmentTitle,
  fragmentSubtitle,
  fragmentResultTitle,
  fragmentResultItems,
  strictTitle,
  strictSubtitle,
  modeResultTitle,
  modeResultItems,
}: Props) => (
  <>
    {/* Desktop: + grid */}
    <div
      className={cn(
        'hidden lg:grid items-stretch min-w-0',
        'grid-cols-[minmax(0,_0.75fr)_auto_minmax(0,_0.95fr)_auto_minmax(0,_1.25fr)]',
        'gap-md',
      )}
    >
      {/* col1: type spans rows */}
      <div className="row-span-2 self-center">
        <TypeStartCard label={typeLabel} />
      </div>

      {/* row 1: → / Fragment branch / → / Fragment Fiber */}
      <Arrow tone="purple" />
      <BranchCard tone="purple" title={fragmentTitle} subtitle={fragmentSubtitle} />
      <Arrow tone="purple" solid />
      <ResultCard tone="purple" title={fragmentResultTitle} items={fragmentResultItems} />

      {/* row 2: → / StrictMode branch / → / Mode Fiber */}
      <Arrow tone="emerald" />
      <BranchCard tone="emerald" title={strictTitle} subtitle={strictSubtitle} />
      <Arrow tone="emerald" solid />
      <ResultCard tone="emerald" title={modeResultTitle} items={modeResultItems} />
    </div>

    {/* Mobile/tablet stack */}
    <div className="lg:hidden flex flex-col gap-sm">
      <TypeStartCard label={typeLabel} />
      <DownArrow tone="purple" />
      <BranchCard tone="purple" title={fragmentTitle} subtitle={fragmentSubtitle} />
      <DownArrow tone="purple" solid />
      <ResultCard tone="purple" title={fragmentResultTitle} items={fragmentResultItems} />
      <DownArrow tone="emerald" />
      <BranchCard tone="emerald" title={strictTitle} subtitle={strictSubtitle} />
      <DownArrow tone="emerald" solid />
      <ResultCard tone="emerald" title={modeResultTitle} items={modeResultItems} />
    </div>

    <p className="sr-only">
      type은 Fragment와 StrictMode 두 가지 특수 타입으로 분기됩니다. Fragment는
      REACT_FRAGMENT_TYPE을 거쳐 Fragment Fiber가 되고, StrictMode는 REACT_STRICT_MODE_TYPE을 거쳐
      Mode Fiber가 됩니다.
    </p>
  </>
);

const TypeStartCard = ({ label }: { label: string }) => (
  <article
    className={cn(
      'flex items-center gap-sm rounded-2xl border-2 p-md min-w-0',
      'bg-gradient-to-br from-sky-50 to-white',
      'dark:from-sky-950/30 dark:to-[var(--term-bg)]',
      'border-sky-400 dark:border-sky-500/70',
      'shadow-[0_10px_28px_-14px_rgba(2,132,199,0.55)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
        'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
      )}
    >
      <TypeIcon className="h-6 w-6" />
    </span>
    <div className="flex flex-col min-w-0">
      <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-sky-700/80 dark:text-sky-300/80">
        input
      </span>
      <code className="font-mono text-xl font-extrabold tracking-tight text-sky-800 dark:text-sky-100">
        {label}
      </code>
    </div>
  </article>
);

const BranchCard = ({
  tone,
  title,
  subtitle,
}: {
  tone: 'purple' | 'emerald';
  title: string;
  subtitle: string;
}) => {
  const isFragment = tone === 'purple';
  const Icon = isFragment ? GroupIcon : ShieldCheckIcon;
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-2xl border-2 p-md min-w-0',
        isFragment
          ? 'border-violet-400 bg-violet-50/70 dark:border-violet-500/70 dark:bg-violet-950/30'
          : 'border-emerald-400 bg-emerald-50/70 dark:border-emerald-500/70 dark:bg-emerald-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
          isFragment
            ? 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950'
            : 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col min-w-0">
        <code
          className={cn(
            'font-mono text-sm sm:text-md font-extrabold tracking-tight',
            isFragment
              ? 'text-violet-800 dark:text-violet-100'
              : 'text-emerald-800 dark:text-emerald-100',
          )}
        >
          {title}
        </code>
        <code
          className={cn(
            'font-mono text-[11px]',
            isFragment
              ? 'text-violet-700/80 dark:text-violet-300/80'
              : 'text-emerald-700/80 dark:text-emerald-300/80',
          )}
        >
          {subtitle}
        </code>
      </div>
    </article>
  );
};

const ResultCard = ({
  tone,
  title,
  items,
}: {
  tone: 'purple' | 'emerald';
  title: string;
  items: string[];
}) => {
  const isFragment = tone === 'purple';
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 p-md min-w-0',
        'bg-[var(--term-bg)]',
        isFragment
          ? 'border-violet-400 dark:border-violet-500/70 shadow-[0_10px_24px_-12px_rgba(139,92,246,0.45)]'
          : 'border-emerald-400 dark:border-emerald-500/70 shadow-[0_10px_24px_-12px_rgba(16,185,129,0.45)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
            isFragment
              ? 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950'
              : 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
          )}
        >
          <HexagonIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span
            className={cn(
              'text-[10px] uppercase tracking-wider font-mono font-bold',
              isFragment
                ? 'text-violet-700/80 dark:text-violet-300/80'
                : 'text-emerald-700/80 dark:text-emerald-300/80',
            )}
          >
            result fiber
          </span>
          <code
            className={cn(
              'font-mono text-md font-extrabold tracking-tight',
              isFragment
                ? 'text-violet-800 dark:text-violet-100'
                : 'text-emerald-800 dark:text-emerald-100',
            )}
          >
            {title}
          </code>
        </div>
      </header>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-2 rounded-lg border px-sm py-2',
              isFragment
                ? 'border-violet-200/80 bg-white dark:border-violet-800/60 dark:bg-[var(--term-bg)]'
                : 'border-emerald-200/80 bg-white dark:border-emerald-800/60 dark:bg-[var(--term-bg)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5',
                isFragment
                  ? 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950'
                  : 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
              )}
            >
              <CheckCircleIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep font-bold">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const toneArrow = {
  purple: {
    solid: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
    dotted:
      'bg-white border-2 border-dashed border-violet-400 text-violet-700 dark:bg-[var(--term-bg)] dark:border-violet-500/70 dark:text-violet-200',
  },
  emerald: {
    solid: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
    dotted:
      'bg-white border-2 border-dashed border-emerald-400 text-emerald-700 dark:bg-[var(--term-bg)] dark:border-emerald-500/70 dark:text-emerald-200',
  },
} as const;

const Arrow = ({ tone, solid = false }: { tone: 'purple' | 'emerald'; solid?: boolean }) => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-full',
        solid ? toneArrow[tone].solid : toneArrow[tone].dotted,
      )}
    >
      <ArrowRightIcon className="h-4 w-4" />
    </span>
  </div>
);

const DownArrow = ({ tone, solid = false }: { tone: 'purple' | 'emerald'; solid?: boolean }) => (
  <div className="flex items-center justify-center py-1" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-full',
        solid ? toneArrow[tone].solid : toneArrow[tone].dotted,
      )}
    >
      <ArrowDownIcon className="h-4 w-4" />
    </span>
  </div>
);
