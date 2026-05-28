import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { CodeCallout, TypeKeyReuseContent } from '../content';
import { CodeIcon, FileCodeIcon, HelpCircleIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: TypeKeyReuseContent['code'] };

export const FiberReuseCodeCheckpoint = ({ content }: Props) => (
  <section
    id="source-checkpoint"
    aria-labelledby="heading-source-checkpoint"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="source-checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.28fr)_minmax(0,_0.72fr)] gap-md lg:gap-lg items-stretch">
      {/* Left file card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            {content.fileLabel}
          </span>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                'bg-sky-50 text-sky-700 border-sky-200/80',
                'dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
              )}
            >
              <FileCodeIcon className="h-4 w-4" />
            </span>
            <code className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-all">
              {content.fileName}
            </code>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            {content.pointsLabel}
          </span>
          <ul className="flex flex-col gap-1.5">
            {content.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400"
                />
                <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            {content.learningLabel}
          </span>
          <div
            className={cn(
              'flex items-start gap-sm rounded-xl border-2 p-sm sm:p-md',
              'border-sky-200/80 bg-sky-50/70',
              'dark:border-sky-800/70 dark:bg-sky-950/40',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                'bg-white text-sky-700 border-sky-200/80',
                'dark:bg-slate-950/60 dark:text-sky-200 dark:border-sky-800/60',
              )}
            >
              <HelpCircleIcon className="h-4 w-4" />
            </span>
            <p className="text-xsm sm:text-sm leading-snug text-sky-900 dark:text-sky-100 font-bold break-keep">
              {content.learningQuestion}
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            legend
          </span>
          <ul className="flex flex-col gap-1.5">
            <li className="flex items-center gap-2 text-xsm leading-snug text-[var(--term-fg)]">
              <span className="inline-block h-3 w-3 rounded-sm border-l-2 border-teal-500 bg-teal-100 dark:bg-teal-950/60" />
              <span>key match</span>
            </li>
            <li className="flex items-center gap-2 text-xsm leading-snug text-[var(--term-fg)]">
              <span className="inline-block h-3 w-3 rounded-sm border-l-2 border-violet-500 bg-violet-100 dark:bg-violet-950/60" />
              <span>
                type match → <code className="font-mono font-bold">useFiber</code>
              </span>
            </li>
            <li className="flex items-center gap-2 text-xsm leading-snug text-[var(--term-fg)]">
              <span className="inline-block h-3 w-3 rounded-sm border-l-2 border-rose-500 bg-rose-100 dark:bg-rose-950/60" />
              <span>
                delete → <code className="font-mono font-bold">deleteRemainingChildren</code>
              </span>
            </li>
          </ul>
        </div>
      </article>

      {/* Right: code panel + 3 callouts */}
      <div className="flex flex-col gap-md">
        <CodePanel
          title={content.panelTitle}
          subtitle={content.panelSubtitle}
          code={content.codeLines}
          keySet={new Set(content.keyHighlightLines)}
          typeSet={new Set(content.typeHighlightLines)}
          deleteSet={new Set(content.deleteHighlightLines)}
        />
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {content.callouts.map((callout) => (
            <li key={callout.number} className="flex h-full">
              <Callout callout={callout} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

type CodePanelProps = {
  title: string;
  subtitle: string;
  code: string;
  keySet: Set<number>;
  typeSet: Set<number>;
  deleteSet: Set<number>;
};

const CodePanel = ({ title, subtitle, code, keySet, typeSet, deleteSet }: CodePanelProps) => {
  const lines = code.split('\n');
  return (
    <article
      className={cn(
        'overflow-hidden rounded-2xl border bg-slate-50 dark:bg-slate-950',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header
        className={cn(
          'flex items-center justify-between gap-2 border-b border-[var(--term-border)] px-md py-2',
          'bg-white/80 dark:bg-slate-950/60',
        )}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
            {title}
          </code>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {subtitle}
        </span>
      </header>
      <pre
        className={cn(
          'overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono',
          'text-slate-800 dark:text-slate-100',
        )}
      >
        <code>
          {lines.map((line, idx) => {
            const isKey = keySet.has(idx);
            const isType = typeSet.has(idx);
            const isDel = deleteSet.has(idx);
            return (
              <div
                key={idx}
                className={cn(
                  'flex',
                  isKey && 'bg-teal-100/60 dark:bg-teal-950/30 border-l-2 border-teal-500',
                  isType && 'bg-violet-100/50 dark:bg-violet-950/25 border-l-2 border-violet-500',
                  isDel && 'bg-rose-100/60 dark:bg-rose-950/30 border-l-2 border-rose-500',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'select-none w-8 shrink-0 pr-3 text-right tabular-nums',
                    isKey
                      ? 'text-teal-700 font-bold dark:text-teal-300'
                      : isType
                        ? 'text-violet-700 font-bold dark:text-violet-300'
                        : isDel
                          ? 'text-rose-700 font-bold dark:text-rose-300'
                          : 'text-slate-400 dark:text-slate-500',
                  )}
                >
                  {idx + 1}
                </span>
                <span className="whitespace-pre">{highlight(line)}</span>
              </div>
            );
          })}
        </code>
      </pre>
    </article>
  );
};

const Callout = ({ callout }: { callout: CodeCallout }) => {
  const palette = tonePalette[callout.tone];
  return (
    <aside
      className={cn(
        'flex w-full flex-col gap-2 rounded-2xl border-2 border-dashed p-md',
        palette.border,
        palette.bg,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-lg border font-mono font-bold text-xsm',
            palette.chip,
          )}
        >
          {callout.number}
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            palette.chip,
          )}
        >
          step {callout.number}
        </span>
      </header>
      <p className={cn('text-xsm sm:text-sm leading-snug break-keep font-bold', palette.text)}>
        {callout.body}
      </p>
    </aside>
  );
};

const KEYWORDS = new Set([
  'function',
  'const',
  'let',
  'var',
  'if',
  'else',
  'return',
  'true',
  'false',
  'null',
  'undefined',
  'new',
  'break',
]);

const highlight = (line: string): React.ReactNode => {
  const commentMatch = line.match(/^(\s*)(\/\/.*)$/);
  if (commentMatch) {
    return (
      <>
        <span>{commentMatch[1]}</span>
        <span className="text-slate-500 italic dark:text-slate-500">{commentMatch[2]}</span>
      </>
    );
  }
  const tokens = line.split(/(\s+|[(){}[\];,.:=<>!&|+\-*/])/);
  const nodes: React.ReactNode[] = [];
  tokens.forEach((tok, idx) => {
    if (!tok) return;
    if (/^['"`].*['"`]$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-emerald-700 dark:text-emerald-300">
          {tok}
        </span>,
      );
    } else if (KEYWORDS.has(tok)) {
      nodes.push(
        <span key={idx} className="text-sky-700 dark:text-sky-300 font-bold">
          {tok}
        </span>,
      );
    } else if (/^[A-Z][A-Za-z0-9_$]*$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-amber-700 dark:text-amber-200">
          {tok}
        </span>,
      );
    } else if (/^[a-z_$][\w$]*$/i.test(tok)) {
      nodes.push(
        <span key={idx} className="text-slate-800 dark:text-slate-100">
          {tok}
        </span>,
      );
    } else {
      nodes.push(
        <span key={idx} className="text-slate-500 dark:text-slate-400">
          {tok}
        </span>,
      );
    }
  });
  return nodes;
};
