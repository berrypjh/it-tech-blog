import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 02.5 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 성공 기준 번호 · 키 조합 · 음수 같은 읽기 어려운 기호는 이름이나 말로 푼다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'CSS로 버튼을 화면 맨 앞에 옮기면, Tab을 눌렀을 때도 그 버튼이 먼저일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'CSS는 요소를 화면 어디에든 놓을 수 있습니다. 하지만 Tab 키와 화면 낭독기는 대개 DOM에 적힌 순서를 따릅니다.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 두 순서가 어긋나는 곳을 실제 Tab 이동으로 찾고 어떤 순서로 맞출지 정할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 한 화면에 있는 세 가지 순서를 각각 무엇이 정하는지 나눠 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, CSS로 배치를 바꾸면 화면만 달라진다는 걸 확인해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 좁은 화면과 확대에서도 과업 순서가 맞는지 봅니다.',
        pause: 'section',
      },
    ],
    'three-orders': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 한 화면에는 순서가 몇 가지 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '세 가지입니다. 대부분은 셋이 같아서 의식하지 않지만, CSS로 배치를 바꾸면 서로 달라질 수 있어요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 세 가지 순서와, 그것을 정하는 것을 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'DOM 순서는 HTML에 적힌 순서이고, 스크립트가 바꿨다면 바뀐 뒤의 DOM입니다. 브라우저와 보조기술의 기준이 되고요,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '화면 순서는 flex, grid, position 같은 CSS 배치가 정하고, 화면을 보는 사용자가 따릅니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '포커스 순서는 DOM 순서를 따릅니다. 단, tabindex가 양수인 요소가 먼저예요. Tab이나 Shift와 Tab으로 이동하는 사용자가 이 순서를 따릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그럼 화면 낭독기가 내용을 읽는 순서는 어떨까요?',
        pause: 'think',
      },
      {
        text: '대개 DOM 순서를 따릅니다. 다만 브라우저가 만든 접근성 트리를 보조기술이 어떻게 훑는지는 제품마다 달라요. 그래서 항상 DOM 순서와 같다고 단정하지 않고, 실제 환경에서 확인합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: 'WCAG는 두 가지를 요구합니다. 의미 있는 순서 기준은, 순서가 뜻을 바꾸면 그 순서를 기계가 읽을 수 있어야 한다고 합니다. 포커스 순서 기준은, 포커스가 뜻과 조작이 유지되는 순서로 이동해야 한다고 하고요. 둘 다 A 수준이에요.',
        pause: 'short',
      },
      {
        text: '화면과 DOM 순서가 완전히 같아야 한다는 문장은 요구가 아닙니다. 하지만 어긋나면 이 두 요구를 어기기 쉽죠.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '양수 tabindex로 순서를 고치지 않습니다. tabindex를 양수로 주면, 그 요소들이 DOM 순서보다 먼저 포커스를 받습니다. 페이지 전체의 흐름이 깨지고 고치기도 어려워져요. 그래서 순서는 tabindex가 아니라 DOM 순서로 정합니다.',
        pause: 'short',
      },
      {
        text: 'tabindex 0은 DOM 순서대로 포커스를 받는다는 뜻입니다. 마이너스 1은 Tab으로는 닿지 않지만, 스크립트로 포커스할 수 있다는 뜻이에요.',
        pause: 'long',
      },
      {
        text: '정리하면, 포커스 순서는 DOM 순서를 따르고, 화면 순서만 CSS가 따로 정합니다.',
        pause: 'section',
      },
    ],
    'css-reorder': [
      {
        target: ':scope > h2',
        text: '자, 그럼 CSS로 순서를 바꾸면 어떻게 되는지 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '이번에 볼 CSS는 모두, 화면에서의 위치만 바꿉니다. DOM은 그대로이므로 Tab 순서도 그대로입니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 화면 순서만 바꾸는 CSS 네 가지를 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'order는 항목을 앞뒤로 옮기고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'flex-direction의 row-reverse는 항목을 거꾸로 놓고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: 'grid-area와 grid-row는 칸 위치를 자유롭게 정하고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: 'position의 absolute는 요소를 다른 곳에 띄워 놓습니다.',
        pause: 'short',
      },
      { target: 'table', text: '네 가지 모두, DOM과 Tab 순서는 그대로예요.', pause: 'short' },
      {
        target: '[data-code-block]',
        text: '가상의 결제 영역 코드를 보면, 쿠폰 코드 칸과 쿠폰 적용, 결제하기 버튼이 DOM에 차례로 적혀 있습니다. 그리고 CSS order로 결제하기 버튼만 화면 맨 앞으로 옮겼어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그럼 화면을 보며 Tab을 누르는 사용자는 무엇을 겪을까요?',
        pause: 'think',
      },
      {
        text: '사용자는 결제하기에서 시작할 거라 예상합니다. 하지만 포커스는 쿠폰 칸, 쿠폰 적용, 결제하기 순서로 움직여요. 마지막에 화면 맨 앞의 결제하기로 되돌아가는 거죠.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '그림은 화면 일부를 확대해 본 모습입니다. 포커스는 확대한 영역 밖의 먼 버튼으로 옮겨 가 있어요.',
        pause: 'short',
      },
      {
        text: '화면 확대 사용자는 화면 일부만 봅니다. 그래서 포커스가 확대한 영역 밖으로 튀면 위치를 놓치기 쉽습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '그럼 이 결제 영역을 직접 Tab으로 지나가 볼게요.',
        pause: 'short',
      },
      {
        text: '결제 영역 데모는 같은 세 요소를 세 가지 배치로 바꿔 가며 보여 줍니다. 화면 순서는 렌더링된 요소의 위치로 계산하고, 포커스 이동 기록은 실제 포커스 이벤트로 남겨요. 클릭으로 옮긴 포커스도 기록됩니다.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '배치를 고른 뒤 결제 영역을 Tab으로 지나가며 기록을 확인해 보세요. 키보드가 없어도 DOM 순서와 화면 순서는 비교할 수 있어요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > p:nth-of-type(4)',
        text: 'CSS order 배치에서는 결제하기가 화면 맨 앞에 있지만, 포커스 기록에서는 맨 끝에 나옵니다.',
        pause: 'short',
      },
      {
        text: 'DOM 순서 자체를 결제 먼저로 바꾸면, 두 순서는 다시 같아집니다. 그런데 쿠폰을 넣기 전에 결제 버튼부터 지나가게 돼요.',
        pause: 'short',
      },
      { text: '그럼 이 과업에 맞는 배치는 어느 것일까요?', pause: 'think' },
      {
        text: '첫 번째 배치, DOM 그대로의 배치입니다. 순서를 일치시키는 것과, 과업에 맞는 순서를 고르는 것은 따로 판단해야 해요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(5)',
        text: '최근 CSS에는 flex와 grid의 화면 순서대로 포커스를 이동하게 하는 reading-flow 속성이 추가되고 있습니다. 아직 지원하는 브라우저가 일부라서, 이 속성에 기대지 말고 DOM 순서를 먼저 맞춰요.',
        pause: 'short',
      },
      {
        text: '정리하면, CSS로 바꾼 순서는 화면에만 보이고, Tab 순서는 DOM 순서를 그대로 따릅니다. 두 순서가 같은지와 그 순서가 과업에 맞는지는 따로 확인합니다.',
        pause: 'section',
      },
    ],
    'narrow-and-zoom': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 넓은 화면에서 순서가 맞으면, 좁은 화면에서도 맞을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '꼭 그렇지는 않습니다. 반응형 레이아웃은 화면 폭에 따라 배치를 바꾸거든요. 좁은 화면에서 사이드바를 본문 위로 올리거나 카드 순서를 바꾸면, 그 폭에서만 순서가 어긋날 수 있어요.',
        pause: 'short',
      },
      {
        text: '브라우저를 확대해도 같은 일이 생깁니다. 확대하면 CSS 픽셀 폭이 줄어, 좁은 화면 배치가 적용되기 때문입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '좁은 화면과 확대에서 점검하는 순서는 네 단계입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '먼저 넓은 화면에서 과업을 처음부터 끝까지 Tab으로 진행하며, 포커스가 화면을 읽는 순서대로 움직이는지 보고,',
        pause: 'flow',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '브라우저를 400%로 확대하거나 창 폭을 320 CSS 픽셀 정도로 줄이고, 같은 과업을 다시 진행합니다. 이 폭은 WCAG의 리플로우 기준이 삼는 폭이에요.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '배치가 바뀐 지점마다, 포커스가 갑자기 위아래로 튀거나 보이지 않는 곳으로 가는지 기록하고,',
        pause: 'flow',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '어긋나면 CSS 순서 속성을 지우고, 모든 폭에서 자연스러운 순서로 DOM을 다시 씁니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '결제 영역 데모도 좁은 화면에서 같은 불일치가 생깁니다. 좁은 화면에서는 세 요소가 세로로 쌓여요. 창 폭을 줄인 뒤 다시 Tab으로 지나가 보면, CSS order 배치에서는 위아래 방향으로 불일치가 보입니다.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 창 폭을 줄여 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        text: '정리하면, 좁은 화면과 확대에서도 과업을 Tab으로 끝까지 진행해 순서를 확인합니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 포커스는 화면이 아니라 DOM 순서를 따르니, 순서는 양수 tabindex 말고 DOM으로 정합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 순서 일치와 과업에 맞는 순서는 따로 판단합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 좁은 화면과 400% 확대에서도 과업을 Tab으로 끝까지 확인합니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. CSS로 버튼을 화면 맨 앞에 옮기면, Tab을 눌렀을 때도 그 버튼이 먼저일까요?',
        pause: 'think',
      },
      {
        text: '아닙니다. 화면에서는 맨 앞이어도, 포커스는 DOM에 적힌 순서를 따릅니다.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '버튼 하나를 누르면, 브라우저 안에서는 어떤 일이 일어날까요?',
        pause: 'section',
      },
    ],
  },
};
