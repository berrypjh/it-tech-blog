import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../tones';

type Size = 'sm' | 'md';

type Props = {
  tone: ToneKey;
  size?: Size;
  children: React.ReactNode;
  className?: string;
};

const sizeClass: Record<Size, string> = {
  sm: 'w-9 h-9',
  md: 'w-11 h-11',
};

export const ToneIconBox = ({ tone, size = 'md', children, className }: Props) => {
  const t = toneTokens[tone];
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center rounded-md border',
        sizeClass[size],
        t.chip,
        className,
      )}
    >
      {children}
    </span>
  );
};
