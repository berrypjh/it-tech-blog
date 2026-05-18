import { cn } from '@it-tech-blog/utils';

import type { AssistiveTechContent, ReadingItem } from '../content';

type Props = {
  content: AssistiveTechContent['screenReader'];
  activeIndex: number;
};

const NumberBadge = ({ value, active }: { value: number; active: boolean }) => (
  <span
    aria-hidden="true"
    className={cn(
      'flex h-6 w-6 shrink-0 items-center justify-center rounded-rounded text-xxsm font-extraBold transition-colors',
      active
        ? 'bg-background-primary text-text-contrastText shadow-sm'
        : 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40',
    )}
  >
    {value}
  </span>
);

const Row = ({
  item,
  isActive,
  children,
}: {
  item: ReadingItem;
  isActive: boolean;
  children: React.ReactNode;
}) => (
  <li
    className={cn(
      'flex items-start gap-2 rounded-md border px-sm py-2 transition-colors',
      isActive
        ? 'border-stroke-primary bg-primary-pr100/40 shadow-sm dark:bg-primary-pr900/30'
        : 'border-transparent bg-transparent',
    )}
  >
    <NumberBadge value={item.index} active={isActive} />
    <div className="min-w-0 flex-1">{children}</div>
  </li>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M12 20s-7-4.35-9.5-9C1 8.5 3 5 6.5 5c2 0 3 1 4 2.5C11.5 6 12.5 5 14.5 5 18 5 20 8.5 18.5 11c-2.5 4.65-6.5 9-6.5 9z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const ImageScene = () => (
  <div
    className="flex h-20 w-full items-end justify-center overflow-hidden rounded-md bg-gradient-to-b from-primary-pr200/60 to-success-su100"
    aria-hidden="true"
  >
    <svg viewBox="0 0 160 60" className="h-full w-full" preserveAspectRatio="xMidYMax meet">
      <circle cx="130" cy="14" r="8" fill="rgb(var(--ds-warning-wa400-rgb))" />
      <path
        d="M0 50 L20 30 L34 42 L56 24 L80 38 L110 22 L160 48 V60 H0 Z"
        fill="rgb(var(--ds-success-su500-rgb))"
        opacity="0.85"
      />
      <path
        d="M0 60 L160 60 V52 L120 36 L90 44 L60 30 L30 42 L0 52 Z"
        fill="rgb(var(--ds-primary-pr500-rgb))"
        opacity="0.5"
      />
    </svg>
  </div>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
    <path
      d="M12 3l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const AccessibleDemoPage = ({ content, activeIndex }: Props) => {
  const items = content.items;
  const inputId = 'sr-demo-email';
  return (
    <div className="overflow-hidden rounded-xl border border-stroke-default bg-background-surface shadow-md">
      <div className="flex items-center gap-2 border-b border-stroke-default bg-background-default px-mdl py-2">
        <span className="flex gap-1">
          <span className="h-2.5 w-2.5 rounded-rounded bg-stroke-default" />
          <span className="h-2.5 w-2.5 rounded-rounded bg-stroke-default" />
          <span className="h-2.5 w-2.5 rounded-rounded bg-stroke-default" />
        </span>
        <span className="ml-1 flex-1 truncate rounded-md bg-background-surface px-2 py-0.5 text-[0.625rem] text-text-light">
          {content.browserUrl}
        </span>
        <span className="text-text-light" aria-hidden="true">
          <StarIcon />
        </span>
      </div>

      <ul className="flex flex-col gap-1.5 p-mdl">
        {items.map((item) => {
          const isActive = item.index === activeIndex;
          if (item.type === 'heading') {
            return (
              <Row key={item.index} item={item} isActive={isActive}>
                <p className="text-md font-extraBold leading-snug text-text-default sm:text-lg">
                  {item.primaryText}
                </p>
              </Row>
            );
          }
          if (item.type === 'paragraph') {
            return (
              <Row key={item.index} item={item} isActive={isActive}>
                <p className="text-xsm leading-relaxed text-text-default">{item.primaryText}</p>
              </Row>
            );
          }
          if (item.type === 'input') {
            return (
              <Row key={item.index} item={item} isActive={isActive}>
                <label
                  htmlFor={inputId}
                  className="text-[0.6875rem] font-semiBold text-text-default"
                >
                  {content.inputLabel}
                </label>
                <input
                  id={inputId}
                  type="email"
                  placeholder={content.inputPlaceholder}
                  className="mt-1 w-full rounded-md border border-stroke-default bg-background-surface px-2 py-1.5 text-xsm text-text-default focus-visible:border-stroke-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary/40"
                />
              </Row>
            );
          }
          if (item.type === 'button') {
            const isPrimary = item.index === 4;
            return (
              <Row key={item.index} item={item} isActive={isActive}>
                <button
                  type="button"
                  className={cn(
                    'rounded-md px-3 py-1.5 text-xsm font-semiBold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2',
                    isPrimary
                      ? 'bg-background-primary text-text-contrastText hover:bg-primary-pr700'
                      : 'border border-stroke-default bg-background-surface text-text-default hover:border-stroke-primary',
                  )}
                >
                  {item.primaryText}
                </button>
              </Row>
            );
          }
          if (item.type === 'icon-button') {
            return (
              <Row key={item.index} item={item} isActive={isActive}>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={content.iconButtonLabel}
                    className="flex h-9 w-9 items-center justify-center rounded-rounded border border-stroke-default bg-background-surface text-text-error transition-colors hover:border-stroke-error focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
                  >
                    <HeartIcon />
                  </button>
                  <span className="text-[0.625rem] text-text-light">
                    (데모: 화면상 아이콘만 보이지만 실제로는 aria-label로 이름 제공)
                  </span>
                </div>
              </Row>
            );
          }
          // image
          return (
            <Row key={item.index} item={item} isActive={isActive}>
              <ImageScene />
              <p className="mt-1 text-[0.6875rem] leading-relaxed text-text-light">
                {content.imageCaption}
              </p>
            </Row>
          );
        })}
      </ul>
    </div>
  );
};
