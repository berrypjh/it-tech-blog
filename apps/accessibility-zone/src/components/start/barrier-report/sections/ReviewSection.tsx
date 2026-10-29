import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { StageLabel } from '@/components/shared/StageLabel';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '기록을 다 쓴 뒤 다음 질문으로 스스로 점검합니다. 하나라도 "아니오"라면 그 항목을 고칩니다.',
    tableCaption: '재현 기록 점검 질문과 약한 기록 · 고친 기록의 예',
    tableHead: ['점검 질문', '약한 기록', '고친 기록'],
    rows: [
      [
        '다른 사람이 절차만 보고 같은 결과를 볼 수 있는가?',
        '확정 버튼이 안 됨',
        '새 날짜 입력 후 Tab을 누르면 포커스가 확정 버튼을 건너뜀',
      ],
      ['사용자를 사용 방식으로 적었는가?', '장애인 사용자', '키보드만 사용, 보조기술 없음'],
      ['환경과 설정값이 있는가?', '(없음)', '운영체제 · 브라우저와 버전, 창 폭 1280px, 확대 100%'],
      [
        '실패 단계가 처음 막힌 단계인가?',
        <StageLabel locale="ko" id="complete" />,
        <>
          <StageLabel locale="ko" id="navigate" /> — 버튼은 보이지만 Tab으로 닿지 않음
        </>,
      ],
      [
        '실제 결과가 관찰한 사실인가?',
        '이상하게 동작함',
        '오류일 때 테두리 색만 바뀌고 글자 안내가 없음',
      ],
      [
        '영향을 과업 기준으로 적었는가?',
        'WCAG 2.1.1 위반',
        '예약 변경을 끝낼 수 없음 (관련 기준: WCAG 2.1.1)',
      ],
      ['확인하지 못한 것을 적었는가?', '(없음)', '모바일 화면 낭독기에서는 확인하지 않음'],
    ],
  },
  en: {
    intro:
      'After writing, check the record with these questions. If any answer is "no", fix that field.',
    tableCaption: 'Questions for reviewing a reproduction record, with weak and improved examples',
    tableHead: ['Question', 'Weak record', 'Improved record'],
    rows: [
      [
        'Can someone else see the same result from the steps alone?',
        'Confirm button broken',
        'After typing the new date, pressing Tab skips the confirm button',
      ],
      [
        'Is the user written as a way of use?',
        'Disabled user',
        'Keyboard only, no assistive technology',
      ],
      [
        'Are the environment and settings there?',
        '(none)',
        'OS and browser with versions, 1280px window, 100% zoom',
      ],
      [
        'Is the failure stage the first one that failed?',
        <StageLabel locale="en" id="complete" />,
        <>
          <StageLabel locale="en" id="navigate" /> — the button is visible but Tab never reaches it
        </>,
      ],
      [
        'Is the actual result an observed fact?',
        'Behaves weirdly',
        'On error only the border color changes, with no text',
      ],
      [
        'Is the impact written in terms of the task?',
        'Violates WCAG 2.1.1',
        'Cannot finish rebooking (related criterion: WCAG 2.1.1)',
      ],
      [
        'Did you write what you could not check?',
        '(none)',
        'Not checked with a mobile screen reader',
      ],
    ],
  },
};

export const ReviewSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.review.id}>
      <DocH2 {...toc.review} />
      <p>{c.intro}</p>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={c.rows} />
    </section>
  );
};
