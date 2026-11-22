import type { NarrationScript } from '@it-tech-blog/ui';

/** 12.4 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '지금 어느 페이지에 있는지 어떻게 알릴까요?', pause: 'think' },
      { text: '굵은 글씨만으로는 모두에게 전해지지 않습니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 탐색 영역에 위치와 목적을 담을 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 현재 위치와 선택 상태를 나눕니다.',
        pause: 'short',
      },
      { target: 'li:nth-child(2)', text: '그다음, 탐색 영역에 이름을 줘요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 이동과 갱신을 구분합니다.',
        pause: 'section',
      },
    ],
    'current-and-selected': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 현재와 선택은 같은 말일까요?',
        pause: 'think',
      },
      { text: '아닙니다. 현재 위치는 이미 와 있는 곳입니다.', pause: 'short' },
      {
        target: 'table',
        text: '값 표에서 링크 묶음의 현재 페이지에는 페이지 값을 씁니다.',
        pause: 'short',
      },
      { text: '정리하면, 한 묶음에서 하나만 현재로 표시합니다.', pause: 'section' },
    ],
    'naming-navigation': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 탐색 영역이 여럿이면 어떻게 할까요?',
        pause: 'think',
      },
      { text: '무엇을 탐색하는지 이름으로 구별합니다.', pause: 'short' },
      { text: '정리하면, 링크의 글자는 목적지를 말합니다.', pause: 'section' },
    ],
    'url-or-in-place': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 다음 쪽은 이동일까요, 갱신일까요?',
        pause: 'think',
      },
      { text: '주소가 바뀌면 이동이고 링크로 만듭니다.', pause: 'short' },
      { target: 'table', text: '비교 표에서 뒤로 가기의 결과가 갈립니다.', pause: 'short' },
      { text: '정리하면, 갈 곳이 없는 링크는 만들지 않습니다.', pause: 'section' },
    ],
    'navigation-practice': [
      { target: ':scope > h2', text: '자, 실제 링크로 확인해 볼까요?', pause: 'short' },
      { target: 'ol', text: '쪽 번호로 옮기고 뒤로 가기로 돌아옵니다.', pause: 'short' },
      { text: '주소와 현재 표시를 읽어 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 주소와 현재 표시는 함께 바뀝니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 현재 위치는 상태로도 알립니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 탐색 영역은 이름으로 구별합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 주소가 바뀌는 이동은 링크로 만듭니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 글자와 상태로 함께 알립니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지의 질문입니다. 사이트 메뉴도 메뉴 역할일까요?', pause: 'section' },
    ],
  },
};
