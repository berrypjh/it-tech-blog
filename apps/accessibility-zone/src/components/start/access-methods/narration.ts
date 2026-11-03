import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 01.3 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 키 조합 · 설정 경로 · 성공 기준 번호처럼 사전에 없는 기호는 말하지 않고 내용으로 푼다.
 * 본문 사실을 바꾸지 않는다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '같은 페이지를 키보드로, 화면 낭독기로, 확대해서, 말로, 스위치로 쓴다면, 막히는 곳도 같을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. 누군가는 Tab으로 이동하고, 누군가는 제목 목록으로 건너뛰며 듣고, 누군가는 화면의 일부만 크게 봅니다. 버튼 이름을 말하거나, 하이라이트가 지나가기를 기다렸다 고르는 사람도 있죠.',
        pause: 'short',
      },
      {
        text: '그래서 이 페이지는 방식마다 페이지의 무엇에 기대는지 비교하고, 실제 환경에서 무엇을 확인할지 안내합니다.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 자기 기기에서 방식마다 무엇을 확인할지 알고, 확인한 결과를 환경과 함께 적을 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 사용 방식을 세 축으로 나누고, 다섯 방식이 페이지에 기대하는 것을 비교합니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, 한 과업이 방식마다 다른 단계에서 막히는 과정을 따라가요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(5)',
        text: '마지막으로, 자기 기기에서 직접 확인하는 법과, 음성 입력이 막힌 사례 기록을 봅니다.',
        pause: 'section',
      },
    ],
    'same-page': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 사용 방식은 무엇을 기준으로 나눠 보면 좋을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '먼저 용어 하나를 다시 짚을게요. 이 장의 첫 페이지에서 본 보조기술은, 장애가 있는 사람이 기기와 콘텐츠를 쓰도록 돕는 소프트웨어나 하드웨어입니다.',
        pause: 'short',
      },
      {
        text: '화면 낭독기, 화면 확대기, 음성 입력 소프트웨어, 스위치가 그 예예요. 키보드 조작처럼 별도 도구 없이 쓰는 전략도 있고요.',
        pause: 'short',
      },
      { text: '어느 쪽이든, 페이지를 쓰는 경로는 세 축으로 나눠 볼 수 있습니다.', pause: 'short' },
      {
        target: ':scope > dl > dd:nth-of-type(1)',
        text: '첫째, 명령을 넣는 입력 방식. 마우스와 터치 대신 키, 말, 스위치 한두 개를 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > dl > dd:nth-of-type(2)',
        text: '둘째, 결과를 받는 출력 방식. 화면 전체 대신 음성, 점자, 확대된 일부 영역으로 받아요.',
        pause: 'short',
      },
      {
        target: ':scope > dl > dd:nth-of-type(3)',
        text: '셋째, 한 번에 이동하는 탐색 단위. 픽셀 위치 대신, 키보드로 고를 수 있는 버튼이나 링크 같은 요소, 제목, 랜드마크, 스캔 그룹 단위로 움직입니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '정리하면, 세 축이 다르면 같은 화면에서도 막히는 곳이 다릅니다. 마우스로는 멀쩡해 보여도, 키 이동 순서나 요소의 이름, 확대 후의 배치처럼 마우스 사용자에게 보이지 않는 경로에서 장벽이 생겨요.',
        pause: 'section',
      },
    ],
    'five-methods': [
      {
        target: ':scope > h2',
        text: '자, 다섯 가지 사용 방식을 하나씩 볼게요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '먼저 표가 다섯 방식을 세 축으로 한눈에 비교합니다. 한 줄에 방식 하나씩, 입력, 출력, 탐색 단위를 적었어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '화면 낭독기 줄을 예로 보면, 입력은 키보드 단축키와 터치 제스처, 출력은 음성과 점자입니다. 탐색 단위는 제목, 랜드마크, 링크, 폼 요소, 한 줄이고요.',
        pause: 'short',
      },
      { text: '그럼 방식마다 페이지에 무엇을 기대할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그 답은 다섯 장의 카드에 있습니다. 카드마다 누가 쓰나, 페이지에 기대하는 것, 흔한 장벽이 있어요.',
        pause: 'short',
      },
      {
        text: '다만 누가 쓰나는 예시일 뿐입니다. 한 사람이 여러 방식을 섞어 쓰고, 같은 방식을 서로 다른 이유로 쓰거든요.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(1) [data-part="what"]',
        text: '첫 카드는 키보드입니다. 마우스 없이 키로 이동하고 실행해요. Tab을 누를 때마다 버튼이나 링크로 하나씩 차례로 옮겨 가요.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(1) [data-part="expects"]',
        text: '그래서 키보드는 모든 기능이 키로 동작하고, 포커스가 어디 있는지 보이기를 기대합니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(1) [data-part="barriers"]',
        text: '흔한 장벽은 div로 만든 버튼, 지워진 포커스 표시 같은 것들이에요.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(2) [data-part="what"]',
        text: '두 번째 카드는 화면 낭독기입니다. 화면의 내용과 요소의 역할, 이름, 상태를 음성이나 점자로 전달해요.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(2) [data-part="expects"]',
        text: '그러려면 제목과 랜드마크로 구조가 드러나고, 모든 컨트롤에 이름과 역할이 있어야 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(2) [data-part="barriers"]',
        text: '흔한 장벽의 첫째가 이름 없는 아이콘 버튼입니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(3) [data-part="expects"]',
        text: '나머지 세 카드도 같은 틀입니다. 확대는 가로 스크롤 없이 다시 배치되기를 기대해요.',
        pause: 'flow',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(4) [data-part="expects"]',
        text: '음성 입력은 보이는 라벨과 같은 단어로 컨트롤을 부르기를,',
        pause: 'flow',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(5) [data-part="expects"]',
        text: '스위치는 적은 단계와 충분한 조작 시간을 기대합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 다섯 방식은 페이지에서 기대는 것이 서로 다릅니다. 키보드는 포커스, 화면 낭독기는 이름과 구조, 확대는 배치, 음성 입력은 보이는 이름, 스위치는 단계 수와 시간이에요.',
        pause: 'section',
      },
    ],
    'one-task': [
      {
        target: ':scope > h2',
        text: '자, 그럼 한 과업을 다섯 방식으로 따라가 볼게요. 같은 화면 하나를, 다섯 사람이 각자 다른 방법으로 써 본다고 생각하면 됩니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '과업은 주문 목록에서 두 번째 주문을 취소하는 거예요. 주문마다 줄 끝에 휴지통 모양 버튼이 하나씩 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure [data-part="button"]',
        text: '첫 번째 그림을 볼게요. 첫 줄의 버튼에는 글자가 없고, 휴지통 아이콘만 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > figure li:nth-child(2) [data-part="row"]',
        text: '두 번째 줄은 마우스를 버튼 위에 올린 순간입니다. 그제야 버튼 옆에 주문 취소라는 작은 설명이 잠깐 뜹니다. 이런 설명을 툴팁이라고 해요.',
        pause: 'short',
      },
      {
        target: ':scope > figure [data-part="name"]',
        text: '줄마다 아래에 붙은 말풍선은, 보조기술이 이 버튼을 무엇이라고 부르는지를 보여 줍니다. 첫 줄은 비어 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > figure [data-part="result"]',
        text: '세 줄 모두 마찬가지입니다. 뜻은 마우스를 올려야만 보이고, 보조기술이 받는 이름은 비어 있습니다.',
        pause: 'short',
      },
      {
        text: '이렇게 보조기술이 버튼을 부르는 이름을, 접근 가능한 이름이라고 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block]',
        text: '코드로 보면, button 요소라서 키보드로 누를 수는 있습니다. 하지만 아이콘은 숨겨져 있고 글자가 없어서, 접근 가능한 이름이 비어 있어요.',
        pause: 'long',
      },
      { text: '그럼 이 버튼을, 다섯 방식으로 쓰면 어떻게 될까요?', pause: 'think' },
      {
        target: 'table',
        text: '표가 그 답입니다. 방식마다 무엇에 기대고 어디서 막히는지 정리했어요. 이 표는 코드로 예상한 결과예요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '키보드와 화면 낭독기는 둘 다 이해 단계에서 막힙니다. 툴팁은 마우스를 올릴 때만 뜨고, 이름은 비어 있으니까요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '확대하면 화면 밖에 뜬 툴팁이 보이지 않고, 작은 아이콘은 알아보기 어렵습니다. 그래서 인식 단계에서 막혀요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '음성 입력은 부를 단어가 없어, 주문마다 번호나 격자를 띄워 골라야 합니다. 조작 단계예요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: '스위치는 줄마다 똑같은 버튼이라, 하이라이트된 버튼이 몇 번째 주문의 것인지 모릅니다. 탐색 단계예요.',
        pause: 'short',
      },
      {
        text: '막히는 이유가 다섯 가지 모두 다른데, 고치는 방법도 다섯 가지일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '다행히 아닙니다. 버튼 안에 주문 취소라는 글자를 보이게 두면 됩니다.',
        pause: 'short',
      },
      {
        text: '그 글자 하나로, 화면 낭독기가 읽어 줄 이름이 생기고, 음성 입력으로 부를 단어가 생기고, 툴팁 없이도 뜻이 보입니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '다만 한 가지가 남습니다. 모든 줄의 버튼이 똑같이 주문 취소라면, 음성 입력과 스위치 사용자는 여전히 어느 주문의 버튼인지 헷갈려요. 그래서 주문 번호처럼, 줄을 구분하는 정보도 함께 담아야 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure ~ figure',
        text: '두 번째 그림이 그 차이를 보여 줍니다. 두 판 모두 화면에는 똑같이 주문 취소가 보여요. 말풍선만 비교해 보세요.',
        pause: 'short',
      },
      {
        target: ':scope > figure ~ figure [data-part="panel"]',
        text: '보이는 글자만 둔 판은, 세 줄 모두 이름이 주문 취소입니다. 이름만 들어서는 어느 주문의 버튼인지 구분이 안 돼요.',
        pause: 'short',
      },
      {
        target: ':scope > figure ~ figure [data-part="panel"] ~ [data-part="panel"]',
        text: '주문 번호를 더한 판은, 주문 취소, 주문 1024처럼 줄마다 이름이 다릅니다.',
        pause: 'short',
      },
      {
        text: '화면은 그대로인데, 보조기술이 받는 이름만 달라진 거예요.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block] ~ [data-code-block]',
        text: '코드로 보면, 버튼 안에 보이는 글자를 두고, 그 뒤에 화면에는 보이지 않는 주문 번호를 더한 겁니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '이때 순서가 중요합니다. 이름이 보이는 글자로 시작해야, 음성 입력 사용자가 화면에 보이는 대로 주문 취소라고 말해서 부를 수 있거든요.',
        pause: 'short',
      },
      {
        text: '그래서 aria-label로 이름을 통째로 다른 말로 바꾸는 건 피합니다. 보이는 글자와 이름이 어긋나니까요.',
        pause: 'long',
      },
      {
        target: 'aside',
        text: '끝으로 하나 짚고 갈게요. 표와 그림은 측정이 아니라 코드로 한 예상입니다. 무엇을 어떤 순서로 읽는지, 번호를 어떻게 붙이는지는 제품과 버전, 설정마다 달라요.',
        pause: 'short',
      },
      {
        text: '그래서 직접 확인할 때도, 읽어 주는 문장을 그대로 맞추기보다, 역할, 이름, 상태가 빠짐없이 전달되는지를 봅니다. 그 방법은 다음 주제에서 볼게요.',
        pause: 'short',
      },
      {
        text: '정리하면, 한 요소가 방식마다 다른 단계에서 막혀도, 해결은 보이는 글자라는 하나의 설계 선택으로 모입니다. 같은 버튼이 여러 줄에 있으면, 그 이름에 줄을 구분하는 정보까지 담습니다.',
        pause: 'section',
      },
    ],
    'real-check': [
      {
        target: ':scope > h2',
        text: '자, 그럼 실제 환경에서는 어떻게 확인할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '이 섹션의 확인은 개발자가 자기 기기에서 바로 시작할 수 있는 것들입니다. 숙련된 사용자의 실제 사용을 대신하지는 못해요. 대신, 코드로 예상한 결과를 직접 확인한 결과로 바꿔 줍니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '카드마다 시작하기, 확인할 것, 관련 WCAG 2.2 성공 기준이 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(1) [data-part="start"]',
        text: '키보드 카드부터 볼게요. 마우스와 트랙패드에서 손을 떼고, 키만 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(1) [data-part="look"]',
        text: '그리고 과업을 끝까지 키로 할 수 있는지, 포커스가 늘 보이는지, 어디서든 빠져나올 수 있는지 봐요.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(2) [data-part="start"]',
        text: '화면 낭독기는 운영체제에 들어 있는 기능을 켜거나, NVDA 같은 무료 프로그램을 설치해 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(2) [data-part="look"]',
        text: '제목과 랜드마크만으로 구조를 알 수 있는지, 컨트롤마다 이름, 역할, 상태가 전달되는지 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(3) [data-part="look"]',
        text: '나머지 세 카드는 볼 점만 짚을게요. 확대는 가로 스크롤과, 고정 헤더가 차지하는 넓이를 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(4) [data-part="start"] dd > p',
        text: '음성 입력은 한국어 명령을 지원하는지 먼저 확인하고, 보이는 라벨로 누를 수 있는지 봐요.',
        pause: 'short',
      },
      {
        target: ':scope > div:last-of-type > div:nth-child(5) [data-part="look"]',
        text: '스위치는 핵심 컨트롤까지 몇 번 스캔하는지, 시간 안에 끝낼 수 있는지 봅니다.',
        pause: 'short',
      },
      {
        text: '쓰고 있는 기기에서 하나를 골라, 잠깐 멈추고 직접 켜 보셔도 좋아요.',
        pause: 'long',
      },
      {
        target: 'aside',
        text: '확인했다면, 기록에 환경을 함께 적습니다. 운영체제와 브라우저, 보조기술의 버전과 모드, 확대율 같은 설정값이요.',
        pause: 'short',
      },
      {
        target: 'aside li:nth-child(5)',
        text: '그리고 직접 확인한 것과 코드로만 예상한 것을 나눠 적습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 실제 확인은 예상을 사실로 바꾸는 일이고, 그 사실은 환경과 함께 적어야 다시 볼 수 있습니다.',
        pause: 'section',
      },
    ],
    'case-record': [
      {
        target: ':scope > h2',
        text: '자, 이 페이지의 사례를 기록으로 볼게요. 보이는 글자와 다른 이름이 음성 입력을 막는 경우입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '보이는 글자와 접근 가능한 이름이 어긋나면, 화면 낭독기 사용자는 이름을 들을 수 있습니다. 하지만 음성 입력 사용자는 보이는 글자를 말해도 버튼을 누를 수 없어요.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block]',
        text: '코드의 버튼은 화면에 보내기라고 쓰여 있지만, aria-label이 이름을 메시지 전송으로 덮어씁니다. 그래서 WCAG의 이름의 레이블 기준을 어기죠.',
        pause: 'short',
      },
      { text: '그럼 음성 입력 사용자는 이 버튼 앞에서 어떻게 될까요?', pause: 'think' },
      {
        target: ':scope > div:nth-of-type(2)',
        text: '사례 기록이 그 답을 상황, 막힌 곳, 결과, 확인의 네 묶음으로 적어 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(1)',
        text: '먼저 상황. 손으로 키보드와 마우스를 쓰기 어려워 음성 입력으로 컴퓨터를 쓰는 사용자이고, 과업은 고객 문의를 받아쓰기로 입력하고 보내는 거예요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(2) dd:nth-of-type(1)',
        text: '다음은 막힌 곳. 보이는 글자는 보내기인데, 이름은 메시지 전송입니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(2) dd:nth-of-type(3)',
        text: '그래서 실패 단계는 조작이에요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(3) dd:nth-of-type(1)',
        text: '결과에는 먼저 영향을 적습니다. 보내기 클릭이라고 말해도 버튼이 눌리지 않아, 문의를 보낼 수 없어요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(3) dd:nth-of-type(2)',
        text: '복구 경로도 적습니다. 번호나 격자 표시 명령을 알면 복구할 수 있지만, 명령을 모르면 복구 경로가 없습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(4) dd:nth-of-type(1)',
        text: '마지막으로 확인. 코드와 개발자 도구에서 이름이 메시지 전송으로 계산되는 것을 확인했고, 이건 확인한 것에 적습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(2) > div > div:nth-child(4) dd:nth-of-type(2)',
        text: '실제 음성 입력 제품에서 보내기라는 명령이 이 버튼에 연결되는지는 아직 확인하지 않았습니다. 그래서 더 확인할 것에 나눠 둡니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 보이는 글자가 이름 안에 그대로 들어 있어야, 말로 부를 수 있습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 사용 방식은 입력, 출력, 탐색 단위로 나눠 보고, 방식마다 기대는 정보가 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 한 요소가 방식마다 다른 단계에서 막혀도, 해결은 하나의 설계 선택으로 모이기도 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 코드로 예상한 결과와 실제 확인은 나누고, 확인한 환경과 설정값을 함께 적습니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 같은 페이지를 키보드로, 화면 낭독기로, 확대해서, 말로, 스위치로 쓴다면, 막히는 곳도 같을까요?',
        pause: 'think',
      },
      {
        text: '아닙니다. 방식마다 기대는 정보가 달라서, 같은 요소도 방식마다 다른 단계에서 막힙니다.',
        pause: 'long',
      },
      { text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.', pause: 'short' },
      { text: 'WCAG를 통과했다면, 접근성은 다 된 걸까요?', pause: 'section' },
    ],
  },
};
