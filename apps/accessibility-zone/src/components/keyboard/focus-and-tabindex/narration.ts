import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 07.1 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'tabindex를 -1로 두면 포커스를 못 받을까요?',
        say: 'tabindex를 마이너스 일로 두면 포커스를 못 받을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. 사용자가 옮기는 포커스와 스크립트가 옮기는 포커스는 달라요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, tabindex 값이 무엇을 바꾸는지 직접 확인할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, Tab과 focus가 맡는 일을 나눕니다.',
        pause: 'short',
      },
      { target: 'li:nth-child(2)', text: '그다음, tabindex 값을 비교해요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 숨김과 비활성까지 함께 확인합니다.',
        pause: 'section',
      },
    ],
    'two-focus-tasks': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 포커스는 누가 옮길까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: 'Tab은 사용자가 컨트롤 사이를 지나가는 길입니다. focus는 화면이 바뀐 뒤 스크립트가 위치를 이어 줘요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: 'WCAG는 뜻과 조작을 지키는 순서를 요구합니다.',
        pause: 'short',
      },
      { text: '정리하면, 두 길은 맡는 과업이 다릅니다.', pause: 'section' },
    ],
    'tabindex-values': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 값마다 무엇이 달라질까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '0은 순차 이동에 넣고, -1은 순차 이동에서 빼려는 값입니다.',
        say: '영은 순차 이동에 넣고, 마이너스 일은 순차 이동에서 빼려는 값입니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '-1이어도 클릭과 focus는 막히지 않아요. 막으려면 비활성이나 inert를 씁니다.',
        say: '마이너스 일이어도 클릭과 focus는 막히지 않아요. 막으려면 비활성이나 inert를 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '양수 값은 페이지 전체 순서를 바꾸므로, 순서는 DOM에서 고칩니다.',
        pause: 'short',
      },
      { text: '정리하면, tabindex는 포커스를 금지하는 도구가 아닙니다.', pause: 'section' },
    ],
    'tabindex-practice': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 실제 포커스로 볼까요?',
        pause: 'think',
      },
      {
        text: '요소와 값, 상태를 바꾸고 Tab으로 지나가 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        target: ':scope > p:last-of-type',
        text: '예상과 다르면 관찰을 믿고 브라우저와 설정을 함께 적습니다.',
        pause: 'short',
      },
      { text: '정리하면, 포커스 가능 여부는 값 하나로 정해지지 않습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, Tab은 사용자의 길이고 focus는 위치를 이어 주는 수단입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, -1은 순차 이동에서 빼려는 값이고 양수로 순서를 고치지 않습니다.',
        say: '둘째, 마이너스 일은 순차 이동에서 빼려는 값이고 양수로 순서를 고치지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 숨김과 비활성, 환경까지 함께 확인합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, -1이어도 포커스는 받을 수 있습니다. 이 페이지는 여기까지예요.',
        say: '처음 질문에 답하면, 마이너스 일이어도 포커스는 받을 수 있습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 위젯이 맡을 키와 브라우저에 맡길 키를 나눕니다.',
        pause: 'section',
      },
    ],
  },
};
