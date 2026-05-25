import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../getting-started/_shared/tones';

import { type RoleKey, roleLabel, roleToneKey } from './roleTone';

type Size = 'sm' | 'md';

type Props = {
  /** 라벨 톤 키. (DOM `role` 속성과 혼동되지 않도록 `tone`으로 명명) */
  tone: RoleKey;
  size?: Size;
  strong?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const sizeClass: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-[11px]',
};

export const RoleBadge = ({ tone, size = 'sm', strong, className, children }: Props) => {
  const t = toneTokens[roleToneKey[tone]];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-mono font-bold uppercase tracking-wider',
        sizeClass[size],
        t.chip,
        strong && 'border-2 shadow-[0_2px_0_var(--term-border)]',
        className,
      )}
    >
      <span aria-hidden="true" className={cn('block h-1 w-1 rounded-full', t.dot)} />
      {children ?? roleLabel[tone]}
    </span>
  );
};

export const getRoleClasses = (key: RoleKey) => toneTokens[roleToneKey[key]];
