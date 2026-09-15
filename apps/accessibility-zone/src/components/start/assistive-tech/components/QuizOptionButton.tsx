'use client';

import { cx } from '@berrypjh/react-ui';
import { Check, X } from 'lucide-react';

type Props = {
  id: string;
  isSelected: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onSelect: (id: string) => void;
  children: React.ReactNode;
};

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
      className={cx(
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
        className={cx(
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
          <Check className="h-3 w-3" strokeWidth={3} />
        ) : state === 'incorrect' ? (
          <X className="h-3 w-3" strokeWidth={3} />
        ) : (
          id
        )}
      </span>
      <span className="min-w-0 flex-1">{children}</span>
    </button>
  );
};
