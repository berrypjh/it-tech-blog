import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { SetStateFlowContent, Tone } from '../content';
import { BracesIcon } from '../icons';

type Props = { content: SetStateFlowContent['updateObject'] };

const KEYWORDS = new Set(['type', 'null', 'true', 'false', 'any', 'boolean']);
const FIELD_NAMES = new Set(['lane', 'action', 'hasEagerState', 'eagerState', 'next']);

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
  if (tok === 'Update' || tok === 'Lane')
    return (
      <span key={i} className="text-cyan-300">
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
  rose: 'bg-rose-50 text-rose-800 border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-100 dark:border-rose-800/60',
  indigo:
    'bg-indigo-50 text-indigo-800 border-indigo-200/80 dark:bg-indigo-950/60 dark:text-indigo-100 dark:border-indigo-800/60',
};

const toneCommentText: Record<Tone, string> = {
  sky: 'text-sky-600/80 dark:text-sky-400/80',
  cyan: 'text-cyan-600/80 dark:text-cyan-400/80',
  teal: 'text-teal-600/80 dark:text-teal-400/80',
  emerald: 'text-emerald-600/80 dark:text-emerald-400/80',
  violet: 'text-violet-600/80 dark:text-violet-400/80',
  amber: 'text-amber-700/80 dark:text-amber-400/80',
  rose: 'text-rose-600/80 dark:text-rose-400/80',
  indigo: 'text-indigo-600/80 dark:text-indigo-400/80',
};

export const UpdateObjectStructure = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-update-object"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="update-object"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<BracesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Left: Code panel */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">Update.d.ts</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              ts
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
            <code>
              {lines.map((line, i) => {
                const commentMatch = line.match(/(.*?)(\/\/.*)$/);
                const codeText = commentMatch ? commentMatch[1] : line;
                const commentText = commentMatch ? commentMatch[2] : '';
                const tokens = codeText.split(/(\s+|[(){}[\]:;,.|])/);
                return (
                  <div key={i} className="flex">
                    <span
                      aria-hidden="true"
                      className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">
                      {tokens.map(renderToken)}
                      {commentText && <span className="text-slate-500 italic">{commentText}</span>}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Right: Field table */}
        <ul className="flex flex-col gap-2">
          {content.fields.map((field) => (
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
                    'inline-flex flex-col items-start shrink-0 rounded-lg border px-2.5 py-1.5 break-all',
                    toneChip[field.tone],
                  )}
                >
                  <code className="font-mono text-[11px] font-bold">{field.name}</code>
                  <code className={cn('font-mono text-[10px] mt-0.5', toneCommentText[field.tone])}>
                    : {field.comment}
                  </code>
                </span>
                <p className="flex-1 text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep pt-1">
                  {field.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
