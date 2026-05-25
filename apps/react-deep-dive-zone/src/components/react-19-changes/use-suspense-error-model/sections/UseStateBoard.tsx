'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { UseSuspenseErrorModelContent } from '../content';
import {
  ChevronRightIcon,
  HourglassIcon,
  RotateCcwIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  UserIcon,
} from '../icons';
import { stateTone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: UseSuspenseErrorModelContent['stateBoard'] };

const stateColor: Record<
  'pending' | 'fulfilled' | 'rejected',
  'pending' | 'fulfilled' | 'rejected'
> = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

export const UseStateBoard = ({ content }: Props) => {
  const [active, setActive] = useState<'pending' | 'fulfilled' | 'rejected'>(content.defaultState);
  const current = content.states.find((s) => s.key === active) ?? content.states[0];
  if (!current) return null;
  const tone = stateTone[stateColor[current.key]];

  return (
    <section aria-labelledby="state-board-heading" className="flex flex-col">
      <SectionHeader
        id="state-board-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_3fr)_minmax(0,_9fr)] lg:gap-lg items-stretch">
          {/* LEFT: state buttons */}
          <div className="flex flex-col gap-sm">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.buttonLabel}
            </p>
            <div
              role="tablist"
              aria-label={content.buttonLabel}
              className="grid grid-cols-3 gap-2 lg:grid-cols-1"
            >
              {content.states.map((s) => {
                const isActive = s.key === active;
                const t = stateTone[stateColor[s.key]];
                return (
                  <button
                    key={s.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(s.key)}
                    className={cn(
                      'group inline-flex items-center justify-between gap-2 rounded-xl border-2 px-3 py-2.5 text-left',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? cn(
                            'text-white shadow-[0_3px_0_var(--term-border)]',
                            t.solidBg,
                            'border-transparent',
                          )
                        : cn(
                            'bg-white text-[var(--term-fg)] dark:bg-[var(--term-bg)]',
                            'border-slate-200 dark:border-slate-700',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                          ),
                    )}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'block h-2 w-2 rounded-full',
                          isActive ? 'bg-white/90' : t.dot,
                        )}
                      />
                      <span className="font-mono text-xsm font-bold break-keep">
                        {s.buttonLabel}
                      </span>
                    </span>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className={cn(
                        'h-3.5 w-3.5 shrink-0 transition-transform',
                        isActive
                          ? 'translate-x-0.5'
                          : 'group-hover:translate-x-0.5 motion-reduce:transform-none',
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: result panels - all visible always so visual is rich, but active emphasized */}
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-3 items-stretch">
            {content.states.map((s) => {
              const t = stateTone[stateColor[s.key]];
              const isActive = s.key === active;
              return (
                <li key={s.key} className="h-full">
                  <article
                    className={cn(
                      'flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
                      isActive
                        ? cn(t.borderStrong, t.bg, 'shadow-[0_3px_0_var(--term-border)]')
                        : cn(t.border, 'bg-white dark:bg-[var(--term-bg)] opacity-70'),
                      'transition-all',
                    )}
                  >
                    <header className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                          t.iconChip,
                        )}
                      >
                        {s.key === 'pending' && <HourglassIcon className="h-4 w-4" />}
                        {s.key === 'fulfilled' && <ShieldCheckIcon className="h-4 w-4" />}
                        {s.key === 'rejected' && <ShieldAlertIcon className="h-4 w-4" />}
                      </span>
                      <h3 className={cn('text-sm font-bold break-keep', t.text)}>{s.panelTitle}</h3>
                    </header>

                    {/* body */}
                    {s.loading && <LoadingMock text={s.loading.text} />}
                    {s.profile && <ProfileMock profile={s.profile} />}
                    {s.error && <ErrorMock error={s.error} />}

                    <p className="mt-auto text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
                      {s.caption}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Active caption emphasized */}
        <div
          className={cn(
            'mt-md flex items-start gap-2 rounded-xl border-2 px-3 py-3',
            tone.borderStrong,
            tone.bg,
          )}
        >
          <span aria-hidden="true" className={cn('mt-1 block h-2 w-2 rounded-full', tone.dot)} />
          <p className={cn('text-xsm font-bold leading-relaxed break-keep', tone.text)}>
            {current.caption}
          </p>
        </div>
      </div>
    </section>
  );
};

const LoadingMock = ({ text }: { text: string }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="block h-9 w-9 shrink-0 rounded-full bg-blue-200/70 dark:bg-blue-800/40"
      />
      <div className="flex flex-1 flex-col gap-1.5">
        <span
          aria-hidden="true"
          className="block h-2.5 w-3/4 rounded-full bg-blue-200/70 dark:bg-blue-800/40"
        />
        <span
          aria-hidden="true"
          className="block h-2 w-1/2 rounded-full bg-blue-200/50 dark:bg-blue-800/30"
        />
      </div>
    </div>
    <div className="flex items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-2 py-1.5 dark:border-blue-800/60 dark:bg-blue-950/40">
      <HourglassIcon aria-hidden="true" className="h-3 w-3 text-blue-700 dark:text-blue-200" />
      <span className="font-mono text-[11px] font-bold text-blue-700 dark:text-blue-200">
        {text}
      </span>
    </div>
  </div>
);

const ProfileMock = ({ profile }: { profile: { name: string; role: string; badge: string } }) => (
  <div className="flex flex-col gap-2 rounded-xl border-2 border-emerald-200 bg-white p-3 dark:border-emerald-800/60 dark:bg-[var(--term-bg)]">
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200"
      >
        <UserIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-1 flex-col min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-[var(--term-fg)] break-keep">{profile.name}</span>
          <span className="inline-flex items-center rounded-md border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200">
            {profile.badge}
          </span>
        </div>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{profile.role}</span>
      </div>
    </div>
  </div>
);

const ErrorMock = ({ error }: { error: { message: string; buttonLabel: string } }) => (
  <div className="flex flex-col gap-2 rounded-xl border-2 border-rose-200 bg-rose-50/60 p-3 dark:border-rose-700/70 dark:bg-rose-950/30">
    <div className="flex items-start gap-2">
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-rose-300 bg-white text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/60 dark:text-rose-200"
      >
        <ShieldAlertIcon className="h-3.5 w-3.5" />
      </span>
      <p className="text-xsm font-bold text-rose-700 dark:text-rose-200 break-keep leading-snug">
        {error.message}
      </p>
    </div>
    <button
      type="button"
      className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-rose-600 px-3 py-1.5 text-xxsm font-bold text-white dark:bg-rose-500 shadow-[0_2px_0_rgba(15,23,42,0.25)] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/60 focus-visible:ring-offset-2"
    >
      <RotateCcwIcon aria-hidden="true" className="h-3 w-3" />
      {error.buttonLabel}
    </button>
  </div>
);
