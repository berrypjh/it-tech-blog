'use client';

import { useRef } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { SimulationMode, SimulationModeId } from '../content';

type Props = {
  modes: SimulationMode[];
  active: SimulationModeId;
  onSelect: (id: SimulationModeId) => void;
  iconFor: (id: SimulationModeId) => React.ReactNode;
  modesTitle: string;
  activeBadge: string;
};

export const SimulationModeList = ({
  modes,
  active,
  onSelect,
  iconFor,
  modesTitle,
  activeBadge,
}: Props) => {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    let next = idx;
    if (e.key === 'ArrowDown') next = (idx + 1) % modes.length;
    if (e.key === 'ArrowUp') next = (idx - 1 + modes.length) % modes.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = modes.length - 1;
    const target = modes[next];
    onSelect(target.id);
    refs.current[target.id]?.focus();
  };

  return (
    <div className="flex flex-col gap-sm" role="group" aria-label={modesTitle}>
      <p className="px-1 text-[0.6875rem] font-semiBold uppercase tracking-wide text-text-light">
        {modesTitle}
      </p>
      <div className="flex flex-col gap-1.5">
        {modes.map((m, i) => {
          const isActive = m.id === active;
          return (
            <button
              key={m.id}
              ref={(el) => {
                refs.current[m.id] = el;
              }}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(m.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                'group flex items-center gap-2 rounded-md border px-sm py-2.5 text-left text-xsm font-semiBold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2',
                isActive
                  ? 'border-stroke-primary bg-background-primary text-text-contrastText shadow-sm'
                  : 'border-stroke-default bg-background-surface text-text-default hover:border-stroke-primary hover:bg-primary-pr100/30 dark:hover:bg-primary-pr900/30',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-md',
                  isActive
                    ? 'bg-background-surface/20 text-text-contrastText'
                    : 'bg-background-default text-text-light',
                )}
              >
                {iconFor(m.id)}
              </span>
              <span className="flex-1 truncate">{m.label}</span>
              <span
                aria-hidden="true"
                className={cn(
                  'flex h-4 w-4 shrink-0 items-center justify-center rounded-rounded',
                  isActive
                    ? 'bg-background-surface text-text-primary'
                    : 'border border-stroke-default bg-background-surface',
                )}
              >
                {isActive ? (
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="none">
                    <path
                      d="M5 12l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </span>
              {isActive && <span className="sr-only">{activeBadge}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
