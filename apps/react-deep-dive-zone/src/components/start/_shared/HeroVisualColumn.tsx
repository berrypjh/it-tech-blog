import { cn } from '@it-tech-blog/utils';

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Hero 우측 비주얼 컬럼. 모바일에서는 텍스트 위로 올라간다.
 */
export const HeroVisualColumn = ({ id, className, children }: Props) => (
  <div id={id} className={cn('order-first lg:order-none', className)}>
    {children}
  </div>
);
