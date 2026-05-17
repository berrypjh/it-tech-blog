import { cx } from '@berrypjh/react-ui';
import type { CSSProperties, ReactNode } from 'react';

import { bubbleButtonClasses } from './BubbleButton.constants';
import type {
  BubbleButtonAutoAnchorProps,
  BubbleButtonRenderableProps,
} from './BubbleButton.types';

export const isAutoAnchorProps = (
  props: BubbleButtonRenderableProps,
): props is BubbleButtonAutoAnchorProps => {
  return props.component == null && 'href' in props && props.href != null;
};

export const getBubbleButtonWrapperStyle = ({
  delay,
}: Pick<BubbleButtonRenderableProps, 'delay'>): CSSProperties => {
  return {
    '--ui-bubble-delay': `${delay}s`,
  } as CSSProperties;
};

export const getBubbleButtonRootClassNames = ({
  className,
  size,
}: {
  className?: string;
  size: 'sm' | 'md' | 'lg';
}) =>
  cx(
    bubbleButtonClasses.root,
    size === 'sm' && bubbleButtonClasses.sizeSm,
    size === 'md' && bubbleButtonClasses.sizeMd,
    size === 'lg' && bubbleButtonClasses.sizeLg,
    className,
  );

export const getBubbleButtonContent = ({ icon, label }: { icon?: ReactNode; label: ReactNode }) => {
  return (
    <>
      <span className={bubbleButtonClasses.glow} aria-hidden="true" />
      <span className={bubbleButtonClasses.surface} aria-hidden="true">
        <span className={bubbleButtonClasses.border} />
        <span className={bubbleButtonClasses.highlight} />
      </span>
      <span className={bubbleButtonClasses.ring} aria-hidden="true" />

      <span className={bubbleButtonClasses.content}>
        {icon != null ? (
          <span className={bubbleButtonClasses.icon} aria-hidden="true">
            <span className={bubbleButtonClasses.iconGlow} />
            {icon}
          </span>
        ) : null}

        <span className={bubbleButtonClasses.label}>{label}</span>
      </span>
    </>
  );
};
