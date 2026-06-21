import { cn } from '@it-tech-blog/utils';

import { ArrowRight } from 'lucide-react';

import { type ToneKey, toneTokens } from '../tones';

export type FlowStepItem = {
  id: string;
  number: string;
  title: string;
  body: React.ReactNode;
  tone: ToneKey;
  icon: React.ReactNode;
};

type Columns = 2 | 3 | 4;

const columnClass: Record<Columns, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-[repeat(4,_minmax(0,_1fr))]',
};

type Props = {
  steps: FlowStepItem[];
  /** lg 이상에서의 열 수. 기본 4. */
  columns?: Columns;
  className?: string;
};

/**
 * "step N" 배지 + 아이콘 박스 카드들을 그리드로 잇는 공통 흐름 표시.
 * lg 이상에서 같은 행의 카드 사이(간격 중앙)에 액센트색 화살표 커넥터가 떠 있다.
 */
export const FlowStepsGrid = ({ steps, columns = 4, className }: Props) => (
  <ol
    className={cn(
      'grid grid-cols-1 sm:grid-cols-2 gap-md lg:gap-x-xl items-stretch',
      columnClass[columns],
      className,
    )}
  >
    {steps.map((step, idx) => {
      const showConnector = idx < steps.length - 1 && (idx + 1) % columns !== 0;
      return (
        <li key={step.id} className="relative flex min-w-0">
          <FlowStepCard step={step} />
          {showConnector && <StepConnector />}
        </li>
      );
    })}
  </ol>
);

const FlowStepCard = ({ step }: { step: FlowStepItem }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.border,
      )}
    >
      <header className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          <span className="font-mono tabular-nums">step {step.number}</span>
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl border',
            t.chip,
          )}
        >
          {step.icon}
        </span>
      </header>
      <h3
        className={cn(
          'text-sm font-bold tracking-tight break-keep [overflow-wrap:anywhere]',
          t.text,
        )}
      >
        {step.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep [overflow-wrap:anywhere]">
        {step.body}
      </p>
    </article>
  );
};

const StepConnector = () => (
  <span
    aria-hidden="true"
    className={cn(
      'pointer-events-none absolute z-10 hidden lg:flex items-center justify-center',
      'top-1/2 left-full ml-1 -translate-y-1/2 text-[var(--term-accent)]',
    )}
  >
    <ArrowRight className="h-4 w-4" />
  </span>
);
