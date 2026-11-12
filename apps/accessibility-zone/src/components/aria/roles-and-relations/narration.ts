import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 05.2 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'aria로 시작하는 속성은 모두 같은 일을 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 무엇인지 알리는 역할, 자주 바뀌는 상태, 잘 바뀌지 않는 속성, 다른 요소를 가리키는 관계가 있어요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 한 역할이 꼭 갖춰야 할 것을 원문에서 찾을 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 네 가지를 짧은 예제에서 나눠 읽습니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 한 역할의 필수 요구를 원문 표에서 찾아요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, DOM 자식과 접근성 소유, ID 참조의 차이를 봅니다.',
        pause: 'section',
      },
    ],
    'role-state-property': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 탭 목록 하나에는 무엇이 들어 있을까요?',
        pause: 'think',
      },
      {
        target: '[data-code-block]',
        text: '예제에는 네 가지가 모두 있습니다. 탭 목록과 탭, 탭 패널은 역할이에요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '선택 여부는 상태라서 사용자가 탭을 고를 때마다 바뀝니다. 목록의 이름은 속성이라 잘 바뀌지 않아요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: 'aria-controls와 aria-labelledby는 다른 요소를 ID로 가리키는 관계입니다.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: 'WAI-ARIA는 상태와 속성을 바뀌는 빈도로 구분합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '예제는 의미만 적은 것입니다. 키 동작과 상태를 바꾸는 일은 스크립트가 맡아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 역할과 상태, 속성과 관계를 나눠 읽습니다.',
        pause: 'section',
      },
    ],
    'required-in-spec': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 한 역할이 꼭 갖춰야 할 것은 어디에 적혀 있을까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '원문의 역할마다 특성 표가 있습니다. 필수 상태와 속성, 필요한 부모 역할, 소유해야 할 자식, 이 세 줄을 봐요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '필요한 부모 역할이 있으면, 작성자는 그 역할 안에 요소를 둬야 합니다.',
        pause: 'short',
      },
      {
        text: '실습에서는 체크박스와 탭, 탭 목록 가운데 하나를 골라 세 줄을 찾습니다. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        text: '정리하면, 필수 요구는 역할의 특성 표에서 찾습니다.',
        pause: 'section',
      },
    ],
    'three-relations': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 두 요소가 이어져 있다는 말은 무슨 뜻일까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '세 가지가 섞여 있습니다. DOM 부모와 자식, 접근성 소유, 그리고 ID 참조예요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'aria-controls는 이 버튼이 저 영역을 조절한다는 관계만 알립니다.',
        pause: 'short',
      },
      {
        target: '[data-code-block]',
        text: '그래서 예제의 버튼을 눌러도 영역은 열리지 않습니다. 열고 닫는 일은 스크립트가 해요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: 'aria-owns는 DOM 구조로 나타낼 수 없는 관계를 위한 것입니다. DOM을 옮길 수 있으면 DOM을 옮겨요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: 'aria-owns로 순서를 바꾸면 Tab 순서와 화면 배치는 그대로 남습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, ID 참조는 소유도 동작도 만들지 않습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 역할과 상태, 속성과 관계는 하는 일이 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 한 역할의 필수 요구는 원문의 특성 표 세 줄에서 찾습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, aria-controls와 aria-owns는 동작이나 순서를 만들지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, aria 속성은 종류마다 하는 일이 다릅니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 HTML 요소마다 허용되는 역할과 속성을 확인합니다.',
        pause: 'section',
      },
    ],
  },
};
