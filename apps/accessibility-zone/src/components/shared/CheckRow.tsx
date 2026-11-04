import { cx, ListItem, VisuallyHidden } from '@berrypjh/react-ui';
import { Check, CircleDashed, X } from 'lucide-react';

export type CheckResult = 'done' | 'fail' | 'pending';

const icons = {
  done: <Check className="h-4 w-4 shrink-0 text-text-success" aria-hidden="true" />,
  fail: <X className="h-4 w-4 shrink-0 text-text-error" aria-hidden="true" />,
  pending: <CircleDashed className="h-4 w-4 shrink-0" aria-hidden="true" />,
};

/** 실습 체크 항목 한 줄. ✓ 확인됨 · ✕ 해 보니 안 됨 · 점선 원 아직 해 보지 않음(라디오 버튼과 헷갈리지 않게 점선). state는 화면 낭독기용 상태 글자. */
export const CheckRow = ({
  label,
  result,
  state,
}: {
  label: string;
  result: CheckResult;
  state?: string;
}) => (
  <ListItem
    className={cx(
      'flex items-center gap-sm',
      result === 'pending' ? 'text-text-light' : 'text-text-default',
    )}
  >
    {icons[result]}
    <span>
      {label}
      {state && <VisuallyHidden> — {state}</VisuallyHidden>}
    </span>
  </ListItem>
);
