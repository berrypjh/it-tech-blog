import { cx } from '@berrypjh/react-ui';
import { Clock3, Layers, Zap } from 'lucide-react';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { AxisAccent, AxisCard, ThreePriorityAxesContent } from '../content';

type Props = { content: ThreePriorityAxesContent['hero']; className?: string };

/** AxisAccent → 가장 가까운 공유 ToneKey. */
const accentTone: Record<AxisAccent, ToneKey> = {
  blue: 'blue',
  teal: 'teal',
  violet: 'violet',
};

const axisIcon: Record<AxisAccent, typeof Zap> = {
  blue: Zap,
  teal: Layers,
  violet: Clock3,
};

/**
 * Hero 핵심 비주얼.
 * Event Priority → Lane → Scheduler Priority 세 우선순위 축을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const PriorityAxesHeroDiagram = ({ content, className }: Props) => {
  const a11y = content.axes.map((a) => `${a.label}: ${a.title}`).join(' → ');

  return (
    <div
      className={cx(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {content.axes.map((axis, i) => (
          <li key={axis.key} className="flex flex-col gap-sm">
            <AxisCardRow axis={axis} />
            {i < content.axes.length - 1 && <DownArrow />}
          </li>
        ))}
      </ol>
    </div>
  );
};

const AxisCardRow = ({ axis }: { axis: AxisCard }) => {
  const tone = accentTone[axis.accent];
  const t = toneTokens[tone];
  const Icon = axisIcon[axis.accent];

  return (
    <article
      className={cx(
        'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-[18px] w-[18px]" />
        </ToneIconBox>
        <div className="flex min-w-0 flex-col">
          <span className={cx('text-[10px] font-mono font-bold uppercase tracking-wider', t.text)}>
            {axis.label}
          </span>
          <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {axis.title}
          </h3>
        </div>
        <span
          className={cx(
            'ml-auto shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full',
            'border border-[var(--term-border)] text-[11px] font-mono font-bold tabular-nums',
            t.text,
          )}
        >
          {axis.number}
        </span>
      </header>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {axis.subtitle}
      </p>

      <span className="w-fit rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-0.5 font-mono text-[10px] leading-none text-[var(--term-muted)] break-keep">
        {axis.examplePill}
      </span>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
