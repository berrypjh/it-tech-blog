import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../../getting-started/_shared/SectionHeader';
import type { ApiDetail, React19HooksContent, Tone } from '../../content';
import { ArrowRightIcon, CodeIcon, LightbulbIcon, TagIcon, WorkflowIcon } from '../../icons';

const KEYWORDS = new Set(['import', 'from', 'function', 'const', 'return']);
const HOOK_NAMES = new Set([
  'use',
  'useEffect',
  'useEffectEvent',
  'useActionState',
  'useOptimistic',
]);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (tok.startsWith('//'))
    return (
      <span key={i} className="text-emerald-400 italic">
        {tok}
      </span>
    );
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
  if (
    tok === 'Profile' ||
    tok === 'Chat' ||
    tok === 'subscribe' ||
    tok === 'showNotification' ||
    tok === 'submitForm'
  )
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (
    tok === 'user' ||
    tok === 'userPromise' ||
    tok === 'state' ||
    tok === 'action' ||
    tok === 'pending' ||
    tok === 'initialState' ||
    tok === 'list' ||
    tok === 'addOptimistic' ||
    tok === 'serverList' ||
    tok === 'newItem' ||
    tok === 'roomId' ||
    tok === 'theme' ||
    tok === 'onMessage' ||
    tok === 'msg' ||
    tok === 'sub' ||
    tok === 'name'
  )
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'form' || tok === 'button' || tok === 'div')
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (tok === 'disabled' || tok === 'action')
    return (
      <span key={i} className="text-pink-300">
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
  const commentMatch = line.match(/^(.*?)(\/\/.*)$/);
  const codeText = commentMatch ? commentMatch[1] : line;
  const commentText = commentMatch ? commentMatch[2] : '';
  const tokens = codeText.split(/(\s+|[(){}[\];,.<>=`${}])/);
  return (
    <div key={key} className="flex">
      <span
        aria-hidden="true"
        className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
      >
        {key + 1}
      </span>
      <span className="whitespace-pre">
        {tokens.map(renderToken)}
        {commentText && <span className="text-emerald-400 italic">{commentText}</span>}
      </span>
    </div>
  );
};

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/40 dark:border-sky-700/60 dark:bg-sky-950/20',
  cyan: 'border-cyan-300/80 bg-cyan-50/40 dark:border-cyan-700/60 dark:bg-cyan-950/20',
  teal: 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/60 dark:bg-teal-950/20',
  emerald:
    'border-emerald-300/80 bg-emerald-50/40 dark:border-emerald-700/60 dark:bg-emerald-950/20',
  violet: 'border-violet-300/80 bg-violet-50/40 dark:border-violet-700/60 dark:bg-violet-950/20',
  amber: 'border-amber-300/80 bg-amber-50/40 dark:border-amber-700/60 dark:bg-amber-950/20',
  orange: 'border-orange-300/80 bg-orange-50/40 dark:border-orange-700/60 dark:bg-orange-950/20',
  rose: 'border-rose-300/80 bg-rose-50/40 dark:border-rose-700/60 dark:bg-rose-950/20',
  indigo: 'border-indigo-300/80 bg-indigo-50/40 dark:border-indigo-700/60 dark:bg-indigo-950/20',
};

const toneHeader: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  orange: 'bg-orange-500 text-white dark:bg-orange-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
  indigo: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  orange: 'text-orange-700 dark:text-orange-200',
  rose: 'text-rose-700 dark:text-rose-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
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
  orange:
    'bg-orange-50 text-orange-800 border-orange-200/80 dark:bg-orange-950/60 dark:text-orange-100 dark:border-orange-800/60',
  rose: 'bg-rose-50 text-rose-800 border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-100 dark:border-rose-800/60',
  indigo:
    'bg-indigo-50 text-indigo-800 border-indigo-200/80 dark:bg-indigo-950/60 dark:text-indigo-100 dark:border-indigo-800/60',
};

const toneDot: Record<Tone, string> = {
  sky: 'bg-sky-500 dark:bg-sky-400',
  cyan: 'bg-cyan-500 dark:bg-cyan-400',
  teal: 'bg-teal-500 dark:bg-teal-400',
  emerald: 'bg-emerald-500 dark:bg-emerald-400',
  violet: 'bg-violet-500 dark:bg-violet-400',
  amber: 'bg-amber-500 dark:bg-amber-400',
  orange: 'bg-orange-500 dark:bg-orange-400',
  rose: 'bg-rose-500 dark:bg-rose-400',
  indigo: 'bg-indigo-500 dark:bg-indigo-400',
};

type Props = {
  detail: ApiDetail;
  labels: React19HooksContent['apiLabels'];
};

export const ApiDetailSection = ({ detail, labels }: Props) => {
  const lines = detail.code.split('\n');
  return (
    <section
      aria-labelledby={`heading-api-${detail.key}`}
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id={`api-${detail.key}`}
        eyebrow={`api · ${detail.number}`}
        title={detail.title}
        icon={
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums',
              toneHeader[detail.tone],
            )}
          >
            {detail.number}
          </span>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md lg:gap-lg">
        {/* Left: What it does + concepts */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)] transition-all',
            'motion-safe:hover:-translate-y-0.5',
            toneCard[detail.tone],
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-white dark:bg-slate-950/40',
                'border-[var(--term-border)]',
                toneText[detail.tone],
              )}
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {labels.whatItDoes}
            </h3>
          </header>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {detail.whatItDoes}
          </p>

          <div className="mt-auto flex flex-col gap-1.5">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {labels.concepts}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {detail.concepts.map((concept) => (
                <li key={concept}>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-mono font-bold break-keep',
                      toneChip[detail.tone],
                    )}
                  >
                    <TagIcon aria-hidden="true" className="h-3 w-3" />
                    {concept}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Center: Code panel */}
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            <CodeIcon aria-hidden="true" className="h-3 w-3" />
            {labels.code}
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)] flex-1">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
              <div className="flex items-center gap-1.5">
                <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span
                  aria-hidden="true"
                  className="block h-2.5 w-2.5 rounded-full bg-amber-300/80"
                />
                <span
                  aria-hidden="true"
                  className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
                />
                <code className="ml-2 text-[10px] font-mono text-slate-500">{detail.title}</code>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                jsx
              </span>
            </div>
            <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
              <code>{lines.map((line, i) => renderCodeLine(line, i))}</code>
            </pre>
          </div>
        </div>

        {/* Right: Flow */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)]',
            toneCard[detail.tone],
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-white dark:bg-slate-950/40',
                'border-[var(--term-border)]',
                toneText[detail.tone],
              )}
            >
              <WorkflowIcon className="h-4 w-4" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {detail.flowTitle}
            </h3>
          </header>

          <ol className="flex flex-col gap-1.5">
            {detail.flowItems.map((item, i) => {
              const isLast = i === detail.flowItems.length - 1;
              return (
                <li key={i} className="flex flex-col">
                  <div className="flex items-start gap-2 rounded-lg border border-[var(--term-border)] bg-white px-3 py-2 dark:bg-slate-950/40">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums',
                        toneHeader[detail.tone],
                      )}
                    >
                      {i + 1}
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-[11px] sm:text-xsm font-bold text-[var(--term-fg)] break-keep">
                        {item.label}
                      </span>
                      {item.detail && (
                        <span className="text-[10px] font-mono text-[var(--term-muted)] break-keep">
                          {item.detail}
                        </span>
                      )}
                    </div>
                  </div>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className={cn('mt-0.5 flex justify-center', toneText[detail.tone])}
                    >
                      <ArrowRightIcon className="h-3 w-3 rotate-90" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </article>
      </div>
    </section>
  );
};

// Re-export for other sections
export { toneCard, toneChip, toneDot, toneHeader, toneText };
