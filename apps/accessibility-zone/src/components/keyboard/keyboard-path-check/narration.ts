import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 07.7 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '목록에서 지금 위치는 하나뿐일까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. DOM 포커스와 활성 항목, 선택값은 서로 다를 수 있어요.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 키보드 경로를 기록하며 검증할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 비슷한 상태의 이름을 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 경로를 끝까지 따라가요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 수정과 재검증을 기록합니다.',
        pause: 'section',
      },
    ],
    'focus-active-selected': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 세 값은 무엇이 다를까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: 'DOM 포커스는 키를 받는 요소이고, 활성 항목은 위젯이 가리키는 항목입니다.',
        pause: 'short',
      },
      { target: 'table', text: '선택값은 사용자가 고른 값이에요.', pause: 'short' },
      {
        target: 'aside',
        text: 'CSS의 active는 누르는 동안의 상태라서 활성 항목과 다릅니다.',
        pause: 'short',
      },
      { text: '정리하면, 이름이 비슷해도 값을 따로 읽습니다.', pause: 'section' },
    ],
    'final-task': [
      {
        target: ':scope > h2',
        text: '자, 최종 과업입니다. 경로가 끝까지 이어질까요?',
        pause: 'think',
      },
      {
        target: 'ol',
        text: '진입하고, 움직이고, 고르고, 나간 뒤 지우고, 다시 돌아옵니다.',
        pause: 'short',
      },
      {
        text: '결함 상태에서 먼저 해 보고 복구를 켜 다시 해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        target: 'table',
        text: '기록에는 키, 예상, 관찰, 수정, 재검증과 출처를 적습니다.',
        pause: 'short',
      },
      { text: '정리하면, 같은 키로 다시 확인해야 수정이 끝납니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 포커스와 활성 항목, 선택값을 나눕니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 경로는 실제 키로 끝까지 따라갑니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 수정 뒤 재검증하고 확인하지 못한 것은 미확인으로 남깁니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 위치를 뜻하는 값은 셋으로 나뉩니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지부터는 8장, 시각 표현과 반응형이에요. 8장은 이 질문으로 시작합니다.',
        pause: 'short',
      },
      { text: '모든 아이콘과 테두리에 같은 대비 수치를 적용해야 할까요?', pause: 'section' },
    ],
  },
};
