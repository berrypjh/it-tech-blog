import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/** Storybook(react-vite)에서 next/link를 단순 앵커로 대체하는 스텁. */
const Link = ({ href, children, ...rest }: Props) => (
  <a href={href} {...rest}>
    {children}
  </a>
);

export default Link;
