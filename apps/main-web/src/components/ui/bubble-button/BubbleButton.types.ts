import type { ButtonBaseAutoAnchorProps, ButtonBaseProps } from '@berrypjh/react-ui';
import type { CSSProperties, ElementType, ReactNode } from 'react';

export type BubbleButtonOwnProps = {
  icon?: ReactNode;
  label: ReactNode;
  delay?: number;
};

export type BubbleButtonProps<C extends ElementType = 'button'> = Omit<
  ButtonBaseProps<C>,
  'children' | 'variant'
> &
  BubbleButtonOwnProps & {
    style?: CSSProperties;
  };

export type BubbleButtonAutoAnchorProps = Omit<ButtonBaseAutoAnchorProps, 'children' | 'variant'> &
  BubbleButtonOwnProps & {
    style?: CSSProperties;
  };

export type BubbleButtonRenderableProps =
  | BubbleButtonAutoAnchorProps
  | BubbleButtonProps<ElementType>;
