import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { HeroRenderSide, HookSlot, RulesOfHooksContent } from '../content';
import { AlertTriangleIcon, CheckCircleIcon, ShieldAlertIcon, XCircleIcon } from '../icons';

type Props = { content: RulesOfHooksContent['wrongOrder'] };

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
  if (tok === 'Profile' || tok === 'visible' || tok === 'name' || tok === 'setName')
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
  const commentMatch = line.match(/^(.*?)(\/\/.*)$/);
  const codeText = commentMatch ? commentMatch[1] : line;
  const commentText = commentMatch ? commentMatch[2] : '';
  const tokens = codeText.split(/(\s+|[(){}[\];,.<>=])/);
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
        {commentText && <span className="text-amber-300 italic">{commentText}</span>}
      </span>
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
        'flex items-start gap-2 rounded-lg border-2 px-3 py-2',
        styleByStatus[slot.status],
      )}
    >
      <code className="font-mono text-[11px] font-bold tabular-nums shrink-0">{slot.index}</code>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code
          className={cn(
            'font-mono text-[11px] sm:text-xsm font-bold break-all',
            slot.status === 'missing' && 'line-through',
          )}
        >
          {slot.hookName}
        </code>
        {slot.caption && (
          <span className="text-[10px] font-mono text-rose-700/85 dark:text-rose-300/85 break-keep">
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
        'flex flex-col gap-md rounded-2xl border-2 p-md',
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
            'text-[11px] font-mono font-bold uppercase tracking-wider break-keep',
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
          <SlotItem key={s.index} slot={s} />
        ))}
      </ul>
      <p
        className={cn(
          'text-[11px] sm:text-xsm font-bold break-keep text-center',
          isBroken ? 'text-rose-800 dark:text-rose-200' : 'text-emerald-800 dark:text-emerald-200',
        )}
      >
        {side.matchLabel}
      </p>
    </article>
  );
};

export const WrongHookOrder = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-wrong-order"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="wrong-order"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ShieldAlertIcon className="h-5 w-5" />}
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

        {/* Right: render comparison */}
        <div className="flex flex-col gap-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <RenderColumn side={content.firstRender} variant="ok" />
            <RenderColumn side={content.nextRender} variant="broken" />
          </div>

          <aside
            className={cn(
              'flex items-start gap-2 rounded-2xl border-2 p-md mt-auto',
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
