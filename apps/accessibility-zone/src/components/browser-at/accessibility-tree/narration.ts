import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 03.1 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 표는 캡션으로 만든 영역(aria-label)으로 가리킨다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '화면에서 안 보이는 요소는, 접근성 트리에서도 빠질까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '숨기는 방법에 따라 다릅니다. 브라우저는 DOM만 보지 않고, 네이티브 의미와 계산된 스타일도 함께 봐요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 같은 요소를 DOM과 접근성 트리에서 나란히 보고 차이가 어디서 생겼는지 말할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 두 화면을 비교하는 절차를 익힙니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 네이티브 의미와 숨김, 스타일이 노출을 어떻게 바꾸는지 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, DOM과 접근성 트리가 일대일이 아닌 경우를 살펴봅니다.',
        pause: 'section',
      },
    ],
    'compare-dom-and-tree': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 같은 요소를 두 화면에서 어떻게 비교할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'Elements 패널의 DOM과 접근성 트리에서 같은 요소를 찾고, 한 번에 하나씩 바꿔 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol:nth-of-type(1)',
        text: '순서는 네 단계예요. 바꾸기 전에 예상을 적고, 하나만 바꾸고, 두 화면을 따로 관찰하고, 다르면 어느 층의 차이인지 해석합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol:nth-of-type(2)',
        text: 'Chrome에서는 Elements 패널에서 요소를 고른 뒤 Accessibility 탭을 엽니다. Show accessibility tree를 켜면 페이지 전체의 접근성 트리가 보여요.',
        pause: 'short',
      },
      {
        target: ':scope > ol:nth-of-type(3)',
        text: 'Firefox에서는 접근성 탭의 트리에서 노드를 고르면, 역할과 이름, 상태와 관계가 나옵니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '메뉴 이름과 위치는 버전마다 바뀌니, 다르면 공식 문서의 최신 안내를 따릅니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 예상하고, 하나만 바꾸고, 두 화면을 따로 봅니다.',
        pause: 'section',
      },
    ],
    'hiding-and-style': [
      {
        target: ':scope > h2',
        text: '자, 그럼 무엇이 노출을 바꾸는지 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '표는 노출을 바꾸는 세 가지 원인을 정리한 교육용 모델입니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '그림은 안 보이는 문단 가운데 트리에 남는 것과 빠지는 것이 있다는 뜻입니다.',
        pause: 'short',
      },
      {
        target: '[aria-label="노출을 바꾸는 세 가지 원인"] tbody tr:nth-child(1)',
        text: '네이티브 의미부터 봅니다. button은 버튼이라는 역할과 포커스, 키보드 동작을 기본으로 갖습니다. 클릭만 붙인 div에는 버튼 의미도 기본 키보드 동작도 없어요. 트리에 일반 노드로 남을지는 브라우저마다 다를 수 있습니다.',
        pause: 'short',
      },
      {
        target: '[aria-label="노출을 바꾸는 세 가지 원인"] tbody tr:nth-child(2)',
        text: 'hidden 속성과 display none, visibility hidden은 화면과 접근성 트리에서 함께 빠집니다.',
        pause: 'flow',
      },
      {
        target: '[aria-label="노출을 바꾸는 세 가지 원인"] tbody tr:nth-child(3)',
        text: '반면 opacity 0이나 시각적으로만 숨기는 클래스는, 화면에서는 안 보여도 접근성 트리에는 남습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '눈으로 안 보인다는 결과는 같아도, 접근성 트리에서는 다릅니다. 그래서 숨김을 확인할 때는 화면이 아니라 트리를 봅니다.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '실습에서는 숨기는 방법을 하나씩 고르고, 문단의 실제 속성과 계산된 스타일을 봅니다. 그리고 개발자 도구의 접근성 트리에서 같은 문단을 찾아 비교해요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        text: '정리하면, 안 보이는 것과 접근성 트리에서 빠지는 것은 따로 확인합니다.',
        pause: 'section',
      },
    ],
    'not-one-to-one': [
      {
        target: ':scope > h2',
        text: '그럼 DOM 노드 하나마다 접근성 노드가 하나씩 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '그렇지 않습니다. 노드가 빠지기도 하고, DOM에 없는 노드가 생기기도 하고, 여러 노드가 합쳐지기도 해요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표의 네 경우 가운데 둘을 짚어 볼게요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: 'CSS의 before가 만든 글자는 DOM 노드가 없어도, 글자 노드로 나타나 이름에 들어갈 수 있습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: 'label과 input은 두 요소지만, label의 글자가 입력 칸의 이름이 되어 하나의 객체로 전달돼요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '그러니까 한 줄씩 짝짓지 않습니다. 정리되는 방식은 브라우저마다 다를 수 있어요.',
        pause: 'short',
      },
      {
        text: '정리하면, DOM 노드와 접근성 노드는 일대일이 아닙니다.',
        pause: 'section',
      },
    ],
    'hidden-and-name': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 접근성 트리에 없는 글자가 이름에 쓰일 수 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '쓰일 수 있습니다. 숨긴 요소는 트리에서 빠지지만, 다른 요소가 직접 가리키면 이름 계산에 참조될 수 있어요.',
        pause: 'short',
      },
      {
        target: '[data-code-block]',
        text: '코드를 보면, 배송지 검색이라는 span은 hidden이라 트리에 없습니다. 그런데 버튼이 aria-labelledby로 그 span을 가리켜요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그러니까 트리에 노출되는가와 이름 계산에서 참조되는가는, 서로 다른 규칙이 정합니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '어떤 경우에 숨긴 글자가 이름에 들어가는지는 6장에서 다룹니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 한쪽 결과로 다른 쪽을 단정하지 않습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 접근성 트리는 DOM과 함께 네이티브 의미와 계산된 스타일로 만들어지니, 두 화면을 나란히 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 안 보이는 것과 접근성 트리에서 빠지는 것은 숨기는 방법마다 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, DOM과 트리는 일대일이 아니고, 트리 노출과 이름 참조도 다른 규칙이 정합니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 화면에서 안 보이는 요소는, 접근성 트리에서도 빠질까요?',
        pause: 'think',
      },
      {
        text: '숨기는 방법에 따라 다릅니다. display none은 빠지고, opacity 0은 남아요.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '입력 칸에 보이는 글자는 모두 그 칸의 이름일까요?',
        pause: 'section',
      },
    ],
  },
};
