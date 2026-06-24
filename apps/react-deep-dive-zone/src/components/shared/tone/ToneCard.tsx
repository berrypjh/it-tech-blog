import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../tones';

type Props = {
  tone: ToneKey;
  children: React.ReactNode;
  className?: string;
  /** 내부 페이지 이동(링크)일 때만 hover 톤 테두리 강조. 기본은 box(뜸만). */
  nav?: boolean;
};

export const ToneCard = ({ tone, children, className, nav }: Props) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'group flex flex-col gap-md h-full',
        'rounded-lg border bg-[var(--term-bg)] p-md',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        nav && t.borderHover,
        className,
      )}
    >
      {children}
    </article>
  );
};
