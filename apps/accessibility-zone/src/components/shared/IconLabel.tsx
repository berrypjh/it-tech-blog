import { cx } from '@berrypjh/react-ui';
import type { LucideIcon } from 'lucide-react';

/** 표 첫 열 · 카드 제목처럼 글자 앞에 장식 아이콘을 둔다. 뜻은 글자가 전달하므로 아이콘은 숨긴다. */
export const IconLabel = ({
  icon: Icon,
  tone = 'text-text-primary',
  children,
}: {
  icon: LucideIcon;
  tone?: string;
  children: React.ReactNode;
}) => (
  <span className="inline-flex items-center gap-sm">
    <Icon className={cx('h-4 w-4 shrink-0', tone)} aria-hidden="true" />
    <span>{children}</span>
  </span>
);
