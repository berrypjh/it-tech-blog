import { Table, TableScroll } from '@berrypjh/react-ui';

/** 셀 여백 — 라이브러리 기본(sm · md)보다 한 단계 넓혀 본문 표가 붙어 보이지 않게 한다. */
const cellSpacing =
  '[--ui-table-cell-py:var(--ds-spacing-md)] [--ui-table-cell-px:var(--ds-spacing-lg)]';

/**
 * 열 하나가 줄어들 수 있는 최소 폭. 이보다 좁아지면 칸마다 한두 어절씩 줄이 바뀌어 읽을 수 없으므로
 * 표가 더 줄지 않고 가로 스크롤된다. 본문 폭(46rem)에는 다섯 열까지 스크롤 없이 들어간다.
 */
const MIN_COLUMN_REM = 9;

/** 라이브러리 Table 기반 문서용 표. 첫 행은 열 제목이고, 열마다 최소 폭보다 좁아지면 가로 스크롤된다. */
export const DocTable = ({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: React.ReactNode[];
  rows: React.ReactNode[][];
}) => (
  <TableScroll label={caption} className="my-xl rounded-md border border-stroke-light">
    <Table
      hiddenCaption
      className={cellSpacing}
      style={{ minWidth: `${head.length * MIN_COLUMN_REM}rem` }}
    >
      <caption>{caption}</caption>
      <thead>
        <tr>
          {head.map((cell, i) => (
            <th key={i} scope="col" className="whitespace-nowrap">
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => (
          <tr key={r} className="hover:bg-background-grey/20">
            {row.map((cell, c) => (
              <td key={c} className="break-keep text-text-light">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  </TableScroll>
);
