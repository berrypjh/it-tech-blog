import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ScheduleUpdateOnFiberContent } from '../content';
import {
  ArrowRightIcon,
  CircleHelpIcon,
  FileCodeIcon,
  FileTextIcon,
  FunctionSquareIcon,
} from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['checkpoint'] };

const HIGHLIGHT_TOKENS = new Set([
  'scheduleUpdateOnFiber',
  'markRootUpdated',
  'root',
  'fiber',
  'lane',
]);

const KEYWORDS = new Set(['export', 'function']);

export const CodeCheckpointSection = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.45fr)] gap-md lg:gap-lg items-stretch">
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
          questionCallout
        />
      </article>

      <div className="min-w-0 grid grid-cols-1 xl:grid-cols-[minmax(0,_1fr)_minmax(0,_0.5fr)] gap-md items-start">
        <LightCodePanel
          fileName={content.code.fileName}
          rightLabel={content.code.rightLabel}
          content={content.code.content}
          highlightLine={content.callout.linkedLine}
        />

        <CalloutCard callout={content.callout} />
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
  questionCallout?: boolean;
};

const InfoRow = ({ icon, label, value, mono, accent, questionCallout }: InfoRowProps) => (
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
    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80">
        {label}
      </span>
      {questionCallout ? (
        <span
          className={cn(
            'inline-block rounded-xl border-2 px-3 py-2 text-xsm font-bold leading-snug break-keep',
            'border-sky-200/80 bg-white text-sky-900',
            'dark:border-sky-800/70 dark:bg-slate-950/50 dark:text-sky-100',
          )}
        >
          {value}
        </span>
      ) : (
        <span
          className={cn(
            'text-xsm leading-snug break-words',
            mono && 'font-mono',
            accent ? 'font-bold text-sky-800 dark:text-sky-100' : 'text-[var(--term-fg)]',
          )}
        >
          {value}
        </span>
      )}
    </div>
  </div>
);

type CalloutCardProps = {
  callout: ScheduleUpdateOnFiberContent['checkpoint']['callout'];
};

const CalloutCard = ({ callout }: CalloutCardProps) => (
  <article
    className={cn(
      'relative flex gap-sm rounded-2xl border-2 p-md',
      'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono font-bold text-md',
        'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
      )}
    >
      ⚡
    </span>
    <div className="flex flex-col gap-1 min-w-0">
      <h4 className="text-xsm sm:text-sm font-bold leading-tight text-emerald-900 dark:text-emerald-100 break-keep">
        {callout.title}
      </h4>
      <p className="text-xxsm leading-snug text-emerald-900/85 dark:text-emerald-100/85 break-keep">
        {callout.body}
      </p>
      <span
        aria-hidden="true"
        className="mt-1 inline-flex w-fit items-center gap-1 text-[10px] font-mono text-[var(--term-muted)]"
      >
        <ArrowRightIcon className="h-3 w-3 rotate-180" />
        line {callout.linkedLine}
      </span>
    </div>
  </article>
);

type LightCodePanelProps = {
  fileName: string;
  rightLabel: string;
  content: string;
  highlightLine: number;
};

const LightCodePanel = ({ fileName, rightLabel, content, highlightLine }: LightCodePanelProps) => {
  const lines = content.split('\n');
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border h-full',
        'border-[var(--term-border)] bg-white text-slate-900',
        'dark:bg-slate-950 dark:text-slate-100 dark:border-slate-800',
        'shadow-[0_18px_40px_-20px_rgba(15,23,42,0.4),0_2px_0_var(--term-border)]',
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between gap-sm border-b px-md py-2.5',
          'border-[var(--term-border)] bg-slate-50/80',
          'dark:bg-slate-900/70 dark:border-slate-800/80',
        )}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span aria-hidden="true" className="flex items-center gap-1.5">
            <span className="block h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </span>
          <span
            className="hidden sm:inline-block h-3.5 w-px bg-slate-300 dark:bg-slate-700"
            aria-hidden="true"
          />
          <span className="truncate text-xxsm font-mono text-slate-700 dark:text-slate-200">
            {fileName}
          </span>
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
            'border-sky-300/70 bg-sky-50 text-sky-700',
            'dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-200',
          )}
        >
          {rightLabel}
        </span>
      </div>

      <pre className="overflow-x-auto px-md py-md font-mono leading-[1.85] text-[12.5px] sm:text-[13px]">
        <code>
          {lines.map((line, i) => {
            const lineNo = i + 1;
            const highlighted = lineNo === highlightLine;
            return (
              <div
                key={i}
                className={cn(
                  'flex',
                  highlighted &&
                    'rounded-md border-2 border-emerald-400/80 bg-emerald-50/80 dark:border-emerald-600/70 dark:bg-emerald-950/40',
                )}
              >
                <span
                  aria-hidden="true"
                  className="select-none w-8 shrink-0 pr-3 text-right tabular-nums text-slate-400 dark:text-slate-600"
                >
                  {lineNo}
                </span>
                <span className="whitespace-pre">{highlightLineFn(line, highlighted)}</span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
};

const highlightLineFn = (line: string, highlighted: boolean): React.ReactNode => {
  const commentMatch = line.match(/^(\s*)(\/\/.*)$/);
  if (commentMatch) {
    return (
      <>
        <span>{commentMatch[1]}</span>
        <span className="text-slate-500 italic dark:text-slate-500">{commentMatch[2]}</span>
      </>
    );
  }
  const tokens = line.split(/(\s+|[(){}[\];,=:]|\.)/g);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (HIGHLIGHT_TOKENS.has(tok)) {
      return (
        <span
          key={idx}
          className={cn(
            'font-bold',
            highlighted
              ? 'text-emerald-700 dark:text-emerald-300'
              : 'text-sky-700 dark:text-amber-300',
          )}
        >
          {tok}
        </span>
      );
    }
    if (KEYWORDS.has(tok)) {
      return (
        <span key={idx} className="text-fuchsia-700 dark:text-fuchsia-300">
          {tok}
        </span>
      );
    }
    if (/^[(){}[\];,=:.]$/.test(tok)) {
      return (
        <span key={idx} className="text-slate-500 dark:text-slate-400">
          {tok}
        </span>
      );
    }
    if (/^[a-z_$][\w$]*$/i.test(tok)) {
      return (
        <span key={idx} className="text-slate-800 dark:text-sky-200">
          {tok}
        </span>
      );
    }
    return (
      <span key={idx} className="text-slate-700 dark:text-slate-300">
        {tok}
      </span>
    );
  });
};
