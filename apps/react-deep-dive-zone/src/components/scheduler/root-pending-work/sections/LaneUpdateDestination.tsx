import { cn } from '@it-tech-blog/utils';

import {
  axisCardBorder,
  axisIconBox,
  axisNumberBadge,
  axisTextStrong,
} from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RootPendingWorkContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CornerDownRightIcon,
  DatabaseIcon,
  RouteIcon,
} from '../icons';

type Props = { content: RootPendingWorkContent['destination'] };

const codeTokenize = (line: string) => {
  // very small highlighter for the FiberRoot snippet
  return line.split(/(\s+|[{}:,])/).map((tok, i) => {
    if (!tok) return null;
    if (tok === 'FiberRoot')
      return (
        <span key={i} className="text-violet-700 dark:text-violet-300 font-semibold">
          {tok}
        </span>
      );
    if (
      tok === 'tag' ||
      tok === 'containerInfo' ||
      tok === 'current' ||
      tok === 'pendingLanes' ||
      tok === 'suspendedLanes'
    )
      return (
        <span
          key={i}
          className={cn(
            'text-blue-700 dark:text-blue-300',
            tok === 'pendingLanes' && 'text-teal-700 dark:text-teal-300 font-bold',
          )}
        >
          {tok}
        </span>
      );
    if (tok === 'ConcurrentRoot' || tok === 'DOMNode' || tok === 'Fiber')
      return (
        <span key={i} className="text-amber-700 dark:text-amber-300">
          {tok}
        </span>
      );
    if (/^0b[01]+$/.test(tok))
      return (
        <span key={i} className="text-emerald-700 dark:text-emerald-300">
          {tok}
        </span>
      );
    if (tok === '...')
      return (
        <span key={i} className="text-[var(--term-dim)] italic">
          {tok}
        </span>
      );
    return (
      <span key={i} className="text-[var(--term-fg)]">
        {tok}
      </span>
    );
  });
};

export const LaneUpdateDestination = ({ content }: Props) => (
  <section aria-labelledby="heading-destination">
    <NumberedSectionHeader
      id="destination"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<RouteIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
      {/* Fiber tree card */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          axisCardBorder.blue,
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
              axisIconBox.blue,
            )}
          >
            <DatabaseIcon className="h-4 w-4" />
          </span>
          <h3 className={cn('text-sm sm:text-md font-bold break-keep', axisTextStrong.blue)}>
            {content.fiberTreeTitle}
          </h3>
        </header>

        <ol className="flex flex-col gap-1.5">
          {content.fiberNodes.map((node, i) => {
            const isLast = i === content.fiberNodes.length - 1;
            return (
              <li key={node.label} className="flex flex-col">
                <div
                  className="flex items-center gap-2"
                  style={{ paddingLeft: `${node.level * 16}px` }}
                >
                  {node.level > 0 && (
                    <span
                      aria-hidden="true"
                      className="font-mono text-[10px] text-[var(--term-dim)]"
                    >
                      {isLast || content.fiberNodes[i + 1]?.level !== node.level ? '└─' : '├─'}
                    </span>
                  )}
                  <code
                    className={cn(
                      'inline-flex items-center rounded-md border px-2 py-1 font-mono text-[11px] sm:text-xsm',
                      node.emphasis
                        ? 'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200 font-bold'
                        : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                    )}
                  >
                    {node.label}
                  </code>
                </div>
              </li>
            );
          })}
        </ol>
      </article>

      {/* Steps card */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            Update가 root로 흐르는 4단계
          </h3>
        </header>

        <ol className="flex flex-col gap-2">
          {content.steps.map((step, i) => {
            const isLast = i === content.steps.length - 1;
            return (
              <li key={step.title} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-start gap-3 rounded-xl border px-3 py-2.5',
                    'border-[var(--term-border)] bg-[var(--term-bg)] transition-colors',
                    'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                    'hover:border-blue-300/80 dark:hover:border-blue-700/60',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                      'text-[10px] font-mono font-bold tabular-nums text-white',
                      i === 3 ? axisNumberBadge.teal : axisNumberBadge.blue,
                    )}
                  >
                    {i + 1}
                  </span>
                  <p
                    className={cn(
                      'text-xsm sm:text-sm leading-tight break-keep flex-1',
                      i === 3 ? axisTextStrong.teal + ' font-bold' : 'text-[var(--term-fg)]',
                    )}
                  >
                    {step.title}
                  </p>
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="self-start ml-3 my-0.5 inline-block w-px h-3 border-l border-dashed border-[var(--term-border)]"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </article>

      {/* Root object card */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          axisCardBorder.teal,
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
              axisIconBox.teal,
            )}
          >
            <DatabaseIcon className="h-4 w-4" />
          </span>
          <h3 className={cn('text-sm sm:text-md font-bold break-keep', axisTextStrong.teal)}>
            {content.rootObjectTitle}
          </h3>
        </header>

        <pre className="overflow-x-auto rounded-xl border border-[var(--term-border)] bg-white px-3 py-2.5 text-[11px] sm:text-xsm leading-[1.7] font-mono dark:bg-slate-950/40">
          <code>
            {content.rootObjectCode.split('\n').map((line, i) => (
              <div key={i} className="whitespace-pre">
                {codeTokenize(line)}
              </div>
            ))}
          </code>
        </pre>

        <p className="mt-auto flex items-start gap-2 text-[11px] sm:text-xsm text-teal-800 dark:text-teal-200">
          <CornerDownRightIcon aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span className="break-keep">
            <code className="font-mono font-bold">pendingLanes</code> 필드에 lane bit가 OR
            누적됩니다.
          </span>
        </p>
      </article>
    </div>

    {/* mobile arrow between */}
    <div aria-hidden="true" className="lg:hidden flex justify-center mt-3 text-[var(--term-muted)]">
      <ArrowDownIcon className="h-4 w-4" />
    </div>
  </section>
);
