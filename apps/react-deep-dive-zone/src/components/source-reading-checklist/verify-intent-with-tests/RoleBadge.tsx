import { cx } from '@berrypjh/react-ui';

import { toneTokens } from '../../shared/tones';

import { type RoleKey, roleLabel, roleToneKey } from './roleTone';

type Size = 'sm' | 'md';

type Props = {
  role: RoleKey;
  size?: Size;
  strong?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const sizeClass: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-[11px]',
};

export const RoleBadge = ({ role, size = 'sm', strong, className, children }: Props) => {
  const t = toneTokens[roleToneKey[role]];
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full border font-mono font-bold uppercase tracking-wider',
        sizeClass[size],
        t.chip,
        strong && 'border-2 shadow-[0_2px_0_var(--term-border)]',
        className,
      )}
    >
      <span aria-hidden="true" className={cx('block h-1 w-1 rounded-full', t.dot)} />
      {children ?? roleLabel[role]}
    </span>
  );
};

export const getRoleClasses = (role: RoleKey) => toneTokens[roleToneKey[role]];
