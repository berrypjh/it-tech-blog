import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 03.3 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 표는 캡션으로 만든 영역(aria-label)으로 가리킨다.
 * 날짜 · 판본 이름 같은 세부는 화면에 두고, 대본은 무엇을 확인하는지만 말한다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '브라우저가 만든 접근성 정보는, 어떤 길을 거쳐 화면 낭독기에 닿을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '운영체제의 접근성 API를 거칩니다. 그 길에서 HTML 요소를 어떤 정보로 바꿀지 정하는 문서가 HTML-AAM이고, 그 바탕이 Core-AAM이에요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 네 단계의 흐름을 따라가며 각 단계를 어디서 확인할지 말할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, HTML 의미에서 보조기술 해석까지 네 단계를 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 두 문서가 누구를 위한 것이고 지금 어떤 단계인지 확인해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 명세의 매핑이 약속하지 않는 것을 정리합니다.',
        pause: 'section',
      },
    ],
    'four-steps': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 작성자가 쓴 HTML은 몇 단계를 거쳐 보조기술에 닿을까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: '네 단계입니다. 작성자가 HTML 의미를 쓰고, 브라우저가 접근성 객체로 만들고, 운영체제의 API로 내보내면, 보조기술이 해석해요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '단계마다 책임지는 쪽이 다릅니다. 그래서 같은 HTML도 브라우저와 운영체제, 보조기술 조합에 따라 결과가 달라질 수 있어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 네 단계는 책임지는 쪽이 서로 다릅니다.',
        pause: 'section',
      },
    ],
    'html-aam-and-core-aam': [
      {
        target: ':scope > h2',
        text: '그럼 HTML-AAM과 Core-AAM은 누구를 위한 문서일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '둘 다 접근성 API 매핑 문서입니다. 웹 콘텐츠의 의미를 운영체제 API의 어떤 정보로 내보낼지 정해요.',
        pause: 'short',
      },
      {
        target: '[aria-label="두 문서가 다루는 대상과 주된 독자"] tbody tr:nth-child(1)',
        text: 'HTML-AAM은 HTML 요소와 속성의 매핑을 다루고,',
        pause: 'flow',
      },
      {
        target: '[aria-label="두 문서가 다루는 대상과 주된 독자"] tbody tr:nth-child(2)',
        text: 'Core-AAM은 ARIA의 역할과 상태, 속성의 매핑을 다룹니다. 주된 독자는 둘 다 브라우저 구현자예요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '운영체제마다 접근성 API가 다릅니다. 그래서 같은 역할도 플랫폼마다 다른 이름과 구조로 나가요.',
        pause: 'short',
      },
      {
        target: '[aria-label="이 장이 근거로 쓰는 명세의 상태"]',
        text: '표는 이 장이 근거로 쓰는 명세의 발행 상태와 날짜입니다. 두 AAM 문서는 아직 초안 단계예요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '초안은 바뀔 수 있으니, 매핑을 인용할 때는 판본과 날짜를 함께 적습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 두 문서는 브라우저 구현자를 위한 매핑이고, 인용할 때 판본을 적습니다.',
        pause: 'section',
      },
    ],
    'trace-one-checkbox': [
      {
        target: ':scope > h2',
        text: '자, 체크박스 하나를 네 단계로 따라가 볼게요.',
        pause: 'short',
      },
      {
        target: '[data-code-block]',
        text: '코드는 label이 감싼 선물 포장 체크박스이고, checked가 있습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'HTML 의미는 Elements 패널이나 스크립트로 DOM에서 확인하고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '브라우저 정보는 개발자 도구의 접근성 탭에서 확인합니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '플랫폼 API로 실제로 나간 값은, 운영체제의 접근성 검사 도구로만 확인할 수 있어요. 이 사이트는 확인하지 않았습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '화면 낭독기가 무엇을 어떤 순서로 읽는지는, 실제로 들어 봐야 말할 수 있습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 단계마다 확인할 수 있는 곳이 다릅니다.',
        pause: 'section',
      },
    ],
    'what-specs-do-not-promise': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 명세에 매핑이 적혀 있으면, 모든 브라우저가 그대로 동작할까요?',
        pause: 'think',
      },
      {
        target: ':scope > ul',
        text: '그렇지 않습니다. 명세는 구현을 약속하지 않고, 초안의 매핑은 바뀔 수 있고, 해석은 보조기술이 맡아요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '그래서 이 페이지에는 플랫폼별 결과 표가 없습니다. 실제 구현을 확인한 뒤에만 채울 수 있기 때문이에요.',
        pause: 'short',
      },
      {
        text: '정리하면, 명세의 매핑과 실제 결과는 따로 확인합니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, HTML 의미에서 보조기술 해석까지 네 단계는 책임지는 쪽이 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, HTML-AAM과 Core-AAM은 브라우저 구현자를 위한 매핑이고, 판본과 날짜를 함께 인용합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 플랫폼별 결과는 직접 확인한 뒤에만 기록합니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 브라우저가 만든 접근성 정보는, 어떤 길을 거쳐 화면 낭독기에 닿을까요?',
        pause: 'think',
      },
      {
        text: '운영체제의 접근성 API를 거치고, 마지막 해석은 화면 낭독기가 맡습니다.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '화면 낭독기가 지금 읽는 곳과 키보드 포커스는 같은 곳일까요?',
        pause: 'section',
      },
    ],
  },
};
