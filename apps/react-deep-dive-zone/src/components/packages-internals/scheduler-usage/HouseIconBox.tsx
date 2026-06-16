import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from './content';
import { HOUSE_CHROME, toneText } from './tone-house';

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

/** ToneIconBox의 amber 하우스 버전: 중립 크롬 + tone 소프트 텍스트 액센트. */
export const HouseIconBox = ({ tone, size = 'md', children, className }: Props) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex items-center justify-center rounded-md',
      sizeClass[size],
      HOUSE_CHROME,
      toneText(tone),
      className,
    )}
  >
    {children}
  </span>
);
