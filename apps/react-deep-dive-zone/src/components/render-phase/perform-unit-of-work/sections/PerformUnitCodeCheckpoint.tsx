import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { CodeCallout, PerformUnitContent } from '../content';
import { CodeIcon, FileCodeIcon, HelpCircleIcon } from '../icons';

type Props = { content: PerformUnitContent['code'] };

export const PerformUnitCodeCheckpoint = ({ content }: Props) => (
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

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.3fr)_minmax(0,_0.7fr)] gap-md lg:gap-lg items-stretch">
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
            {content.functionsLabel}
          </span>
          <ul className="flex flex-col gap-1.5">
            {content.functions.map((fn) => (
              <li key={fn} className="flex items-center gap-2">
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
                  {fn}
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

type CodePanelProps = { title: string; subtitle: string; code: string };

const CodePanel = ({ title, subtitle, code }: CodePanelProps) => {
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
          {lines.map((line, idx) => (
            <div key={idx} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-8 shrink-0 pr-3 text-right text-slate-400 dark:text-slate-500 tabular-nums"
              >
                {idx + 1}
              </span>
              <span className="whitespace-pre">{highlight(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </article>
  );
};

const calloutPalette = {
  teal: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/60 dark:bg-teal-950/25',
    chip: 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60',
    accent: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
    title: 'text-teal-900 dark:text-teal-100',
    body: 'text-teal-800 dark:text-teal-200',
  },
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    bg: 'bg-sky-50/60 dark:bg-sky-950/25',
    chip: 'border-sky-300/70 bg-white/70 text-sky-700 dark:bg-slate-950/60 dark:text-sky-200 dark:border-sky-700/60',
    accent: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
    title: 'text-sky-900 dark:text-sky-100',
    body: 'text-sky-800 dark:text-sky-200',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/60 dark:bg-violet-950/25',
    chip: 'border-violet-300/70 bg-white/70 text-violet-700 dark:bg-slate-950/60 dark:text-violet-200 dark:border-violet-700/60',
    accent: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    title: 'text-violet-900 dark:text-violet-100',
    body: 'text-violet-800 dark:text-violet-200',
  },
  indigo: {
    border: 'border-indigo-300/80 dark:border-indigo-700/70',
    bg: 'bg-indigo-50/60 dark:bg-indigo-950/25',
    chip: 'border-indigo-300/70 bg-white/70 text-indigo-700 dark:bg-slate-950/60 dark:text-indigo-200 dark:border-indigo-700/60',
    accent: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200',
    title: 'text-indigo-900 dark:text-indigo-100',
    body: 'text-indigo-800 dark:text-indigo-200',
  },
} as const;

const Callout = ({ callout }: { callout: CodeCallout }) => {
  const palette = calloutPalette[callout.tone];
  return (
    <aside
      className={cn(
        'flex w-full flex-col gap-1.5 rounded-2xl border-2 border-dashed p-md',
        palette.border,
        palette.bg,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            palette.chip,
          )}
        >
          callout
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-lg font-mono font-bold text-xsm',
            palette.accent,
          )}
        >
          {callout.number}
        </span>
      </header>
      <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', palette.title)}>
        {callout.title}
      </h4>
      <p className={cn('text-[10px] sm:text-xsm leading-snug break-keep', palette.body)}>
        {callout.description}
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
]);

const highlight = (line: string): React.ReactNode => {
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
