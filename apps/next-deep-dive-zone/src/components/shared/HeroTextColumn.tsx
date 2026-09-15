import { cx } from '@berrypjh/react-ui';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const HeroTextColumn = ({ className, children }: Props) => (
  <div className={cx('flex flex-col gap-md min-w-0', className)}>{children}</div>
);
