import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 01.1 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상, say는 약어를 소리로 풀 때만 쓴다. 대본이 없는 섹션은 자동 규칙으로 읽는다.
 * 본문 사실을 바꾸지 않는다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '오늘의 질문은 이겁니다.', pause: 'short' },
      { target: 'h1', text: '웹 접근성은, 누구의 어떤 활동을 가능하게 할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '흔히 스크린 리더 대응 정도로 생각하는데요. 사실 그보다 훨씬 넓습니다.',
        pause: 'short',
      },
      {
        text: '장애가 있는 사람이 웹을 인식하고, 이해하고, 탐색하고, 상호작용하고, 직접 기여할 수 있게 만드는 일이거든요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 다룰 내용을 먼저 짚고 갈게요.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 접근성을 사람이 일을 끝내는 흐름으로 정의하고, 장벽이 어디서 생기는지 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '그다음, 막힌 활동을 기록하는 법과, 보조기술이 받는 정보가 마크업에서 정해지는 구조를 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(8)',
        text: '마지막으로, 사용성, 시맨틱 HTML, 그리고 WCAG 같은 기준이 어떻게 이어지는지까지 살펴봅니다.',
        pause: 'section',
      },
    ],
    'what-is': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 질문부터 볼게요. 웹 접근성이란 뭘까요?',
        pause: 'think',
      },
      {
        target: 'aside',
        text: 'W3C의 정의는 이렇습니다. 장애가 있는 사람이 웹사이트, 도구, 기술을 사용할 수 있도록 설계하고 개발하는 것.',
        pause: 'long',
      },
      {
        target: 'aside strong',
        text: '여기서 핵심은, 사용할 수 있다, 이 말입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '사용자는 화면을 감상하러 오지 않거든요.',
        pause: 'short',
      },
      { text: '회원가입을 하고, 주문을 취소하고, 예약을 바꾸러 오죠.', pause: 'long' },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '리뷰를 쓰고, 문서를 고치고, 사진을 올리는 것처럼 직접 기여하는 일도 마찬가지예요.',
        pause: 'short',
      },
      {
        text: '그래서 질문을 바꿔야 합니다. 볼 수 있나, 가 아니라, 이 사람이 하려던 일을 끝낼 수 있나.',
        pause: 'think',
      },
      {
        target: ':scope > figure',
        text: '그럼 일을 끝내기까지 어떤 단계를 거칠까요? 그림에 여섯 단계가 있습니다.',
        pause: 'short',
      },
      {
        target: 'figure li:nth-child(1)',
        text: '보고 듣는 인식,',
        pause: 'flow',
      },
      {
        target: 'figure li:nth-child(2)',
        text: '무엇인지 아는 이해,',
        pause: 'flow',
      },
      {
        target: 'figure li:nth-child(3)',
        text: '원하는 곳으로 가는 탐색.',
        pause: 'short',
      },
      {
        target: 'figure li:nth-child(4)',
        text: '그리고 누르고 입력하는 조작,',
        pause: 'flow',
      },
      {
        target: 'figure li:nth-child(5)',
        text: '결과와 오류를 아는 단계,',
        pause: 'flow',
      },
      {
        target: 'figure li:nth-child(6)',
        text: '마지막으로 작업 완료예요.',
        pause: 'short',
      },
      {
        target: 'figcaption',
        text: '앞 단계가 막히면 뒤 단계도 함께 막힙니다. 이 흐름에 불필요한 장벽이 없게 만드는 것, 그게 접근성이에요.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(2)',
        text: '반대로, 접근성을 좁게 보는 생각도 흔합니다.',
        pause: 'short',
      },
      {
        target: ':scope > div li:nth-child(1)',
        text: '스크린 리더만 대응하면 된다. 이러면 확대, 키보드, 음성 입력을 쓰는 사람이 빠지죠.',
        pause: 'short',
      },
      {
        target: ':scope > div li:nth-child(2)',
        text: 'ARIA 속성을 붙이면 된다. ARIA는 HTML의 의미를 보충할 뿐이에요. 알맞은 요소를 먼저 쓰지 않으면 오히려 장벽이 됩니다.',
        pause: 'short',
      },
      {
        target: ':scope > div li:nth-child(4)',
        text: '출시 직전에 QA로 확인하면 된다. 구조에서 생긴 장벽은 마지막에 고치기 어렵고, 화면마다 다시 생깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(5)',
        text: '모두 접근성의 일부일 수는 있어요. 하지만 어느 하나도 전체를 대신하지는 못합니다.',
        pause: 'long',
      },
      {
        target: 'table',
        text: '그럼 전체는 어디까지일까요? 단계마다 페이지가 갖춰야 할 것을 표로 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '예를 들어 인식 단계에는 대체 텍스트와 자막, 충분한 대비가 필요하고요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '탐색 단계에는 키보드로 닿는 모든 기능, 그리고 포커스 위치와 순서가 필요합니다. 나머지 단계도 표에서 한번 훑어보세요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(7)',
        text: '정리하면, 접근성은 항목을 하나씩 체크하는 일이 아닙니다. 과업 흐름 전체가 끊기지 않는지 보는 일입니다.',
        pause: 'section',
      },
    ],
    'who-for': [
      {
        target: ':scope > h2',
        text: '두 번째 질문입니다. 웹 접근성은, 누구를 위한 걸까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '먼저 부담 하나를 덜고 갈게요. 장애 유형 표부터 외울 필요는 없습니다.',
        pause: 'short',
      },
      {
        text: '같은 진단명을 가진 두 사람도, 완전히 다른 방식으로 웹을 쓰거든요. 그래서 진단명보다 필요를 봅니다.',
        pause: 'long',
      },
      {
        target: ':scope > figure',
        text: '그럼 장벽은 어디서 생길까요? 그림에는 네 가지가 더하기로 이어져 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure li:nth-child(1) > div',
        text: '사용자의 능력,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(2) > div',
        text: '사용 환경,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(3) > div',
        text: '입력과 출력 방식,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(4) > div',
        text: '그리고 인터페이스 설계.',
        pause: 'short',
      },
      {
        target: ':scope > figure figcaption',
        text: '장벽은 사람에게 있는 게 아니라, 이 조합에서 생깁니다.',
        pause: 'long',
      },
      {
        target: ':scope > figure li:nth-child(4) > div',
        text: '여기서 중요한 건, 이 중 프론트엔드가 직접 정할 수 있는 건 인터페이스 설계뿐이라는 점이에요. 그리고 그것만으로도 많은 장벽을 없앨 수 있습니다.',
        pause: 'long',
      },
      {
        target: 'table',
        text: '어떤 상황에서 어떤 일이 막히는지, 표로 보겠습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '화면 낭독기로 들을 때, 대체 텍스트 없는 이미지가 있으면 상품 사진으로 색상을 고를 수 없죠.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '키보드만 쓸 때 포커스가 보이지 않으면, 메뉴 하나 여는 것도 막힙니다.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(3)',
        text: '그런데, 이런 장벽은 장애가 있는 사람만 만날까요?',
        pause: 'think',
      },
      {
        target: ':scope > ul > li:nth-child(1)',
        text: '햇빛에 화면이 바래 보일 때,',
        pause: 'flow',
      },
      {
        target: ':scope > ul > li:nth-child(2)',
        text: '팔을 다쳐 한 손만 쓸 때,',
        pause: 'flow',
      },
      {
        target: ':scope > ul > li:nth-child(3)',
        text: '지하철에서 소리를 켤 수 없을 때.',
        pause: 'short',
      },
      {
        target: ':scope > ul',
        text: '누구나 한 번쯤 겪는 순간이죠.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '소리를 못 켜면 자막 없는 영상은 내용을 알 수 없습니다. 오디오를 들을 수 없는 사람을 막는 것과 같은 장벽이에요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(5)',
        text: '하지만, 장벽이 겹친다고 경험까지 같지는 않습니다.',
        pause: 'short',
      },
      {
        text: '햇빛은 피하면 되고, 깁스는 풀리거든요. 장애는 대개 매일 함께하고, 같은 장벽을 반복해 만나는 비용이 쌓입니다.',
        pause: 'short',
      },
      {
        text: '이 차이를 지우면, 장애 당사자의 경험을 가볍게 보게 돼요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(8)',
        text: '그래서 이런 말은 조심해야 합니다. 접근성은 사실 장애인보다 모두를 위한 것이다.',
        pause: 'short',
      },
      { text: '이 말은, 순서를 뒤집거든요.', pause: 'long' },
      {
        target: 'ol > li:nth-child(1)',
        text: '일차 목적은 장애가 있는 사용자가 웹을 동등하게 쓰게 하는 것이고요.',
        pause: 'short',
      },
      {
        target: 'ol > li:nth-child(2)',
        text: '다른 사용자에게 생기는 이점은, 그걸 제대로 했을 때 따라오는 부수 효과입니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '모두에게 좋으니까 하자, 이 논리만 남으면 어떻게 될까요?',
        pause: 'think',
      },
      {
        text: '다수에게 이득이 적어 보이는 요구는 곧 밀립니다. 기준은 다수의 편익이 아니라, 동등한 사용입니다.',
        pause: 'section',
      },
    ],
    'barrier-case': [
      {
        target: ':scope > h2',
        text: '접근성이 누구의 어떤 일을 위한 건지 봤으니, 이제 막힌 순간을 어떻게 남길지 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '장벽을 찾으면 보통 이렇게 적습니다. img에 alt 없음.',
        pause: 'short',
      },
      {
        text: '틀린 말은 아니에요. 그런데 이 한 줄로는 누가 무엇을 못 하는지, 얼마나 급한지, 어떻게 확인할지를 알 수 없죠.',
        pause: 'long',
      },
      {
        target: ':scope > div:nth-of-type(1) > :first-child',
        text: '왼쪽은 규칙 위반 한 줄이고요,',
        pause: 'flow',
      },
      {
        target: ':scope > div:nth-of-type(1) > :last-child',
        text: '오른쪽은 같은 결함을 과업 실패로 적은 기록입니다. 화면 낭독기 사용자가 색 이름을 알 수 없어서, 원하는 색을 고르지 못한다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '차이는 출발점이에요. 과업 실패 기록은 사람과 과업에서 출발합니다.',
        pause: 'short',
      },
      {
        text: '그래서 어떤 과업을 막는지에 따라 우선순위가 정해지고, 고친 뒤에 무엇을 다시 볼지도 분명해집니다.',
        pause: 'long',
      },
      {
        target: ':scope > div:nth-of-type(2)',
        text: '실제 기록은 이런 모양입니다. 가상의 쇼핑몰에서 색상을 고르는 사례예요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(1)',
        text: '먼저 상황. 누가, 어떤 일을, 어떤 환경에서 하려 했는지 적습니다. 진단명이 아니라 사용 방식을 쓰는 게 포인트예요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(2)',
        text: '다음은 막힌 곳. 장벽이 무엇이고, 언제 생기고, 과업 흐름의 어느 단계에서 막히는지요. 여기서는 이해 단계입니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(3)',
        text: '결과에는 영향과 복구 경로를 적어요. 잘못 주문할 수 있고, 다른 사람의 도움 없이는 빠져나오기 어렵다는 거죠.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(4)',
        text: '마지막으로 확인. 코드로 확인한 것과, 실제 보조기술로 더 확인해야 할 것을 나눠 둡니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '1장의 다른 페이지들도, 자기 주제에 맞는 사례를 이 형식으로 하나씩 보여 드릴 거예요.',
        pause: 'section',
      },
    ],
    'why-frontend': [
      {
        target: ':scope > h2',
        text: '여기서 질문 하나 할게요. 왜 하필 프론트엔드가 접근성을 챙겨야 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > h3:nth-of-type(1)',
        text: '답은 간단합니다. 접근성 정보는 프론트엔드 코드에서 나오거든요.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '그림을 보면, 개발자가 쓴 마크업을 브라우저가 해석해서 두 갈래 결과를 만듭니다.',
        pause: 'short',
      },
      {
        text: '하나는 눈에 보이는 화면, 다른 하나는 보조기술이 받는 접근성 트리예요.',
        pause: 'short',
      },
      {
        text: '화면이 멀쩡해 보여도, 접근성 트리에서는 역할이나 이름이 빠질 수 있습니다. 둘 다 같은 마크업에서 나오는데도요.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(2)',
        text: '예제로 확인해 볼게요. 저장 버튼을 하나 만든다고 해 봅시다.',
        pause: 'short',
      },
      {
        target: ':scope > div:has(pre) > :first-child',
        text: '왼쪽은 div에 스타일을 입히고 클릭 이벤트를 단 버튼이고요,',
        pause: 'flow',
      },
      {
        target: ':scope > div:has(pre) > :last-child',
        text: '오른쪽은 그냥 button 요소입니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:has(pre)',
        text: '디자인만 맞추면 화면에서는 둘이 똑같이 생겼어요. 그럼 뭐가 다를까요?',
        pause: 'think',
      },
      {
        target: 'table tbody tr:nth-child(1)',
        text: 'Tab 키로 가 보면, div에는 포커스가 가지 않고, button에는 갑니다.',
        pause: 'short',
      },
      {
        target: 'table tbody tr:nth-child(2)',
        text: 'Enter나 Space를 눌러도, div는 반응이 없고, button은 실행되죠.',
        pause: 'short',
      },
      {
        target: 'table tbody tr:nth-child(3)',
        text: '보조기술에는 div가 아무 역할 없는 일반 요소로, button은 버튼으로 전달되고요.',
        pause: 'short',
      },
      {
        target: 'table tbody tr:nth-child(4)',
        text: 'div로 같은 동작을 만들려면 role, tabindex, 키 처리까지 직접 써야 합니다. button은 이걸 처음부터 다 갖고 있어요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '문제는요, 마우스로는 둘 다 잘 된다는 겁니다. 그래서 개발자 화면에서는 이 차이가 드러나지 않아요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '아래에 직접 해 볼 수 있는 실습이 있어요.',
        pause: 'short',
      },
      {
        // 키보드 모드에만 있는 시작 칸. 키보드 없이 보기 모드면 앞 요소(실습 상자)를 잇는다.
        target: '[data-narration="skip"] label:has(> input:not([type]))',
        text: '여기 실습 시작 지점을 누르고,',
        pause: 'flow',
      },
      {
        target: '[data-narration="skip"] label:has(> input:not([type])) + div',
        text: 'Tab으로 이동해서, Enter나 Space로 두 저장 버튼을 눌러 보면, 차이가 바로 느껴질 거예요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 한번 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > h3:nth-of-type(3)',
        text: '두 번째 예제입니다. 이번에는 입력 칸이에요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '입력 칸 위에 글자를 두지 않고, placeholder로만 안내하고 싶다고 해 봅시다.',
        pause: 'short',
      },
      {
        target: ':scope > div:has(pre) ~ div:has(pre)',
        text: '왼쪽은 placeholder만 둔 입력 칸, 오른쪽은 label을 연결한 입력 칸입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(5)',
        text: 'placeholder는 값을 입력하면 사라지는 힌트예요. 입력하는 도중에는 무슨 칸이었는지 다시 볼 수 없고, 글자색도 흐려서 읽기 어려운 경우가 많습니다.',
        pause: 'short',
      },
      {
        text: '브라우저가 이걸 이름 대신 쓰기도 하지만, 결과가 브라우저와 보조기술마다 다르고, 보이는 라벨을 대신하지도 못해요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(6)',
        text: 'label을 연결하면, 화면과 접근성 트리 양쪽에 안정적인 이름이 생깁니다. 라벨을 눌러도 입력 칸으로 포커스가 가서, 누를 곳도 넓어지고요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"] ~ [data-narration="skip"]',
        text: '여기도 실습이 있어요. 두 칸에 이메일을 입력해 보고, 라벨의 이메일 글자도 눌러 보세요.',
        pause: 'short',
      },
      { text: '마찬가지로, 잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > aside:nth-of-type(1)',
        text: '도구 없이 바로 할 수 있는 확인도 있습니다. 확인하려는 화면에서 마우스를 치우고, 키보드만으로 주요 작업을 끝까지 해 보는 거예요.',
        pause: 'short',
      },
      {
        text: 'Tab으로 이동하고 Enter나 Space로 실행하면서, 포커스가 보이는지, 순서가 자연스러운지, 닿지 않는 기능이 없는지 보면 됩니다.',
        pause: 'short',
      },
      {
        text: '도구를 설치하기 전에 할 수 있는 가장 저렴한 확인이죠.',
        pause: 'long',
      },
      {
        target: ':scope > aside:nth-of-type(2)',
        text: '화면 낭독기가 읽을 역할과 이름은 Chrome DevTools에서 바로 볼 수 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > aside:nth-of-type(2) ol > li:nth-child(1)',
        text: '아래 저장 버튼 위에서 오른쪽 클릭하고, 검사를 누릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > aside:nth-of-type(2) ol > li:nth-child(2)',
        text: '오른쪽 창에서 Accessibility 탭을 열고요. 안 보이면 화살표 두 개 메뉴 안에 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > aside:nth-of-type(2) ol > li:nth-child(3)',
        text: '그리고 Computed properties에서 역할과 이름을 비교해 보세요. button은 역할 button, 이름 저장으로 나오지만, div는 버튼으로 잡히지 않아 역할도 이름도 없습니다.',
        say: '그리고 컴퓨티드 프로퍼티즈에서 역할과 이름을 비교해 보세요. 버튼 요소는 역할 버튼, 이름 저장으로 나오지만, div는 버튼으로 잡히지 않아 역할도 이름도 없습니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(7)',
        text: '정리하면요, 이 예제들의 목적은 구현 방법이 아닙니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(7) strong',
        text: '비슷해 보이는 UI라도, DOM의 의미와 기본 동작 약속은 다를 수 있다는 거예요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(7)',
        text: 'div에 버튼 동작을 하나하나 붙이기보다, 알맞은 요소를 고르는 게 먼저입니다.',
        pause: 'section',
      },
    ],
    usability: [
      {
        target: ':scope > h2',
        text: '이제 접근성과 자주 헷갈리는 개념들을 하나씩 나눠 볼게요. 먼저 사용성입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '두 단어는 같은 뜻처럼 쓰이곤 하지만, 던지는 질문이 다릅니다.',
        pause: 'short',
      },
      {
        target: 'table tbody tr:nth-child(1)',
        text: '접근성은 동등하게 쓸 수 있는지를 묻고, 사용성은 효과적이고 만족스럽게 쓰는지를 묻죠.',
        pause: 'short',
      },
      {
        target: 'table tbody tr:nth-child(2)',
        text: '그래서 접근성은 장벽을 없애는 데, 사용성은 경험의 품질에 초점을 둡니다.',
        pause: 'short',
      },
      {
        target: 'table tbody tr:nth-child(4)',
        text: '평가 방법도 달라요. 접근성은 표준 적합성 평가와 보조기술 테스트, 장애가 있는 사용자의 참여로 보고, 사용성은 사용성 테스트와 사용자 조사로 봅니다.',
        pause: 'long',
      },
      {
        target: ':scope > figure',
        text: '물론 겹치는 곳도 있습니다. 명확한 오류 메시지는 둘 다 좋아지게 하죠. 하지만 겹치는 곳 밖에는, 한쪽만 다루는 문제가 남아요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'WAI도 사용성 절차와 사용자 참여만으로는 모든 접근성 문제를 해결할 수 없다고 말합니다.',
        pause: 'short',
      },
      {
        text: '예를 들어, 드래그로만 조작하는 슬라이더를 마우스 사용자들과 테스트했다고 해 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > :first-child',
        text: '마우스 사용자에게는 드래그가 편하고, 테스트 결과도 좋습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > :last-child',
        text: '그런데 키보드 사용자는 값을 바꿀 방법이 없어요. 테스트에서는 드러나지 않은 장벽이죠.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '반대도 있습니다. 결제가 12단계로 나뉘어 있어도, 모든 칸에 라벨이 있고 키보드로 끝까지 갈 수 있다면 접근성 기준은 충족해요.',
        pause: 'short',
      },
      {
        text: '하지만 누구에게나 지치는 흐름입니다. 기준을 지켰다고, 쓰기 쉬운 건 아니라는 거죠.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '포용적 설계와 표준 적합성까지 더한 네 개념의 관계는, 1장 4절에서 한 사례로 나눠 봅니다.',
        pause: 'section',
      },
    ],
    'semantic-html': [
      {
        target: ':scope > h2',
        text: '다음은 시맨틱 HTML입니다. 아까 예제 A, 기억나시죠?',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'button은 역할, Tab 포커스, Enter와 Space 실행을 추가 코드 없이 줬습니다. MDN 표현을 빌리면, 알맞은 요소를 쓰면 이 동작을 무료로 얻는 거예요.',
        say: '버튼 요소는 역할, 탭 포커스, 엔터와 스페이스 실행을 추가 코드 없이 줬습니다. 엠디엔 표현을 빌리면, 알맞은 요소를 쓰면 이 동작을 무료로 얻는 거예요.',
        pause: 'short',
      },
      {
        text: '반대로 의미 없는 요소로 만들면, 이걸 전부 직접 다시 만들어야 합니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표의 오른쪽 열이, div로 다시 만들 때 해야 하는 일이에요.',
        pause: 'short',
      },
      {
        target: 'table tbody tr:nth-child(1)',
        text: '역할을 알리려면 role,',
        pause: 'flow',
      },
      {
        target: 'table tbody tr:nth-child(2)',
        text: '포커스를 받으려면 tabindex,',
        pause: 'flow',
      },
      {
        target: 'table tbody tr:nth-child(3)',
        text: 'Enter와 Space는 키 이벤트 처리,',
        pause: 'flow',
      },
      {
        target: 'table tbody tr:nth-child(4)',
        text: '비활성 상태는 aria-disabled와 이벤트 차단,',
        pause: 'flow',
      },
      {
        target: 'table tbody tr:nth-child(5)',
        text: '폼 제출은 직접 구현해야 하죠.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '이걸 다 해도, 겨우 button 수준에 닿을 뿐입니다. 하나만 빠져도 장벽이 남고요.',
        pause: 'long',
      },
      {
        target: ':scope > div:has(pre)',
        text: '코드로 보면 차이가 더 분명해요. div로 다시 만든 메뉴 버튼은 이렇게 길어지는데, 그래도 비활성 상태와 제출은 없고, Space를 누르면 페이지까지 함께 스크롤됩니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:has(pre) ~ div:has(pre)',
        text: 'button으로 쓰면 이 한 줄이에요. 더 적은 코드로, 더 많은 기본 동작을 얻죠.',
        say: '버튼 요소로 쓰면 이 한 줄이에요. 더 적은 코드로, 더 많은 기본 동작을 얻죠.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '그래서 접근성 구현은 ARIA를 붙이는 것보다 먼저, HTML이 이미 주는 의미와 동작을 제대로 쓰는 데서 시작합니다.',
        pause: 'section',
      },
    ],
    'design-system': [
      {
        target: ':scope > h2',
        text: '이번에는 한 화면을 넘어서, 디자인 시스템으로 가 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '접근성을 화면마다 챙기면, 놓치는 곳이 꼭 생깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > div ol',
        text: '흔한 흐름은 이래요. 페이지를 만들고, 문제를 발견하고, 그 페이지만 고치고, 다음 페이지에서 또 생기고. 이게 계속 반복됩니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '원인이 페이지가 아니라 재사용되는 UI 조각에 있거든요. 포커스 표시가 없는 버튼을 40개 화면이 쓰면, 결함도 40번 복제됩니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '그래서 요구를 컴포넌트 계약으로 옮깁니다. 한 번 고치면, 그 컴포넌트를 쓰는 모든 화면에 반영되죠.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '계약은 다섯 가지로 나눠 볼 수 있어요.',
        pause: 'short',
      },
      {
        target: 'table tbody tr:nth-child(1)',
        text: '대비와 포커스 표시를 정하는 디자인 토큰,',
        pause: 'flow',
      },
      {
        target: 'table tbody tr:nth-child(2)',
        text: '라벨과 상태를 받는 컴포넌트 API,',
        pause: 'flow',
      },
      {
        target: 'table tbody tr:nth-child(3)',
        text: '어떤 요소로 그려지는지 정하는 DOM 계약,',
        pause: 'flow',
      },
      {
        target: 'table tbody tr:nth-child(4)',
        text: '어떤 키로 조작하는지 정하는 키보드 계약,',
        pause: 'flow',
      },
      {
        target: 'table tbody tr:nth-child(5)',
        text: '그리고 포커스가 어디로 갔다가 돌아오는지 정하는 포커스 계약입니다. Dialog가 닫히면, 연 버튼으로 포커스가 돌아오는 것처럼요.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '좋은 디자인 시스템에서는 접근성의 상당 부분이 이 계약 안에 들어 있습니다. 화면에서는 대체 텍스트, 제목 구조, 라벨 문구처럼 내용에 달린 것만 확인하면 되고요.',
        pause: 'section',
      },
    ],
    standards: [
      {
        target: ':scope > h2',
        text: '마지막으로, 기준과 법 이야기입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'WCAG, KWCAG, 법령. 자주 같은 말처럼 쓰이지만, 사실 서로 다른 층에 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > div ol > li:nth-child(1)',
        text: '맨 위에 목표인 접근성, 동등한 사용이 있고요,',
        pause: 'flow',
      },
      {
        target: ':scope > div ol > li:nth-child(2)',
        text: '그 아래에 검증할 수 있는 성공 기준을 담은 기술 기준,',
        pause: 'flow',
      },
      {
        target: ':scope > div ol > li:nth-child(3)',
        text: '그 기준을 참조해 의무를 정하는 정책과 법령,',
        pause: 'flow',
      },
      {
        target: ':scope > div ol > li:nth-child(4)',
        text: '그리고 국가와 기관, 서비스에 따라 달라지는 실제 적용 범위가 있습니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'WCAG 2.2는 W3C의 웹 콘텐츠 접근성 지침이에요. 2023년 10월에 권고안으로 공개됐고, 2024년 12월에 갱신본이 나왔습니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '모든 성공 기준은 네 가지 원칙 중 하나에 속하는데요.',
        pause: 'short',
      },
      {
        target: ':scope > figure li:nth-child(1)',
        text: '인식할 수 있는가,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(2)',
        text: '조작할 수 있는가,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(3)',
        text: '이해할 수 있는가,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(4)',
        text: '그리고 보조기술이 안정적으로 해석하는가. 오늘 본 예제 A와 B도 여기에 하나씩 들어가 있어요.',
        pause: 'long',
      },
      {
        target: ':scope > dl',
        text: '성공 기준 86개에는 수준이 붙습니다.',
        pause: 'short',
      },
      {
        target: ':scope > dl > dt:nth-of-type(1)',
        text: 'A는 가장 기본 수준이라, 못 지키면 일부 사용자는 아예 쓸 수 없고요,',
        pause: 'flow',
      },
      {
        target: ':scope > dl > dt:nth-of-type(2)',
        text: 'AA는 대부분의 정책과 조달이 목표로 삼는 수준,',
        pause: 'flow',
      },
      {
        target: ':scope > dl > dt:nth-of-type(3)',
        text: 'AAA는 가장 높은 수준인데, 모든 콘텐츠에 요구하지는 않습니다.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(2)',
        text: '한국에는 국가표준 KWCAG가 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '2022년 12월에 개정된 KWCAG 2.2는, WCAG를 반영해 검사 항목 9개를 더했어요. 다만 WCAG를 참조한 국가표준이지, 번역본도 법률 조문도 아닙니다.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '그래서 이런 말은 조심해야 합니다. 모든 웹사이트가 WCAG 2.2 AA를 법적으로 지켜야 한다, KWCAG만 만족하면 모든 의무가 끝난다.',
        pause: 'short',
      },
      {
        text: '법적 요구는 국가, 기관, 서비스, 적용 법령에 따라 달라져요. 필요하면 관할 법령 원문과 담당 기관 안내를 직접 확인하세요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(5)',
        text: '기준이 있고 법적 요구로도 이어질 수 있으니, 접근성은 설계 초기부터 다루는 게 좋습니다.',
        pause: 'section',
      },
    ],
    summary: [
      {
        target: ':scope > h2',
        text: '자, 오늘 내용을 정리해 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 접근성의 기준은 화면이 보이는지가 아니라, 하려던 일을 끝낼 수 있는지입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '장벽은 능력, 환경, 입력 방식, 설계의 조합에서 생기고, 프론트엔드가 직접 정하는 건 설계예요.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '일차 목적은 장애가 있는 사용자의 동등한 사용이고요.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '장벽은 규칙 위반보다, 누가 어떤 과업의 어느 단계에서 막히는지로 기록합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(5)',
        text: '화면과 보조기술은 같은 마크업에서 갈라지니, 결과는 프론트엔드 코드에서 시작되죠.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(6)',
        text: '사용성 절차만으로는 모든 접근성 문제를 찾을 수 없고,',
        pause: 'flow',
      },
      {
        target: ':scope > ol > li:nth-child(7)',
        text: '구현은 ARIA보다 먼저, HTML이 주는 의미와 동작에서 시작합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(8)',
        text: '컴포넌트 계약에 넣으면, 같은 결함이 화면마다 복제되지 않고요.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(9)',
        text: 'WCAG와 KWCAG는 기술 기준과 국가표준이지, 법률 조문은 아닙니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(10)',
        text: '마지막으로, 접근성은 비용만 늘리지 않아요. 구조와 상태, 키보드 계약이 분명해지면서, 구현과 테스트도 함께 정리됩니다.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는, 사람마다 다른 특성과 사용 환경을 더 자세히 볼게요.',
        pause: 'section',
      },
    ],
  },
};
