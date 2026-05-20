import { cn } from '@it-tech-blog/utils';

type Props = {
  /** 기본값 'hero-heading' — section의 aria-labelledby와 일치. */
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Hero h1. 8개 Hero가 공유하는 타이포/색/줄바꿈 규칙을 캡슐화한다.
 * children에 <span className="block">로 줄을 나누거나 accent 색을 자유롭게 적용한다.
 */
export const HeroTitle = ({ id = 'hero-heading', className, children }: Props) => (
  <h1
    id={id}
    className={cn(
      'text-3xl sm:text-4xl lg:text-[2.625rem] font-bold leading-[1.18] tracking-tight text-[var(--term-fg)] break-keep',
      className,
    )}
  >
    {children}
  </h1>
);
