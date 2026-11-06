import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 01.1 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 약어 · 키 이름은 발음 사전(speech.ts)이 읽고, 대본은 화면 표기 그대로 쓴다.
 * 본문 사실을 바꾸지 않는다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '웹 접근성은, 누구의 어떤 활동을 가능하게 할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '흔히 화면 낭독기 대응 정도로 생각합니다. 화면 낭독기는 화면의 내용과 요소의 역할, 이름, 상태를 소리나 점자로 전해 주는 프로그램입니다.',
        pause: 'short',
      },
      {
        text: '하지만 웹 접근성은 그보다 훨씬 넓습니다. 장애가 있는 사람이 웹을 인식하고, 이해하고, 탐색하고, 상호작용하고, 직접 기여할 수 있게 설계하고 개발하는 일이에요.',
        pause: 'short',
      },
      {
        text: '그래서 이 페이지는, 누가 어떤 일을 하려다 어디서 막히는지부터 봅니다.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 막힌 활동을 사용자, 과업, 실패 단계로 기록할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 웹 접근성이 누구의 어떤 활동이고, 장벽이 어디서 생기는지 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '그다음, 막힌 활동을 기록하는 법과, 그 정보가 마크업에서 정해지는 구조를 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(6)',
        text: '마지막으로, 사용성과의 차이, 시맨틱 HTML과 컴포넌트 계약, 기준과 법의 층을 봅니다.',
        pause: 'section',
      },
    ],
    'what-is': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 웹 접근성이란 뭘까요?',
        pause: 'think',
      },
      {
        target: ':scope > aside',
        text: 'W3C의 WAI는 이렇게 정의합니다. 장애가 있는 사람이 웹사이트, 도구, 기술을 사용할 수 있도록 설계하고 개발하는 것.',
        pause: 'long',
      },
      {
        target: ':scope > aside strong',
        text: '이 정의의 핵심은, 사용할 수 있다는 말입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '사용자는 화면을 감상하러 오지 않습니다. 회원가입을 하고, 주문을 취소하고, 예약을 바꾸러 와요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '리뷰를 쓰고, 문서를 고치고, 사진을 올리는 것처럼 웹에 기여하는 일도 마찬가지예요.',
        pause: 'short',
      },
      {
        text: '그래서 질문을 바꿉니다. 볼 수 있나, 가 아니라, 이 사람이 하려던 일을 끝낼 수 있나.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(1)',
        text: '그럼 과업을 끝내기까지, 어떤 단계를 거칠까요?',
        pause: 'think',
      },
      { target: ':scope > figure', text: '과업 흐름 그림에 여섯 단계가 있습니다.', pause: 'short' },
      {
        target: ':scope > figure li:nth-child(1)',
        text: '보고 듣는 인식, 무엇인지 아는 이해, 원하는 곳으로 가는 탐색이 앞의 세 단계이고,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(4)',
        text: '누르고 입력하는 조작, 상태와 오류 이해를 거쳐 과업 완료에 닿습니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure figcaption',
        text: '앞 단계가 막히면 뒤 단계도 함께 막힙니다. 장벽을 기록할 때는, 이 중 어느 단계에서 처음 막혔는지를 적어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '이 흐름에 불필요한 장벽이 생기지 않게 만드는 것, 그게 접근성입니다.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(2)',
        text: '반대로, 접근성을 좁게 보는 생각도 흔합니다. 목록에는 이런 생각이 다섯 가지 있습니다. 세 가지만 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > div:not([role]) > ul > li:nth-child(1)',
        text: '첫째, 화면 낭독기만 대응하면 된다. 이러면 확대, 키보드, 음성 입력, 스위치를 쓰는 사람과, 인지적 필요가 있는 사람이 빠집니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:not([role]) > ul > li:nth-child(2)',
        text: '둘째, ARIA 속성을 붙이면 된다. ARIA는 HTML의 의미를 보충할 뿐이에요. 알맞은 요소를 먼저 쓰지 않으면 오히려 장벽이 됩니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:not([role]) > ul > li:nth-child(4)',
        text: '셋째, 출시 직전에 QA로 확인하면 된다. 구조와 컴포넌트에서 생긴 장벽은 마지막에 고치기 어렵고, 화면마다 다시 생깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(5)',
        text: '다섯 가지 모두 접근성 작업의 일부일 수는 있어요. 하지만 어느 하나도 접근성 전체를 대신하지는 못합니다.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(3)',
        text: '그럼 접근성이 실제로 포괄하는 범위를 볼게요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 과업 단계마다 페이지가 갖춰야 할 것을 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '인식 단계에는 대체 텍스트와 자막, 충분한 대비와 크기, 색에만 기대지 않는 표시가 필요합니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '탐색 단계로 가 볼게요. 키보드로 Tab을 누르면, 버튼이나 링크가 하나씩 차례로 선택되고, 선택된 곳은 화면에 보통 테두리로 표시돼요.',
        pause: 'short',
      },
      {
        text: '그래서 탐색 단계에는 키보드로 닿는 모든 기능, 포커스 위치와 순서, 그리고 제목과 랜드마크가 필요합니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '나머지 단계도 잠깐 멈추고 표에서 훑어보셔도 좋아요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(7)',
        text: '한 단계라도 비면, 그 지점에서 과업이 멈춥니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(7) strong',
        text: '정리하면, 접근성은 항목을 하나씩 체크하는 일이 아니라, 과업 흐름 전체가 끊기지 않는지 보는 일입니다.',
        pause: 'section',
      },
    ],
    'who-for': [
      {
        target: ':scope > h2',
        text: '자, 이번에는 대상을 볼게요. 웹 접근성은, 누구를 위한 걸까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '먼저 부담 하나를 덜고 갈게요. 장애 유형 표부터 외울 필요는 없습니다.',
        pause: 'short',
      },
      {
        text: '진단명이 같은 두 사람도, 완전히 다른 방식으로 웹을 쓸 수 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1) strong',
        text: '그래서 진단명 대신, 지각하고 조작하고 이해하는 데 무엇이 필요한지를 봅니다. 이것을 기능적 필요라고 합니다.',
        pause: 'long',
      },
      {
        target: ':scope > figure',
        text: '장벽이 어디서 생기는지는 장벽 그림이 보여 줍니다. 네 요소가 더하기로 이어져 있어요.',
        pause: 'short',
      },
      { target: ':scope > figure li:nth-child(1) > div', text: '사용자의 능력,', pause: 'flow' },
      { target: ':scope > figure li:nth-child(2) > div', text: '사용 환경,', pause: 'flow' },
      { target: ':scope > figure li:nth-child(3) > div', text: '사용 방식,', pause: 'flow' },
      {
        target: ':scope > figure li:nth-child(4) > div',
        text: '그리고 인터페이스 설계.',
        pause: 'short',
      },
      {
        target: ':scope > figure figcaption',
        text: '장벽은 사람에게 있는 것이 아니라, 이 조합에서 생깁니다.',
        pause: 'long',
      },
      {
        target: ':scope > figure li:nth-child(4) > div',
        text: '네 칸 가운데 프론트엔드가 직접 통제하는 것은 인터페이스 설계뿐입니다. 그리고 그것만으로도 많은 장벽을 없앨 수 있어요.',
        pause: 'long',
      },
      {
        target: 'table',
        text: '어떤 상황에서 어떤 과업이 막히는지 표로 볼게요. 한 줄에 상황 하나씩, 장벽과 막히는 과업을 적었습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '화면 낭독기로 들을 때 대체 텍스트 없는 이미지가 있으면, 상품 사진으로 색상을 고를 수 없습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '키보드만 쓸 때 포커스가 보이지 않으면, 메뉴 하나 여는 것도 막힙니다.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(3)',
        text: '그런데 이런 장벽은, 장애가 있는 사람만 만날까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '그렇지 않습니다. WAI는 접근성이 팔을 다친 사람 같은 일시적 제약이나, 밝은 햇빛 같은 상황적 제약에도 도움이 된다고 설명합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ul > li:nth-child(1)',
        text: '그림 네 장이 그런 순간입니다. 첫 번째 그림은 햇빛에 화면이 바래 보이는 순간,',
        pause: 'flow',
      },
      {
        target: ':scope > ul > li:nth-child(2)',
        text: '두 번째는 팔을 다쳐 한 손으로만 쓰는 순간,',
        pause: 'flow',
      },
      {
        target: ':scope > ul > li:nth-child(3)',
        text: '세 번째는 지하철에서 소리 대신 자막에 기대는 순간,',
        pause: 'flow',
      },
      {
        target: ':scope > ul > li:nth-child(4)',
        text: '네 번째는 짐을 들고 걸으며 잠깐씩 보는 순간입니다.',
        pause: 'short',
      },
      { target: ':scope > ul', text: '누구나 한 번쯤 겪는 순간이죠.', pause: 'short' },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '이런 순간은 상황 표의 장벽과 겹칩니다. 지하철에서 소리를 켤 수 없으면, 자막 없는 영상의 내용을 알 수 없어요. 오디오를 들을 수 없는 사람을 막는 것과 같은 장벽입니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(5)',
        text: '하지만 장벽이 겹친다고 경험까지 같지는 않습니다.',
        pause: 'short',
      },
      {
        text: '햇빛은 피하고 깁스는 풀립니다. 장애는 대개 매일 함께하고, 대안이 없는 경우가 많고, 같은 장벽을 반복해 만나는 비용이 쌓입니다.',
        pause: 'short',
      },
      {
        text: '그만큼 오래 다듬은 자기만의 방법도 있어요. 이 차이를 지우면, 장애 당사자의 경험을 가볍게 보게 됩니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(8)',
        text: '그래서 이런 설명은 조심해야 합니다. 접근성은 사실 장애인보다 모두를 위한 것이다.',
        pause: 'short',
      },
      { text: '이 문장은 순서를 뒤집습니다.', pause: 'short' },
      {
        target: ':scope > div > ol > li:nth-child(1)',
        text: '일차 목적은 장애가 있는 사용자가 웹을 동등하게 사용할 수 있게 하는 것이고,',
        pause: 'flow',
      },
      {
        target: ':scope > div > ol > li:nth-child(2)',
        text: '부수적 이점은, 그 요구를 제대로 설계했을 때 다른 사용자와 환경에도 생길 수 있는 것입니다.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '두 번째가 첫 번째를 대체하지 않습니다. 모두에게 좋으니까 하자는 논리만 남으면, 다수에게 이득이 적어 보이는 요구는 곧 우선순위에서 밀려요.',
        pause: 'short',
      },
      {
        text: '정리하면, 웹 접근성의 기준은 다수의 편익이 아니라 동등한 사용입니다.',
        pause: 'section',
      },
    ],
    'barrier-case': [
      {
        target: ':scope > h2',
        text: '자, 막힌 순간을 어떻게 기록할지 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '장벽을 찾으면 흔히 이렇게 적습니다. img에 alt 없음.',
        pause: 'short',
      },
      { text: '이 한 줄로 충분할까요?', pause: 'think' },
      {
        text: '틀린 말은 아닙니다. 하지만 이 한 줄로는 누가 무엇을 못 하게 되는지, 얼마나 급한지, 어떻게 확인할지를 알 수 없어요.',
        pause: 'long',
      },
      {
        target: ':scope > div:nth-of-type(1) > div:first-child',
        text: '규칙 위반 한 줄 상자에는, 색상 선택 버튼 이미지에 alt 없음, 이라고 적혀 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(1) > div:last-child',
        text: '과업 실패 기록 상자에는 같은 결함을 이렇게 적었어요. 화면 낭독기 사용자가 색상 견본 버튼의 색 이름을 알 수 없어, 원하는 색을 고르지 못한다. 실패 단계는 이해.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '과업 실패 기록은 사람과 과업에서 출발합니다.',
        pause: 'short',
      },
      {
        text: '그래서 어떤 과업을 막는지에 따라 우선순위가 달라지고, 고친 뒤에 무엇을 다시 확인할지도 분명해집니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '가상의 쇼핑몰에서 색상을 고르는 과업을 사례 기록으로 옮겨 볼게요. 사용자는 진단명이 아니라 사용 방식을 적습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2)',
        text: '사례 기록은 상황, 막힌 곳, 결과, 확인의 네 묶음으로 되어 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(1) dd:nth-of-type(2)',
        text: '상황 묶음은 화면 낭독기와 키보드를 쓰는 사용자가, 남색 티셔츠를 장바구니에 담으려는 장면이에요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(2) dd:nth-of-type(1)',
        text: '막힌 곳은 색상 견본이 글자 없는 이미지 버튼이라, 화면 낭독기가 읽을 이름이 없다는 점입니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(2) dd:nth-of-type(3)',
        text: '그래서 실패 단계는 이해예요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(3) dd:nth-of-type(1)',
        text: '결과 묶음에는 영향과 복구 경로를 적습니다. 어느 버튼이 남색인지 몰라, 추측하면 잘못 주문할 수 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(4)',
        text: '확인 묶음에는 코드에서 확인한 것과, 실제 화면 낭독기에서 아직 확인하지 않은 것을 나눠 적습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '이 장의 세 번째 페이지는 음성 입력 사례를 이 형식으로 하나 더 보여 줍니다. 다섯 번째 페이지는 이 형식에 재현 절차를 더한 재현 기록을 써요.',
        pause: 'short',
      },
      {
        text: '정리하면, 막힌 활동은 규칙 위반 한 줄이 아니라, 누가 어떤 과업의 어느 단계에서 막히는지로 기록합니다.',
        pause: 'section',
      },
    ],
    'why-frontend': [
      {
        target: ':scope > h2',
        text: '자, 그럼 왜 하필 프론트엔드가 접근성을 챙겨야 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > h3:nth-of-type(1)',
        text: '답은 간단합니다. 접근성 정보는 프론트엔드 코드에서 나옵니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '접근성은 별도 부서가 마지막에 붙이는 레이어가 아닙니다.',
        pause: 'short',
      },
      {
        text: '용어 하나를 짚고 갈게요. 장애가 있는 사람이 기기와 콘텐츠를 쓰도록 돕는 소프트웨어나 하드웨어를, 보조기술이라고 부릅니다.',
        pause: 'short',
      },
      {
        text: '화면 낭독기, 화면 확대기, 음성 입력 소프트웨어, 스위치가 그 예예요. 사용자와 보조기술이 실제로 받는 정보는, 프론트엔드가 작성한 마크업에서 출발합니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '마크업 그림을 보면, 개발자가 쓴 마크업을 브라우저가 해석해서 두 갈래 결과를 만듭니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure [data-part="screen"]',
        text: '한 갈래는 눈에 보이는 렌더링된 화면,',
        pause: 'flow',
      },
      {
        target: ':scope > figure [data-part="tree"]',
        text: '다른 갈래는 보조기술이 받는 접근성 트리입니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure figcaption',
        text: '화면이 멀쩡해 보여도, 접근성 트리에서는 역할, 이름, 상태가 빠지거나 틀릴 수 있습니다. 둘 다 같은 마크업에서 나오는데도요.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(2)',
        text: '예제 A로 확인해 볼게요. 저장 버튼을 하나 만든다고 해 봅시다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:first-child',
        text: '고치기 전 코드는 div에 스타일을 입히고 클릭 이벤트를 단 버튼이고,',
        pause: 'flow',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:last-child',
        text: '고친 후 코드는 그냥 button 요소입니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-compare]',
        text: '디자인만 맞추면 화면에서는 둘이 똑같이 생겼어요. 그럼 무엇이 다를까요?',
        pause: 'think',
      },
      { target: 'table', text: '기본 동작 비교 표가 그 답입니다.', pause: 'short' },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'Tab으로 가 보면, div에는 포커스가 가지 않고, button에는 갑니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'Enter나 Space를 눌러도, div는 반응이 없고, button은 실행됩니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '보조기술에는 div가 아무 역할 없는 일반 요소로, button은 버튼으로 전달돼요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: 'div로 같은 동작을 만들려면 role, tabindex, 키 처리까지 직접 써야 합니다. button은 이것을 처음부터 다 갖고 있어요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '마우스로는 둘 다 정상 동작합니다. 그래서 개발자 화면에서는 이 차이가 드러나지 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > [data-narration="skip"]',
        text: '예제 A 실습 상자에서 직접 확인할 수 있습니다.',
        pause: 'short',
      },
      // 키보드 모드에만 있는 시작 칸. 터치·마우스 모드면 앞 요소(실습 상자)를 잇는다.
      {
        target: ':scope > [data-narration="skip"] label:has(> input:not([type]))',
        text: '키보드로 해 보기에서는 실습 시작 지점 칸을 누르고,',
        pause: 'flow',
      },
      {
        target: ':scope > [data-narration="skip"] label:has(> input:not([type])) + div',
        text: 'Tab으로 이동해서, Enter나 Space로 두 저장 버튼을 눌러 봅니다. 차이가 바로 드러나요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > h3:nth-of-type(3)',
        text: '이번에는 예제 B, 입력 칸의 이름입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '입력 칸 위에 글자를 두지 않고, placeholder로만 안내하고 싶다고 해 봅시다.',
        pause: 'short',
      },
      {
        target:
          ':scope > [data-code-compare] ~ [data-code-compare] > [data-code-block]:first-child',
        text: '고치기 전 코드는 placeholder만 둔 입력 칸,',
        pause: 'flow',
      },
      {
        target: ':scope > [data-code-compare] ~ [data-code-compare] > [data-code-block]:last-child',
        text: '고친 후 코드는 label을 연결한 입력 칸입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(5)',
        text: 'placeholder는 값을 입력하면 사라지는 힌트입니다. 입력하는 도중에는 무엇을 적는 칸이었는지 다시 볼 수 없고, 흐린 글자색이라 읽기 어려운 경우도 많아요.',
        pause: 'short',
      },
      {
        text: '보조기술이 버튼이나 입력 칸을 부르는 이름을, 접근 가능한 이름이라고 합니다. 브라우저는 다른 이름이 없을 때 placeholder를 이 이름으로 쓰기도 해요.',
        pause: 'short',
      },
      {
        text: '하지만 그 결과는 브라우저와 보조기술 조합마다 다르고, 보이는 라벨을 대신하지도 못합니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(6)',
        text: 'label을 연결하면, 화면과 접근성 트리 양쪽에 안정적인 이름이 생깁니다. 라벨을 눌러도 입력 칸에 포커스가 가서, 클릭 대상도 넓어져요.',
        pause: 'short',
      },
      {
        target: ':scope > [data-narration="skip"] ~ [data-narration="skip"]',
        text: '예제 B 실습 상자에서는, 두 칸에 이메일을 입력하고 라벨의 이메일 글자를 눌러 볼 수 있습니다.',
        pause: 'short',
      },
      { text: '이것도 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > aside:nth-of-type(1)',
        text: '도구 없이 30초 만에 하는 확인도 있습니다. 확인하려는 화면에서 마우스를 치우고, 키보드만으로 주요 과업을 끝까지 해 보는 겁니다.',
        pause: 'short',
      },
      {
        text: 'Tab으로 이동하고 Enter나 Space로 실행하면서, 포커스가 보이는지, 순서가 자연스러운지, 닿지 않는 기능이 없는지 봅니다.',
        pause: 'short',
      },
      {
        text: '도구를 설치하기 전에 할 수 있는 가장 저렴한 확인이에요. 잠깐 멈추고, 지금 쓰는 사이트 하나로 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        target: ':scope > aside:nth-of-type(2)',
        text: '화면 낭독기가 읽을 역할과 이름은, Chrome 개발자 도구에서 바로 볼 수 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > aside:nth-of-type(2) ol > li:nth-child(1)',
        text: '1단계, 저장 버튼 위에서 오른쪽 클릭하고, 검사를 누릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > aside:nth-of-type(2) ol > li:nth-child(2)',
        text: '2단계, 개발자 도구 창에서 Accessibility 탭을 엽니다. 안 보이면 화살표 두 개 메뉴 안에 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > aside:nth-of-type(2) ol > li:nth-child(3)',
        text: '3단계, Computed properties에서 역할과 이름을 비교합니다. button은 역할 button, 이름 저장으로 나오지만, div는 버튼으로 잡히지 않아 역할도 이름도 없습니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(7)',
        text: '이 예제들의 목적은 구현 방법이 아닙니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(7) strong',
        text: '비슷해 보이는 UI라도, DOM의 의미와 기본 상호작용 계약은 다를 수 있다는 것입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(7)',
        text: '정리하면, div에 버튼 동작을 하나하나 붙이기보다, 알맞은 요소를 고르는 것이 먼저입니다.',
        pause: 'section',
      },
    ],
    usability: [
      {
        target: ':scope > h2',
        text: '자, 접근성과 자주 헷갈리는 개념을 하나씩 나눠 볼게요. 먼저 사용성입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '두 단어는 자주 같은 뜻처럼 쓰입니다. 그럼 정말 같은 질문을 던질까요?',
        pause: 'think',
      },
      { target: 'table', text: '그렇지 않습니다. 비교 표를 한 줄씩 볼게요.', pause: 'short' },
      {
        target: 'tbody tr:nth-child(1)',
        text: '핵심 질문부터 봅니다. 접근성은 동등하게 사용할 수 있는지를 묻고, 사용성은 효과적이고 만족스럽게 쓰는지를 묻습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '초점은 접근성이 장벽의 제거, 사용성이 경험의 품질이고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '기준 대상은 접근성이 장애가 있는 사용자, 사용성이 사용자 전반이에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '평가 방법도 다릅니다. 접근성은 표준 적합성 평가, 보조기술 테스트, 장애가 있는 사용자 참여 평가로 보고, 사용성은 사용성 테스트와 사용자 조사로 봅니다.',
        pause: 'long',
      },
      {
        target: ':scope > figure',
        text: '물론 겹치는 곳도 있습니다. 두 원이 겹친 그림의 가운데에는 명확한 오류 메시지가 있어요. 둘 다 좋아지는 예입니다.',
        pause: 'short',
      },
      { text: '하지만 겹치는 곳 밖에는, 한쪽만 다루는 문제가 남습니다.', pause: 'long' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'WAI는 사용성 절차와 사용자 참여만으로는 모든 접근성 문제를 해결할 수 없다고 명시합니다.',
        pause: 'short',
      },
      {
        text: '예를 들어, 드래그로만 조작하는 커스텀 슬라이더를 마우스 사용자들과 테스트했다고 해 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div:first-child',
        text: '마우스 사용자 카드를 보면, 드래그가 편리하고 사용성 테스트 결과도 좋습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div:last-child',
        text: '키보드 사용자 카드에는 값을 바꿀 방법이 없다고 적혀 있어요. 테스트에서는 드러나지 않은 장벽입니다.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '반대로, 접근성 기준을 충족하면 쓰기도 쉬울까요?',
        pause: 'think',
      },
      {
        text: '꼭 그렇지는 않습니다. 결제가 12단계로 나뉘어 있어도, 모든 칸에 라벨이 있고 키보드로 끝까지 갈 수 있다면 접근성 기준은 충족해요. 하지만 누구에게나 지치는 흐름입니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '포용적 설계와 표준 적합성까지 더한 네 개념의 관계는, 이 장의 네 번째 페이지인 네 개념 구분하기에서 한 사례로 나눠 봅니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 접근성 기준을 충족해도 쓰기 어려울 수 있고, 사용성 테스트를 통과해도 접근성 장벽은 남을 수 있습니다.',
        pause: 'section',
      },
    ],
    'semantic-html': [
      {
        target: ':scope > h2',
        text: '자, 다음은 시맨틱 HTML입니다. 예제 A의 button, 기억나시죠?',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'button은 역할, Tab 포커스, Enter와 Space 실행을 추가 코드 없이 줬습니다. MDN은 이것을, 알맞은 요소를 쓰면 이 동작을 무료로 얻는다고 설명해요.',
        pause: 'short',
      },
      {
        text: '반대로 의미 없는 요소로 만들면, 이것을 전부 직접 다시 만들어야 합니다. 얼마나 다시 만들어야 할까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '표의 div로 재구현 열이, div로 다시 만들 때 해야 하는 일입니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '역할은 role로, Tab 포커스는 tabindex로, Enter와 Space 실행은 keydown 핸들러로 붙입니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '비활성 상태와 폼 제출까지 직접 만들어야 해요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '이것을 다 해도, 겨우 button 수준에 닿을 뿐입니다. 하나만 빠져도 장벽이 남아요.',
        pause: 'long',
      },
      {
        target: ':scope > [data-code-block]',
        text: '메뉴 버튼으로 비교해 볼게요. div로 다시 만든 코드는 길어지는데도, 비활성 상태와 폼 제출이 없고, Space를 누르면 페이지까지 함께 스크롤됩니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block] ~ [data-code-block]',
        text: '수정한 코드는 button 한 줄입니다. 더 적은 코드로, 더 많은 기본 동작을 얻어요.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '정리하면, 접근성 구현은 ARIA를 붙이는 것보다 먼저, HTML이 이미 주는 의미와 동작을 제대로 쓰는 데서 시작합니다.',
        pause: 'section',
      },
    ],
    'design-system': [
      {
        target: ':scope > h2',
        text: '자, 이번에는 한 화면을 넘어서 디자인 시스템으로 가 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '접근성을 화면마다 챙기면, 놓치는 곳이 생깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:not([role]) > ol > li:nth-child(1)',
        text: '흔한 흐름은 이렇습니다. 1단계, 페이지를 구현하고,',
        pause: 'flow',
      },
      {
        target: ':scope > div:not([role]) > ol > li:nth-child(2)',
        text: '2단계, 접근성 문제를 발견하고,',
        pause: 'flow',
      },
      {
        target: ':scope > div:not([role]) > ol > li:nth-child(3)',
        text: '3단계, 그 페이지만 고치면,',
        pause: 'flow',
      },
      {
        target: ':scope > div:not([role]) > ol > li:nth-child(4)',
        text: '4단계, 다음 페이지에서 또 생깁니다. 그리고 처음으로 돌아가 반복돼요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '왜 고쳐도 다음 페이지에서 또 생길까요?',
        pause: 'think',
      },
      {
        text: '원인이 페이지가 아니라, 재사용되는 UI 조각에 있기 때문입니다. 포커스 표시가 없는 버튼 컴포넌트를 40개 화면이 쓰면, 결함도 40번 복제됩니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '그래서 같은 요구를 시스템 수준으로 올립니다. 한 번 고친 것이, 그 컴포넌트를 쓰는 모든 화면에 반영돼요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '컴포넌트가 지킬 접근성 약속을 미리 정해 두는 것, 이것을 컴포넌트 계약이라고 합니다. 표는 계약을 다섯 가지로 나눴어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '디자인 토큰은 대비와 포커스 표시, 간격 값을 정하고, 컴포넌트 API는 라벨과 상태, 설명을 받습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: 'DOM, 키보드, 포커스 계약은 어떤 요소로 렌더링되고, 어떤 키로 조작되고, 포커스가 어디로 가는지 정해요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: 'Dialog가 닫히면 연 버튼으로 포커스가 돌아오는 것이 포커스 계약의 예입니다.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '좋은 디자인 시스템에서는 접근성의 상당 부분이, 컴포넌트의 계약과 기본 동작에 들어 있습니다.',
        pause: 'short',
      },
      {
        text: '화면에서는 대체 텍스트, 제목 구조, 라벨 문구처럼 내용에 달린 것을 확인하고, 검토는 컴포넌트와 조합 지점에 집중합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 반복되는 결함은 화면마다가 아니라 컴포넌트 계약에서 한 번에 고칩니다.',
        pause: 'section',
      },
    ],
    standards: [
      { target: ':scope > h2', text: '자, 마지막 주제는 기준과 법입니다.', pause: 'short' },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'WCAG, KWCAG, 법령은 자주 같은 말처럼 쓰입니다. 정말 같은 것일까요?',
        pause: 'think',
      },
      { text: '그렇지 않습니다. 셋은 서로 다른 층에 있어요.', pause: 'short' },
      {
        target: ':scope > div > ol > li:nth-child(1)',
        text: '첫 층은 목표인 접근성, 동등한 사용이고,',
        pause: 'flow',
      },
      {
        target: ':scope > div > ol > li:nth-child(2)',
        text: '둘째 층은 검증 가능한 성공 기준을 담은 기술 기준과 지침,',
        pause: 'flow',
      },
      {
        target: ':scope > div > ol > li:nth-child(3)',
        text: '셋째 층은 기술 기준을 참조해 의무를 정하는 정책, 조달, 인증, 법령,',
        pause: 'flow',
      },
      {
        target: ':scope > div > ol > li:nth-child(4)',
        text: '넷째 층은 국가, 기관, 서비스 유형에 따라 달라지는 실제 적용 범위입니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'WCAG 2.2는 W3C의 웹 콘텐츠 접근성 지침입니다. 2023년 10월 5일 W3C 권고안으로 공개됐고, 2024년 12월 12일에 갱신본이 나왔어요.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '모든 성공 기준은 네 가지 원칙 가운데 하나에 속합니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure li:nth-child(1)',
        text: '인식의 용이성은, 정보를 인식할 수 있는 형태로 제공하는지,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(2)',
        text: '운용의 용이성은, 기능을 조작하고 탐색할 수 있는지,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(3)',
        text: '이해의 용이성은, 내용과 동작을 읽고 예측할 수 있는지,',
        pause: 'flow',
      },
      {
        target: ':scope > figure li:nth-child(4)',
        text: '견고성은, 보조기술이 안정적으로 해석하는지를 묻습니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '원칙마다 이 페이지에서 앞서 본 예가 하나씩 이어져 있어요. 예제 A는 운용의 용이성, 예제 B는 이해의 용이성입니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: 'WCAG 2.2의 성공 기준 86개에는, 각각 세 수준 가운데 하나가 붙습니다.',
        pause: 'short',
      },
      {
        target: ':scope > dl > dd:nth-of-type(1)',
        text: 'A는 가장 기본 수준입니다. 못 지키면 일부 사용자는 아예 쓸 수 없어요.',
        pause: 'short',
      },
      {
        target: ':scope > dl > dd:nth-of-type(2)',
        text: 'AA는 A를 포함하고, 대부분의 정책과 조달이 목표로 삼는 수준입니다.',
        pause: 'short',
      },
      {
        target: ':scope > dl > dd:nth-of-type(3)',
        text: 'AAA는 AA를 포함하는 가장 높은 수준이고, 모든 콘텐츠에 요구하지는 않습니다.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(2)',
        text: '한국에는 국가표준 KWCAG가 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '한국형 웹 콘텐츠 접근성 지침 2.2는, 국립전파연구원이 2022년 12월 28일에 개정 고시했습니다. WCAG 2.1을 반영해, 기존 24개 검사 항목에 9개를 더했어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4) strong',
        text: '즉 KWCAG는 WCAG를 참조한 국가표준이지, 번역본도 법률 조문도 아닙니다.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '그래서 확인 없이 단정하지 않습니다. 이런 말은 상황에 따라 틀립니다.',
        pause: 'short',
      },
      {
        target: ':scope > aside li:nth-child(1)',
        text: '모든 웹사이트는 WCAG 2.2 AA를 법적으로 지켜야 한다,',
        pause: 'flow',
      },
      {
        target: ':scope > aside li:nth-child(2)',
        text: 'KWCAG를 만족하면 모든 법적 의무가 충족된다.',
        pause: 'short',
      },
      {
        target: ':scope > aside div > p:last-child',
        text: '법적 요구는 국가, 기관 유형, 서비스 성격, 적용 법령, 조달 기준, 인증 제도에 따라 달라집니다. 이 문서는 법률 자문이 아니므로, 필요하면 관할 법령 원문과 담당 기관 안내를 직접 확인합니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(5)',
        text: '기준이 있고 법적 요구로도 이어질 수 있으니, 접근성은 설계 초기부터 다룹니다.',
        pause: 'short',
      },
      {
        text: '표준 적합성과 과업 성공, 법적 의무가 왜 서로 다른 질문인지는, 이 장의 네 번째 페이지에서 다룹니다.',
        pause: 'short',
      },
      {
        text: '정리하면, WCAG와 KWCAG는 기술 기준과 국가표준이고, 법적 의무는 그와 다른 층에서 정해집니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 기준은 과업을 끝낼 수 있는지이고, 장벽은 누가 어느 단계에서 막히는지로 기록합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(5)',
        text: '둘째, 결과는 프론트엔드 코드에서 시작하니, HTML의 의미를 먼저 쓰고 컴포넌트 계약에 넣습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(9)',
        text: '셋째, WCAG와 KWCAG는 법률 조문이 아닌 표준이고, 분명한 계약은 구현과 테스트도 정리합니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 웹 접근성은, 누구의 어떤 활동을 가능하게 할까요?',
        pause: 'think',
      },
      {
        text: '장애가 있는 사람이 웹을 인식하고, 이해하고, 탐색하고, 상호작용하고, 기여하는 활동입니다.',
        pause: 'short',
      },
      { text: '그 활동이 과업 완료까지 끊기지 않게 하는 일이 웹 접근성이에요.', pause: 'long' },
      { text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.', pause: 'short' },
      { text: '같은 장애가 있는 두 사람은, 웹을 똑같이 쓸까요?', pause: 'section' },
    ],
  },
};
