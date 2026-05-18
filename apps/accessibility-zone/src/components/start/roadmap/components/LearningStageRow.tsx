import { cn } from '@it-tech-blog/utils';

import type { LearningStage, StageStatus } from '../content';

import { StageIcon } from './StageIcon';

type Props = {
  stage: LearningStage;
  isLast: boolean;
};

const iconTone: Record<StageStatus, string> = {
  done: 'bg-success-su100 text-text-success dark:bg-success-su900/40',
  'in-progress': 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40',
  todo: 'bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40',
};

export const LearningStageRow = ({ stage, isLast }: Props) => {
  return (
    <li
      className={cn(
        'grid grid-cols-[auto_auto_1fr] items-center gap-sm px-mdl py-md transition-colors hover:bg-background-default/40 sm:gap-md sm:px-lg',
        !isLast && 'border-b border-stroke-default/60',
      )}
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-rounded bg-primary-pr100 text-sm font-extraBold text-text-primary dark:bg-primary-pr900/40"
      >
        {stage.index}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'hidden h-9 w-9 shrink-0 items-center justify-center rounded-md sm:flex',
          iconTone[stage.status],
        )}
      >
        <StageIcon id={stage.iconId} />
      </span>
      <div className="min-w-0">
        <h3 className="truncate text-sm font-bold text-text-default sm:text-md">{stage.title}</h3>
        <p className="mt-0.5 text-xsm leading-snug text-text-light">{stage.body}</p>
      </div>
    </li>
  );
};
