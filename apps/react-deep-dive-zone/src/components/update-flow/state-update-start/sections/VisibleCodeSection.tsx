import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { StateUpdateStartContent } from '../content';
import { CodeIcon, UserIcon } from '../icons';

type Props = { content: StateUpdateStartContent['visibleCode'] };

export const VisibleCodeSection = ({ content }: Props) => (
  <section
    id="visible-code"
    aria-labelledby="heading-visible-code"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="visible-code"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.25fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Code editor card */}
      <div className="min-w-0">
        <CodeEditorCard
          fileName={content.code.fileName}
          language={content.code.language}
          content={content.code.content}
        />
      </div>

      {/* Explanation card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 bg-gradient-to-br from-white via-sky-50/60 to-cyan-50/40',
          'dark:border-sky-800/70 dark:from-[var(--term-bg)] dark:via-sky-950/30 dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl self-start',
            'bg-sky-100 text-sky-700 border border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <UserIcon className="h-5 w-5" />
        </span>

        <h3 className="text-md sm:text-lg font-bold text-sky-800 dark:text-sky-200 break-keep leading-tight">
          {content.explain.title}
        </h3>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.explain.body}
        </p>

        <span
          className={cn(
            'mt-auto inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-1.5',
            'border-sky-300/70 bg-white text-xxsm font-mono text-sky-800',
            'dark:border-sky-800/60 dark:bg-slate-950/50 dark:text-sky-200',
          )}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky-500" />
          {content.explain.tag}
        </span>
      </article>
    </div>
  </section>
);

type CodeEditorCardProps = {
  fileName: string;
  language: string;
  content: string;
};

const CodeEditorCard = ({ fileName, language, content }: CodeEditorCardProps) => {
  const lines = content.split('\n');
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border bg-slate-950 text-slate-100',
        'border-slate-800 shadow-[0_18px_40px_-20px_rgba(2,6,23,0.7),0_2px_0_var(--term-border)]',
      )}
    >
      {/* Header */}
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

      {/* Code body */}
      <pre className="overflow-x-auto px-md py-md font-mono leading-[1.7] text-[13px] sm:text-[14px]">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-8 shrink-0 pr-3 text-right tabular-nums text-slate-600"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre text-slate-100">{highlight(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const KEYWORDS = new Set(['import', 'from', 'const', 'function', 'return']);

const highlight = (line: string): React.ReactNode => {
  const tokens = line.split(/(\s+|[(){}[\];,.<>=]|\/?>|<\/?)/g);
  const nodes: React.ReactNode[] = [];
  let inTag = false;
  tokens.forEach((tok, idx) => {
    if (!tok) return;
    if (tok === '<' || tok === '</') {
      inTag = true;
      nodes.push(
        <span key={idx} className="text-slate-400">
          {tok}
        </span>,
      );
      return;
    }
    if (tok === '>' || tok === '/>') {
      inTag = false;
      nodes.push(
        <span key={idx} className="text-slate-400">
          {tok}
        </span>,
      );
      return;
    }
    if (tok === '{' || tok === '}') {
      nodes.push(
        <span key={idx} className="text-fuchsia-300">
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
    if (inTag && /^[a-z][A-Za-z0-9-]*$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-cyan-300">
          {tok}
        </span>,
      );
      return;
    }
    if (/^[A-Z][A-Za-z0-9_$]*$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-amber-200">
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
