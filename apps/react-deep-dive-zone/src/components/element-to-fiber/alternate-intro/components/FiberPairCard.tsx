import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberRole } from '../content';
import { CheckCircleIcon, MonitorIcon, WorkflowIcon } from '../icons';

const roleTone: Record<FiberRole, ToneKey> = {
  current: 'emerald',
  workInProgress: 'violet',
};

type Props = {
  variant: FiberRole;
  badge?: string;
  title: string;
  items: string[];
  /** 컴팩트 모드 (Hero에서 가로 폭 좁을 때) */
  compact?: boolean;
};

/**
 * current Fiber / workInProgress Fiber를 표현하는 카드.
 * - current: emerald
 * - workInProgress: violet
 */
export const FiberPairCard = ({ variant, badge, title, items, compact = false }: Props) => {
  const tone = roleTone[variant];
  const t = toneTokens[tone];
  const Icon = variant === 'current' ? MonitorIcon : WorkflowIcon;
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 min-w-0 h-full',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        compact ? 'p-md' : 'p-md sm:p-lg',
        t.fill.border,
      )}
    >
      {badge && (
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            t.chip,
          )}
        >
          {badge}
        </span>
      )}

      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="md">
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <code
          className={cn(
            'font-mono font-extrabold tracking-tight',
            compact ? 'text-sm' : 'text-md sm:text-lg',
            t.text,
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
              t.border,
              'bg-[var(--term-bg)]',
            )}
          >
            <CheckCircleIcon className={cn('h-4 w-4 shrink-0 mt-0.5', t.text)} aria-hidden="true" />
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
 * 색은 톤의 text 색(currentColor)을 따르고, 깊이에 따라 opacity로 농도를 준다.
 */
export const MiniFiberTree = ({ variant }: { variant: FiberRole }) => {
  const t = toneTokens[roleTone[variant]];
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl border p-md',
        t.border,
        'bg-[var(--term-bg)]',
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 100"
        className={cn('w-full h-24', t.text)}
        fill="currentColor"
        stroke="currentColor"
      >
        <Node cx={80} cy={20} />
        <Node cx={40} cy={60} opacity={0.8} />
        <Node cx={120} cy={60} opacity={0.8} />
        <Node cx={20} cy={88} r={6} opacity={0.55} />
        <Node cx={60} cy={88} r={6} opacity={0.55} />
        <Node cx={120} cy={88} r={6} opacity={0.55} />
        <Line x1={80} y1={20} x2={40} y2={60} />
        <Line x1={80} y1={20} x2={120} y2={60} />
        <Line x1={40} y1={60} x2={20} y2={88} />
        <Line x1={40} y1={60} x2={60} y2={88} />
        <Line x1={120} y1={60} x2={120} y2={88} />
      </svg>
    </div>
  );
};

const Node = ({
  cx,
  cy,
  r = 8,
  opacity = 1,
}: {
  cx: number;
  cy: number;
  r?: number;
  opacity?: number;
}) => <circle cx={cx} cy={cy} r={r} fillOpacity={opacity} />;

const Line = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity={0.45} strokeWidth={1.5} />
);
