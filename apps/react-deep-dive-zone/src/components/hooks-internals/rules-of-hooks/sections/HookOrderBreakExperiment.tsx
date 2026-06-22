'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { HookSlot, RulesOfHooksContent, ToggleSide } from '../content';
import {
  AlertTriangleIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ToggleLeftIcon,
  ToggleRightIcon,
  XCircleIcon,
} from '../icons';

type Props = { content: RulesOfHooksContent['breakExperiment'] };

const KEYWORDS = new Set(['function', 'const', 'if', 'return']);
const HOOK_NAMES = new Set(['useState', 'useEffect']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (HOOK_NAMES.has(tok))
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'Demo' || tok === 'visible' || tok === 'name' || tok === 'setName')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'console' || tok === 'log')
    return (
      <span key={i} className="text-teal-300">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

const renderCodeLine = (line: string, key: number) => {
  const tokens = line.split(/(\s+|[(){}[\];,.<>=])/);
  return (
    <div key={key} className="flex">
      <span
        aria-hidden="true"
        className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
      >
        {key + 1}
      </span>
      <span className="whitespace-pre">{tokens.map(renderToken)}</span>
    </div>
  );
};

const SlotItem = ({ slot }: { slot: HookSlot }) => {
  const styleByStatus = {
    ok: 'border-emerald-300/80 bg-emerald-50 text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-100',
    shifted:
      'border-rose-300/80 bg-rose-50 text-rose-800 dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-100',
    missing:
      'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-200 opacity-90',
  };
  return (
    <li
      className={cn(
        'flex items-center gap-2 rounded-lg border-2 px-3 py-2',
        styleByStatus[slot.status],
      )}
    >
      <code className="font-mono text-[11px] font-bold tabular-nums">{slot.index}</code>
      <code
        className={cn(
          'font-mono text-xsm font-bold break-all',
          slot.status === 'missing' && 'line-through',
        )}
      >
        {slot.hookName}
      </code>
    </li>
  );
};

const StatePanel = ({
  state,
  matchLabel,
  warningLabel,
}: {
  state: ToggleSide;
  matchLabel: string;
  warningLabel: string;
}) => {
  const isOk = state.matchResult === 'ok';
  const isNoWarning = state.warningKind === 'none';
  return (
    <div className="flex flex-col gap-md">
      {/* Hooks list */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          isOk
            ? 'border-emerald-300/70 bg-emerald-50/30 dark:border-emerald-700/60 dark:bg-emerald-950/20'
            : 'border-rose-300/70 bg-rose-50/30 dark:border-rose-700/60 dark:bg-rose-950/20',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-7 w-7 items-center justify-center rounded-full',
              isOk
                ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900'
                : 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
            )}
          >
            {isOk ? <CheckCircleIcon className="h-4 w-4" /> : <XCircleIcon className="h-4 w-4" />}
          </span>
          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--term-fg)]">
            현재: visible = {state.visibleValue}
          </p>
        </header>
        <ul className="flex flex-col gap-2">
          {state.slots.map((s) => (
            <SlotItem key={s.index} slot={s} />
          ))}
        </ul>
      </article>

      {/* Result cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <article
          className={cn(
            'flex flex-col gap-1 rounded-xl border-2 p-3',
            isOk
              ? 'border-emerald-300/70 bg-emerald-50/60 dark:border-emerald-700/60 dark:bg-emerald-950/30'
              : 'border-rose-300/70 bg-rose-50/60 dark:border-rose-700/60 dark:bg-rose-950/30',
          )}
        >
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {matchLabel}
          </p>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 text-xsm font-bold',
              isOk ? 'text-emerald-800 dark:text-emerald-100' : 'text-rose-800 dark:text-rose-100',
            )}
          >
            {isOk ? (
              <ShieldCheckIcon aria-hidden="true" className="h-4 w-4" />
            ) : (
              <AlertTriangleIcon aria-hidden="true" className="h-4 w-4" />
            )}
            {state.matchLabel}
          </span>
        </article>
        <article
          className={cn(
            'flex flex-col gap-1 rounded-xl border-2 p-3',
            isNoWarning
              ? 'border-emerald-300/70 bg-emerald-50/60 dark:border-emerald-700/60 dark:bg-emerald-950/30'
              : 'border-orange-300/70 bg-orange-50/60 dark:border-orange-700/60 dark:bg-orange-950/30',
          )}
        >
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {warningLabel}
          </p>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 text-xsm font-bold break-keep',
              isNoWarning
                ? 'text-emerald-800 dark:text-emerald-100'
                : 'text-orange-800 dark:text-orange-100',
            )}
          >
            {isNoWarning ? (
              <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
            ) : (
              <AlertTriangleIcon aria-hidden="true" className="h-4 w-4" />
            )}
            {state.warningLabel}
          </span>
        </article>
      </div>
    </div>
  );
};

export const HookOrderBreakExperiment = ({ content }: Props) => {
  const [visible, setVisible] = useState<'true' | 'false'>('true');
  const active = visible === 'true' ? content.trueState : content.falseState;
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-break-experiment"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="break-experiment"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Left: code + toggle */}
        <div className="flex flex-col gap-md">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
            <div className="flex items-center gap-2 border-b border-slate-800 px-md py-2">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">Demo.jsx</span>
            </div>
            <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
              <code>{lines.map((line, i) => renderCodeLine(line, i))}</code>
            </pre>
          </div>

          {/* Toggle */}
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.toggleLabel}
            </p>
            <div
              role="tablist"
              aria-label="visible value"
              className={cn(
                'mx-auto sm:mx-0 inline-flex items-center gap-1 rounded-full border-2 p-1',
                'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
              )}
            >
              <ToggleButton
                active={visible === 'true'}
                label={content.trueLabel}
                tone="emerald"
                onClick={() => setVisible('true')}
              />
              <ToggleButton
                active={visible === 'false'}
                label={content.falseLabel}
                tone="rose"
                onClick={() => setVisible('false')}
              />
            </div>
          </div>
        </div>

        {/* Right: state panel */}
        <StatePanel
          state={active}
          matchLabel={content.matchLabel}
          warningLabel={content.warningLabel}
        />
      </div>
    </section>
  );
};

const ToggleButton = ({
  active,
  label,
  tone,
  onClick,
}: {
  active: boolean;
  label: string;
  tone: 'emerald' | 'rose';
  onClick: () => void;
}) => (
  <button
    type="button"
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={cn(
      'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xsm font-mono font-bold transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
      active
        ? tone === 'emerald'
          ? 'bg-emerald-500 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-emerald-400 dark:text-slate-900'
          : 'bg-rose-500 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-rose-400 dark:text-slate-900'
        : 'text-[var(--term-muted)] hover:text-[var(--term-fg)]',
    )}
  >
    {active && tone === 'emerald' && <ToggleRightIcon aria-hidden="true" className="h-3.5 w-3.5" />}
    {active && tone === 'rose' && <ToggleLeftIcon aria-hidden="true" className="h-3.5 w-3.5" />}
    {label}
  </button>
);
