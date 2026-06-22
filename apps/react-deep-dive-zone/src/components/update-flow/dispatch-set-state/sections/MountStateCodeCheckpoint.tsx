import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { DispatchSetStateContent } from '../content';
import {
  CircleHelpIcon,
  FileCodeIcon,
  FileTextIcon,
  FunctionSquareIcon,
  LightbulbIcon,
} from '../icons';

type Props = { content: DispatchSetStateContent['checkpoint'] };

const HIGHLIGHT_TOKENS = new Set([
  'mountState',
  'mountStateImpl',
  'hook.queue',
  'queue',
  'currentlyRenderingFiber',
  'currentFiber',
  'dispatchSetState.bind',
  'dispatchSetState',
  'bind',
  'queue.dispatch',
  'dispatch',
  'hook.memoizedState',
  'hook',
]);

export const MountStateCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.4fr)] gap-md lg:gap-lg items-stretch">
      {/* Info card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/30',
          'dark:from-[var(--term-bg)] dark:via-sky-950/25 dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <InfoRow
          icon={<FileTextIcon className="h-4 w-4" />}
          label={content.info.fileLabel}
          value={content.info.filePath}
          mono
        />
        <InfoRow
          icon={<FunctionSquareIcon className="h-4 w-4" />}
          label={content.info.functionLabel}
          value={content.info.functionName}
          mono
          accent
        />
        <InfoRow
          icon={<CircleHelpIcon className="h-4 w-4" />}
          label={content.info.questionLabel}
          value={content.info.question}
        />

        <button
          type="button"
          className={cn(
            'mt-auto inline-flex w-fit items-center gap-2 rounded-md border px-3 py-1.5',
            'border-sky-300/70 bg-white text-xxsm font-bold uppercase tracking-wider text-sky-700',
            'hover:bg-sky-50 transition-colors',
            'dark:border-sky-700/70 dark:bg-slate-950/40 dark:text-sky-200 dark:hover:bg-sky-950/40',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
          )}
        >
          <LightbulbIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {content.info.buttonLabel}
        </button>
      </article>

      {/* Code panel */}
      <div className="min-w-0">
        <CodePanel
          fileName={content.code.fileName}
          language={content.code.language}
          content={content.code.content}
        />
      </div>
    </div>
  </section>
);

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  mono?: boolean;
  accent?: boolean;
};

const InfoRow = ({ icon, label, value, mono, accent }: InfoRowProps) => (
  <div className="flex items-start gap-sm">
    <span
      aria-hidden="true"
      className={cn(
        'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border',
        'bg-sky-100 text-sky-700 border-sky-200/80',
        'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
      )}
    >
      {icon}
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80">
        {label}
      </span>
      <span
        className={cn(
          'text-xsm leading-snug break-words',
          mono && 'font-mono',
          accent ? 'font-bold text-sky-800 dark:text-sky-100' : 'text-[var(--term-fg)]',
        )}
      >
        {value}
      </span>
    </div>
  </div>
);

const CodePanel = ({
  fileName,
  language,
  content,
}: {
  fileName: string;
  language: string;
  content: string;
}) => {
  const lines = content.split('\n');
  return (
    <div
      className={cn(
        'overflow-hidden rounded-3xl border bg-slate-950 text-slate-100 h-full',
        'border-slate-800',
        'shadow-[0_18px_40px_-20px_rgba(2,6,23,0.7),0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-center justify-between gap-sm border-b border-slate-800/80 bg-slate-900/70 px-md py-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <span aria-hidden="true" className="flex items-center gap-1.5">
            <span className="block h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </span>
          <span className="hidden sm:inline-block h-3.5 w-px bg-slate-700" aria-hidden="true" />
          <span className="truncate text-xxsm font-mono text-slate-200">{fileName}</span>
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5',
            'border-amber-400/40 bg-amber-400/10 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-200',
          )}
        >
          {language}
        </span>
      </div>

      <pre className="overflow-x-auto px-md py-md font-mono leading-[1.75] text-[12.5px] sm:text-[13px]">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-8 shrink-0 pr-3 text-right tabular-nums text-slate-600"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre">{highlightLine(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const KEYWORDS = new Set(['function', 'const', 'return']);

const highlightLine = (line: string): React.ReactNode => {
  // comment first
  const commentMatch = line.match(/^(\s*)(\/\/.*)$/);
  if (commentMatch) {
    return (
      <>
        <span>{commentMatch[1]}</span>
        <span className="text-slate-500 italic">{commentMatch[2]}</span>
      </>
    );
  }
  const tokens = line.split(/(\s+|[(){}[\];,=]|\.)/g);
  const nodes: React.ReactNode[] = [];
  // Try to detect combined tokens like `hook.queue`, `queue.dispatch`, `dispatchSetState.bind`
  // by reassembling adjacent ident.ident patterns.
  const combined: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (
      tokens[i + 1] === '.' &&
      /^[A-Za-z_$][\w$]*$/.test(t) &&
      /^[A-Za-z_$][\w$]*$/.test(tokens[i + 2] ?? '')
    ) {
      combined.push(`${t}.${tokens[i + 2]}`);
      i += 2;
    } else {
      combined.push(t);
    }
  }

  combined.forEach((tok, idx) => {
    if (!tok) return;
    if (HIGHLIGHT_TOKENS.has(tok)) {
      nodes.push(
        <span key={idx} className="text-amber-300 font-bold">
          {tok}
        </span>,
      );
      return;
    }
    if (KEYWORDS.has(tok)) {
      nodes.push(
        <span key={idx} className="text-fuchsia-300">
          {tok}
        </span>,
      );
      return;
    }
    if (/^['"`].*['"`]$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-emerald-300">
          {tok}
        </span>,
      );
      return;
    }
    if (
      tok === '.' ||
      tok === ',' ||
      tok === ';' ||
      tok === '(' ||
      tok === ')' ||
      tok === '[' ||
      tok === ']' ||
      tok === '{' ||
      tok === '}' ||
      tok === '='
    ) {
      nodes.push(
        <span key={idx} className="text-slate-400">
          {tok}
        </span>,
      );
      return;
    }
    if (/^[a-z_$][\w$]*$/i.test(tok)) {
      nodes.push(
        <span key={idx} className="text-sky-200">
          {tok}
        </span>,
      );
      return;
    }
    nodes.push(
      <span key={idx} className="text-slate-300">
        {tok}
      </span>,
    );
  });
  return nodes;
};
