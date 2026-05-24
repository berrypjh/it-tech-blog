import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { UseEffectInternalsContent } from '../content';
import { ChevronRightIcon, FileCodeIcon, FileSearchIcon } from '../icons';

type Props = { content: UseEffectInternalsContent['realCode'] };

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (
    tok === 'hook' ||
    tok === 'memoizedState' ||
    tok === 'inst' ||
    tok === 'create' ||
    tok === 'nextDeps' ||
    tok === 'hookFlags'
  )
    return (
      <span key={i} className="text-pink-300">
        {tok}
      </span>
    );
  if (tok === 'pushSimpleEffect')
    return (
      <span key={i} className="text-teal-300">
        {tok}
      </span>
    );
  if (tok === 'HookHasEffect')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const RealEffectCodePreview = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-real-code"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="real-code"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileSearchIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-md lg:gap-lg">
        {/* Code panel */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">pushSimpleEffect</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              js
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\]:;,.=|])/);
                return (
                  <div key={i} className="flex">
                    <span
                      aria-hidden="true"
                      className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Explanation card */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-snug break-keep">
            {content.explanationTitle}
          </h3>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.explanation}
          </p>

          <ul className="flex flex-col gap-1.5">
            <li className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)]">
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400"
              />
              <span className="break-keep">
                <code className="font-mono">HookHasEffect</code> 부여 → 이번 Commit 이후 실행
              </span>
            </li>
            <li className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)]">
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400"
              />
              <span className="break-keep">
                <code className="font-mono">create</code> +{' '}
                <code className="font-mono">nextDeps</code>가 Effect에 저장됨
              </span>
            </li>
          </ul>

          <div className="mt-auto flex items-center gap-2 border-t border-[var(--term-border)] pt-md">
            <span className="inline-flex items-center rounded-full border border-[var(--term-border)] bg-[var(--term-border)]/20 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.fileLabel}
            </span>
            <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
              {content.fileName}
            </code>
          </div>

          <a
            href={content.buttonHref}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-2.5',
              'border-blue-400/70 bg-blue-50 text-blue-700 font-bold text-xsm sm:text-sm',
              'dark:border-blue-700/60 dark:bg-blue-950/40 dark:text-blue-200',
              'transition-all motion-safe:hover:-translate-y-0.5 hover:bg-blue-100/70 dark:hover:bg-blue-950/60',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            <FileCodeIcon aria-hidden="true" className="h-4 w-4" />
            <span className="break-keep">{content.buttonLabel}</span>
            <ChevronRightIcon
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
            />
          </a>
        </article>
      </div>
    </section>
  );
};
