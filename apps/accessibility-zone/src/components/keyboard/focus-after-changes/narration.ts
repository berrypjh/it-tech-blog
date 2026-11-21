import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 07.4 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '방금 누른 삭제 버튼이 사라지면 포커스는 어디로 갈까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '정해 두지 않으면 사용자의 위치도 함께 사라질 수 있습니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 동작마다 도착지를 정할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 동작별 도착지를 정합니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 옮기는 시점을 봐요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 이동과 안내를 나눕니다.', pause: 'section' },
    ],
    'focus-destination-rules': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 어디로 옮겨야 할까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: 'WAI-ARIA는 논리적인 위치로 옮기라고 권고합니다. 어디인지는 과업이 정해요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '이 예제의 삭제는 다음 행, 이전 행, 추가 버튼 순서입니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '추가와 보관은 포커스를 옮기지 않아요.',
        pause: 'short',
      },
      { text: '정리하면, 구현 전에 도착지부터 정합니다.', pause: 'section' },
    ],
    'focus-timing-and-announcements': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 언제 옮겨야 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '대상이 DOM에 반영된 뒤에, 요청이 있을 때만 옮깁니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '포커스 이동은 위치를 잇고, 상태 메시지는 결과를 알려요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '복구 뒤에도 키보드로 벗어날 수 있어야 합니다.',
        pause: 'short',
      },
      { text: '정리하면, 포커스는 잇되 붙잡지 않습니다.', pause: 'section' },
    ],
    'row-focus-practice': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 복구가 있을 때와 없을 때를 볼까요?',
        pause: 'think',
      },
      {
        text: '행을 지우고 포커스 복구를 끈 뒤 다시 해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 같은 조작 뒤의 포커스 위치를 비교합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 동작마다 도착지를 먼저 정합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, DOM 반영 뒤에 필요한 경우만 옮깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 포커스 이동과 결과 안내를 나눕니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 포커스의 도착지는 작성자가 정합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 위젯 안의 포커스를 두 방법으로 관리합니다.', pause: 'section' },
    ],
  },
};
