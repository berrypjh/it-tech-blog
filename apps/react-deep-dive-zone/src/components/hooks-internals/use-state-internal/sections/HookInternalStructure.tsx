import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { Tone, UseStateInternalsContent } from '../content';
import { BracesIcon } from '../icons';

type Props = { content: UseStateInternalsContent['hookStructure'] };

const NULLISH = new Set(['null', 'NoLanes']);
const FIELD_NAMES = new Set([
  'memoizedState',
  'baseState',
  'baseQueue',
  'queue',
  'pending',
  'lanes',
  'dispatch',
  'lastRenderedReducer',
  'lastRenderedState',
  'next',
]);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (NULLISH.has(tok))
    return (
      <span key={i} className="text-orange-300">
        {tok}
      </span>
    );
  if (FIELD_NAMES.has(tok))
    return (
      <span key={i} className="text-pink-300">
        {tok}
      </span>
    );
  if (tok === 'Hook')
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (tok === 'setCount' || tok === 'basicStateReducer')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (/^\d+$/.test(tok))
    return (
      <span key={i} className="text-amber-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

const toneChip: Record<Tone, string> = {
  sky: 'bg-sky-50 text-sky-800 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-100 dark:border-sky-800/60',
  cyan: 'bg-cyan-50 text-cyan-800 border-cyan-200/80 dark:bg-cyan-950/60 dark:text-cyan-100 dark:border-cyan-800/60',
  teal: 'bg-teal-50 text-teal-800 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-100 dark:border-teal-800/60',
  emerald:
    'bg-emerald-50 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-100 dark:border-emerald-800/60',
  violet:
    'bg-violet-50 text-violet-800 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-100 dark:border-violet-800/60',
  amber:
    'bg-amber-50 text-amber-800 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-100 dark:border-amber-800/60',
  indigo:
    'bg-indigo-50 text-indigo-800 border-indigo-200/80 dark:bg-indigo-950/60 dark:text-indigo-100 dark:border-indigo-800/60',
};

export const HookInternalStructure = ({ content }: Props) => {
  const lines = content.code.split('\n');
  const queueParentField = content.fields.find((f) => f.name === 'queue');
  return (
    <section
      aria-labelledby="heading-hook-structure"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="hook-structure"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<BracesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Left: Hook structure code */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">Hook (useState)</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              js
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\]:;,.])/);
                return (
                  <div key={i} className="flex">
                    <span
                      aria-hidden="true"
                      className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Right: hierarchical field list */}
        <ul className="flex flex-col gap-2">
          {content.fields
            .filter((f) => !f.isQueueChild && f.name !== 'queue')
            .map((field) => (
              <li key={field.name}>
                <article
                  className={cn(
                    'flex items-start gap-3 rounded-xl border bg-[var(--term-bg)] p-md',
                    'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)] transition-all',
                    'hover:border-sky-300/70 dark:hover:border-sky-700/70',
                  )}
                >
                  <span
                    className={cn(
                      'inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-mono font-bold break-all',
                      toneChip[field.tone],
                    )}
                  >
                    {field.name}
                  </span>
                  <p className="flex-1 text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep pt-1">
                    {field.description}
                  </p>
                </article>
              </li>
            ))}

          {/* Queue block — emphasized parent + children */}
          {queueParentField && (
            <li>
              <article
                className={cn(
                  'flex flex-col gap-2 rounded-xl border-2 bg-[var(--term-bg)] p-md',
                  'border-cyan-300/80 dark:border-cyan-700/70 shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      'inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-mono font-bold break-all',
                      toneChip.cyan,
                    )}
                  >
                    queue
                  </span>
                  <p className="flex-1 text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep pt-1 font-medium">
                    {queueParentField.description}
                  </p>
                </div>
                <ul className="ml-2 sm:ml-4 flex flex-col gap-1.5 border-l-2 border-cyan-300/60 dark:border-cyan-700/60 pl-3">
                  {content.fields
                    .filter((f) => f.isQueueChild)
                    .map((child) => (
                      <li key={child.name} className="flex items-start gap-2">
                        <span
                          className={cn(
                            'inline-flex shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-mono font-bold break-all',
                            toneChip[child.tone],
                          )}
                        >
                          {child.name}
                        </span>
                        <p className="flex-1 text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep pt-0.5">
                          {child.description}
                        </p>
                      </li>
                    ))}
                </ul>
              </article>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};
