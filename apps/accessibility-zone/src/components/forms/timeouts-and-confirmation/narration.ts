import type { NarrationScript } from '@it-tech-blog/ui';

/** 11.7 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '시간이 다 되면 쓰던 내용은 어떻게 될까요?', pause: 'think' },
      { text: '사라지지 않고 남아 있어야 합니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 신청 하나를 끝까지 복구할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 시간제한과 재인증을 나눕니다.', pause: 'short' },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 오류 예방이 요구되는 범위를 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 최종 과업에서 한 번 확정합니다.',
        pause: 'section',
      },
    ],
    'time-limits': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 시간제한에는 무엇이 따를까요?',
        pause: 'think',
      },
      { text: '끄기와 조절, 연장 가운데 하나입니다.', pause: 'short' },
      { target: 'table', text: '조절 수단 표에는 세 가지 예외도 함께 있습니다.', pause: 'short' },
      { text: '정리하면, 이 실습은 실제 시간을 확인하지 않습니다.', pause: 'section' },
    ],
    'reauthentication-keeps-data': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 만료된 뒤에는 어떻게 될까요?',
        pause: 'think',
      },
      { text: '다시 인증하면 하던 일을 이어 갑니다.', pause: 'short' },
      {
        target: 'table',
        text: '만료 상황 표에서 초안은 어느 조작에서도 그대로입니다.',
        pause: 'short',
      },
      { text: '정리하면, 재인증도 인증의 조건을 따릅니다.', pause: 'section' },
    ],
    'error-prevention-scope': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 모든 제출에 확인 단계가 필요할까요?',
        pause: 'think',
      },
      { text: '아닙니다. 정해진 종류의 페이지에 요구됩니다.', pause: 'short' },
      { text: '정리하면, 예제의 검토 화면은 제품 결정입니다.', pause: 'section' },
    ],
    'final-task': [
      {
        target: ':scope > h2',
        text: '자, 최종 과업입니다. 신청 하나를 끝까지 복구할 수 있을까요?',
        pause: 'think',
      },
      {
        target: 'ol',
        text: '오류와 서버 실패, 응답 역전과 만료를 차례로 지납니다.',
        pause: 'short',
      },
      { text: '과업을 지나며 기록해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 확인하지 않은 발화는 미확인으로 남깁니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 시간제한에는 조절 수단이 따릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 만료된 뒤에도 초안을 지킵니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 오류 예방은 정해진 범위에 요구됩니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 쓰던 내용은 남아 있어야 합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '이렇게 11장, 폼과 오류 복구와 인증이 끝났습니다.', pause: 'section' },
    ],
  },
};
