'use client';

import { useId, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { IntroContent } from '../content';

type Props = { content: IntroContent['handsOn']['mission2'] };

const CartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39A2 2 0 009.65 16h8.7a2 2 0 002-1.61L23 6H6" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12l4 4L19 7" />
  </svg>
);

export const AccessibleNameMission = ({ content }: Props) => {
  const groupId = useId();
  const [selected, setSelected] = useState<number>(content.correctIndex);
  const isCorrect = selected === content.correctIndex;

  return (
    <article className="flex h-full flex-col gap-sml rounded-xl border border-stroke-default bg-background-surface p-mdl shadow-sm">
      <header className="space-y-1">
        <p className="text-[0.625rem] font-semiBold uppercase tracking-wide text-text-secondary">
          mission 2
        </p>
        <h3 className="text-sm font-bold text-text-default">{content.title}</h3>
      </header>

      <p className="text-xsm leading-relaxed text-text-light">{content.question}</p>

      <div className="flex justify-center py-2">
        <button
          type="button"
          aria-label={content.buttonLabel}
          className="inline-flex items-center gap-1.5 rounded-md bg-background-primary px-mdl py-sml text-xsm font-semiBold text-text-contrastText shadow-sm hover:bg-primary-pr700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
        >
          <CartIcon />
          {content.buttonLabel}
        </button>
      </div>

      <fieldset className="space-y-2">
        <legend className="sr-only">{content.question}</legend>
        {content.options.map((opt, i) => {
          const id = `${groupId}-opt-${i}`;
          const isSelected = selected === i;
          const isThisCorrect = isSelected && i === content.correctIndex;
          return (
            <label
              key={i}
              htmlFor={id}
              className={cn(
                'flex cursor-pointer items-center gap-2 rounded-md border px-sm py-2 text-xsm transition-colors',
                isThisCorrect
                  ? 'border-stroke-success bg-success-su100/50 text-text-default dark:bg-success-su900/30'
                  : isSelected
                    ? 'border-stroke-primary bg-primary-pr100/40 text-text-default dark:bg-primary-pr900/30'
                    : 'border-stroke-default bg-background-surface text-text-light hover:border-stroke-primary',
              )}
            >
              <input
                id={id}
                type="radio"
                name={groupId}
                value={i}
                checked={isSelected}
                onChange={() => setSelected(i)}
                className="h-3.5 w-3.5 text-text-primary focus-visible:outline-none"
              />
              <span className="flex-1">{opt}</span>
              {isThisCorrect && (
                <span
                  className="flex h-4 w-4 items-center justify-center rounded-rounded bg-background-success text-text-contrastText"
                  aria-hidden="true"
                >
                  <CheckIcon />
                </span>
              )}
            </label>
          );
        })}
      </fieldset>

      <div
        role="status"
        aria-live="polite"
        className={cn(
          'mt-auto rounded-md px-sm py-2 text-[0.6875rem] font-semiBold',
          isCorrect
            ? 'border border-stroke-success/40 bg-success-su100/40 text-text-success'
            : 'border border-stroke-default bg-background-default/50 text-text-light',
        )}
      >
        {isCorrect ? content.feedback : ' '}
      </div>
    </article>
  );
};
