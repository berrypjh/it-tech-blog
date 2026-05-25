'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { ActivityHiddenUiContent } from '../content';
import { CheckCircleIcon, EyeIcon, EyeOffIcon } from '../icons';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActivityHiddenUiContent['simulator'] };

const modeAccent: Record<
  'visible' | 'hidden',
  {
    text: string;
    border: string;
    borderStrong: string;
    bg: string;
    chip: string;
    iconChip: string;
    dot: string;
    solidBg: string;
  }
> = {
  visible: {
    text: 'text-teal-700 dark:text-teal-200',
    border: 'border-teal-200/80 dark:border-teal-800/70',
    borderStrong: 'border-teal-400/80 dark:border-teal-500/70',
    bg: 'bg-teal-50/40 dark:bg-teal-950/30',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    dot: 'bg-teal-500 dark:bg-teal-400',
    solidBg: 'bg-teal-600 dark:bg-teal-500',
  },
  hidden: {
    text: 'text-rose-700 dark:text-rose-200',
    border: 'border-rose-200/80 dark:border-rose-800/70',
    borderStrong: 'border-rose-400/80 dark:border-rose-500/70',
    bg: 'bg-rose-50/40 dark:bg-rose-950/30',
    chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    dot: 'bg-rose-500 dark:bg-rose-400',
    solidBg: 'bg-rose-600 dark:bg-rose-500',
  },
};

export const ActivityModeSimulator = ({ content }: Props) => {
  const [active, setActive] = useState<'visible' | 'hidden'>(content.defaultMode);

  return (
    <section aria-labelledby="simulator-heading" className="flex flex-col">
      <SectionHeader
        id="simulator-heading"
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
        <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_3fr)_minmax(0,_5fr)_minmax(0,_5fr)] lg:gap-md items-stretch">
          {/* LEFT: mode select */}
          <div className="flex flex-col gap-sm">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.selectLabel}
            </p>
            <div role="tablist" aria-label={content.selectLabel} className="flex flex-col gap-2">
              {content.panels.map((panel) => {
                const isActive = panel.mode === active;
                const accent = modeAccent[panel.mode];
                return (
                  <button
                    key={panel.mode}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(panel.mode)}
                    className={cn(
                      'group inline-flex items-center justify-between gap-2 rounded-xl border-2 px-3 py-2.5 text-left',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? cn(
                            'text-white shadow-[0_3px_0_var(--term-border)]',
                            accent.solidBg,
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
                      {panel.mode === 'visible' ? (
                        <EyeIcon aria-hidden="true" className="h-4 w-4" />
                      ) : (
                        <EyeOffIcon aria-hidden="true" className="h-4 w-4" />
                      )}
                      <span className="font-mono text-xsm font-bold break-keep">{panel.mode}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: panels */}
          {content.panels.map((panel) => {
            const accent = modeAccent[panel.mode];
            const isActive = panel.mode === active;
            const Icon = iconRegistry[panel.iconKey];
            return (
              <article
                key={panel.mode}
                className={cn(
                  'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
                  isActive
                    ? cn(accent.borderStrong, accent.bg, 'shadow-[0_3px_0_var(--term-border)]')
                    : cn(accent.border, 'bg-white dark:bg-[var(--term-bg)] opacity-70'),
                  'transition-all',
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                        accent.iconChip,
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className={cn('text-sm font-bold break-keep', accent.text)}>
                      {panel.title}
                    </h3>
                  </div>
                  {panel.mode === 'visible' ? (
                    /* visible UI preview box */
                    <div
                      aria-hidden="true"
                      className="inline-flex flex-col gap-1 rounded-md border border-teal-200 bg-teal-50 px-2 py-1.5 dark:border-teal-800/60 dark:bg-teal-950/40"
                    >
                      <span className="block h-1.5 w-12 rounded-full bg-teal-300 dark:bg-teal-600" />
                      <span className="block h-1.5 w-8 rounded-full bg-teal-200 dark:bg-teal-700/60" />
                    </div>
                  ) : (
                    /* hidden placeholder */
                    <div
                      aria-hidden="true"
                      className="inline-flex h-9 w-16 items-center justify-center rounded-md border-2 border-dashed border-rose-300 dark:border-rose-700/70"
                    >
                      <span className="text-[10px] font-mono text-rose-700 dark:text-rose-200">
                        none
                      </span>
                    </div>
                  )}
                </header>

                <ul className="flex flex-col gap-1.5">
                  {panel.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
                    >
                      <CheckCircleIcon
                        aria-hidden="true"
                        className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', accent.text)}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
