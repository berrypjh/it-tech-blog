'use client';

import { useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Radio, RadioGroup, TableScroll } from '@berrypjh/react-ui';

import { notice } from '../notice';

type Version = 'before' | 'after';
type Answers = Record<Version, string[]>;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '판을 고르고 그 글만 읽고 세 질문에 답하세요. 두 판에 모두 답하면 아래 표에서 비교됩니다. 이해 정도를 점수로 매기지 않고, 글에서 답을 찾을 수 있었는지만 봅니다.',
    version: '읽을 판',
    versions: { before: '수정 전', after: '수정 후' },
    questions: [
      { q: '무엇을 해야 하나요?', options: ['참가 신청서 내기', '좌석 값 결제하기', '글에 없음'] },
      {
        q: '언제까지 해야 하나요?',
        options: ['12월 3일 목요일 18:00', '12월 5일 토요일', '글에 없음'],
      },
      { q: '어디에서 하나요?', options: ['‘참가 신청’ 버튼', '행사장 안내 데스크', '글에 없음'] },
    ],
    findable: {
      before: ['글에 없음', '글에 없음', '글에 없음'],
      after: ['참가 신청서 내기', '12월 3일 목요일 18:00', '‘참가 신청’ 버튼'],
    },
    caption: '두 판에서의 내 답과 글에서 찾을 수 있는 답',
    head: ['질문', '수정 전: 내 답', '수정 전: 글의 답', '수정 후: 내 답', '수정 후: 글의 답'],
    blank: '—',
    note: '수정 전 글은 “신청”이라고만 해서 무엇을 내는지, 기한과 방법은 글에 없습니다. 짐작한 답은 맞더라도 글에서 찾은 답이 아닙니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Choose a version, read only that text, and answer three questions. After you answer both versions, the table below compares them. Understanding is not scored; it only shows whether the answer could be found in the text.',
    version: 'Version to read',
    versions: { before: 'Before', after: 'After' },
    questions: [
      {
        q: 'What do you need to do?',
        options: ['Submit the registration form', 'Pay for a seat', 'Not in the text'],
      },
      {
        q: 'By when?',
        options: ['18:00, Thursday, December 3', 'Saturday, December 5', 'Not in the text'],
      },
      {
        q: 'Where?',
        options: ['The “Register” button', 'The venue information desk', 'Not in the text'],
      },
    ],
    findable: {
      before: ['Not in the text', 'Not in the text', 'Not in the text'],
      after: [
        'Submit the registration form',
        '18:00, Thursday, December 3',
        'The “Register” button',
      ],
    },
    caption: 'My answers and the answers findable in the text, for both versions',
    head: ['Question', 'Before: mine', 'Before: in the text', 'After: mine', 'After: in the text'],
    blank: '—',
    note: 'The text before only says “application,” so what to submit, the deadline, and the method are not in it. A guessed answer, even if right, was not found in the text.',
  },
};

/** 같은 안내의 수정 전 · 후 판을 읽고 같은 세 질문에 답해, 글에서 답을 찾을 수 있었는지 비교한다. */
export const NoticeCompareDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const n = notice[locale];
  const [version, setVersion] = useState<Version>('before');
  const [answers, setAnswers] = useState<Answers>({ before: ['', '', ''], after: ['', '', ''] });

  const answer = (i: number, value: string) =>
    setAnswers((prev) => ({
      ...prev,
      [version]: prev[version].map((a, j) => (j === i ? value : a)),
    }));

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.version}
        value={version}
        onValueChange={(value) => setVersion(value as Version)}
        className="flex flex-wrap gap-md"
      >
        {(['before', 'after'] as Version[]).map((v) => (
          <Radio key={v} value={v} className="text-xsm">
            {c.versions[v]}
          </Radio>
        ))}
      </RadioGroup>
      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        {version === 'before' ? (
          <p>{n.before}</p>
        ) : (
          <dl className="grid gap-x-lg gap-y-xs sm:grid-cols-[8rem_1fr]">
            {n.after.map(([term, text]) => (
              <div key={term} className="contents">
                <dt className="font-semiBold text-text-default">{term}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
      <div className="grid gap-md sm:grid-cols-3">
        {c.questions.map((item, i) => (
          <RadioGroup
            key={`${version}-${item.q}`}
            label={item.q}
            value={answers[version][i]}
            onValueChange={(value) => answer(i, value)}
            className="flex flex-col gap-2xs rounded-sm border border-stroke-light p-md"
          >
            {item.options.map((option) => (
              <Radio key={option} value={option} className="text-xsm">
                {option}
              </Radio>
            ))}
          </RadioGroup>
        ))}
      </div>
      <TableScroll label={c.caption} className="rounded-sm border border-stroke-light">
        <table className="w-full min-w-[40rem] text-xsm">
          <caption className="p-sm text-left font-semiBold text-text-default">{c.caption}</caption>
          <thead>
            <tr>
              {c.head.map((h) => (
                <th key={h} scope="col" className="p-sm text-left">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.questions.map((item, i) => (
              <tr key={item.q} className="border-t border-stroke-light">
                <th scope="row" className="p-sm text-left font-normal">
                  {item.q}
                </th>
                <td className="p-sm">{answers.before[i] || c.blank}</td>
                <td className="p-sm text-text-light">{c.findable.before[i]}</td>
                <td className="p-sm">{answers.after[i] || c.blank}</td>
                <td className="p-sm text-text-light">{c.findable.after[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableScroll>
      <p className="text-xsm text-text-light">{c.note}</p>
    </PracticeFrame>
  );
};
