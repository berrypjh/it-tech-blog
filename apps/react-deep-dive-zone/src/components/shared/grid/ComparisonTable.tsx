import { cn } from '@it-tech-blog/utils';

export type ComparisonRow = {
  /** 첫 열(행 머리글) */
  label: React.ReactNode;
  /** 비교 열 값들. headers의 2번째 이후와 순서가 일치한다. */
  cells: React.ReactNode[];
};

type Props = {
  /** [행 머리글 열, ...비교 열] 헤더. */
  headers: string[];
  rows: ComparisonRow[];
  /** 표의 접근성 이름. 시각적으로 숨긴 <caption> + 모바일 목록 aria-label로 쓰인다. */
  caption?: string;
  /** 각 열 너비(CSS width). 생략 시 자동. headers와 길이를 맞춘다. */
  columnWidths?: string[];
  className?: string;
};

/**
 * "주제 + 여러 비교 열" 매트릭스 테이블.
 * md 이상은 시맨틱 <table>, 그 미만은 행별 카드(dl) 목록으로 보여준다.
 */
export const ComparisonTable = ({ headers, rows, caption, columnWidths, className }: Props) => {
  const [, ...valueHeaders] = headers;
  return (
    <div
      className={cn(
        'rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden',
        className,
      )}
    >
      <table className="hidden md:table w-full text-left">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="bg-[var(--term-surface)] border-b border-[var(--term-border)]">
            {headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                style={columnWidths ? { width: columnWidths[i] } : undefined}
                className="px-md py-3 text-xsm font-bold text-[var(--term-fg)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-[var(--term-border)] hover:bg-[var(--term-surface)] transition-colors"
            >
              <th
                scope="row"
                className="px-md py-3 align-top text-xsm font-bold text-[var(--term-fg)]"
              >
                {row.label}
              </th>
              {row.cells.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-md py-3 align-top text-xsm leading-relaxed text-[var(--term-muted)] border-l border-[var(--term-border)]/60"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ul aria-label={caption} className="md:hidden divide-y divide-[var(--term-border)]">
        {rows.map((row, idx) => (
          <li key={idx}>
            <div className="flex flex-col gap-0.5 bg-[var(--term-surface)] px-md py-sm">
              <span className="text-xxsm uppercase tracking-wider text-[var(--term-dim)]">
                {headers[0]}
              </span>
              <p className="text-sm font-bold text-[var(--term-fg)] break-keep">{row.label}</p>
            </div>

            <dl className="flex flex-col gap-sm p-md">
              {row.cells.map((cell, ci) => (
                <div
                  key={ci}
                  className="flex flex-col gap-1 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm"
                >
                  <dt className="w-fit text-[10px] uppercase tracking-wider text-[var(--term-accent)] font-bold">
                    {valueHeaders[ci]}
                  </dt>
                  <dd className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                    {cell}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
};
