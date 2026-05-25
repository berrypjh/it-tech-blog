import { cn } from '@it-tech-blog/utils';

import type { UsePromiseSuspendContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, HourglassIcon, TriangleAlertIcon } from '../icons';
import type { PromiseState } from '../tone';
import { stateAccent } from '../tone';

import { FulfilledPreview, PendingPreview, RejectedPreview } from './_ResultPreview';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UsePromiseSuspendContent['diagram'] };

const stateIcon: Record<PromiseState, React.ComponentType<{ className?: string }>> = {
  pending: HourglassIcon,
  fulfilled: CheckCircleIcon,
  rejected: TriangleAlertIcon,
};

const renderPreview = (kind: 'pending' | 'fulfilled' | 'rejected') => {
  if (kind === 'pending') return <PendingPreview label="로딩 중..." />;
  if (kind === 'fulfilled') return <FulfilledPreview code="<p>안녕하세요, React!</p>" />;
  return <RejectedPreview title="오류가 발생했습니다" />;
};

export const BranchDiagram = ({ content }: Props) => (
  <section aria-labelledby="diagram-heading" className="flex flex-col gap-md">
    <SectionHeader id="diagram-heading" number={content.number} title={content.title} />

    <div
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 gap-md lg:grid-cols-[180px_1fr] items-stretch">
        {/* Root box */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div
            className={cn(
              'inline-flex flex-col items-center gap-1 rounded-2xl border-2 px-5 py-4',
              'border-blue-400/80 bg-white text-blue-700 shadow-[0_4px_0_rgba(59,130,246,0.15)]',
              'dark:border-blue-600/70 dark:bg-blue-950/40 dark:text-blue-200',
            )}
          >
            <span className="text-md font-bold font-mono">{content.rootTitle}</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-500 dark:text-blue-300">
              {content.rootSubtitle}
            </span>
          </div>
        </div>

        {/* 3 rows */}
        <ol className="flex flex-col gap-3">
          {content.rows.map((row) => {
            const accent = stateAccent[row.state];
            const Icon = stateIcon[row.state];
            return (
              <li key={row.state}>
                <div
                  className={cn(
                    'grid grid-cols-1 gap-2 rounded-2xl border-2 p-md',
                    'lg:grid-cols-[170px_minmax(0,1fr)_minmax(0,220px)] items-stretch',
                    accent.border,
                    accent.bg,
                    'transition-transform motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  {/* state card */}
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                        accent.iconChip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col">
                      <span className={cn('text-sm font-bold font-mono', accent.text)}>
                        {row.label}
                      </span>
                      <span className="text-[11px] text-[var(--term-muted)] break-keep">
                        {row.description}
                      </span>
                    </div>
                  </div>

                  {/* decision steps */}
                  <ol className="flex flex-wrap items-center gap-1.5 min-w-0">
                    {row.steps.map((step, i) => (
                      <li key={step} className="flex items-center gap-1.5">
                        <span
                          className={cn(
                            'inline-flex items-center rounded-lg border bg-white px-2.5 py-1.5',
                            'dark:bg-[var(--term-bg)]',
                            'text-[11px] font-mono font-bold break-keep',
                            accent.border,
                            accent.text,
                          )}
                        >
                          {step}
                        </span>
                        {i < row.steps.length - 1 && (
                          <ArrowRightIcon
                            aria-hidden="true"
                            className={cn('h-3.5 w-3.5 shrink-0', accent.text)}
                          />
                        )}
                      </li>
                    ))}
                  </ol>

                  {/* result preview */}
                  <div className="min-w-0">{renderPreview(row.previewKind)}</div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);
