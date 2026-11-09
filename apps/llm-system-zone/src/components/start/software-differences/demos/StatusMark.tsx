import { cx } from '@berrypjh/react-ui';
import { CircleCheck, CircleDashed, CircleHelp, CircleX, type LucideIcon } from 'lucide-react';

import type { StepStatus } from './contract';

const marks: Record<StepStatus, { icon: LucideIcon; tone: string }> = {
  pass: { icon: CircleCheck, tone: 'text-text-success' },
  fail: { icon: CircleX, tone: 'text-text-error' },
  unknown: { icon: CircleHelp, tone: 'text-text-warning' },
  skipped: { icon: CircleDashed, tone: 'text-text-light' },
};

/** 검사 상태를 모양이 다른 아이콘과 글자로 함께 보여 준다. 색에만 기대지 않는다. */
export const StatusMark = ({ status, label }: { status: StepStatus; label: string }) => {
  const { icon: Icon, tone } = marks[status];

  return (
    <span className={cx('inline-flex items-start gap-xs', tone)}>
      <Icon className="mt-2xs h-4 w-4 shrink-0" aria-hidden="true" />
      <span className={status === 'skipped' ? 'text-text-light' : 'text-text-default'}>
        {label}
      </span>
    </span>
  );
};
