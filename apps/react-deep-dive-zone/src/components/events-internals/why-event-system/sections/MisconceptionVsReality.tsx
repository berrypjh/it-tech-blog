import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { Tone, WhyEventSystemContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, CornerDownRightIcon, XCircleIcon } from '../icons';

type Props = { content: WhyEventSystemContent['misconception'] };

const flowTone: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50 text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-100',
  cyan: 'border-cyan-300/80 bg-cyan-50 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-100',
  teal: 'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-100',
  emerald:
    'border-emerald-300/80 bg-emerald-50 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100',
  blue: 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
  amber:
    'border-amber-300/80 bg-amber-50 text-amber-900 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
  rose: 'border-rose-300/80 bg-rose-50 text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-100',
};

export const MisconceptionVsReality = ({ content }: Props) => (
  <section aria-labelledby="heading-misconception">
    <SectionHeader
      id="misconception"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CornerDownRightIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* LEFT: misconception (red/rose tint) */}
      <article
        className={cn(
          'group relative flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-rose-50/30',
          'dark:border-rose-800/60 dark:from-rose-950/30 dark:via-[var(--term-bg)] dark:to-rose-950/10',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-rose-300',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
              'bg-rose-500 text-white shadow-[0_3px_0_rgba(225,29,72,0.3)] dark:bg-rose-500/90',
            )}
          >
            <XCircleIcon className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
              {content.misconception.label}
            </span>
            <span className="text-[10px] font-mono text-rose-600/80 dark:text-rose-300/70">
              misconception
            </span>
          </div>
        </header>

        <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.misconception.title}
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-inner">
          <div className="flex items-center gap-2 border-b border-slate-800 px-md py-2">
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-rose-400/80" />
            <code className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
              DOM (assumed)
            </code>
          </div>
          <pre className="overflow-x-auto px-md py-md font-mono text-[12px] sm:text-xsm leading-[1.7] text-slate-100">
            <code className="whitespace-pre">
              <span className="text-slate-400">{'<'}</span>
              <span className="text-rose-300">button</span>{' '}
              <span className="text-amber-200">id</span>
              <span className="text-slate-300">=</span>
              <span className="text-emerald-300">"btn"</span>
              <span className="text-slate-400">{'>'}</span>
              <span className="text-slate-100">저장</span>
              <span className="text-slate-400">{'</'}</span>
              <span className="text-rose-300">button</span>
              <span className="text-slate-400">{'>'}</span>
            </code>
          </pre>
        </div>

        <div
          className={cn(
            'flex items-center gap-2 rounded-xl border-2 border-dashed px-md py-3',
            'border-rose-300/80 bg-rose-50/60 text-rose-700',
            'dark:border-rose-700/60 dark:bg-rose-950/30 dark:text-rose-200',
          )}
        >
          <span aria-hidden="true" className="text-rose-500 dark:text-rose-300">
            ?
          </span>
          <code className="font-mono text-[11px] sm:text-xsm break-all">
            {content.misconception.question}
          </code>
        </div>
      </article>

      {/* RIGHT: reality (teal/blue tint) */}
      <article
        className={cn(
          'group relative flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/40',
          'dark:border-teal-800/60 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-teal-300',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
              'bg-teal-500 text-white shadow-[0_3px_0_rgba(13,148,136,0.3)] dark:bg-teal-500/90',
            )}
          >
            <CheckCircleIcon className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              {content.reality.label}
            </span>
            <span className="text-[10px] font-mono text-teal-600/80 dark:text-teal-300/70">
              real-structure
            </span>
          </div>
        </header>

        <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.reality.title}
        </p>

        <ol className="flex flex-col gap-2">
          {content.reality.flow.map((step, i) => {
            const isLast = i === content.reality.flow.length - 1;
            return (
              <li key={step.label} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 px-md py-2.5 transition-colors',
                    flowTone[step.tone],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                      'bg-white text-[10px] font-mono font-bold tabular-nums shadow-sm',
                      'dark:bg-slate-950/60',
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xsm sm:text-sm font-bold leading-tight break-keep">
                    {step.label}
                  </span>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="ml-auto h-3.5 w-3.5 opacity-60 hidden sm:block"
                  />
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="ml-3 inline-block w-px h-2 bg-teal-300/60 dark:bg-teal-700/60"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);
