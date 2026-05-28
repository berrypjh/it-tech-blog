'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { HooksEntryFlowContent, TabKey } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CodeIcon,
  SparklesIcon,
  SplitIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: HooksEntryFlowContent['tabs'] };

const stepAccents = ['violet', 'cyan', 'emerald'] as const;
const stepIcons = [CodeIcon, SplitIcon, WorkflowIcon];

const accentMap: Record<(typeof stepAccents)[number], { card: string; icon: string }> = {
  violet: {
    card: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-800/60 dark:bg-violet-950/30',
    icon: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 border-violet-200/80 dark:border-violet-800/60',
  },
  cyan: {
    card: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-800/60 dark:bg-cyan-950/30',
    icon: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200 border-cyan-200/80 dark:border-cyan-800/60',
  },
  emerald: {
    card: 'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-800/60 dark:bg-emerald-950/30',
    icon: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60',
  },
};

export const HookConnectionTabs = ({ content }: Props) => {
  const [active, setActive] = useState<TabKey>(content.tabs[0].key);
  const flow = content.flows.find((f) => f.key === active) ?? content.flows[0];

  return (
    <section
      aria-labelledby="heading-tabs"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="tabs"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Hook tabs"
        className="flex flex-wrap gap-1 border-b border-[var(--term-border)]"
      >
        {content.tabs.map((tab) => {
          const selected = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`tab-${tab.key}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.key)}
              className={cn(
                'relative -mb-px inline-flex items-center gap-1.5 rounded-t-xl border-x border-t px-4 py-2',
                'text-xsm sm:text-sm font-mono font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                selected
                  ? 'border-blue-400 dark:border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-100'
                  : 'border-transparent text-[var(--term-muted)] hover:text-[var(--term-fg)] hover:bg-[var(--term-border)]/30',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-block h-1.5 w-1.5 rounded-full',
                  selected ? 'bg-blue-500 dark:bg-blue-400' : 'bg-[var(--term-dim)]',
                )}
              />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active tab panel */}
      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="mt-md flex flex-col gap-md"
      >
        <ol className="grid grid-cols-1 lg:grid-cols-3 gap-3 relative">
          {flow.steps.map((step, i) => {
            const accent = accentMap[stepAccents[i] ?? 'violet'];
            const Icon = stepIcons[i] ?? CodeIcon;
            const isLast = i === flow.steps.length - 1;
            return (
              <li
                key={step.title}
                className={cn(
                  'relative flex flex-col gap-2 rounded-2xl border-2 p-md',
                  accent.card,
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                      accent.icon,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                    flow {i + 1}
                  </span>
                </div>
                <code className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-all">
                  {step.title}
                </code>
                <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                  {step.detail}
                </p>

                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="hidden lg:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                    >
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="lg:hidden flex justify-center text-[var(--term-muted)] mt-1"
                    >
                      <ArrowDownIcon className="h-4 w-4" />
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>

        {/* Summary card */}
        <aside
          className={cn(
            'rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-300/70 bg-blue-50/60',
            'dark:border-blue-800/60 dark:bg-blue-950/30',
          )}
        >
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900"
            >
              <WorkflowIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <h4 className="text-xsm sm:text-sm font-bold text-blue-800 dark:text-blue-100">
                {flow.summary.title}
              </h4>
              <p className="text-xsm leading-relaxed text-blue-900/85 dark:text-blue-100/85 break-keep">
                {flow.summary.description}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
