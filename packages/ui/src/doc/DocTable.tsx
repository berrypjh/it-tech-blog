import { Table, TableScroll } from '@berrypjh/react-ui';

/** 셀 여백 — 라이브러리 기본(sm · md)보다 한 단계 넓혀 본문 표가 붙어 보이지 않게 한다. */
const cellSpacing =
  '[--ui-table-cell-py:var(--ds-spacing-md)] [--ui-table-cell-px:var(--ds-spacing-lg)]';

/** 라이브러리 Table 기반 문서용 표. 첫 행은 열 제목이고, 넘치면 가로 스크롤된다. */
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
    <Table hiddenCaption className={cellSpacing}>
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
