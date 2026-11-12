import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 05.4 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '숨긴다는 말은 늘 같은 뜻일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 화면에서 숨기는 방법, 보조기술에게서 숨기는 방법, 조작에서 숨기는 방법이 따로 있어요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 다섯 방법을 세 축으로 나눠 말할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 화면 표시와 포커스, 접근성 노출의 세 축으로 비교합니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, aria-hidden 아래에 포커스 가능한 요소를 두는 오류를 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 관찰한 것과 명세상 예상을 나눠 적습니다.',
        pause: 'section',
      },
    ],
    'three-axes': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 다섯 방법은 무엇을 다르게 숨길까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'DOM과 접근성 트리 페이지에서는 화면과 트리를 비교했습니다. 여기서는 포커스와 클릭이 닿는지도 봐요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: 'hidden과 display none, visibility hidden은 세 축에서 모두 숨깁니다. visibility hidden만 자리를 남겨요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '반면 aria-hidden은 화면과 포커스를 그대로 두고, 접근성 노출만 뺍니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: 'inert는 포커스와 클릭, 노출을 함께 막지만 화면은 그대로 둡니다.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '그래서 HTML은 화면에서도 가려진 콘텐츠에만 inert를 쓰라고 합니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '숨긴 요소를 이름에 참조하는 경우는 6장에서 다룹니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 숨기는 방법마다 숨기는 대상이 다릅니다.',
        pause: 'section',
      },
    ],
    'aria-hidden-and-focus': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. aria-hidden 아래의 링크는 어떻게 될까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'Tab으로는 닿는데, 보조기술에는 이름도 역할도 전해지지 않을 수 있습니다.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '원문은 요소나 그 조상에 aria-hidden이 있으면 숨겨진 것으로 봅니다. 그리고 보이는 내용을 숨기면 같은 의미와 기능을 보조기술에도 줘야 한다고 해요.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '모두에게 필요하면 장식만 숨기고, 모두에게서 숨기려면 hidden이나 inert를 씁니다.',
        pause: 'short',
      },
      {
        text: '정리하면, aria-hidden은 포커스를 막지 않습니다.',
        pause: 'section',
      },
    ],
    'hiding-practice': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 직접 바꿔 보면 무엇을 어디서 확인할까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '속성과 화면 표시, 포커스는 실습 화면에서 관찰합니다. 접근성 트리는 브라우저 도구에서 보고, 예상은 따로 적어요.',
        pause: 'short',
      },
      {
        text: '실습에서 방법을 하나씩 고르고 Tab과 클릭으로 버튼에 닿는지 봅니다. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        text: '정리하면, 관찰한 값과 명세상 예상을 다른 칸에 적습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 다섯 방법은 화면과 포커스, 노출을 서로 다르게 숨깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, aria-hidden 아래에 포커스 가능한 요소를 두지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 관찰한 값과 명세상 예상은 나눠 적습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 숨긴다는 말은 방법마다 뜻이 다릅니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 비활성과 읽기 전용, 필수 입력이 무엇을 바꾸는지 봅니다.',
        pause: 'section',
      },
    ],
  },
};
