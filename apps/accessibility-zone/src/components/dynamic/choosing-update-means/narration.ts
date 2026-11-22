import type { NarrationScript } from '@it-tech-blog/ui';

/** 10.1 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '화면이 바뀔 때마다 알려야 할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 변화마다 필요한 수단이 다릅니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 변화에 맞는 수단을 고를 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 세 가지 수단을 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 4.1.3의 대상을 봐요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 포커스 복구와 알림을 구별합니다.',
        pause: 'section',
      },
    ],
    'three-means': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 검색 한 번에 무엇이 바뀔까요?',
        pause: 'think',
      },
      { text: '목록과 결과 수, 그리고 새 화면입니다.', pause: 'short' },
      { text: '정리하면, 세 변화는 사용자에게 닿는 방법이 다릅니다.', pause: 'section' },
    ],
    'status-message-scope': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 목록이 바뀌는 것도 상태 메시지일까요?',
        pause: 'think',
      },
      { text: '아닙니다. 결과 수를 알리는 문구가 상태 메시지입니다.', pause: 'short' },
      { text: '정리하면, 모든 DOM 변경이 4.1.3의 대상은 아닙니다.', pause: 'section' },
    ],
    'choose-means-practice': [
      { target: ':scope > h2', text: '자, 직접 골라 볼까요?', pause: 'short' },
      {
        text: '검색하고 새 작업을 시작한 뒤 수단을 골라 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 포커스는 새 화면을 열 때만 옮겨 갑니다.', pause: 'section' },
    ],
    'focus-or-notice': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 삭제와 배경 갱신은 어떻게 다를까요?',
        pause: 'think',
      },
      { text: '삭제는 포커스를 복구하고, 배경 갱신은 포커스를 그대로 둡니다.', pause: 'short' },
      { text: '정리하면, 포커스와 알림은 따로 정합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 변화를 세 수단으로 나눕니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 4.1.3은 상태 메시지만 다룹니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 포커스와 알림은 서로를 대신하지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 필요한 변화만 알립니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 모든 메시지를 alert로 보내도 될까요?', pause: 'section' },
    ],
  },
};
