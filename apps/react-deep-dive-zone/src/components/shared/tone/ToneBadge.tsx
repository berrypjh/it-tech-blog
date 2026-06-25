import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../tones';

type Size = 'sm' | 'lg';

type Props = {
  tone: ToneKey;
  children: React.ReactNode;
  /** sm(기본): 작은 점·텍스트 칩. lg: 큰 모노 알약(목적지/결과 강조용, 그림자 포함). */
  size?: Size;
  className?: string;
};

const sizeClass: Record<Size, string> = {
  sm: 'px-2 py-1 text-[10px] font-medium',
  lg: 'px-4 py-1.5 text-sm font-bold font-mono shadow-[0_2px_0_var(--term-border)]',
};

const dotClass: Record<Size, string> = {
  sm: 'w-1 h-1',
  lg: 'w-1.5 h-1.5',
};

export const ToneBadge = ({ tone, children, size = 'sm', className }: Props) => {
  const t = toneTokens[tone];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border',
        sizeClass[size],
        t.chip,
        className,
      )}
    >
      <span aria-hidden="true" className={cn('inline-block rounded-full', dotClass[size], t.dot)} />
      {children}
    </span>
  );
};
