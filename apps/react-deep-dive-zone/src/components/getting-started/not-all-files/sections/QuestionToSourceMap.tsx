import { cx } from '@berrypjh/react-ui';
import { ArrowRight, File, Route } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { NotAllFilesContent } from '../content';

type Props = { content: NotAllFilesContent['mapping'] };

const chip = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

const FilePill = ({ name, cls }: { name: string; cls: string }) => (
  <span
    className={cx(
      'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[10px] sm:text-[11px] font-mono font-bold min-w-0 max-w-full',
      cls,
    )}
  >
    <File className="h-3 w-3 shrink-0" aria-hidden="true" />
    <span className="[overflow-wrap:anywhere]">{name}</span>
  </span>
);

const FnPill = ({ name, cls }: { name: string; cls: string }) => (
  <span
    className={cx(
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
    <section id="mapping" aria-labelledby="heading-mapping" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="mapping"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Route className="h-5 w-5" aria-hidden="true" />}
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
        <ArrowRight className="h-3 w-3" aria-hidden="true" />
        <span className="inline-flex items-center gap-1">
          <File className="h-3 w-3" aria-hidden="true" />
          {content.labels.file}
        </span>
        <ArrowRight className="h-3 w-3" aria-hidden="true" />
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
          const pill = cx(chip, tone);
          return (
            <li
              key={row.id}
              className="flex flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5"
            >
              {/* question pill */}
              <span
                className={cx(
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
                  <FilePill name={row.file1} cls={pill} />
                </li>
                <li className="flex items-start gap-1.5 min-w-0">
                  <span className="text-[10px] text-[var(--term-dim)] pl-0.5 pt-1.5">↳</span>
                  <FnPill name={row.fn1} cls={pill} />
                </li>
                <li className="flex items-start gap-1.5 min-w-0">
                  <FilePill name={row.file2} cls={pill} />
                </li>
                <li className="flex items-start gap-1.5 min-w-0">
                  <span className="text-[10px] text-[var(--term-dim)] pl-0.5 pt-1.5">↳</span>
                  <FnPill name={row.fn2} cls={pill} />
                </li>
              </ol>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
