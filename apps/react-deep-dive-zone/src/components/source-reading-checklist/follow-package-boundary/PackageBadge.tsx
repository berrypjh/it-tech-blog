import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../shared/tones';

import type { PackageKey } from './content';
import { packageToneKey, sharedSlate } from './packageTone';

type Size = 'sm' | 'md';

type Props = {
  packageKey: PackageKey;
  size?: Size;
  /** strong: 더 굵은 border + shadow */
  strong?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const sizeClass: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-[11px]',
};

/**
 * 패키지명을 컬러 칩으로 렌더한다. shared는 toneTokens에 없어 별도 slate 매핑을 사용한다.
 */
export const PackageBadge = ({
  packageKey,
  size = 'sm',
  strong = false,
  className,
  children,
}: Props) => {
  if (packageKey === 'shared') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border font-mono font-bold',
          sizeClass[size],
          sharedSlate.chip,
          strong && 'border-2 shadow-[0_2px_0_var(--term-border)]',
          className,
        )}
      >
        <span aria-hidden="true" className={cn('block h-1 w-1 rounded-full', sharedSlate.dot)} />
        {children ?? packageKey}
      </span>
    );
  }

  const t = toneTokens[packageToneKey[packageKey]];
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
      {children ?? packageKey}
    </span>
  );
};

/** 패키지 톤의 border/text 등 클래스를 한 번에 얻기 위한 헬퍼. */
export const getPackageClasses = (packageKey: PackageKey) => {
  if (packageKey === 'shared') {
    return {
      text: sharedSlate.text,
      chip: sharedSlate.chip,
      border: sharedSlate.border,
      borderHover: sharedSlate.borderHover,
      dot: sharedSlate.dot,
    };
  }
  return toneTokens[packageToneKey[packageKey]];
};
