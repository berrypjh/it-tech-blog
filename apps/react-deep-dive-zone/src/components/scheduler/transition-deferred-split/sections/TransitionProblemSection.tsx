import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TransitionDeferredContent } from '../content';
import { CheckCircleIcon, GaugeIcon, ListIcon, SearchIcon, TargetIcon, ZapIcon } from '../icons';
import {
  responseCardBorder,
  responseIconBox,
  responsePill,
  responseTextStrong,
} from '../responseAccent';

type Props = { content: TransitionDeferredContent['problem'] };

const Gauge = ({ high, low, title }: { high: string; low: string; title: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      'items-center justify-center',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
      >
        <GaugeIcon className="h-5 w-5" />
      </span>
      <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">{title}</h3>
    </header>

    {/* gauge visual */}
    <div aria-hidden="true" className="relative h-24 w-44 sm:w-52 overflow-hidden">
      {/* outer arc */}
      <div className="absolute inset-x-0 bottom-0 h-[100%] rounded-t-full border-[10px] border-b-0 border-[var(--term-border)]" />
      {/* color sectors */}
      <div
        className="absolute inset-x-0 bottom-0 h-[100%] rounded-t-full"
        style={{
          background:
            'conic-gradient(from 270deg at 50% 100%, rgba(225,29,72,0.45) 0deg, rgba(225,29,72,0.45) 60deg, rgba(245,158,11,0.45) 120deg, rgba(20,184,166,0.5) 180deg)',
          clipPath: 'inset(0 0 0 0 round 999px 999px 0 0 / 999px 999px 0 0)',
          maskImage: 'radial-gradient(circle at 50% 100%, transparent 0 38px, black 39px 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 100%, transparent 0 38px, black 39px 100%)',
        }}
      />
      {/* needle */}
      <div
        className="absolute left-1/2 bottom-0 h-[88%] w-[3px] bg-[var(--term-fg)] origin-bottom rounded-full"
        style={{ transform: 'translateX(-50%) rotate(20deg)' }}
      />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-3 w-3 rounded-full bg-[var(--term-fg)]" />
    </div>

    <div className="flex w-full justify-between gap-2 font-mono text-[10px] font-bold uppercase tracking-wider">
      <span className="text-rose-700 dark:text-rose-300">{high}</span>
      <span className="text-blue-700 dark:text-blue-300">{low}</span>
    </div>
  </article>
);

export const TransitionProblemSection = ({ content }: Props) => (
  <section aria-labelledby="heading-problem">
    <NumberedSectionHeader
      id="problem"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
      {/* input UI */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          responseCardBorder.emerald,
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
              responseIconBox.emerald,
            )}
          >
            <SearchIcon className="h-4 w-4" />
          </span>
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              responsePill.emerald,
            )}
          >
            {content.inputCard.badge}
          </span>
        </header>
        <h3
          className={cn(
            'text-md sm:text-lg font-bold leading-tight break-keep',
            responseTextStrong.emerald,
          )}
        >
          {content.inputCard.title}
        </h3>

        {/* mock input */}
        <div
          aria-hidden="true"
          className="flex items-center gap-2 rounded-xl border border-emerald-200/80 bg-white px-3 py-2 dark:border-emerald-800/60 dark:bg-slate-950/40"
        >
          <SearchIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
          <span className="flex-1 font-mono text-xsm text-[var(--term-fg)]">
            <span className="inline-block h-3 w-px align-middle bg-emerald-500 animate-pulse motion-reduce:animate-none" />
          </span>
          <ZapIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
        </div>

        <ul className="mt-auto flex flex-col gap-1.5">
          {content.inputCard.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-300"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>

      <Gauge title={content.gauge.title} high={content.gauge.high} low={content.gauge.low} />

      {/* result list */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          responseCardBorder.blue,
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
              responseIconBox.blue,
            )}
          >
            <ListIcon className="h-4 w-4" />
          </span>
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              responsePill.blue,
            )}
          >
            {content.resultCard.badge}
          </span>
        </header>
        <h3
          className={cn(
            'text-md sm:text-lg font-bold leading-tight break-keep',
            responseTextStrong.blue,
          )}
        >
          {content.resultCard.title}
        </h3>

        {/* skeleton mockup */}
        <ul
          aria-hidden="true"
          className="flex flex-col gap-1.5 rounded-xl border border-blue-200/80 bg-white p-3 dark:border-blue-800/60 dark:bg-slate-950/40"
        >
          {[88, 72, 80].map((w, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="h-6 w-6 shrink-0 rounded bg-blue-200/60 dark:bg-blue-900/40" />
              <span className="flex flex-col gap-1 flex-1">
                <span
                  className="h-2 rounded bg-slate-200 dark:bg-slate-700/60"
                  style={{ width: `${w}%` }}
                />
                <span
                  className="h-2 rounded bg-slate-200/70 dark:bg-slate-700/40"
                  style={{ width: `${w - 22}%` }}
                />
              </span>
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-col gap-1.5">
          {content.resultCard.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-blue-300"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
