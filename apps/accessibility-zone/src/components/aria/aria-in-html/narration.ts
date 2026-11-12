import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 05.3 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'HTML 요소에 아무 role이나 붙여도 될까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 붙여도 되는 역할과 속성은 ARIA in HTML이 요소마다 정해요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 붙인 선언이 중복인지 덮어쓰기인지 보완인지 가를 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 원문에서 요소의 행을 읽고 세 가지 선언을 나눕니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, 허용이 동작의 증명이 아닌 이유를 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, presentation과 none이 무시되는 조건을 원문과 대조합니다.',
        pause: 'section',
      },
    ],
    'element-rows': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 원문의 요소 행에는 무엇이 적혀 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '요소, 그 요소의 암시적 의미, 그리고 붙여도 되는 role과 속성입니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표에서 체크박스 입력은 aria-checked를 쓰면 안 됩니다. 제목 요소에는 none과 presentation, tab만 허용돼요.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '이 표는 원문을 줄인 것입니다. 판단할 때는 요소 이름을 눌러 원문 행을 직접 봐요.',
        pause: 'short',
      },
      {
        text: '정리하면, 허용되는 역할은 요소 행의 셋째 열에서 확인합니다.',
        pause: 'section',
      },
    ],
    'redundant-override-complement': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 붙인 선언은 어떤 종류일까요?',
        pause: 'think',
      },
      {
        target: '[data-code-block]',
        text: '세 가지입니다. 첫째는 버튼에 button 역할을 다시 적는 것 같은 중복 선언이에요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '둘째는 제목에 버튼 역할을 붙이는 것 같은 부적절한 덮어쓰기입니다. 셋째는 펼침 상태처럼 요소에 없는 상태를 더하는 보완이에요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '원문은 암시적 의미와 같은 값을 적는 것을 권장하지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '네이티브 상태와 ARIA 상태를 따로 두면 서로 어긋날 수 있습니다. 그래서 체크박스의 aria-checked는 금지돼요.',
        pause: 'short',
      },
      {
        text: '정리하면, 중복은 지우고, 덮어쓰기는 요소를 바꾸고, 보완만 남깁니다.',
        pause: 'section',
      },
    ],
    'allowed-is-not-proof': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 허용된 선언이면 잘 동작할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '그렇지 않습니다. 링크에 버튼 역할은 허용되지만, 허용은 적어도 된다는 뜻일 뿐이에요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: 'Space로는 실행되지 않고, Enter를 누르면 링크처럼 이동합니다. 보조기술이 어떻게 다루는지도 조합마다 달라요.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '문서 적합성은 원문으로, 노출은 브라우저 도구로, 동작은 키보드와 보조기술로 확인합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 허용은 동작이나 지원의 증명이 아닙니다.',
        pause: 'section',
      },
    ],
    'presentation-conflicts': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. presentation을 붙이면 의미가 늘 지워질까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: '아닙니다. 포커스를 받는 요소나 전역 속성이 있는 요소라면, 브라우저는 presentation을 무시합니다.',
        pause: 'short',
      },
      {
        target: '[data-code-block]',
        text: '예제에서 배치용 표는 의미가 지워집니다. 버튼과 설명이 붙은 제목은 원래 역할로 노출돼요.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '이 결과는 명세가 기대하는 노출입니다. 실제 노출은 브라우저 도구로 확인해요.',
        pause: 'short',
      },
      {
        text: '실습에서는 여섯 코드를 원문 행과 대조해 분류합니다. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        text: '정리하면, presentation은 적용 조건을 원문과 대조해서 씁니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 붙여도 되는 역할과 속성은 ARIA in HTML의 요소 행에서 확인합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 허용된 선언도 동작과 보조기술 지원은 따로 확인합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 포커스를 받거나 전역 속성이 있으면 presentation은 무시됩니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, role은 요소 행이 허용하는 것만 붙입니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 숨기는 다섯 가지 방법이 무엇을 다르게 숨기는지 봅니다.',
        pause: 'section',
      },
    ],
  },
};
