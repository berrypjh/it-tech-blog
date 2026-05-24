import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { CodeCallout, CompleteWorkContent } from '../content';
import { CodeIcon, FileCodeIcon, HelpCircleIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: CompleteWorkContent['code'] };

export const CompleteWorkCodeCheckpoint = ({ content }: Props) => (
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
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            {content.fileLabel}
          </span>
          <ul className="flex flex-col gap-1.5">
            {content.files.map((file) => (
              <li key={file} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                    'bg-sky-50 text-sky-700 border-sky-200/80',
                    'dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
                  )}
                >
                  <FileCodeIcon className="h-4 w-4" />
                </span>
                <code className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-all">
                  {file}
                </code>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            {content.pointsLabel}
          </span>
          <ul className="flex flex-col gap-1.5">
            {content.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                />
                <code
                  className={cn(
                    'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
                    'border-slate-800 bg-slate-950 text-amber-300',
                  )}
                >
                  {p}
                </code>
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
      </article>

      {/* Right: code panel + 4 callouts */}
      <div className="flex flex-col gap-md">
        <CodePanel
          title={content.panelTitle}
          subtitle={content.panelSubtitle}
          code={content.codeLines}
          completeSet={new Set(content.completeHighlightLines)}
          bubbleSet={new Set(content.bubbleHighlightLines)}
          siblingSet={new Set(content.siblingHighlightLines)}
          parentSet={new Set(content.parentHighlightLines)}
        />
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
  completeSet: Set<number>;
  bubbleSet: Set<number>;
  siblingSet: Set<number>;
  parentSet: Set<number>;
};

const CodePanel = ({
  title,
  subtitle,
  code,
  completeSet,
  bubbleSet,
  siblingSet,
  parentSet,
}: CodePanelProps) => {
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
            const lineNumber = idx + 1; // 1-based
            const isComplete = completeSet.has(lineNumber);
            const isBubble = bubbleSet.has(lineNumber);
            const isSibling = siblingSet.has(lineNumber);
            const isParent = parentSet.has(lineNumber);
            return (
              <div
                key={idx}
                className={cn(
                  'flex',
                  isComplete && 'bg-teal-100/60 dark:bg-teal-950/30 border-l-2 border-teal-500',
                  isBubble && 'bg-sky-100/60 dark:bg-sky-950/30 border-l-2 border-sky-500',
                  isSibling &&
                    'bg-indigo-100/50 dark:bg-indigo-950/25 border-l-2 border-indigo-500',
                  isParent && 'bg-violet-100/55 dark:bg-violet-950/28 border-l-2 border-violet-500',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'select-none w-8 shrink-0 pr-3 text-right tabular-nums',
                    isComplete
                      ? 'text-teal-700 font-bold dark:text-teal-300'
                      : isBubble
                        ? 'text-sky-700 font-bold dark:text-sky-300'
                        : isSibling
                          ? 'text-indigo-700 font-bold dark:text-indigo-300'
                          : isParent
                            ? 'text-violet-700 font-bold dark:text-violet-300'
                            : 'text-slate-400 dark:text-slate-500',
                  )}
                >
                  {lineNumber}
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
        'flex w-full items-start gap-3 rounded-2xl border-2 border-dashed p-md',
        palette.border,
        palette.bg,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-mono font-bold text-xsm',
          palette.chip,
        )}
      >
        {callout.number}
      </span>
      <p className={cn('text-xsm sm:text-sm leading-snug font-bold break-keep', palette.text)}>
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
  'do',
  'while',
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
    if (KEYWORDS.has(tok)) {
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
