import { cn } from '@it-tech-blog/utils';

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export const HeroVisualColumn = ({ id, className, children }: Props) => (
  <div id={id} className={cn('order-first lg:order-none', className)}>
    {children}
  </div>
);
