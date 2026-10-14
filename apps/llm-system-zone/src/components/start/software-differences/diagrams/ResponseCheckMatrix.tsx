import type { Locale } from '@it-tech-blog/preferences';

import { CircleCheck, CircleX, Minus } from 'lucide-react';

type Cell = 'pass' | 'fail' | 'none';

const content = {
  ko: {
    caption: '응답 세 가지가 앱의 검사를 지나는 모습',
    caseHeader: '경우',
    codeGroup: '앱이 코드로 검사하는 것',
    meaningGroup: '코드만으로는 알 수 없는 것',
    steps: ['응답 도착', 'JSON 구문', '스키마'],
    meaning: '내용이 사실과 맞음',
    signalHeader: '오류 신호',
    states: { pass: '통과', fail: '실패', none: '해당 없음' } satisfies Record<Cell, string>,
    rows: [
      {
        title: '형식은 맞지만 내용이 틀린 응답',
        cells: ['pass', 'pass', 'pass', 'fail'] as Cell[],
        signal: '없음',
      },
      {
        title: '표현만 다른 정답',
        cells: ['pass', 'pass', 'pass', 'pass'] as Cell[],
        signal: '없음',
      },
      {
        title: '제한 시간을 넘긴 호출',
        cells: ['fail', 'none', 'none', 'none'] as Cell[],
        signal: '예외 또는 timeout',
      },
    ],
  },
  en: {
    caption: 'How three responses pass through the app’s checks',
    caseHeader: 'Case',
    codeGroup: 'What the app checks in code',
    meaningGroup: 'What code alone cannot tell',
    steps: ['Response arrives', 'JSON syntax', 'Schema'],
    meaning: 'Content matches the facts',
    signalHeader: 'Error signal',
    states: { pass: 'Pass', fail: 'Fail', none: 'Not applicable' } satisfies Record<Cell, string>,
    rows: [
      {
        title: 'Right format, wrong content',
        cells: ['pass', 'pass', 'pass', 'fail'] as Cell[],
        signal: 'None',
      },
      {
        title: 'A correct answer worded differently',
        cells: ['pass', 'pass', 'pass', 'pass'] as Cell[],
        signal: 'None',
      },
      {
        title: 'A call that exceeded the time limit',
        cells: ['fail', 'none', 'none', 'none'] as Cell[],
        signal: 'An exception or a timeout',
      },
    ],
  },
};

const icons = {
  pass: <CircleCheck className="mx-auto h-4 w-4 text-text-success" aria-hidden="true" />,
  fail: <CircleX className="mx-auto h-4 w-4 text-text-error" aria-hidden="true" />,
  none: <Minus className="mx-auto h-4 w-4 text-text-light" aria-hidden="true" />,
};

const head = 'border-b border-stroke-light px-md py-sm text-center font-semiBold text-text-light';
const cell = 'border-t border-stroke-light px-md py-sm text-center';
const meaningEdge = 'border-l border-dashed border-stroke-default';

/** 응답 세 가지가 앱의 코드 검사 세 단계를 지나는 모습과, 코드로는 알 수 없는 내용 열을 표로 보여 준다. 서버 컴포넌트다. */
export const ResponseCheckMatrix = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-lg">
      <div className="overflow-x-auto rounded-md border border-stroke-light bg-background-surface">
        <table className="w-full min-w-[34rem] border-collapse text-xxsm leading-normal">
          <caption className="sr-only">{c.caption}</caption>
          <thead>
            <tr>
              <th scope="col" rowSpan={2} className={`${head} text-left`}>
                {c.caseHeader}
              </th>
              <th scope="colgroup" colSpan={c.steps.length} className={head}>
                {c.codeGroup}
              </th>
              <th scope="col" className={`${head} ${meaningEdge}`}>
                {c.meaningGroup}
              </th>
              <th scope="col" rowSpan={2} className={`${head} text-left`}>
                {c.signalHeader}
              </th>
            </tr>
            <tr>
              {c.steps.map((step) => (
                <th key={step} scope="col" className={`${head} font-normal`}>
                  {step}
                </th>
              ))}
              <th scope="col" className={`${head} ${meaningEdge} font-normal`}>
                {c.meaning}
              </th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row) => (
              <tr key={row.title}>
                <th scope="row" className={`${cell} text-left font-semiBold text-text-default`}>
                  {row.title}
                </th>
                {row.cells.map((state, i) => (
                  <td
                    key={i}
                    className={`${cell} ${i === row.cells.length - 1 ? meaningEdge : ''}`}
                  >
                    {icons[state]}
                    <span className="sr-only">{c.states[state]}</span>
                  </td>
                ))}
                <td className={`${cell} text-left text-text-light`}>{row.signal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
};
