import { cn } from '@it-tech-blog/utils';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const HeroTextColumn = ({ className, children }: Props) => (
  <div className={cn('flex flex-col gap-md min-w-0', className)}>{children}</div>
);
