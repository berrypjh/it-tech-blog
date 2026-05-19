import { cn } from '@it-tech-blog/utils';

import type { ProblemStep } from '../content';

type Props = {
  step: ProblemStep;
  icon: React.ReactNode;
  isLast: boolean;
};

const toneMap = {
  error: {
    ring: 'ring-error-er300/50',
    border: 'border-error-er200/60',
    numberBg: 'bg-error-er100 text-text-error dark:bg-error-er900/40',
    iconBg: 'bg-error-er100 text-text-error dark:bg-error-er900/40',
    badgeBg: 'bg-error-er100 text-text-error dark:bg-error-er900/40',
    line: 'bg-error-er200/60',
  },
  warning: {
    ring: 'ring-warning-wa300/50',
    border: 'border-warning-wa200/60',
    numberBg: 'bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40',
    iconBg: 'bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40',
    badgeBg: 'bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40',
    line: 'bg-warning-wa200/60',
  },
  amber: {
    ring: 'ring-secondary-se300/50',
    border: 'border-secondary-se200/60',
    numberBg: 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40',
    iconBg: 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40',
    badgeBg: 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40',
    line: 'bg-secondary-se200/60',
  },
  success: {
    ring: 'ring-success-su300/50',
    border: 'border-success-su200/60',
    numberBg: 'bg-success-su100 text-text-success dark:bg-success-su900/40',
    iconBg: 'bg-success-su100 text-text-success dark:bg-success-su900/40',
    badgeBg: 'bg-success-su100 text-text-success dark:bg-success-su900/40',
    line: 'bg-success-su200/60',
  },
  info: {
    ring: 'ring-primary-pr300/50',
    border: 'border-primary-pr200/60',
    numberBg: 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40',
    iconBg: 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40',
    badgeBg: 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40',
    line: 'bg-primary-pr200/60',
  },
};

export const ProblemFlowItem = ({ step, icon, isLast }: Props) => {
  const t = toneMap[step.tone];
  return (
    <li className="relative flex gap-md">
      <div className="flex flex-col items-center">
        <span
          className={cn(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-rounded text-sm font-bold ring-2',
            t.numberBg,
            t.ring,
          )}
          aria-hidden="true"
        >
          {step.index}
        </span>
        {!isLast && <span className={cn('mt-1 w-px flex-1', t.line)} aria-hidden="true" />}
      </div>

      <div
        className={cn(
          'mb-md flex flex-1 flex-col gap-1.5 rounded-lg border bg-background-surface p-lg shadow-sm sm:flex-row sm:items-center sm:gap-md',
          t.border,
        )}
      >
        <span
          className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-md', t.iconBg)}
          aria-hidden="true"
        >
          {icon}
        </span>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-text-default">{step.title}</h3>
          <p className="mt-0.5 text-xsm leading-relaxed text-text-light">{step.description}</p>
        </div>
        <span
          className={cn(
            'inline-flex shrink-0 items-center self-start rounded-rounded px-2 py-1 text-xxsm font-semiBold sm:self-center',
            t.badgeBg,
          )}
        >
          {step.badge}
        </span>
      </div>
    </li>
  );
};
