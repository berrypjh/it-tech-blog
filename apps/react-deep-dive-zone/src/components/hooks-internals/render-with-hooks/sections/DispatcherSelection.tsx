'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { RenderWithHooksContent } from '../content';
import { AtomIcon, SplitIcon } from '../icons';

type Props = { content: RenderWithHooksContent['dispatcher'] };

type Mode = 'mount' | 'update';

export const DispatcherSelection = ({ content }: Props) => {
  const [mode, setMode] = useState<Mode>('mount');

  return (
    <section
      aria-labelledby="heading-dispatcher"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="dispatcher"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SplitIcon className="h-5 w-5" />}
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,_0.78fr)_minmax(0,1fr)] gap-md lg:gap-lg items-stretch">
        {/* Mount card */}
        <DispatcherCard card={content.mountCard} accent="sky" highlighted={mode === 'mount'} />

        {/* Center switch */}
        <div className="flex flex-col gap-md items-stretch justify-between">
          {/* Toggle */}
          <div
            role="tablist"
            aria-label="Dispatcher render mode"
            className={cn(
              'mx-auto inline-flex w-full max-w-[260px] items-center gap-1 rounded-full border-2 p-1',
              'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <ToggleButton
              active={mode === 'mount'}
              label={content.switch.firstLabel}
              accent="sky"
              onClick={() => setMode('mount')}
            />
            <ToggleButton
              active={mode === 'update'}
              label={content.switch.rerenderLabel}
              accent="emerald"
              onClick={() => setMode('update')}
            />
          </div>

          {/* Decoration */}
          <div
            className={cn(
              'relative flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-md',
              'border-[var(--term-border)] bg-[var(--term-border)]/15 dark:bg-slate-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-14 w-14 items-center justify-center rounded-full',
                'bg-gradient-to-br',
                mode === 'mount'
                  ? 'from-sky-400 to-cyan-500 dark:from-sky-500 dark:to-cyan-600'
                  : 'from-emerald-400 to-teal-500 dark:from-emerald-500 dark:to-teal-600',
                'text-white shadow-[0_3px_0_var(--term-border)]',
              )}
            >
              <AtomIcon className="h-6 w-6" />
            </span>
            <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep text-center">
              {content.switch.hint}
            </p>
          </div>

          {/* Dashed arrows hint (visual only) */}
          <div
            aria-hidden="true"
            className="hidden lg:flex items-center justify-between text-[var(--term-muted)] -mt-2 px-1"
          >
            <span className="text-[10px] font-mono uppercase tracking-wider">{'← mount'}</span>
            <span className="text-[10px] font-mono uppercase tracking-wider">{'update →'}</span>
          </div>
        </div>

        {/* Update card */}
        <DispatcherCard
          card={content.updateCard}
          accent="emerald"
          highlighted={mode === 'update'}
        />
      </div>
    </section>
  );
};

type Accent = 'sky' | 'emerald';

const accentStyles: Record<
  Accent,
  { border: string; chip: string; iconText: string; mono: string }
> = {
  sky: {
    border:
      'border-sky-300/80 dark:border-sky-700/70 hover:border-sky-400 dark:hover:border-sky-600',
    chip: 'bg-sky-100 text-sky-800 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-100 dark:border-sky-800/60',
    iconText: 'text-sky-700 dark:text-sky-200',
    mono: 'text-sky-700 dark:text-sky-200',
  },
  emerald: {
    border:
      'border-emerald-300/80 dark:border-emerald-700/70 hover:border-emerald-400 dark:hover:border-emerald-600',
    chip: 'bg-emerald-100 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-100 dark:border-emerald-800/60',
    iconText: 'text-emerald-700 dark:text-emerald-200',
    mono: 'text-emerald-700 dark:text-emerald-200',
  },
};

type CardData = RenderWithHooksContent['dispatcher']['mountCard'];

const DispatcherCard = ({
  card,
  accent,
  highlighted,
}: {
  card: CardData;
  accent: Accent;
  highlighted: boolean;
}) => {
  const s = accentStyles[accent];
  return (
    <article
      aria-current={highlighted ? 'true' : undefined}
      className={cn(
        'flex flex-col gap-md rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all',
        s.border,
        highlighted && 'shadow-[0_4px_0_var(--term-border)] motion-safe:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3 className={cn('text-sm sm:text-md font-bold', s.mono)}>{card.title}</h3>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
            s.chip,
          )}
        >
          {card.badge}
        </span>
      </header>

      <code className={cn('font-mono text-xsm sm:text-sm font-bold break-all', s.iconText)}>
        {card.dispatcher}
      </code>

      <div
        className={cn(
          'flex flex-col items-center gap-1 rounded-xl border bg-[var(--term-border)]/10 dark:bg-slate-950/30 p-md text-center',
          'border-[var(--term-border)]',
        )}
      >
        {card.flow.map((row, i) => (
          <code
            key={i}
            className={cn(
              'font-mono text-xsm sm:text-sm leading-relaxed',
              row.mono ? 'text-[var(--term-fg)]' : 'text-[var(--term-muted)]',
              row.emphasis && cn('font-bold', s.mono),
            )}
          >
            {row.line}
          </code>
        ))}
      </div>
    </article>
  );
};

const ToggleButton = ({
  active,
  label,
  accent,
  onClick,
}: {
  active: boolean;
  label: string;
  accent: Accent;
  onClick: () => void;
}) => (
  <button
    type="button"
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={cn(
      'flex-1 inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xsm font-bold transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
      active
        ? accent === 'sky'
          ? 'bg-sky-500 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-sky-400 dark:text-slate-900'
          : 'bg-emerald-500 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-emerald-400 dark:text-slate-900'
        : 'text-[var(--term-muted)] hover:text-[var(--term-fg)]',
    )}
  >
    {label}
  </button>
);
