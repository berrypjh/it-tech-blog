import { cn } from '@it-tech-blog/utils';

import type { WhySourceContent } from '../content';
import { ArrowLoopIcon } from '../icons';
import { toneTokens } from '../tones';

type Props = {
  categories: WhySourceContent['hero']['flowCategories'];
  stages: WhySourceContent['hero']['flowStages'];
  loop: string;
};

export const FlowDiagram = ({ categories, stages, loop }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full',
        'rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)]',
        'p-md sm:p-lg',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      {/* 상단 분류 pill 4개 */}
      <ul className="flex flex-wrap gap-1.5 sm:gap-2 mb-md">
        {categories.map((cat) => {
          const t = toneTokens[cat.tone];
          return (
            <li key={cat.id}>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-medium',
                  t.chip,
                )}
              >
                <span
                  className={cn('inline-block w-1.5 h-1.5 rounded-full', t.dot)}
                  aria-hidden="true"
                />
                {cat.label}
              </span>
            </li>
          );
        })}
      </ul>

      {/* 메인 플로우 6단계: 데스크톱은 6열, 태블릿/모바일은 wrap */}
      <ol className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-1">
        {stages.map((stage, idx) => {
          const t = toneTokens[stage.tone];
          const isLastInRow = idx === stages.length - 1;
          return (
            <li key={stage.id} className="relative flex flex-col">
              <div
                className={cn(
                  'group flex flex-col items-center text-center',
                  'rounded-md border bg-[var(--term-surface)]',
                  'px-2 py-3 transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                  t.borderHover,
                )}
              >
                <span
                  className={cn(
                    'inline-flex items-center justify-center w-9 h-9 rounded border',
                    'mb-1.5 text-xsm font-bold',
                    t.chip,
                  )}
                  aria-hidden="true"
                >
                  {stage.label.slice(0, 1)}
                </span>
                <p className={cn('text-xsm font-bold', t.text)}>{stage.label}</p>
                <p className="mt-1 text-[10px] leading-snug text-[var(--term-muted)] break-keep">
                  {stage.hint}
                </p>
              </div>

              {/* 단계 사이 화살표: sm 이상에서만 표시 */}
              {!isLastInRow && (
                <span
                  aria-hidden="true"
                  className="hidden sm:flex absolute top-1/2 -right-1 -translate-y-1/2 text-[var(--term-dim)] text-[10px] z-10"
                >
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* 하단 반복 흐름 표시 */}
      <div className="mt-md flex items-center gap-sm">
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] text-[var(--term-muted)]">
          <ArrowLoopIcon className="h-3 w-3 text-[var(--term-accent)]" />
          {loop}
        </span>
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      </div>
    </div>
  );
};
