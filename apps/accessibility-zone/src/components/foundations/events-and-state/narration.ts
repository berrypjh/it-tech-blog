import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 02.6 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 코드 표기(점 · 괄호 · 따옴표)는 읽지 않고 이름과 내용으로 푼다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '버튼 하나를 누르면, 브라우저 안에서는 어떤 일이 일어날까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '이벤트가 생기고, 그 이벤트는 여러 요소를 거쳐 전달되며, 브라우저는 기본 동작을 실행합니다.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 그 경로를 실제 기록으로 따라가고 화면과 보조기술이 같은 상태를 보게 만들 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 이벤트가 어떤 경로로 전달되는지 실제 기록으로 읽어 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 기본 동작을 언제 막아도 되는지, 입력 장치는 왜 단정하지 않는지 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 바뀐 상태를 화면과 보조기술이 똑같이 보게 만드는 법을 익힙니다.',
        pause: 'section',
      },
    ],
    'event-flow': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 닫히지 않는 메뉴 하나에서 시작할게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '메뉴를 연 사용자가 메뉴 바깥을 눌러 닫으려 합니다. 그런데 페이지의 한 카드가 click 이벤트를 멈추게 해 두었어요.',
        pause: 'short',
      },
      {
        text: '이벤트가 생기면 실행되도록 요소에 붙여 둔 함수를 리스너라고 합니다. 바깥을 누르면 닫는 리스너는 문서 전체에 붙어 있어요. 그래서 카드가 멈춘 이벤트를 받지 못합니다.',
        pause: 'short',
      },
      {
        text: '메뉴는 열린 채로 뒤 내용을 가리고, 화면 확대 사용자는 무엇이 가리고 있는지조차 보기 어렵습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '이런 결함을 추적하려면 먼저 답해야 할 질문이 있습니다. 이벤트는 어디서 생겨서, 어디로 갈까요?',
        pause: 'think',
      },
      {
        text: '이벤트는 사용자가 누른 가장 안쪽 요소에서 생기지만, 그 요소에서 끝나지 않습니다. 문서의 바깥에서 안으로 내려왔다가, 다시 바깥으로 올라가요.',
        pause: 'short',
      },
      {
        text: '내려오는 단계를 캡처, 다시 올라가는 단계를 버블링이라고 합니다. 그 경로에 있는 요소의 리스너가 차례로 실행돼요.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '이벤트 경로 그림이 이 흐름을 보여 줍니다. 경로가 지나는 요소마다, 그 요소의 리스너가 실행될 수 있어요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '이벤트 경로를 읽는 값은 세 가지입니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'target은 이벤트가 생긴 요소로, 경로 내내 같고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'currentTarget은 지금 실행 중인 리스너가 붙은 요소로, 단계마다 바뀝니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: 'stopPropagation은 이벤트를 이 뒤의 경로로 전달하지 않습니다. 앞에서 본 메뉴 결함의 원인이 바로 이거예요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '버블링 덕분에, 바깥 요소 하나에 리스너를 붙여 안쪽 여러 요소의 이벤트를 처리할 수 있습니다. 이걸 이벤트 위임이라고 해요. 이때는 target과 currentTarget이 서로 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block]',
        text: '이벤트 위임 코드를 보면, 삭제 버튼마다 리스너를 붙이지 않고 장바구니 목록 하나에만 붙였어요. 눌린 요소에서 가장 가까운 버튼을 찾아 그 항목을 지웁니다. target은 실제로 눌린 요소이고, currentTarget은 목록이죠.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '모든 이벤트가 버블링되지는 않습니다. focus와 blur는 버블링되지 않아요. 그래서 바깥에서 포커스 이동을 지켜보려면, 버블링되는 focusin과 focusout을 씁니다.',
        pause: 'short',
      },
      {
        text: '이 장의 다섯 번째 페이지인 DOM 순서와 배치의 포커스 기록도 이 방법으로 남깁니다. 이 장의 일곱 번째 페이지인 개발자 도구로 추적의 관찰 패널도 같아요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: 'React와 shadow DOM은 이벤트 경로를 조금 바꿉니다. React는 이벤트를 앱의 루트에서 받아 컴포넌트에 나눠 주고, shadow DOM에서는 경계를 넘으면 target이 바뀌어요. 처음에는 이벤트 경로 표만으로 충분합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 이벤트는 캡처로 내려갔다가 버블링으로 올라옵니다. 경로를 읽을 때는 target과 currentTarget을 구분합니다.',
        pause: 'section',
      },
    ],
    'default-actions': [
      {
        target: ':scope > h2',
        text: '자, 이번에는 기본 동작과 preventDefault입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '많은 이벤트에는 브라우저가 실행하는 동작이 있습니다. 이걸 기본 동작이라고 해요. 리스너에서 preventDefault를 부르면, 그 동작이 실행되지 않습니다.',
        pause: 'short',
      },
      { text: '그럼 기본 동작은 언제 막아도 될까요?', pause: 'think' },
      {
        text: '기본 동작에는 키보드와 보조기술 사용자가 기대는 기능이 많습니다. 그래서 그 기능을 직접 대신할 수 있을 때만 막습니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 네 이벤트의 기본 동작과, 막을 때의 판단을 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '링크의 click에서 기본 동작은 주소로 이동입니다. 프레임워크 링크가 href를 유지한 채 화면만 바꿀 때는 막아도 되지만, href 없이 막으면 새 탭 열기와 주소 복사가 사라져요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '폼의 submit과 keydown도 같은 원리입니다. 스크립트나 위젯이 그 일을 직접 맡을 때만 막아요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '체크박스의 click만은 다릅니다. 막아도 되는 경우가 거의 없고, 막으면 눌러도 상태가 바뀌지 않습니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '이벤트 경로와 기본 동작은 직접 눌러 보면 한눈에 보입니다. 점선 상자와 그 안의 폼에, 캡처와 버블링 양쪽으로 리스너를 붙였습니다. 기록은 이 브라우저에서 실제로 실행된 리스너의 순서예요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '점선 상자 안의 링크, 체크박스, 주문 버튼을 누르고 기록을 확인해 보세요. 두 옵션으로 링크와 체크박스의 기본 동작을 막아 볼 수도 있습니다.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '기록을 보면 네 가지가 드러납니다.',
        pause: 'short',
      },
      {
        target: ':scope > ul > li:nth-child(1)',
        text: '링크를 누르면, 바깥 상자 캡처, 폼 캡처, 폼 버블링, 바깥 상자 버블링 순서로 기록되고, target은 내내 링크입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ul > li:nth-child(2)',
        text: '선물 포장 글자를 누르면 click이 두 번 기록됩니다. 첫 번째는 라벨, 두 번째는 라벨의 기본 동작이 체크박스에 보낸 click이에요.',
        pause: 'short',
      },
      {
        target: ':scope > ul > li:nth-child(3)',
        text: '주문하기를 누르면 click 뒤에 submit이 이어집니다. submit 버튼 click의 기본 동작이 폼 제출이기 때문이에요. 키보드로 눌러도 순서는 같습니다.',
        pause: 'short',
      },
      {
        text: 'submit은 폼에서 생기므로, 폼의 리스너는 대상 단계로 기록되고요.',
        pause: 'short',
      },
      {
        target: ':scope > ul > li:nth-child(4)',
        text: '체크박스의 기본 동작을 막으면, click 이벤트는 그대로 기록되지만 checked는 바뀌지 않습니다. 사용자가 눌렀다는 사실과 상태가 바뀌었다는 사실은 별개예요.',
        pause: 'long',
      },
      {
        target: ':scope > h3',
        text: '그럼 click은 마우스로 누를 때만 생길까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '아닙니다. 버튼에서 Enter나 Space를 눌러도, 화면 낭독기가 요소를 실행해도, 음성 입력으로 눌러도 생깁니다.',
        pause: 'short',
      },
      {
        text: '이벤트의 detail 값이 0이거나 pointerType이 비어 있으면 키보드일 때가 많아요. 하지만 보조기술은 마우스 이벤트를 흉내 내기도 해서, 확실하지 않습니다.',
        pause: 'short',
      },
      {
        text: '그래서 실행은 click 하나로 처리하고, 장치에 따라 동작을 다르게 만들지 않습니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '장치를 추측해 동작을 나누면 추측이 틀린 사용자가 막힙니다. 마우스로 누르면 열고, 키보드로 누르면 무시하는 식으로 장치를 추측해 나누면, 추측이 틀린 사용자는 기능을 쓸 수 없습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 기본 동작은 그 기능을 직접 대신할 수 있을 때만 막습니다. 눌렀다는 사실과 상태가 바뀌었다는 사실은 따로 확인하고, 실행은 장치와 상관없이 click 하나로 처리합니다.',
        pause: 'section',
      },
    ],
    'state-attributes-properties': [
      {
        target: ':scope > h2',
        text: '자, 마지막으로 상태, 속성, 프로퍼티를 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '같은 이름이 세 곳에 있을 수 있습니다. HTML에 적힌 속성, DOM 객체의 프로퍼티, 그리고 앱이 기억하는 상태예요. 셋이 늘 함께 움직이지는 않습니다.',
        pause: 'short',
      },
      {
        text: '이 장의 첫 번째 페이지인 네 층의 책임에서 본 펼침 버튼을, 이번에는 이 세 가지로 나눠 봅니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 이름별 속성과 프로퍼티의 관계를 정리했습니다. 입력 칸에 글자를 입력하면, value 속성도 바뀔까요?',
        pause: 'think',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '바뀌지 않습니다. value 속성은 처음 값이고, 프로퍼티가 지금 입력된 값이에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'checked도 같습니다. 속성은 처음 체크 여부, 프로퍼티는 지금 체크 여부라서, 눌러도 속성은 그대로예요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: 'id, hidden, disabled는 한쪽을 바꾸면 다른 쪽도 바뀝니다. 이걸 반영이라고 해요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: 'aria-expanded도 프로퍼티와 서로 반영됩니다. 하지만 브라우저가 상태에 맞춰 바꿔 주지 않으니, 직접 바꿔야 합니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '보조기술은 checked처럼 HTML 요소에 기본으로 있는 상태를, 접근성 트리를 통해 브라우저에서 받습니다. aria-expanded 같은 ARIA 상태는 속성 값 그대로 받고요.',
        pause: 'short',
      },
      {
        text: '그래서 펼침 상태를 앱 상태로만 기억하고 속성을 바꾸지 않으면, 화면과 보조기술이 서로 다른 상태를 보게 돼요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '직접 바꿔 보면 차이가 보입니다. 데모의 표는 입력 칸, 체크박스, 주문 상세 버튼의 속성과 프로퍼티를 실제 DOM에서 읽어 보여 줘요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '입력 칸의 글자를 바꾸고, 체크박스와 주문 상세 버튼을 눌러 표의 값을 비교해 보세요. 버튼 상태 처리에서 aria-expanded 갱신을 빠뜨림을 고르면 결함 모드가 됩니다.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '이름을 고쳐도 value 속성은 처음 값 그대로이고, 프로퍼티만 바뀝니다. 체크박스도 같아요.',
        pause: 'short',
      },
      {
        text: '결함 모드에서 주문 상세를 누르면, 패널은 보이지만 aria-expanded는 false로 남습니다. 그래서 화면 낭독기 사용자는 접힘을 듣죠.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '그래서 상태를 바꾸는 한 곳에서 화면과 속성을 함께 바꿉니다. React에서는 상태 하나로 hidden과 aria-expanded를 모두 계산하면, 둘이 어긋나지 않아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 속성은 처음 값, 프로퍼티는 지금 값이고, ARIA 상태는 상태를 바꿀 때 직접 함께 바꿉니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 이벤트는 캡처로 내려갔다가 버블링으로 올라오고, 경로는 target과 currentTarget으로 읽습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 기본 동작은 대신할 수 있을 때만 막고, 장치를 추측해 동작을 나누지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, value와 checked는 속성이 처음 값, 프로퍼티가 지금 값이고, ARIA 상태는 직접 바꿉니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 버튼 하나를 누르면, 브라우저 안에서는 어떤 일이 일어날까요?',
        pause: 'think',
      },
      {
        text: '이벤트가 경로를 따라 전달되고, 브라우저는 기본 동작을 실행합니다. 바뀐 상태는 속성에도 남겨야 보조기술이 같은 상태를 봅니다.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '버튼을 눌렀더니 주문이 됐다면, 그 원인은 어떻게 찾아야 할까요?',
        pause: 'section',
      },
    ],
  },
};
