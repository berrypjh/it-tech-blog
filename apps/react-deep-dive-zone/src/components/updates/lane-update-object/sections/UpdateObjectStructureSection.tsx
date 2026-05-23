import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { LaneUpdateObjectContent } from '../content';
import { BracesIcon, ListChecksIcon } from '../icons';

type Props = { content: LaneUpdateObjectContent['structure'] };

const KEYWORDS = new Set(['const']);

const HIGHLIGHTS = new Set([
  'lane',
  'revertLane',
  'gesture',
  'action',
  'hasEagerState',
  'eagerState',
  'next',
  'NoLane',
]);

export const UpdateObjectStructureSection = ({ content }: Props) => (
  <section id="structure" aria-labelledby="heading-structure" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="structure"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BracesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.2fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Code card */}
      <CodeCard
        fileName={content.code.fileName}
        language={content.code.language}
        content={content.code.content}
      />

      {/* Summary card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/30 to-amber-50/20',
          'dark:from-[var(--term-bg)] dark:via-sky-950/20 dark:to-amber-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-2xl border',
              'bg-sky-100 text-sky-700 border-sky-200/80',
              'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
            )}
          >
            <ListChecksIcon className="h-5 w-5" />
          </span>
          <h3 className="text-md sm:text-lg font-bold text-sky-800 dark:text-sky-100 break-keep">
            {content.summaryTitle}
          </h3>
        </header>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.summaryBody}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {content.summaryItems.map((item) => {
            const t = toneTokens[item.tone];
            return (
              <li
                key={item.key}
                className={cn(
                  'flex items-start gap-2 rounded-xl border px-3 py-2',
                  'border-[var(--term-border)] bg-slate-50/60 dark:bg-slate-900/30',
                )}
              >
                <span
                  className={cn(
                    'rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold',
                    t.chip,
                  )}
                >
                  {item.key}
                </span>
                <span className="text-xxsm sm:text-xsm text-[var(--term-muted)] leading-snug break-keep">
                  {item.body}
                </span>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);

const CodeCard = ({
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
        'overflow-hidden rounded-3xl border bg-slate-950 text-slate-100',
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

      <pre className="overflow-x-auto px-md py-md font-mono leading-[1.85] text-[13px] sm:text-[14px]">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-8 shrink-0 pr-3 text-right tabular-nums text-slate-600"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre">{highlight(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const highlight = (line: string): React.ReactNode => {
  const tokens = line.split(/(\s+|[(){}[\];,=:]|\.)/g);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (HIGHLIGHTS.has(tok)) {
      return (
        <span key={idx} className="text-amber-300 font-bold">
          {tok}
        </span>
      );
    }
    if (KEYWORDS.has(tok)) {
      return (
        <span key={idx} className="text-fuchsia-300">
          {tok}
        </span>
      );
    }
    if (tok === 'false' || tok === 'null' || tok === 'true') {
      return (
        <span key={idx} className="text-emerald-300">
          {tok}
        </span>
      );
    }
    if (/^[(){}[\];,=:.]$/.test(tok)) {
      return (
        <span key={idx} className="text-slate-400">
          {tok}
        </span>
      );
    }
    if (/^[a-z_$][\w$]*$/i.test(tok)) {
      return (
        <span key={idx} className="text-sky-200">
          {tok}
        </span>
      );
    }
    return (
      <span key={idx} className="text-slate-300">
        {tok}
      </span>
    );
  });
};
