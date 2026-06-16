import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { MappingRow, NotAllFilesContent } from '../content';
import { ArrowRightIcon, FileIcon, RouteIcon } from '../icons';

type Props = { content: NotAllFilesContent['mapping'] };

type RowTone = MappingRow['tone'];

type ToneStyle = {
  rowBg: string;
  rowBorder: string;
  questionPill: string;
  filePill: string;
  fnPill: string;
  arrow: string;
};

// 중립 크롬 고정: 테두리/배경/칩은 surface+border, 색은 텍스트 액센트로만
const houseChrome = {
  rowBg: 'bg-[var(--term-bg)] hover:bg-[var(--term-surface)]',
  rowBorder: 'border-[var(--term-border)]',
};

const chip = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

// 소프트 액센트 3색: A amber / B sky / C violet (텍스트 색으로만)
const A: ToneStyle = {
  ...houseChrome,
  questionPill: cn(chip, 'text-[var(--term-accent)]'),
  filePill: cn(chip, 'text-[var(--term-accent)]'),
  fnPill: cn(chip, 'text-[var(--term-accent)]'),
  arrow: 'text-[var(--term-accent)]',
};
const B: ToneStyle = {
  ...houseChrome,
  questionPill: cn(chip, 'text-sky-600 dark:text-sky-300'),
  filePill: cn(chip, 'text-sky-600 dark:text-sky-300'),
  fnPill: cn(chip, 'text-sky-600 dark:text-sky-300'),
  arrow: 'text-sky-600 dark:text-sky-300',
};
const C: ToneStyle = {
  ...houseChrome,
  questionPill: cn(chip, 'text-violet-600 dark:text-violet-300'),
  filePill: cn(chip, 'text-violet-600 dark:text-violet-300'),
  fnPill: cn(chip, 'text-violet-600 dark:text-violet-300'),
  arrow: 'text-violet-600 dark:text-violet-300',
};

// 키 선언 순서대로 [A, B, C, A] 순환
const toneClasses: Record<RowTone, ToneStyle> = {
  blue: A,
  lavender: B,
  mint: C,
  coral: A,
};

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

      {/* 4개 매핑을 2행 2열 카드로 표기 (모바일은 1열) */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md items-stretch">
        {content.rows.map((row) => {
          const t = toneClasses[row.tone];
          return (
            <li
              key={row.id}
              className={cn(
                'flex flex-col gap-sm rounded-lg border p-md sm:p-lg shadow-[0_2px_0_var(--term-border)] transition-colors',
                t.rowBorder,
                t.rowBg,
              )}
            >
              {/* question pill */}
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xsm font-bold tracking-tight w-fit max-w-full break-keep',
                  t.questionPill,
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0"
                />
                {row.question}
              </span>

              {/* 질문 → 파일 → fn 단계 */}
              <ol className={cn('flex flex-col gap-1.5 pl-3 border-l-2', t.rowBorder)}>
                <li className="flex items-start gap-1.5 min-w-0">
                  <FilePill name={row.file1} cls={t.filePill} />
                </li>
                <li className="flex items-start gap-1.5 min-w-0">
                  <span className="text-[10px] text-[var(--term-dim)] pl-0.5 pt-1.5">↳</span>
                  <FnPill name={row.fn1} cls={t.fnPill} />
                </li>
                <li className="flex items-start gap-1.5 min-w-0">
                  <FilePill name={row.file2} cls={t.filePill} />
                </li>
                <li className="flex items-start gap-1.5 min-w-0">
                  <span className="text-[10px] text-[var(--term-dim)] pl-0.5 pt-1.5">↳</span>
                  <FnPill name={row.fn2} cls={t.fnPill} />
                </li>
              </ol>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
