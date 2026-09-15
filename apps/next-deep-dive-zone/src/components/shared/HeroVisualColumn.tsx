import { cx } from '@berrypjh/react-ui';

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export const HeroVisualColumn = ({ id, className, children }: Props) => (
  <div id={id} className={cx('order-first lg:order-none', className)}>
    {children}
  </div>
);
