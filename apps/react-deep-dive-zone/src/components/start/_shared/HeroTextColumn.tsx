import { cn } from '@it-tech-blog/utils';

type Props = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Hero 좌측 텍스트 컬럼. flex-col + gap-md + min-w-0.
 */
export const HeroTextColumn = ({ className, children }: Props) => (
  <div className={cn('flex flex-col gap-md min-w-0', className)}>{children}</div>
);
