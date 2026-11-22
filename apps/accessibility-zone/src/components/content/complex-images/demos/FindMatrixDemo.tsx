'use client';

import { useState } from 'react';

import { DocTable, PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { TableScroll, VisuallyHidden } from '@berrypjh/react-ui';

const questions = ['unit', 'max', 'change'] as const;
const paths = ['chart', 'summary', 'table'] as const;
type Question = (typeof questions)[number];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '위 그림 1 · 요약 · 표를 하나씩만 보고, 각 정보를 정확히 알 수 있는 칸에 표시하세요. 그다음 풀이와 비교합니다.',
    caption: '어느 경로에서 정확히 찾았나 (내 기록)',
    corner: '찾을 정보',
    questions: { unit: '단위', max: '가장 많은 시각과 값', change: '시간에 따른 변화' },
    paths: { chart: '차트', summary: '요약', table: '표' },
    found: '정확히 찾음',
    count: (n: number) => `9칸 중 ${n}칸에 표시했습니다.`,
    reveal: '풀이 보기',
    answerCaption: '예제의 풀이',
    answerHead: ['찾을 정보', '차트', '요약', '표'],
    answers: [
      ['단위', '찾음 (축 제목의 석)', '찾음', '찾음 (열 제목)'],
      [
        '가장 많은 시각과 값',
        '시각만 찾음. 값은 눈금으로 어림',
        '찾음 (13시 38석)',
        '찾음 (값을 비교)',
      ],
      ['시간에 따른 변화', '찾음 (막대 높이)', '찾음', '값을 차례로 비교해 직접 알아냄'],
    ],
    note: '차트만 정확한 값을 주지 못합니다. 그래서 요약과 표가 함께 있어야 같은 과업을 마칠 수 있습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Look at Figure 1, the summary, and the table one at a time, and mark where you could get each piece exactly. Then compare with the solution.',
    caption: 'Where I found it exactly (my record)',
    corner: 'Information',
    questions: { unit: 'Unit', max: 'Peak time and value', change: 'Change over time' },
    paths: { chart: 'Chart', summary: 'Summary', table: 'Table' },
    found: 'found exactly',
    count: (n: number) => `${n} of 9 cells marked.`,
    reveal: 'Show solution',
    answerCaption: 'The example’s solution',
    answerHead: ['Information', 'Chart', 'Summary', 'Table'],
    answers: [
      ['Unit', 'Found (seats, in the axis title)', 'Found', 'Found (column header)'],
      [
        'Peak time and value',
        'Time only; value estimated from the grid',
        'Found (38 seats at 13:00)',
        'Found (by comparing values)',
      ],
      [
        'Change over time',
        'Found (bar heights)',
        'Found',
        'Worked out by comparing values in order',
      ],
    ],
    note: 'Only the chart cannot give exact values, so the summary and table are needed to finish the same task.',
  },
};

/** 같은 정보를 차트 · 요약 · 표 중 어디서 정확히 찾았는지 학습자가 표시한다. 채점하지 않고 풀이와 비교한다. */
export const FindMatrixDemo = () => {
  const c = useLang(content);
  const [marked, setMarked] = useState<Set<string>>(new Set());

  const toggle = (key: string) =>
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <TableScroll label={c.caption} className="rounded-sm border border-stroke-light">
        <table className="w-full text-xsm">
          <caption className="p-sm text-left font-semiBold text-text-default">{c.caption}</caption>
          <thead>
            <tr>
              <th scope="col" className="p-sm text-left">
                {c.corner}
              </th>
              {paths.map((path) => (
                <th key={path} scope="col" className="p-sm">
                  {c.paths[path]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {questions.map((q: Question) => (
              <tr key={q} className="border-t border-stroke-light">
                <th scope="row" className="p-sm text-left font-normal">
                  {c.questions[q]}
                </th>
                {paths.map((path) => {
                  const key = `${q}-${path}`;
                  return (
                    <td key={path} className="p-sm text-center">
                      <label className="inline-flex items-center justify-center p-xs">
                        <input
                          type="checkbox"
                          checked={marked.has(key)}
                          onChange={() => toggle(key)}
                        />
                        <VisuallyHidden>{`${c.questions[q]} · ${c.paths[path]} ${c.found}`}</VisuallyHidden>
                      </label>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </TableScroll>
      <p role="status" className="text-xsm">
        {c.count(marked.size)}
      </p>
      <details className="rounded-sm border border-stroke-light p-md text-xsm">
        <summary className="cursor-pointer font-semiBold text-text-default">{c.reveal}</summary>
        <DocTable caption={c.answerCaption} head={c.answerHead} rows={c.answers} />
        <p>{c.note}</p>
      </details>
    </PracticeFrame>
  );
};
