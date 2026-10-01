import { Table, TableScroll } from '@berrypjh/react-ui';

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
    <Table hiddenCaption>
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
          <tr key={r}>
            {row.map((cell, c) => (
              <td key={c} className="text-text-light">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  </TableScroll>
);
