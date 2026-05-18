'use client';

import { cn } from '@it-tech-blog/utils';

type Props = {
  id: string;
  isSelected: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onSelect: (id: string) => void;
  children: React.ReactNode;
};

const CheckCircle = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M7 12l3 3 7-7"
      stroke="rgb(var(--ds-background-surface-rgb))"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossCircle = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M8 8l8 8M16 8l-8 8"
      stroke="rgb(var(--ds-background-surface-rgb))"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const QuizOptionButton = ({
  id,
  isSelected,
  isCorrect,
  showResult,
  onSelect,
  children,
}: Props) => {
  const state =
    showResult && isSelected
      ? isCorrect
        ? 'correct'
        : 'incorrect'
      : showResult && isCorrect
        ? 'reveal'
        : isSelected
          ? 'selected'
          : 'default';

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={() => onSelect(id)}
      className={cn(
        'group flex w-full items-start gap-2 rounded-md border px-sm py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2',
        state === 'correct' && 'border-stroke-success bg-success-su100/40',
        state === 'incorrect' && 'border-stroke-error bg-error-er100/40',
        state === 'reveal' && 'border-stroke-success/70 bg-success-su100/30',
        state === 'selected' &&
          'border-stroke-primary bg-primary-pr100/50 dark:bg-primary-pr900/40',
        state === 'default' &&
          'border-stroke-default bg-background-surface hover:border-stroke-primary hover:bg-primary-pr100/30 dark:hover:bg-primary-pr900/30',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-rounded border text-[0.625rem] font-extraBold',
          state === 'correct' || state === 'reveal'
            ? 'border-stroke-success bg-background-success text-text-contrastText'
            : state === 'incorrect'
              ? 'border-stroke-error bg-background-error text-text-contrastText'
              : state === 'selected'
                ? 'border-stroke-primary bg-background-primary text-text-contrastText'
                : 'border-stroke-default bg-background-surface text-text-default',
        )}
      >
        {state === 'correct' || state === 'reveal' ? (
          <CheckCircle />
        ) : state === 'incorrect' ? (
          <CrossCircle />
        ) : (
          id
        )}
      </span>
      <span className="min-w-0 flex-1">{children}</span>
    </button>
  );
};
