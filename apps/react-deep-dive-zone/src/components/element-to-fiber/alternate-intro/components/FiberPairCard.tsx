import { cn } from '@it-tech-blog/utils';

import { CheckCircleIcon, HexagonIcon, MonitorIcon, WorkflowIcon } from '../icons';

type Variant = 'current' | 'workInProgress';

type Props = {
  variant: Variant;
  badge?: string;
  title: string;
  items: string[];
  /** 컴팩트 모드 (Hero에서 가로 폭 좁을 때) */
  compact?: boolean;
};

/**
 * current Fiber / workInProgress Fiber를 표현하는 카드.
 * - current: emerald/mint
 * - workInProgress: violet
 */
export const FiberPairCard = ({ variant, badge, title, items, compact = false }: Props) => {
  const isCurrent = variant === 'current';
  const Icon = isCurrent ? MonitorIcon : WorkflowIcon;
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 min-w-0 h-full',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        compact ? 'p-md' : 'p-md sm:p-lg',
        isCurrent
          ? 'border-emerald-400 bg-emerald-50/60 dark:border-emerald-500/70 dark:bg-emerald-950/30'
          : 'border-violet-400 bg-violet-50/60 dark:border-violet-500/70 dark:bg-violet-950/30',
      )}
    >
      {badge && (
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            isCurrent
              ? 'border-emerald-300/80 bg-white text-emerald-700 dark:border-emerald-700/60 dark:bg-[var(--term-bg)] dark:text-emerald-200'
              : 'border-violet-300/80 bg-white text-violet-700 dark:border-violet-700/60 dark:bg-[var(--term-bg)] dark:text-violet-200',
          )}
        >
          {badge}
        </span>
      )}

      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
            isCurrent
              ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950'
              : 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
            'shadow-[0_8px_22px_-10px_rgba(0,0,0,0.35)]',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <code
          className={cn(
            'font-mono font-extrabold tracking-tight',
            compact ? 'text-sm' : 'text-md sm:text-lg',
            isCurrent
              ? 'text-emerald-800 dark:text-emerald-100'
              : 'text-violet-800 dark:text-violet-100',
          )}
        >
          {title}
        </code>
      </header>

      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-2 rounded-lg border px-sm py-2',
              isCurrent
                ? 'border-emerald-200/80 bg-white dark:border-emerald-800/60 dark:bg-[var(--term-bg)]'
                : 'border-violet-200/80 bg-white dark:border-violet-800/60 dark:bg-[var(--term-bg)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5',
                isCurrent
                  ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950'
                  : 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
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

/**
 * 카드 내부에 작은 노드 트리 다이어그램. pair 섹션에서 사용.
 */
export const MiniFiberTree = ({ variant }: { variant: Variant }) => {
  const isCurrent = variant === 'current';
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl border p-md',
        isCurrent
          ? 'border-emerald-200/80 bg-white dark:border-emerald-800/60 dark:bg-[var(--term-bg)]'
          : 'border-violet-200/80 bg-white dark:border-violet-800/60 dark:bg-[var(--term-bg)]',
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 160 100" className="w-full h-24">
        {/* Root */}
        <Node cx={80} cy={20} fill={isCurrent ? '#10b981' : '#8b5cf6'} />
        {/* Children */}
        <Node cx={40} cy={60} fill={isCurrent ? '#34d399' : '#a78bfa'} />
        <Node cx={120} cy={60} fill={isCurrent ? '#34d399' : '#a78bfa'} />
        {/* Grandchildren */}
        <Node cx={20} cy={88} r={6} fill={isCurrent ? '#6ee7b7' : '#c4b5fd'} />
        <Node cx={60} cy={88} r={6} fill={isCurrent ? '#6ee7b7' : '#c4b5fd'} />
        <Node cx={120} cy={88} r={6} fill={isCurrent ? '#6ee7b7' : '#c4b5fd'} />
        {/* Lines */}
        <Line x1={80} y1={20} x2={40} y2={60} isCurrent={isCurrent} />
        <Line x1={80} y1={20} x2={120} y2={60} isCurrent={isCurrent} />
        <Line x1={40} y1={60} x2={20} y2={88} isCurrent={isCurrent} />
        <Line x1={40} y1={60} x2={60} y2={88} isCurrent={isCurrent} />
        <Line x1={120} y1={60} x2={120} y2={88} isCurrent={isCurrent} />
      </svg>
    </div>
  );
};

const Node = ({ cx, cy, r = 8, fill }: { cx: number; cy: number; r?: number; fill: string }) => (
  <circle cx={cx} cy={cy} r={r} fill={fill} />
);

const Line = ({
  x1,
  y1,
  x2,
  y2,
  isCurrent,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  isCurrent: boolean;
}) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke={isCurrent ? '#10b981' : '#8b5cf6'}
    strokeOpacity={0.6}
    strokeWidth={1.5}
  />
);

/** Hero용 작은 hexagon decoration 묶음 */
export const PairBadge = ({ variant }: { variant: Variant }) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex items-center justify-center w-9 h-9 rounded-xl',
      variant === 'current'
        ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950'
        : 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
    )}
  >
    <HexagonIcon className="h-4 w-4" />
  </span>
);
