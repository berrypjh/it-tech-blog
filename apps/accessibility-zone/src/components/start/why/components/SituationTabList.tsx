'use client';

import { useRef } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { Situation, SituationId } from '../content';

type Props = {
  situations: Situation[];
  active: SituationId;
  onSelect: (id: SituationId) => void;
  tabsLabel: string;
  activeBadge: string;
  iconFor: (id: SituationId) => React.ReactNode;
};

export const SituationTabList = ({
  situations,
  active,
  onSelect,
  tabsLabel,
  activeBadge,
  iconFor,
}: Props) => {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'Home' && e.key !== 'End')
      return;
    e.preventDefault();
    let next = currentIndex;
    if (e.key === 'ArrowRight') next = (currentIndex + 1) % situations.length;
    if (e.key === 'ArrowLeft') next = (currentIndex - 1 + situations.length) % situations.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = situations.length - 1;
    const target = situations[next];
    onSelect(target.id);
    refs.current[target.id]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={tabsLabel}
      className="grid grid-cols-2 gap-sm sm:grid-cols-3 xl:grid-cols-6"
    >
      {situations.map((s, i) => {
        const isActive = s.id === active;
        return (
          <button
            key={s.id}
            ref={(el) => {
              refs.current[s.id] = el;
            }}
            role="tab"
            id={`situation-tab-${s.id}`}
            aria-selected={isActive}
            aria-controls={`situation-panel-${s.id}`}
            tabIndex={isActive ? 0 : -1}
            type="button"
            onClick={() => onSelect(s.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              'flex items-center gap-2 rounded-md border px-sm py-2.5 text-left text-xsm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2',
              isActive
                ? 'border-stroke-primary bg-primary-pr100/60 text-text-primary shadow-sm dark:bg-primary-pr900/40'
                : 'border-stroke-default bg-background-surface text-text-default hover:border-stroke-primary hover:bg-primary-pr100/30 dark:hover:bg-primary-pr900/30',
            )}
          >
            <span
              className={cn(
                'flex h-7 w-7 shrink-0 items-center justify-center rounded-md',
                isActive
                  ? 'bg-background-primary text-text-contrastText'
                  : 'bg-background-default text-text-light',
              )}
              aria-hidden="true"
            >
              {iconFor(s.id)}
            </span>
            <span className="flex-1 truncate font-semiBold">{s.label}</span>
            {isActive && (
              <span
                className="ml-auto inline-flex h-5 w-5 items-center justify-center rounded-rounded bg-background-primary text-text-contrastText"
                aria-label={activeBadge}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
                  <path
                    d="M5 12l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
