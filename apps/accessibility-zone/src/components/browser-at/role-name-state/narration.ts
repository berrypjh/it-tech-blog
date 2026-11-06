import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 03.2 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 표는 캡션으로 만든 영역(aria-label)으로 가리킨다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '입력 칸에 보이는 글자는 모두 그 칸의 이름일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 보이는 글자의 일부는 이름이고, 일부는 값입니다. 접근성 객체는 그 정보를 나눠 담아요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 버튼과 체크박스, 입력 칸에서 다섯 가지 정보를 나눠 읽을 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 역할과 이름, 상태와 값, 관계가 각각 무엇인지 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 보이는 글자와 이름, 값과 체크 상태를 구분하고, 컨트롤마다 주는 정보가 다르다는 걸 확인해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, DOM에서 읽을 값과 브라우저 도구에서 확인할 값을 나눕니다.',
        pause: 'section',
      },
    ],
    'five-parts': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 접근성 객체에는 어떤 정보가 담길까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '이 장에서는 다섯 가지로 나눠 읽습니다. 모든 객체가 다섯 가지를 다 갖지는 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '그림처럼 버튼과 체크박스, 입력 칸은 채우는 칸이 서로 달라요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '역할은 이것이 무엇인지,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '이름은 무엇이라고 부르는지,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '상태는 지금 체크됐는지, 펼쳐졌는지 같은 것을 묻습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '값은 사용자가 넣거나 고른 것이고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: '관계는 입력 칸을 이름 짓는 레이블처럼, 다른 객체와 이어지는 방식입니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 역할 · 이름 · 상태 · 값 · 관계를 따로 읽습니다.',
        pause: 'section',
      },
    ],
    'three-controls': [
      {
        target: ':scope > h2',
        text: '자, 그럼 세 컨트롤에서 직접 읽어 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '먼저 예상합니다. 표는 브라우저가 계산한 값이 아니라, 이 페이지가 적어 둔 예상이에요.',
        pause: 'short',
      },
      {
        target: '[aria-label="세 컨트롤에서 예상하는 다섯 가지"] tbody tr:nth-child(1)',
        text: '장바구니에 담기 버튼은 역할과 이름만 있고,',
        pause: 'flow',
      },
      {
        target: '[aria-label="세 컨트롤에서 예상하는 다섯 가지"] tbody tr:nth-child(2)',
        text: '선물 포장 체크박스에는 체크 상태가 더해지고,',
        pause: 'flow',
      },
      {
        target: '[aria-label="세 컨트롤에서 예상하는 다섯 가지"] tbody tr:nth-child(3)',
        text: '받는 분 이름 입력 칸에는 적은 글자가 값으로 더해집니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '그다음 조작하고 관찰합니다. 실습 패널은 실제 DOM에서 읽은 값만 보여 줘요. 역할과 이름은 브라우저가 계산하므로, 개발자 도구의 접근성 탭에서 확인합니다.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '받는 분 이름을 입력하고 선물 포장을 켰다 꺼 본 뒤, 개발자 도구에서 같은 세 컨트롤을 찾아 비교해 보세요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: 'aside',
        text: '예상과 다른 칸이 있으면, 다섯 가지 중 무엇인지 먼저 적고 원인을 찾습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 예상하고, 조작하고, DOM과 도구를 따로 관찰합니다.',
        pause: 'section',
      },
    ],
    'controls-differ': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 화면에 보이는 글자가 곧 이름일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '그렇지 않습니다. 입력 칸에서는 보이는 글자의 일부가 이름이고, 일부는 값이에요.',
        pause: 'short',
      },
      {
        target: '[data-code-block]',
        text: '수량 코드를 보면, 레이블 글자 수량은 이름이 되고, 칸 안의 2는 값이 됩니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 헷갈리기 쉬운 다섯 가지를 정리했습니다. 접근성 이름만 실습 패널에서 읽지 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '컨트롤마다 주는 정보도 다릅니다. 버튼에는 값이 없고, 체크박스는 상태를, 입력 칸은 값과 관계를 더 줘요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '실습 패널의 값은 접근성 검사값이 아닙니다. 일반 페이지의 스크립트는 접근성 트리 전체를 읽을 수 없어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 보이는 글자와 이름, 값은 서로 다른 정보입니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 접근성 객체는 역할 · 이름 · 상태 · 값 · 관계로 나눠 읽습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 보이는 글자와 이름, 값과 체크 상태, 레이블 관계는 서로 다른 정보입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, DOM에서 읽을 수 있는 값과, 브라우저 도구에서 확인할 역할과 이름을 나눕니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 입력 칸에 보이는 글자는 모두 그 칸의 이름일까요?',
        pause: 'think',
      },
      {
        text: '아닙니다. 레이블 글자는 이름이고, 칸에 적은 글자는 값이에요.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '브라우저가 만든 접근성 정보는, 어떤 길을 거쳐 화면 낭독기에 닿을까요?',
        pause: 'section',
      },
    ],
  },
};
