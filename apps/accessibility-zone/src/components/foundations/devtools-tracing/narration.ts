import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 02.7 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 메뉴 경로 · 코드 · 콘솔 식처럼 읽기 어려운 기호는 내용으로 푼다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '버튼을 눌렀더니 주문이 됐다면, 그 원인은 어떻게 찾아야 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '추측이 아니라 관찰이 필요합니다. 이 페이지는 앞의 여섯 페이지에서 배운 것을 묶어, 준비된 결함을 재현, 가설, 확인, 수정, 재검증 순서로 고칩니다.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 결함을 고치면서도 HTML이 기본으로 주던 기능을 지킬 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 개발자 도구에서 무엇을 보고, 그 결과가 어디까지 증명하는지 나눕니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, 준비된 결함을 최소 재현부터 키보드 재검증까지 순서대로 고쳐 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 화면 낭독기로 직접 들어 봐야 할 지점을 정리합니다.',
        pause: 'section',
      },
    ],
    'devtools-panels': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 개발자 도구에서는 무엇을 볼 수 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '개발자 도구는 브라우저에 지금 있는 DOM과, 그 계산 결과를 보여 줍니다. 앞 페이지들에서 본 것을 개발자 도구의 어디서 찾는지 정리해 볼게요.',
        pause: 'short',
      },
      {
        text: 'Chrome에서 역할과 이름을 단계별로 확인하는 그림 안내도 있습니다. 1장의 첫 번째 페이지인 누구의 어떤 활동인가의, 프론트엔드에게 중요한 이유 부분이에요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 보고 싶은 것과 찾는 곳을, 브라우저별로 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'DOM과 속성은 Chrome과 Edge의 Elements 패널에서 봅니다. Firefox에서는 Inspector 패널이에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '역할, 이름, 상태는 Chrome과 Edge에서 Elements 패널의 Accessibility 탭에 있습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '나머지 세 행은 붙은 리스너, 속성이 바뀌는 순간 멈추기, 지금 포커스입니다. 찾는 곳은 표에 브라우저별로 적어 두었어요.',
        pause: 'long',
      },
      {
        target: '[data-code-block]',
        text: '콘솔에서 자주 쓰는 확인을 모은 코드가 있습니다. 지금 포커스가 있는 요소, Elements 패널에서 고른 요소, 그 요소에 붙은 리스너 목록을 확인해요.',
        pause: 'short',
      },
      {
        text: '눈여겨볼 점은 button의 type입니다. type 프로퍼티는 속성을 적지 않아도 값이 나오지만, type 속성을 읽으면 적지 않았을 때 null이 나와요. 리스너 목록을 보는 함수는 Firefox 콘솔에는 없습니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '주의할 점이 있습니다. 패널 이름과 메뉴 위치는 버전마다 바뀝니다. 표는 찾을 곳의 힌트이고, 화면이 다르면 각 브라우저의 개발자 도구 문서를 확인합니다.',
        pause: 'short',
      },
      {
        text: 'Safari는 Safari 설정의 고급에서, 웹 개발자용 기능 보기를 켜야 개발자 도구가 나타나요.',
        pause: 'short',
      },
      {
        text: '정리하면, 개발자 도구로 DOM과 속성, 계산된 역할과 이름과 상태, 붙은 리스너, 속성이 바뀌는 순간, 지금 포커스를 봅니다.',
        pause: 'section',
      },
    ],
    'three-levels': [
      {
        target: ':scope > h2',
        text: '자, 그럼 확인한 결과가 어디까지를 증명하는지 나눠 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '이 장의 데모 패널은, 페이지의 스크립트가 DOM을 읽어 보여 줍니다. 이것을 사이트 안 관찰이라고 합니다.',
        pause: 'short',
      },
      {
        text: '그럼 사이트 안 관찰로 본 값은, 개발자 도구나 실제 보조기술로 본 것과 같을까요?',
        pause: 'think',
      },
      {
        text: '증명하는 범위가 다릅니다. 그래서 결과를 보고할 때는, 어느 수준에서 확인했는지 함께 적어요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 확인 수준별로, 증명하는 것과 증명하지 못하는 것을 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '사이트 안 관찰은 이 브라우저의 실제 DOM 값과, 실제로 일어난 이벤트와 포커스 이동을 증명합니다. 브라우저가 계산한 접근성 트리 전체나, 보조기술이 읽는 방식은 증명하지 못해요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '개발자 도구는 브라우저가 계산한 역할, 이름, 상태와 리스너, 속성 변화의 순간을 증명합니다. 보조기술이 실제로 무엇을 어떤 순서로 읽는지는 증명하지 못하고요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '실제 보조기술은 그 보조기술과 브라우저, 운영체제 조합에서의 실제 결과를 증명합니다. 다른 조합에서의 결과는 증명하지 못합니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '예를 들어, aria-expanded가 true로 바뀌었다는 건 사이트 안 관찰이나 개발자 도구로 확인할 수 있습니다. 하지만 화면 낭독기가 펼침이라고 읽었다는 건, 실제로 들어 봐야 말할 수 있어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 세 수준은 증명하는 범위가 다르므로, 결과에 확인 수준을 함께 적습니다.',
        pause: 'section',
      },
    ],
    'trace-practice': [
      {
        target: ':scope > h2',
        text: '자, 결함 두 개를 순서대로 고쳐 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '세 수준을 결함 하나하나에 써 봅니다. 장바구니 폼에 결함 두 개를 넣어 두었어요. 증상만 보고 바로 고치지 않고, 폼을 직접 눌러 재현한 뒤 두 결함을 고치는 순서 표를 한 칸씩 따라갑니다.',
        pause: 'short',
      },
      {
        text: '폼에 딸린 관찰 패널은 실제 포커스와 click, submit 이벤트를 보여 주고, 개발자 도구로는 같은 요소의 속성과 리스너를 확인해요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '결함 버전에서 1개 추가를 누르고, Tab으로 배송 안내까지 가 보세요. 원인을 찾았으면 수정 버전에서 같은 과업을 키보드로 다시 해 봅니다.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: 'table',
        text: '표는 두 결함을 고치는 순서를 단계별로 정리했습니다. 결함 1은 1개 추가 버튼, 결함 2는 배송 안내예요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '먼저 최소 재현. 수량을 바꾸지 않고 1개 추가만 눌렀는데, 주문 접수 메시지가 나옵니다. 그리고 수량 칸에서 Tab을 두 번 누르면, 포커스가 1개 추가 다음 배송 안내를 건너뛰고 주문하기로 가요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '1개 추가만 눌렀는데, 왜 주문이 접수될까요?',
        pause: 'think',
      },
      {
        text: '원인 가설은 이렇습니다. 폼 안의 button에 type이 없어서, submit으로 동작합니다. 배송 안내는 a에 href가 없어서, 링크가 아니고 포커스 대상도 아닙니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '다음은 확인. 관찰 패널과 콘솔, Elements 패널로 가설이 맞는지 봅니다. 결함 1은 type 속성이 null이고, 결함 2는 역할이 링크가 아니에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '수정은 간단합니다. 결함 1은 type 속성에 button을 주고, submit 처리를 막는 리스너는 더하지 않습니다. 결함 2는 이동이니 href를 주고, 키 처리를 직접 더하지 않아요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: '마지막은 키보드 재검증. 같은 과업을 Enter, Space, Tab으로 다시 해 봅니다. 1개 추가는 수량만 바꾸는지, 배송 안내는 새 탭 열기까지 되는지 확인해요.',
        pause: 'long',
      },
      {
        target: 'aside',
        text: '결함 버전에서는 수량 칸의 Enter로도 주문이 접수됩니다. 수량 칸에 있을 때 Enter도 눌러 보세요. 폼의 첫 번째 submit 버튼이 1개 추가라서, 브라우저가 그 버튼을 눌러 수량이 늘고 주문도 접수됩니다. 관찰 패널의 제출한 버튼으로 확인할 수 있어요.',
        pause: 'long',
      },
      {
        target: ':scope > h3',
        text: '그럼 수정한 마크업을 비교해 볼게요.',
        pause: 'short',
      },
      {
        target: '[data-code-compare] > :nth-child(1)',
        text: '고치기 전 코드는, 1개 추가 버튼에 type 속성이 없고, 배송 안내는 href 없이 onclick만 있습니다.',
        pause: 'short',
      },
      {
        target: '[data-code-compare] > :nth-child(2)',
        text: '고친 후 코드는, 1개 추가 버튼에 type 속성으로 button을 더했고, 배송 안내는 onclick 대신 href를 주었습니다. 수정은 HTML 한 줄씩이에요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그럼 원인 대신 증상을 막으면 어떻게 될까요?',
        pause: 'think',
      },
      {
        text: '결함 1을 submit 이벤트를 막는 식으로 고치면, 수량 칸에서 Enter로 주문하는 기본 동작까지 사라집니다. 이 기본 동작을 암시적 제출이라고 합니다.',
        pause: 'short',
      },
      {
        text: '결함 2를 tabindex와 keydown을 더하는 식으로 고치면, 새 탭 열기와 주소 복사는 여전히 없죠.',
        pause: 'short',
      },
      {
        text: '정리하면, 원인이 있는 곳을 고치면 기본 기능이 그대로 남습니다.',
        pause: 'section',
      },
    ],
    'screen-reader-check': [
      {
        target: ':scope > h2',
        text: '자, 이번에는 화면 낭독기로 따로 확인할 것들입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'DOM과 개발자 도구만으로는, 어떤 것을 결론 낼 수 없을까요?',
        pause: 'think',
      },
      {
        text: '이 장에서 확인한 것 가운데, 화면 낭독기가 어떻게 읽는지에 달린 항목들입니다. 이런 항목은 직접 들어 보고, 사용한 조합을 함께 기록해요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 이 장의 페이지마다 화면 낭독기로 따로 확인할 지점을 질문으로 모았습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '첫 행은 펼침 버튼의 aria-expanded가 바뀔 때 펼침과 접힘으로 읽히는지 묻습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '다음 세 행은 언어 바뀜과 제목 목록, role만 붙인 div와 목록, legend와 검사 메시지가 실제로 어떻게 읽히는지 묻습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: '내용을 읽는 순서가 DOM 순서와 같은지도, 직접 들어 봐야 알 수 있어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(7)',
        text: '이 페이지에서는 주문 접수 메시지와 고친 배송 안내가 어떻게 읽히는지 확인합니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '기록에는 보조기술, 브라우저, 운영체제와 각 버전을 적습니다.',
        pause: 'short',
      },
      {
        text: '흔히 쓰는 조합은 NVDA와 Chrome이나 Firefox, 그리고 JAWS와 Chrome입니다. macOS와 iOS에서는 VoiceOver와 Safari, Android에서는 TalkBack과 Chrome이에요. 한 조합의 결과를 다른 조합으로 일반화하지 않습니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '이 사이트는 화면 낭독기가 읽는 방식을 측정하지 않았습니다. 이 장의 데모 패널이 보여 주는 값은 실제 DOM과 이벤트에서 읽은 것이에요. 화면 낭독기가 어떻게 읽는지는 직접 확인할 항목으로 남깁니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 화면 낭독기가 읽는 방식은 직접 들어 보고, 사용한 조합과 함께 기록합니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 개발자 도구로 DOM과 속성, 접근성 정보, 리스너, 지금 포커스를 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 세 확인 수준은 증명하는 범위가 다르니, 결과에 확인 수준을 적습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 결함은 최소 재현부터 재검증까지 순서대로, 원인이 있는 곳에서 고칩니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 버튼을 눌렀더니 주문이 됐다면, 그 원인은 어떻게 찾아야 할까요?',
        pause: 'think',
      },
      {
        text: '추측이 아니라 관찰로 찾습니다. 재현, 가설, 확인, 수정, 재검증 순서로 따라가면, 1개 추가 버튼에 type이 없다는 원인이 드러납니다.',
        pause: 'long',
      },
      { text: '이 페이지는 여기까지예요. 이렇게 2장이 끝났습니다.', pause: 'short' },
      {
        text: '다음 페이지부터는 3장, 브라우저와 보조기술이에요. 3장은 이 질문으로 시작합니다.',
        pause: 'short',
      },
      {
        text: '화면에서 안 보이는 요소는, 접근성 트리에서도 빠질까요?',
        pause: 'section',
      },
    ],
  },
};
