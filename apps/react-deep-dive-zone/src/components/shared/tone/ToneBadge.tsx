import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../tones';

type Props = {
  tone: ToneKey;
  children: React.ReactNode;
  className?: string;
};

export const ToneBadge = ({ tone, children, className }: Props) => {
  const t = toneTokens[tone];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-medium',
        t.chip,
        className,
      )}
    >
      <span aria-hidden="true" className={cn('inline-block w-1 h-1 rounded-full', t.dot)} />
      {children}
    </span>
  );
};
