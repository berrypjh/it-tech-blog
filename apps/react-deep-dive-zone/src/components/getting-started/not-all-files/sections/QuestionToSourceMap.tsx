import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { NotAllFilesContent } from '../content';
import { ArrowRightIcon, FileIcon, RouteIcon } from '../icons';

type Props = { content: NotAllFilesContent['mapping'] };

const chip = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

const FilePill = ({ name, cls }: { name: string; cls: string }) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[10px] sm:text-[11px] font-mono font-bold min-w-0 max-w-full',
      cls,
    )}
  >
    <FileIcon className="h-3 w-3 shrink-0" />
    <span className="[overflow-wrap:anywhere]">{name}</span>
  </span>
);

const FnPill = ({ name, cls }: { name: string; cls: string }) => (
  <span
    className={cn(
      'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border text-[10px] sm:text-[11px] font-mono min-w-0 max-w-full',
      cls,
    )}
  >
    <span aria-hidden="true" className="text-[8px] opacity-60 shrink-0">
      fn
    </span>
    <span className="[overflow-wrap:anywhere]">{name}</span>
  </span>
);

export const QuestionToSourceMap = ({ content }: Props) => {
  return (
    <section id="section-mapping" aria-labelledby="heading-mapping" className="space-y-lg">
      <SectionHeader
        id="mapping"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RouteIcon className="h-5 w-5" />}
      />

      {/* legend */}
      <div className="flex flex-wrap items-center gap-2 text-[10px] text-[var(--term-muted)]">
        <span className="inline-flex items-center gap-1">
          <span
            className="inline-block w-2 h-2 rounded-full bg-[var(--term-accent)]"
            aria-hidden="true"
          />
          {content.labels.question}
        </span>
        <ArrowRightIcon className="h-3 w-3" />
        <span className="inline-flex items-center gap-1">
          <FileIcon className="h-3 w-3" />
          {content.labels.file}
        </span>
        <ArrowRightIcon className="h-3 w-3" />
        <span className="inline-flex items-center gap-1">
          <span aria-hidden="true" className="text-[8px] opacity-60">
            fn
          </span>
          {content.labels.fn}
        </span>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md items-stretch">
        {content.rows.map((row) => {
          const tone = toneTokens[row.tone].text;
          return (
            <li
              key={row.id}
              className="flex flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)] transition-colors hover:bg-[var(--term-surface)]"
            >
              {/* question pill */}
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xsm font-bold tracking-tight w-fit max-w-full break-keep',
                  chip,
                  tone,
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0"
                />
                {row.question}
              </span>

              {/* 질문 → 파일 → fn 단계 */}
              <ol className="flex flex-col gap-1.5 pl-3 border-l-2 border-[var(--term-border)]">
                <li className="flex items-start gap-1.5 min-w-0">
                  <FilePill name={row.file1} cls={cn(chip, tone)} />
                </li>
                <li className="flex items-start gap-1.5 min-w-0">
                  <span className="text-[10px] text-[var(--term-dim)] pl-0.5 pt-1.5">↳</span>
                  <FnPill name={row.fn1} cls={cn(chip, tone)} />
                </li>
                <li className="flex items-start gap-1.5 min-w-0">
                  <FilePill name={row.file2} cls={cn(chip, tone)} />
                </li>
                <li className="flex items-start gap-1.5 min-w-0">
                  <span className="text-[10px] text-[var(--term-dim)] pl-0.5 pt-1.5">↳</span>
                  <FnPill name={row.fn2} cls={cn(chip, tone)} />
                </li>
              </ol>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
