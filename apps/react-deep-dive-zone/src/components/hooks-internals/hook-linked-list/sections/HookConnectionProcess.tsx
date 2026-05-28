import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { HookLinkedListContent, Tone } from '../content';
import { ArrowRightIcon, WorkflowIcon } from '../icons';

type Props = { content: HookLinkedListContent['connection'] };

const KEYWORDS = new Set(['function', 'const', 'return']);
const HOOK_NAMES = new Set(['useState', 'useRef', 'useEffect']);
const JSX_TAGS = new Set(['input']);

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
  if (tok === 'Profile')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (JSX_TAGS.has(tok))
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (tok === 'ref' || tok === 'value' || tok === 'onChange')
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
  if (/^\d+$/.test(tok))
    return (
      <span key={i} className="text-amber-300">
        {tok}
      </span>
    );
  if (tok === 'null')
    return (
      <span key={i} className="text-orange-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

const toneCircle: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
};

const toneBorder: Record<Tone, string> = {
  sky: 'border-sky-300/80 dark:border-sky-700/70 hover:border-sky-400',
  cyan: 'border-cyan-300/80 dark:border-cyan-700/70 hover:border-cyan-400',
  teal: 'border-teal-300/80 dark:border-teal-700/70 hover:border-teal-400',
  emerald: 'border-emerald-300/80 dark:border-emerald-700/70 hover:border-emerald-400',
  violet: 'border-violet-300/80 dark:border-violet-700/70 hover:border-violet-400',
  amber: 'border-amber-300/80 dark:border-amber-700/70 hover:border-amber-400',
  rose: 'border-rose-300/80 dark:border-rose-700/70 hover:border-rose-400',
};

const toneNodeChip: Record<Tone, string> = {
  sky: 'bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200/80 dark:bg-cyan-950/40 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-50 text-teal-700 border-teal-200/80 dark:bg-teal-950/40 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-50 text-violet-700 border-violet-200/80 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/60',
  amber:
    'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-50 text-rose-700 border-rose-200/80 dark:bg-rose-950/40 dark:text-rose-200 dark:border-rose-800/60',
};

export const HookConnectionProcess = ({ content }: Props) => {
  const lines = content.profileCode.split('\n');
  return (
    <section
      aria-labelledby="heading-connection"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="connection"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<WorkflowIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Left: Profile code */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">Profile.jsx</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              jsx
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
            <code>
              {lines.map((line, i) => {
                // Handle inline comment specially
                const commentMatch = line.match(/(.*?)(\/\/.*)$/);
                const codeText = commentMatch ? commentMatch[1] : line;
                const commentText = commentMatch ? commentMatch[2] : '';
                const tokens = codeText.split(/(\s+|[(){}[\];,.<>=])/);
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
                      {commentText && (
                        <span className="text-emerald-400 italic">{commentText}</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Right: 3-step timeline */}
        <ol className="flex flex-col gap-md">
          {content.steps.map((step) => (
            <li key={step.number}>
              <article
                className={cn(
                  'flex flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md',
                  'shadow-[0_1px_0_var(--term-border)] transition-all',
                  'motion-safe:hover:-translate-y-0.5',
                  toneBorder[step.tone],
                )}
              >
                <header className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums',
                      toneCircle[step.tone],
                    )}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                    Step {step.number} · {step.title}
                  </h3>
                </header>

                <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {step.description}
                </p>

                {/* Mini diagram */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {step.diagram.map((node, j) => {
                    const isLast = j === step.diagram.length - 1;
                    return (
                      <span key={node} className="inline-flex items-center gap-1.5">
                        <code
                          className={cn(
                            'inline-flex items-center rounded-lg border px-2 py-1 font-mono text-[10px] font-bold break-all',
                            j === 0 ? toneNodeChip.cyan : toneNodeChip[step.tone],
                          )}
                        >
                          {node}
                        </code>
                        {!isLast && (
                          <ArrowRightIcon
                            aria-hidden="true"
                            className="h-3 w-3 text-[var(--term-muted)]"
                          />
                        )}
                      </span>
                    );
                  })}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
