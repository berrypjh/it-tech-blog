import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 07.5 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '목록 항목마다 Tab을 눌러야 한다면 어떨까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '지나가기만 해도 오래 걸립니다. 그래서 위젯은 Tab 자리를 하나만 가져요.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 포커스 관리 방식을 골라 구현할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, Tab 정지점과 방향키를 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 두 방식을 비교해요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 상태 규칙을 확인합니다.', pause: 'section' },
    ],
    'two-focus-methods': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 두 방식은 무엇이 다를까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: 'Roving tabindex는 실제 포커스를 항목으로 옮깁니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: 'aria-activedescendant는 포커스를 컨테이너에 두고 항목을 ID로 가리켜요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '참조 대상은 소유한 요소여야 하고, 보이도록 스크롤해야 합니다.',
        pause: 'short',
      },
      { text: '정리하면, 포커스를 어디에 두는지가 다릅니다.', pause: 'section' },
    ],
    'listbox-behavior': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 키를 누르면 무엇이 바뀔까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '방향키는 활성 항목만 옮기고, Space와 클릭이 선택을 바꿉니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '이 예제는 선택이 포커스를 따라가지 않게 분리했어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '활성 항목을 지우면 다음, 이전 항목 순서로 복구합니다.',
        pause: 'short',
      },
      { text: '정리하면, 활성과 선택은 다른 상태입니다.', pause: 'section' },
    ],
    'composite-practice': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 같은 키를 눌러 볼까요?',
        pause: 'think',
      },
      {
        text: '두 목록에서 활성 요소의 값을 비교해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 화면 낭독기의 결과는 직접 확인한 뒤에만 적습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 위젯은 Tab 자리를 하나만 가집니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 두 방식은 포커스의 위치와 작성자의 책임이 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 선택은 따로 두고 삭제 뒤 활성 항목을 복구합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, Tab은 한 번이면 되고 안쪽은 방향키가 맡습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 반복 영역을 건너뛰는 방법을 봅니다.', pause: 'section' },
    ],
  },
};
