'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { IntroContent } from '../content';

type Props = { content: IntroContent['handsOn']['mission1'] };

export const KeyboardNavigationMission = ({ content }: Props) => {
  const [focusIndex, setFocusIndex] = useState(0);
  const statusMessage = content.statusTemplate.replace('{n}', String(focusIndex + 1));

  return (
    <article className="flex h-full flex-col gap-md rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm">
      <header className="flex items-start justify-between gap-sm">
        <div className="space-y-1">
          <p className="text-[0.625rem] font-semiBold uppercase tracking-wide text-text-primary">
            mission 1
          </p>
          <h3 className="text-sm font-bold text-text-default">{content.title}</h3>
        </div>
        <kbd className="inline-flex items-center rounded-md border border-stroke-default bg-background-default/60 px-1.5 py-0.5 text-[0.625rem] font-bold text-text-default">
          {content.tabLabel}
        </kbd>
      </header>

      <p className="text-xsm leading-relaxed text-text-light">{content.hint}</p>

      <ol className="mt-sm flex flex-col gap-2">
        {content.steps.map((step, i) => {
          const isFocused = focusIndex === i;
          const numberId = `mission1-step-${i}`;
          return (
            <li key={i} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-rounded text-[0.625rem] font-bold transition-colors',
                  isFocused
                    ? 'bg-background-primary text-text-contrastText'
                    : 'bg-background-default/70 text-text-light',
                )}
              >
                {i + 1}
              </span>

              {step.type === 'button' && (
                <button
                  type="button"
                  id={numberId}
                  onFocus={() => setFocusIndex(i)}
                  onClick={() => setFocusIndex(i)}
                  className={cn(
                    'inline-flex items-center justify-center rounded-md px-2.5 py-1.5 text-[0.6875rem] font-semiBold transition-colors focus-visible:outline-none',
                    isFocused
                      ? 'bg-background-primary text-text-contrastText shadow-sm ring-2 ring-stroke-primary ring-offset-2'
                      : 'bg-background-default/70 text-text-default hover:bg-primary-pr100',
                  )}
                >
                  {step.label}
                </button>
              )}

              {step.type === 'input' && (
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor={numberId}
                    className="text-[0.625rem] font-semiBold text-text-default"
                  >
                    {step.label}
                  </label>
                  <input
                    id={numberId}
                    type="email"
                    placeholder={content.inputPlaceholder}
                    onFocus={() => setFocusIndex(i)}
                    className={cn(
                      'mt-0.5 rounded-sm border bg-background-surface px-2 py-1 text-[0.6875rem] text-text-default transition-colors focus-visible:outline-none',
                      isFocused
                        ? 'border-stroke-primary ring-2 ring-stroke-primary/40'
                        : 'border-stroke-default',
                    )}
                  />
                </div>
              )}

              {step.type === 'select' && (
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor={numberId}
                    className="text-[0.625rem] font-semiBold text-text-default"
                  >
                    {step.label}
                  </label>
                  <select
                    id={numberId}
                    onFocus={() => setFocusIndex(i)}
                    className={cn(
                      'mt-0.5 rounded-sm border bg-background-surface px-2 py-1 text-[0.6875rem] text-text-default transition-colors focus-visible:outline-none',
                      isFocused
                        ? 'border-stroke-primary ring-2 ring-stroke-primary/40'
                        : 'border-stroke-default',
                    )}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {content.selectLabel}
                    </option>
                    <option value="frontend">{content.selectLabel}</option>
                  </select>
                </div>
              )}

              {step.type === 'checkbox' && (
                <label
                  htmlFor={numberId}
                  className="flex flex-1 cursor-pointer items-center gap-1.5 text-[0.6875rem] text-text-default"
                >
                  <input
                    id={numberId}
                    type="checkbox"
                    onFocus={() => setFocusIndex(i)}
                    className={cn(
                      'h-4 w-4 rounded-xs border-stroke-default text-text-primary focus-visible:outline-none',
                      isFocused && 'ring-2 ring-stroke-primary/40',
                    )}
                  />
                  {content.checkboxLabel}
                </label>
              )}
            </li>
          );
        })}
      </ol>

      <div
        role="status"
        aria-live="polite"
        className="mt-auto rounded-md border border-stroke-primary/30 bg-primary-pr100/40 px-sm py-2 text-[0.6875rem] font-semiBold text-text-primary dark:bg-primary-pr900/30"
      >
        {statusMessage}
      </div>
    </article>
  );
};
