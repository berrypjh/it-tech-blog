import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../shared/tones';

import { type LabelKey, labelText, labelToneKey, legacySlate } from './labelTone';

type Size = 'sm' | 'md';

type Props = {
  label: LabelKey;
  size?: Size;
  strong?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const sizeClass: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-[11px]',
};

export const LabelChip = ({ label, size = 'sm', strong, className, children }: Props) => {
  const t = label === 'legacy' ? legacySlate : toneTokens[labelToneKey[label]];
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
      {children ?? labelText[label]}
    </span>
  );
};

export const getLabelClasses = (label: LabelKey) => {
  if (label === 'legacy') {
    return {
      text: legacySlate.text,
      chip: legacySlate.chip,
      border: legacySlate.border,
      borderHover: legacySlate.borderHover,
      dot: legacySlate.dot,
    };
  }
  return toneTokens[labelToneKey[label]];
};
