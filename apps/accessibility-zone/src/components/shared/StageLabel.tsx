import type { Locale } from '@it-tech-blog/preferences';

import { cx } from '@berrypjh/react-ui';
import { CircleCheck, Compass, Eye, Info, Lightbulb, type LucideIcon, Pointer } from 'lucide-react';

import { type FailureStageId, stageTitle } from './failureStages';

/** 실패 단계마다 하나로 정한 아이콘. 01장 어디서든 같은 단계를 같은 그림으로 알아보게 한다. */
const stageIcons: Record<FailureStageId, LucideIcon> = {
  perceive: Eye,
  understand: Lightbulb,
  navigate: Compass,
  operate: Pointer,
  state: Info,
  complete: CircleCheck,
};

/** 실패 단계 아이콘과 이름. */
export const StageLabel = ({
  locale,
  id,
  className,
}: {
  locale: Locale;
  id: FailureStageId;
  className?: string;
}) => {
  const Icon = stageIcons[id];
  return (
    <span className={cx('inline-flex items-center gap-xs', className)}>
      <Icon className="h-4 w-4 shrink-0 text-text-primary" aria-hidden="true" />
      {stageTitle(locale, id)}
    </span>
  );
};
