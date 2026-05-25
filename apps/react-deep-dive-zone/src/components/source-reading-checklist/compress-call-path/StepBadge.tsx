import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../getting-started/_shared/tones';

import { type StepKind, stepLabel, stepToneKey } from './stepTone';

type Size = 'sm' | 'md';

type Props = {
  kind: StepKind;
  size?: Size;
  strong?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const sizeClass: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-[11px]',
};

export const StepBadge = ({ kind, size = 'sm', strong, className, children }: Props) => {
  const t = toneTokens[stepToneKey[kind]];
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
      {children ?? stepLabel[kind]}
    </span>
  );
};

export const getStepClasses = (kind: StepKind) => toneTokens[stepToneKey[kind]];
