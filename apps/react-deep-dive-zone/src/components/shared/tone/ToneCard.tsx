import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../tones';

type Props = {
  tone: ToneKey;
  children: React.ReactNode;
  className?: string;
};

export const ToneCard = ({ tone, children, className }: Props) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'group flex flex-col gap-md h-full',
        'rounded-lg border bg-[var(--term-bg)] p-md',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        t.borderHover,
        className,
      )}
    >
      {children}
    </article>
  );
};
