import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { WhySourceContent } from '../content';
import { ArrowLoopIcon } from '../icons';

type Props = {
  categories: WhySourceContent['hero']['flowCategories'];
  stages: WhySourceContent['hero']['flowStages'];
  loop: string;
};

export const FlowDiagram = ({ categories, stages, loop }: Props) => {
  return (
    <HeroDiagramShell a11yLabel="React 소스 코드를 읽는 6단계 흐름과 분류, 반복 학습 루프를 보여주는 다이어그램">
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

      <ol className="grid grid-cols-3 xl:grid-cols-6 gap-2 xl:gap-1">
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

              {!isLastInRow && (
                <span
                  aria-hidden="true"
                  className="hidden xl:flex absolute top-1/2 -right-1 -translate-y-1/2 text-[var(--term-accent)] text-[10px] z-10"
                >
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-md flex items-center gap-sm">
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
        <TerminalBadge showDot={false}>
          <ArrowLoopIcon className="h-3 w-3 text-[var(--term-accent)]" />
          {loop}
        </TerminalBadge>
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      </div>
    </HeroDiagramShell>
  );
};
