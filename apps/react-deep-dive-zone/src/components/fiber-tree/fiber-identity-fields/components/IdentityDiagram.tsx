import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from '../../../shared/tones';
import type { IdentityField } from '../content';

type Props = {
  cardLabel: string;
  fields: IdentityField[];
  extraNote: string;
};

const rowAccent: Record<ToneKey, string> = {
  sky: 'border-l-sky-400 bg-sky-500/10',
  cyan: 'border-l-cyan-400 bg-cyan-500/10',
  violet: 'border-l-violet-400 bg-violet-500/10',
  emerald: 'border-l-emerald-400 bg-emerald-500/10',
  blue: 'border-l-blue-400 bg-blue-500/10',
  teal: 'border-l-teal-400 bg-teal-500/10',
  indigo: 'border-l-indigo-400 bg-indigo-500/10',
  amber: 'border-l-amber-400 bg-amber-500/10',
};

const rowText: Record<ToneKey, string> = {
  sky: 'text-sky-200',
  cyan: 'text-cyan-200',
  violet: 'text-violet-200',
  emerald: 'text-emerald-200',
  blue: 'text-blue-200',
  teal: 'text-teal-200',
  indigo: 'text-indigo-200',
  amber: 'text-amber-200',
};

const labelChip: Record<ToneKey, string> = {
  sky: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
  violet:
    'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
  emerald:
    'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
  blue: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
  teal: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
  indigo:
    'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
  amber:
    'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/70',
};

const connectorColor: Record<ToneKey, string> = {
  sky: 'bg-sky-400/70',
  cyan: 'bg-cyan-400/70',
  violet: 'bg-violet-400/70',
  emerald: 'bg-emerald-400/70',
  blue: 'bg-blue-400/70',
  teal: 'bg-teal-400/70',
  indigo: 'bg-indigo-400/70',
  amber: 'bg-amber-400/70',
};

const meaningText: Record<ToneKey, string> = {
  sky: 'text-sky-700 dark:text-sky-300',
  cyan: 'text-cyan-700 dark:text-cyan-300',
  violet: 'text-violet-700 dark:text-violet-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  blue: 'text-blue-700 dark:text-blue-300',
  teal: 'text-teal-700 dark:text-teal-300',
  indigo: 'text-indigo-700 dark:text-indigo-300',
  amber: 'text-amber-700 dark:text-amber-300',
};

export const IdentityDiagram = ({ cardLabel, fields, extraNote }: Props) => (
  <div
    className={cn(
      'relative rounded-3xl p-md sm:p-lg',
      'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900',
      'border border-slate-800/80',
      'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.7),0_2px_0_var(--term-border)]',
    )}
  >
    <div
      className={cn(
        'grid items-center gap-2 sm:gap-3',
        'grid-cols-1',
        'lg:grid-cols-[minmax(0,_0.78fr)_24px_minmax(0,_1.22fr)]',
      )}
    >
      {/* Left: dark Fiber card */}
      <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-md min-w-0">
        <header className="mb-2 flex items-center justify-between">
          <h3 className="font-mono text-xsm font-bold tracking-tight text-slate-100">
            {cardLabel}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
            object
          </span>
        </header>
        <ul className="flex flex-col gap-1">
          {fields.map((f) => (
            <li
              key={f.id}
              data-field={f.id}
              className={cn(
                'rounded-md border-l-4 px-2 py-1.5 text-[12px]',
                rowAccent[f.tone],
                rowText[f.tone],
              )}
            >
              <code className="font-mono">{f.label}</code>
            </li>
          ))}
          <li className="px-2 py-1 text-[11px] font-mono text-slate-500/80">{extraNote}</li>
        </ul>
      </article>

      {/* Center connectors - desktop only */}
      <div aria-hidden="true" className="hidden lg:flex flex-col items-center gap-1 self-stretch">
        {fields.map((f) => (
          <span
            key={f.id}
            className={cn('block w-full h-px', connectorColor[f.tone])}
            style={{ marginTop: 14, marginBottom: 14 }}
          />
        ))}
      </div>

      {/* Right: label cards */}
      <ul className="flex flex-col gap-2 min-w-0">
        {fields.map((f) => (
          <li key={f.id} className="flex items-center gap-2 min-w-0">
            <span
              className={cn(
                'inline-flex shrink-0 items-center rounded-md border px-2 py-1 font-mono text-xsm font-bold',
                labelChip[f.tone],
              )}
            >
              {f.label}
            </span>
            <span className={cn('text-xsm font-medium break-keep', meaningText[f.tone])}>
              {f.meaning}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
