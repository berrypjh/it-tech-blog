import { cn } from '@it-tech-blog/utils';

import type { ChecklistStatus, ImportanceContent } from '../content';

type Props = {
  score: number;
  counts: Record<ChecklistStatus, number>;
  diagnosis: ImportanceContent['diagnosis'];
};

const statusColor: Record<ChecklistStatus, string> = {
  done: 'rgb(var(--ds-success-su500-rgb))',
  review: 'rgb(var(--ds-warning-wa500-rgb))',
  progress: 'rgb(var(--ds-primary-pr500-rgb))',
  todo: 'rgb(var(--ds-neutral-ne300-rgb))',
};

const legendBgClass: Record<ChecklistStatus, string> = {
  done: 'bg-success-su500',
  review: 'bg-warning-wa500',
  progress: 'bg-primary-pr500',
  todo: 'bg-neutral-ne400',
};

const scoreLevel = (
  score: number,
  levels: ImportanceContent['diagnosis']['scoreLevels'],
): { label: string; tone: string } => {
  if (score >= 90)
    return {
      label: levels.excellent,
      tone: 'bg-success-su100 text-text-success dark:bg-success-su900/40',
    };
  if (score >= 70)
    return {
      label: levels.good,
      tone: 'bg-success-su100 text-text-success dark:bg-success-su900/40',
    };
  if (score >= 50)
    return {
      label: levels.fair,
      tone: 'bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40',
    };
  return { label: levels.poor, tone: 'bg-error-er100 text-text-error dark:bg-error-er900/40' };
};

export const AccessibilityScoreDonut = ({ score, counts, diagnosis }: Props) => {
  const radius = 60;
  const stroke = 14;
  const circumference = 2 * Math.PI * radius;
  const total = Object.values(counts).reduce((acc, n) => acc + n, 0) || 1;

  const order: ChecklistStatus[] = ['done', 'progress', 'review', 'todo'];
  let cumulativeOffset = 0;
  const segments = order
    .map((status) => {
      const value = counts[status];
      if (value === 0) return null;
      const length = (value / total) * circumference;
      const segment = (
        <circle
          key={status}
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke={statusColor[status]}
          strokeWidth={stroke}
          strokeDasharray={`${length} ${circumference - length}`}
          strokeDashoffset={-cumulativeOffset}
          strokeLinecap="butt"
          transform="rotate(-90 80 80)"
        />
      );
      cumulativeOffset += length;
      return segment;
    })
    .filter(Boolean);

  const level = scoreLevel(score, diagnosis.scoreLevels);

  return (
    <div className="flex h-full flex-col gap-sml">
      <header className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-text-default sm:text-md">{diagnosis.scoreTitle}</h3>
        <span
          className={cn(
            'inline-flex items-center rounded-rounded px-2 py-0.5 text-xxsm font-semiBold',
            level.tone,
          )}
        >
          {level.label}
        </span>
      </header>

      <div className="flex flex-col items-center gap-md sm:flex-row sm:items-start sm:gap-lg">
        <div className="relative shrink-0">
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            aria-label={diagnosis.a11yScoreTemplate.replace('{score}', String(score))}
            role="img"
          >
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="rgb(var(--ds-stroke-default-rgb))"
              strokeOpacity="0.25"
              strokeWidth={stroke}
            />
            {segments}
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-extraBold text-text-default sm:text-4xl">{score}</span>
            <span className="text-xxsm font-semiBold text-text-light">{diagnosis.scoreUnit}</span>
          </div>
        </div>

        <ul className="flex w-full flex-col gap-2">
          {order.map((status) => (
            <li
              key={status}
              className="flex items-center justify-between gap-2 rounded-md border border-stroke-default/60 bg-background-default/40 px-sm py-1.5"
            >
              <span className="flex items-center gap-2">
                <span
                  className={cn('h-2.5 w-2.5 rounded-rounded', legendBgClass[status])}
                  aria-hidden="true"
                />
                <span className="text-xsm text-text-default">{diagnosis.legendLabels[status]}</span>
              </span>
              <span className="text-xsm font-semiBold text-text-default">
                {counts[status]}
                {diagnosis.legendUnit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-auto text-[0.6875rem] leading-relaxed text-text-light">
        {diagnosis.disclaimer}
      </p>
    </div>
  );
};
