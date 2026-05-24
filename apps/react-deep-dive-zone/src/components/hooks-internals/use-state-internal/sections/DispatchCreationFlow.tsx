import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { Tone, UseStateInternalsContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BoxesIcon,
  FunctionSquareIcon,
  Link2Icon,
  PlayCircleIcon,
  SettingsIcon,
} from '../icons';

type Props = { content: UseStateInternalsContent['dispatch'] };

const visualMap = {
  fn: FunctionSquareIcon,
  bind: Link2Icon,
  cube: BoxesIcon,
  play: PlayCircleIcon,
} as const;

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/70 dark:border-sky-700/70 dark:bg-sky-950/40',
  cyan: 'border-cyan-300/80 bg-cyan-50/70 dark:border-cyan-700/70 dark:bg-cyan-950/40',
  teal: 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/40',
  emerald:
    'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/40',
  violet: 'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/40',
  amber: 'border-amber-300/80 bg-amber-50/70 dark:border-amber-700/70 dark:bg-amber-950/40',
  indigo: 'border-indigo-300/80 bg-indigo-50/70 dark:border-indigo-700/70 dark:bg-indigo-950/40',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 border-sky-200/80 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200 border-cyan-200/80 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200 border-teal-200/80 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 border-violet-200/80 dark:border-violet-800/60',
  amber:
    'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/60',
  indigo:
    'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200 border-indigo-200/80 dark:border-indigo-800/60',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

const KEYWORDS = new Set(['null']);
const renderDispatchToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-orange-300">
        {tok}
      </span>
    );
  if (tok === 'queue' || tok === 'currentlyRenderingFiber' || tok === 'dispatch')
    return (
      <span key={i} className="text-pink-300">
        {tok}
      </span>
    );
  if (tok === 'dispatchSetState' || tok === 'bind')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const DispatchCreationFlow = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-dispatch"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="dispatch"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SettingsIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-md lg:gap-lg items-stretch">
        {/* Flow cards */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-2 sm:gap-3 relative">
          {content.flow.map((card, i) => {
            const Icon = visualMap[card.visual];
            const isLast = i === content.flow.length - 1;
            return (
              <li key={card.title} className="relative">
                <article
                  className={cn(
                    'flex h-full flex-col items-center gap-2 rounded-2xl border-2 p-3 text-center',
                    'shadow-[0_1px_0_var(--term-border)] transition-all',
                    'motion-safe:hover:-translate-y-0.5',
                    toneCard[card.tone],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                      toneIconBox[card.tone],
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <code
                    className={cn(
                      'font-mono text-xsm font-bold leading-tight break-all',
                      toneText[card.tone],
                    )}
                  >
                    {card.title}
                  </code>
                  <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                    {card.subtitle}
                  </p>
                </article>

                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="hidden lg:inline-flex absolute -right-[7px] top-1/2 z-10 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                    >
                      <ArrowRightIcon className="h-3 w-3" />
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

        {/* Code panel + explanation */}
        <div className="flex flex-col gap-md">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
            <div className="flex items-center gap-2 border-b border-slate-800 px-md py-2">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">dispatch.bind</span>
            </div>
            <pre className="overflow-x-auto px-md py-md text-[11px] sm:text-xsm leading-[1.7] font-mono">
              <code>
                {lines.map((line, i) => {
                  const tokens = line.split(/(\s+|[(){}[\];,.=])/);
                  return (
                    <div key={i} className="whitespace-pre">
                      {tokens.map(renderDispatchToken)}
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>

          <aside
            className={cn(
              'rounded-2xl border-2 p-md',
              'border-cyan-300/70 bg-cyan-50/60 dark:border-cyan-800/60 dark:bg-cyan-950/30',
            )}
          >
            <p className="text-xsm sm:text-sm leading-relaxed text-cyan-900 dark:text-cyan-100 break-keep">
              {content.explanation}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
