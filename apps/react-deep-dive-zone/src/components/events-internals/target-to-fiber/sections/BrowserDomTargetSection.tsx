import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TargetFiberContent } from '../content';
import { ArrowDownIcon, GlobeIcon, TargetIcon } from '../icons';

type Props = { content: TargetFiberContent['domTarget'] };

const STRINGS = /^['"`].*['"`]$/;

const renderEventToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (tok === 'type' || tok === 'target' || tok === 'currentTarget')
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (STRINGS.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (tok === 'button' || tok === 'div')
    return (
      <span key={i} className="text-rose-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const BrowserDomTargetSection = ({ content }: Props) => {
  const lines = content.nativeEventCode.split('\n');
  return (
    <section aria-labelledby="heading-dom-target">
      <NumberedSectionHeader
        id="dom-target"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<GlobeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
        {/* Native event mock card */}
        <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center gap-2 border-b border-slate-800 px-md py-2">
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-[10px] font-mono text-slate-500">
              {content.nativeEventLabel}
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.85] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\];,.<>=/])/);
                return (
                  <div key={i} className="flex">
                    <span
                      aria-hidden="true"
                      className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">{tokens.map(renderEventToken)}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </article>

        {/* Value card */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-200/80 bg-gradient-to-br from-blue-50/70 via-white to-sky-50/30',
            'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-sky-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-[0_2px_0_rgba(29,78,216,0.3)] dark:bg-blue-500"
            >
              <TargetIcon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.valueCard.title}
            </span>
          </header>

          <div className="flex flex-col items-center gap-3 rounded-xl border border-blue-200/70 bg-white px-md py-md dark:border-blue-800/60 dark:bg-slate-950/40">
            <code className="font-mono text-md sm:text-lg font-bold text-blue-700 dark:text-blue-200 break-all">
              {content.valueCard.input}
            </code>
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <ArrowDownIcon className="h-4 w-4" />
            </span>
            <code className="font-mono text-xsm sm:text-sm font-bold text-blue-700 dark:text-blue-200 break-all">
              {content.valueCard.output}
            </code>
          </div>

          <p className="mt-auto text-[11px] sm:text-xsm text-center text-[var(--term-muted)] break-keep">
            {content.valueCard.caption}
          </p>
        </article>
      </div>
    </section>
  );
};
