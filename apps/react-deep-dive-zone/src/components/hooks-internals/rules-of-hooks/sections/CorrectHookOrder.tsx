import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { CorrectHookCard, RulesOfHooksContent, Tone } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon } from '../icons';

type Props = { content: RulesOfHooksContent['correctOrder'] };

const KEYWORDS = new Set(['function', 'const', 'return']);
const HOOK_NAMES = new Set(['useState', 'useEffect', 'useRef']);

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
  if (tok === 'Profile' || tok === 'document' || tok === 'title')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'count' || tok === 'setCount' || tok === 'inputRef')
    return (
      <span key={i} className="text-amber-200">
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
      <span key={i} className="text-emerald-300">
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

const cardTone: Record<Tone, { card: string; chip: string; text: string }> = {
  sky: {
    card: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/60 dark:bg-sky-950/30',
    chip: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
    text: 'text-sky-800 dark:text-sky-100',
  },
  cyan: {
    card: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-700/60 dark:bg-cyan-950/30',
    chip: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
    text: 'text-cyan-800 dark:text-cyan-100',
  },
  teal: {
    card: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/60 dark:bg-teal-950/30',
    chip: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
    text: 'text-teal-800 dark:text-teal-100',
  },
  emerald: {
    card: 'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/60 dark:bg-emerald-950/30',
    chip: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
    text: 'text-emerald-800 dark:text-emerald-100',
  },
  violet: {
    card: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/60 dark:bg-violet-950/30',
    chip: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    text: 'text-violet-800 dark:text-violet-100',
  },
  amber: {
    card: 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/60 dark:bg-amber-950/30',
    chip: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
    text: 'text-amber-800 dark:text-amber-100',
  },
  rose: {
    card: 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/60 dark:bg-rose-950/30',
    chip: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
    text: 'text-rose-800 dark:text-rose-100',
  },
  orange: {
    card: 'border-orange-300/80 bg-orange-50/60 dark:border-orange-700/60 dark:bg-orange-950/30',
    chip: 'bg-orange-500 text-white dark:bg-orange-400 dark:text-slate-900',
    text: 'text-orange-800 dark:text-orange-100',
  },
  indigo: {
    card: 'border-indigo-300/80 bg-indigo-50/60 dark:border-indigo-700/60 dark:bg-indigo-950/30',
    chip: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
    text: 'text-indigo-800 dark:text-indigo-100',
  },
};

const HookCardItem = ({ card }: { card: CorrectHookCard }) => {
  const t = cardTone[card.tone];
  return (
    <article className={cn('flex items-center gap-3 rounded-xl border-2 px-md py-3', t.card)}>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 px-2.5 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums shrink-0',
          t.chip,
        )}
      >
        Hook {card.index}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className={cn('font-mono text-xsm sm:text-sm font-bold break-all', t.text)}>
          {card.hookName}
        </code>
        <p className="text-[10px] font-mono text-[var(--term-muted)] break-keep">{card.detail}</p>
      </div>
    </article>
  );
};

export const CorrectHookOrder = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-correct-order"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="correct-order"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ShieldCheckIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Left: code */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center gap-2 border-b border-slate-800 px-md py-2">
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-[10px] font-mono text-slate-500">Profile.jsx</span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
            <code>{lines.map((line, i) => renderCodeLine(line, i))}</code>
          </pre>
        </div>

        {/* Right: mapping */}
        <div className="flex flex-col gap-md">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.mappingTitle}
          </p>
          <ol className="flex flex-col gap-2">
            {content.cards.map((card, i) => {
              const isLast = i === content.cards.length - 1;
              return (
                <li key={card.index} className="flex flex-col gap-1.5">
                  <HookCardItem card={card} />
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="flex justify-center text-[var(--term-muted)]"
                    >
                      <ArrowDownIcon className="h-4 w-4" />
                      <ArrowRightIcon className="hidden h-4 w-4" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>

          <aside
            className={cn(
              'mt-auto flex items-start gap-2 rounded-xl border-2 p-md',
              'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/60 dark:bg-emerald-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900"
            >
              <CheckCircleIcon className="h-4 w-4" />
            </span>
            <p className="text-xsm leading-relaxed text-emerald-900 dark:text-emerald-100 break-keep">
              {content.successMessage}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
