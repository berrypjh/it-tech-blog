import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 02.1 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 코드와 CSS 값처럼 읽기 어려운 기호는 내용으로 푼다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '버튼 하나가 동작하지 않을 때, 원인은 어디에 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '마크업에도, 스타일에도, 스크립트에도 있을 수 있습니다.',
        pause: 'short',
      },
      {
        text: '오늘부터 2장, 웹 플랫폼 기본입니다.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 웹 페이지의 네 층이 각각 무엇을 책임지는지 나누고 결함을 고칠 층을 정할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 서버가 보낸 HTML 소스와 브라우저가 만든 DOM이 어떻게 다른지 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 표현은 CSS에, 상태와 이벤트는 JavaScript에 맡기는 경계를 나눠요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 한 과업의 결함을 층별로 나눠 고칠 곳을 정합니다.',
        pause: 'section',
      },
    ],
    'four-layers': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 웹 페이지를 이루는 네 층은 각각 무슨 일을 맡을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '웹 페이지는 네 층이 함께 만듭니다. 층마다 맡는 일이 다르니, 결함을 찾을 때도 먼저 어느 층의 책임인지를 물어요.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '그림은 페이지 뼈대, DOM 트리, 꾸민 화면, 동작의 네 층을 쌓아서 보여 줍니다.',
        pause: 'short',
      },
      {
        text: 'JavaScript는 DOM을 바꾸고, 보조기술은 DOM과 스타일에서 만든 접근성 트리를 받습니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 네 층이 맡는 일과, 접근성에 닿는 지점을 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'HTML은 문서의 구조와 의미, 요소의 기본 동작을 맡습니다. button은 포커스와 Enter, Space 실행을, label은 입력 칸의 이름을 기본으로 줘요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'DOM은 브라우저가 HTML을 읽어 만든 객체 트리이고, 스크립트가 읽고 바꾸는 대상입니다. 보조기술에 전달되는 정보는 소스 파일이 아니라, 지금 이 순간의 DOM에서 나와요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: 'CSS는 색, 크기, 배치, 표시 여부 같은 표현을 맡습니다. display none은 화면과 접근성 트리에서 함께 빠지고, 배치를 바꿔도 DOM 순서는 그대로예요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: 'JavaScript는 이벤트를 받아 상태를 바꾸고 DOM에 반영합니다. 바뀐 상태를 hidden이나 aria-expanded 같은 속성으로 DOM에 남겨야, 화면과 보조기술이 같은 상태를 보죠.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그럼 보조기술은 이 정보를 어떻게 받을까요?',
        pause: 'think',
      },
      {
        text: '브라우저는 DOM과 계산된 스타일에서 접근성 트리를 만듭니다. 그리고 운영체제의 접근성 API를 거쳐, 화면 낭독기 같은 보조기술에 역할, 이름, 상태를 전달해요.',
        pause: 'short',
      },
      {
        text: '이 흐름의 그림은 1장의 첫 번째 페이지인 누구의 어떤 활동인가의, 프론트엔드에게 중요한 이유 부분에 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: 'HTML 요소만으로는 전달되지 않는 상태나 이름을 보조기술에 알려 주는 속성이 있습니다. 표에 나온 aria-expanded 같은 속성이고, 이런 속성을 ARIA라고 해요.',
        pause: 'short',
      },
      {
        text: '이 장에서는 펼침 상태와 이름 정도만 쓰고, 자세한 내용은 뒤 장에서 다룹니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '다만 이 표는 고칠 층을 정하기 위한 학습용 구분입니다. 실제 브라우저는 파싱, 스타일 계산, 레이아웃, 접근성 트리 생성을 더 잘게 나누고, 층끼리 서로 영향을 주며, 구현도 브라우저마다 달라요.',
        pause: 'short',
      },
      {
        text: '정리하면, HTML은 구조와 의미, 기본 동작을, CSS는 표현을, JavaScript는 이벤트에 따른 상태 변경을 맡습니다. DOM은 스크립트가 바꾸는 지금의 트리예요.',
        pause: 'section',
      },
    ],
    'source-vs-dom': [
      {
        target: ':scope > h2',
        text: '자, 그럼 HTML 소스와 DOM이 어떻게 다른지 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'HTML 소스는 서버가 보낸 글자이고, DOM은 브라우저가 그 글자를 읽어 만든 객체 트리입니다.',
        pause: 'short',
      },
      {
        text: '둘은 처음부터 다를 수 있어요. 브라우저가 HTML 파싱 규칙에 따라, 빠진 요소를 채우고 잘못 닫힌 태그를 바로잡거든요.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block]',
        text: '코드를 보면, HTML 소스에는 배송비와 무료를 담은 표 한 줄만 있고, tbody를 쓰지 않았습니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block] ~ [data-code-block]',
        text: '그런데 브라우저가 만든 DOM에는 tbody가 생겨 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그럼 접근성 문제를 확인할 때는 무엇을 봐야 할까요?',
        pause: 'think',
      },
      {
        text: '페이지가 열린 뒤에도 JavaScript가 DOM을 계속 바꿉니다. 그래서 페이지 소스 보기는 처음 받은 글자를, 개발자 도구, 곧 DevTools의 Elements 패널은 지금의 DOM을 보여 줘요.',
        pause: 'short',
      },
      {
        text: '보조기술이 읽는 정보도 지금의 DOM에서 나오니, 소스가 아니라 DOM을 봅니다.',
        pause: 'short',
      },
      {
        text: '그럼 지금의 DOM이 바뀌는 순간을 직접 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '배송 정보 버튼은 실제 button 요소입니다. JavaScript 처리를 꺼도 Tab으로 닿고, Enter나 Space, 클릭으로 click 이벤트가 발생해요. 이것이 HTML이 주는 기본 동작입니다.',
        pause: 'short',
      },
      {
        text: '하지만 패널을 열고 aria-expanded를 바꾸는 일은, JavaScript가 하지 않으면 일어나지 않습니다.',
        pause: 'short',
      },
      {
        text: '꺼짐은 실제로 JavaScript를 끄는 게 아니라, 상태를 바꾸는 코드만 건너뛰는 학습용 흉내예요. click 횟수도 이 페이지의 스크립트가 셉니다.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '배송 정보 버튼을 눌러 보고, JavaScript 처리를 끈 뒤 다시 눌러 보세요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '처리를 켠 상태에서 누르면, 지금 DOM의 aria-expanded가 true로 바뀌고, 패널의 hidden 속성이 사라집니다. 처리를 끄면 click 횟수만 늘고, 두 속성은 그대로예요.',
        pause: 'short',
      },
      {
        text: '정리하면, 보조기술이 읽는 것은 처음 받은 HTML 소스가 아니라 지금의 DOM입니다. click 이벤트는 button이 기본으로 만듭니다. 하지만 상태를 속성에 반영해 DOM을 바꾸는 일은 JavaScript의 책임이에요.',
        pause: 'section',
      },
    ],
    'one-task': [
      {
        target: ':scope > h2',
        text: '자, 이번에는 한 과업에서 층마다 다른 결함을 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '과업은 하나로 고정합니다. 상품 페이지에서 배송 정보를 펼쳐 읽는 과업이에요.',
        pause: 'short',
      },
      {
        text: '같은 과업이라도 결함이 어느 층에 있느냐에 따라, 막히는 사람과 고칠 곳이 달라집니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 배송 정보 펼치기 과업의 층별 결함과 고칠 곳을 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'HTML 층에서는 펼침 버튼을 div에 onclick을 달아 만들었습니다. 키보드 사용자는 Tab으로 닿지 않아 열 수 없어요. button 요소로 바꿔서 고칩니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'CSS 층의 첫 번째 결함은 포커스 표시를 지운 겁니다. 키보드 사용자가 지금 어디에 있는지 보이지 않아요. 포커스 표시 스타일을 되살려서 고칩니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: 'CSS 층의 두 번째 결함은 닫힌 패널을 투명도만 0으로 해서 숨긴 겁니다. 보이지 않는 패널 안 링크에 Tab이 들어가고, 화면 낭독기도 그 내용을 읽어요. hidden 속성이나 display none으로 숨겨서 고칩니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: 'JavaScript 층에서는 패널은 열지만 aria-expanded를 바꾸지 않습니다. 화면은 펼쳐졌는데, 화면 낭독기 사용자는 계속 접힘을 들어요. 상태를 바꿀 때 속성도 함께 바꿔서 고칩니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그럼 키보드로 닿지 않는 문제를, JavaScript 키 이벤트로 덮으면 안 될까요?',
        pause: 'think',
      },
      {
        text: '고칠 곳은 책임이 있는 층에서 정합니다. JavaScript 키 이벤트로 덮으면, HTML이 기본으로 주던 동작을 하나씩 다시 만들어야 해요. 하나만 빠져도 장벽이 남고요.',
        pause: 'short',
      },
      {
        text: '이 비교는 1장의 첫 번째 페이지인 누구의 어떤 활동인가의, 접근성과 시맨틱 HTML 부분에서 표로 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '그리고 한 층만 확인하면 다른 층의 결함을 놓칩니다. 화면에서 패널이 열리는 것만 확인하면, JavaScript 층의 결함인 상태 속성은 보이지 않거든요. 화면, 키보드, 개발자 도구의 DOM을 함께 확인합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 같은 과업의 결함도 층마다 막히는 사람과 고칠 곳이 다르니, 책임이 있는 층에서 고칩니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, HTML은 구조와 의미, 기본 동작을, CSS는 표현을, JavaScript는 상태 변경을 맡습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 보조기술은 지금의 DOM을 읽으니, 상태를 속성에 반영하는 일은 JavaScript의 책임입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 결함은 책임이 있는 층에서 고칩니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 버튼 하나가 동작하지 않을 때, 원인은 어디에 있을까요?',
        pause: 'think',
      },
      {
        text: '원인은 HTML, CSS, JavaScript 어느 층에든 있을 수 있습니다. 그래서 먼저 어느 층의 책임인지 묻고, 그 층에서 고칩니다.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '화면을 훑어볼 수 없는 사용자는, 페이지를 어떻게 구분하고 원하는 곳으로 어떻게 찾아갈까요?',
        pause: 'section',
      },
    ],
  },
};
