import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../getting-started/_shared/tones';

import type { ValueKey } from './valueTone';
import { flagsSlate, valueToneKey } from './valueTone';

type Size = 'sm' | 'md';

type Props = {
  valueKey: ValueKey;
  size?: Size;
  strong?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const sizeClass: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-[11px]',
};

const valueDisplayName: Record<ValueKey, string> = {
  element: 'React Element',
  fiber: 'Fiber',
  stateNode: 'stateNode',
  updateQueue: 'updateQueue',
  memoizedState: 'memoizedState',
  flags: 'flags',
  lanes: 'lanes',
};

/**
 * 값 종류 칩. flags는 toneTokens에 slate가 없어 별도 처리한다.
 */
export const ValueBadge = ({ valueKey, size = 'sm', strong, className, children }: Props) => {
  const isFlags = valueKey === 'flags';
  const t = isFlags ? flagsSlate : toneTokens[valueToneKey[valueKey]];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-mono font-bold',
        sizeClass[size],
        t.chip,
        strong && 'border-2 shadow-[0_2px_0_var(--term-border)]',
        className,
      )}
    >
      <span aria-hidden="true" className={cn('block h-1 w-1 rounded-full', t.dot)} />
      {children ?? valueDisplayName[valueKey]}
    </span>
  );
};

export const getValueClasses = (valueKey: ValueKey) => {
  if (valueKey === 'flags') {
    return {
      text: flagsSlate.text,
      chip: flagsSlate.chip,
      border: flagsSlate.border,
      borderHover: flagsSlate.borderHover,
      dot: flagsSlate.dot,
    };
  }
  return toneTokens[valueToneKey[valueKey]];
};
