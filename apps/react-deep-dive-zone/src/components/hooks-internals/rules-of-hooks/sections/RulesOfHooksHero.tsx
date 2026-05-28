import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { HeroRenderSide, HookSlot, RulesOfHooksContent } from '../content';
import {
  AlertTriangleIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ListOrderedIcon,
  XCircleIcon,
} from '../icons';

type Props = { content: RulesOfHooksContent['hero'] };

const KEYWORDS = new Set(['function', 'const', 'if', 'return']);
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
  if (tok === 'MyComponent' || tok === 'Profile')
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
  if (
    tok === 'visible' ||
    tok === 'count' ||
    tok === 'setCount' ||
    tok === 'inputRef' ||
    tok === 'name' ||
    tok === 'setName'
  )
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
  const tokens = codeText.split(/(\s+|[(){}[\];,.<>=])/);
  return (
    <div key={key} className="whitespace-pre">
      {tokens.map(renderToken)}
      {commentText && <span className="text-emerald-400 italic">{commentText}</span>}
    </div>
  );
};

export const RenderSlotItem = ({ slot }: { slot: HookSlot }) => {
  const styleByStatus = {
    ok: 'border-emerald-300/80 bg-emerald-50 text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-100',
    shifted:
      'border-rose-300/80 bg-rose-50 text-rose-800 dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-100',
    missing:
      'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-200 line-through opacity-90',
  };
  return (
    <li
      className={cn(
        'flex items-start gap-2 rounded-lg border-2 px-3 py-2',
        styleByStatus[slot.status],
      )}
    >
      <code className="font-mono text-[11px] font-bold tabular-nums shrink-0">{slot.index}</code>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className="font-mono text-[11px] sm:text-xsm font-bold break-all">
          {slot.hookName}
        </code>
        {slot.caption && (
          <span className="text-[10px] font-mono text-rose-700/85 dark:text-rose-300/85 break-keep not-italic">
            {slot.caption}
          </span>
        )}
      </div>
    </li>
  );
};

const RenderColumn = ({ side, variant }: { side: HeroRenderSide; variant: 'ok' | 'broken' }) => {
  const isBroken = variant === 'broken';
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        isBroken
          ? 'border-rose-300/70 bg-rose-50/40 dark:border-rose-700/60 dark:bg-rose-950/20'
          : 'border-emerald-300/70 bg-emerald-50/40 dark:border-emerald-700/60 dark:bg-emerald-950/20',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-full',
            isBroken
              ? 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900'
              : 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
          )}
        >
          {isBroken ? <XCircleIcon className="h-4 w-4" /> : <CheckCircleIcon className="h-4 w-4" />}
        </span>
        <p
          className={cn(
            'text-[11px] font-mono font-bold uppercase tracking-wider',
            isBroken
              ? 'text-rose-700 dark:text-rose-300'
              : 'text-emerald-700 dark:text-emerald-300',
          )}
        >
          {side.label}
        </p>
      </header>
      <ul className="flex flex-col gap-2">
        {side.slots.map((s) => (
          <RenderSlotItem key={s.index} slot={s} />
        ))}
      </ul>
      <p
        className={cn(
          'mt-auto text-[11px] sm:text-xsm font-bold break-keep text-center',
          isBroken ? 'text-rose-800 dark:text-rose-200' : 'text-emerald-800 dark:text-emerald-200',
        )}
      >
        {side.matchLabel}
      </p>
    </article>
  );
};

export const RulesOfHooksHero = ({ content }: Props) => {
  const lines = content.leftCode.split('\n');
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="react/hooks/rules-of-hooks.md"
        suffix={<span className="text-[var(--term-dim)]"> {'// hook order is identity'}</span>}
      />

      <ul className="mt-md flex flex-wrap items-center gap-2">
        {content.badges.map((badge) => (
          <li
            key={badge.label}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              badge.tone === 'blue' &&
                'bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow-[0_1px_0_var(--term-border)]',
              badge.tone === 'cyan' &&
                'border border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/50 dark:text-cyan-200',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'block h-1.5 w-1.5 rounded-full',
                badge.tone === 'blue' ? 'bg-white/90' : 'bg-cyan-500 dark:bg-cyan-400',
              )}
            />
            {badge.label}
          </li>
        ))}
      </ul>

      <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-lg items-start">
        {/* Left: text + code */}
        <div className="flex flex-col gap-md min-w-0">
          <h1
            id="hero-heading"
            className={cn(
              'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.6rem]',
              'font-bold leading-[1.14] tracking-tight text-[var(--term-fg)] break-keep',
            )}
          >
            <span className="block">{content.titleLine1}</span>
            <span
              className={cn(
                'block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
                'dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300',
              )}
            >
              {content.titleAccent}
            </span>
          </h1>
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[55ch] break-keep">
            {content.description}
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
            <div className="flex items-center gap-2 border-b border-slate-800 px-md py-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">MyComponent.jsx</span>
            </div>
            <pre className="overflow-x-auto px-md py-md text-[11px] sm:text-xsm leading-[1.7] font-mono">
              <code>{lines.map((line, i) => renderCodeLine(line, i))}</code>
            </pre>
          </div>
        </div>

        {/* Right: diagram */}
        <div
          className={cn(
            'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-rose-50/30',
            'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-rose-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
            >
              <ListOrderedIcon className="h-4 w-4" />
            </span>
            <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.diagramTitle}
            </h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md items-stretch">
            <RenderColumn side={content.normalRender} variant="ok" />
            <div
              aria-hidden="true"
              className="flex items-center justify-center text-[var(--term-muted)]"
            >
              <ArrowRightIcon className="hidden lg:block h-5 w-5" />
              <ArrowDownIcon className="lg:hidden h-5 w-5" />
            </div>
            <RenderColumn side={content.nextRender} variant="broken" />
          </div>

          {/* Warning */}
          <aside
            className={cn(
              'flex items-start gap-2 rounded-2xl border-2 p-md',
              'border-rose-400/80 bg-rose-50/70 dark:border-rose-600/60 dark:bg-rose-950/40',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900"
            >
              <AlertTriangleIcon className="h-4 w-4" />
            </span>
            <p className="text-xsm sm:text-sm font-bold leading-relaxed text-rose-900 dark:text-rose-100 break-keep">
              {content.warning}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
